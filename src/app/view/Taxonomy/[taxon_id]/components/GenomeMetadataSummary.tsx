"use client";

import React, { useEffect, useState } from "react";
import MetadataPieChart from "./MetadataPieChart";

const BVBR_API = process.env.NEXT_PUBLIC_BVBR_API;

interface Props {
  taxonId: number;
}

type RawFacet = Record<string, number>;

interface ChartData {
  label: string;
  value: number;
  link?: string;
}

function transformFacet(
  facet: RawFacet,
  field: string
): ChartData[] {
  const sorted = Object.entries(facet).sort(
    (a, b) => b[1] - a[1]
  );

  const top: ChartData[] = [];
  let others = 0;

  sorted.forEach(([label, value], idx) => {
    if (!label) return;

    if (idx < 4) {
      top.push({
        label,
        value,
        link: `#view_tab=genomes&filter=eq(${field},${encodeURIComponent(
          label
        )})`,
      });
    } else {
      others += value;
    }
  });

  if (others > 0) {
    top.push({
      label: "Others",
      value: others,
    });
  }

  return top;
}

export default function GenomeMetadataSummary({
  taxonId,
}: Props) {
  const [data, setData] = useState<Record<
    string,
    ChartData[]
  > | null>(null);

  const [loading, setLoading] = useState(true);
  const [debugInfo, setDebugInfo] = useState<string>("");

  async function fetchFacets() {
    try {
      setLoading(true);
      setDebugInfo("Starting fetch...");

      console.log("Starting fetch for taxonId:", taxonId);
      console.log("BVBR_API:", BVBR_API);

      const query =
      `eq(taxon_lineage_ids,${taxonId})` +
      `&facet((field,host_group),(field,isolation_country),(field,collection_year),(mincount,1))` +
      `&limit(1)&json(nl,map)`;
      
      const fullUrl = `${BVBR_API}/genome/?${query}`;
      console.log("Fetching URL:", fullUrl);
      setDebugInfo(`Fetching: ${fullUrl}`);
      
      const res = await fetch(fullUrl, {
          method: "GET",
          headers: {
          accept: "application/solr+json",
          },
      });
      
      console.log("Response status:", res.status, res.ok);
      setDebugInfo(`Response status: ${res.status}`);

      if (!res.ok) {
      const errText = await res.text();
      console.error("API error:", errText);
      setDebugInfo(`API error: ${errText}`);
      throw new Error("Genome facet query failed");
      }

      const json = await res.json();
      console.log("API Response:", json);
      setDebugInfo(`Got response with ${json?.response?.numFound || 0} results`);
      
      const facets = json?.facet_counts?.facet_fields;
      console.log("Facets data:", facets);

      if (!facets) {
        console.warn("No facets found in response");
        setDebugInfo("No facets found in response");
        setData(null);
        return;
      }

      const transformed: Record<string, ChartData[]> = {
        host_group: transformFacet(facets.host_group || {}, "host_group"),
        isolation_country: transformFacet(
          facets.isolation_country || {},
          "isolation_country"
        ),
        collection_year: transformFacet(
          facets.collection_year || {},
          "collection_year"
        ),
      };
      
      console.log("Transformed data:", transformed);
      setDebugInfo("Data transformed successfully");

      setData(transformed);
    } catch (err) {
      console.error("Failed metadata fetch - Full error:", err);
      console.error("Error stack:", err instanceof Error ? err.stack : "No stack");
      setDebugInfo(`Error: ${err instanceof Error ? err.message : String(err)}`);
      setData(null);
    } finally {
      console.log("Setting loading to false");
      setLoading(false);
    }
  }

  useEffect(() => {
    console.log("useEffect triggered with taxonId:", taxonId);
    setDebugInfo(`useEffect triggered with taxonId: ${taxonId}`);
    
    if (!taxonId) {
      console.warn("No taxonId provided");
      setDebugInfo("No taxonId provided");
      setLoading(false);
      return;
    }
    
    fetchFacets();
  }, [taxonId]);

  if (loading) {
    return (
      <div className="rounded-lg border p-4 text-sm text-muted-foreground">
        <div>Loading metadata charts...</div>
        <div className="mt-2 text-xs">Debug: {debugInfo}</div>
        <button 
          onClick={() => fetchFacets()}
          className="mt-2 px-3 py-1 bg-blue-500 text-white rounded text-xs"
        >
          Retry Fetch
        </button>
      </div>
    );
  }

  if (!data) {
    return (
      <div className="rounded-lg border p-4 text-sm text-muted-foreground">
        No metadata available
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <MetadataPieChart title="Host" data={data.host_group} />

      <MetadataPieChart
        title="Isolation Country"
        data={data.isolation_country}
      />

      <MetadataPieChart
        title="Collection Year"
        data={data.collection_year}
      />
    </div>
  );
}