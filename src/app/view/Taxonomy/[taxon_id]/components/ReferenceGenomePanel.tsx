"use client";

import React, { useEffect, useState } from "react";
import MetadataPieChart from "./MetadataPieChart";

const BVBR_API = process.env.NEXT_PUBLIC_BVBR_API;

interface Props {
  taxonId: number;
}

type ChartData = {
  label: string;
  value: number;
  link?: string;
};

type TableRow = {
  reference_genome: string;
  genome_name: string;
  genome_id: string;
};

export default function ReferenceGenomePanel({ taxonId }: Props) {
  const [view, setView] = useState<"chart" | "table">("chart");
  const [chartData, setChartData] = useState<ChartData[]>([]);
  const [tableData, setTableData] = useState<TableRow[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchReferenceGenomes() {
      try {
        setLoading(true);

        const baseUrl =
          `${BVBR_API}/genome/`;

        const query = [
          `eq(taxon_lineage_ids,${taxonId})`,
          `eq(reference_genome,*)`,
          `select(reference_genome,genome_name,genome_id)`,
          `facet((field,reference_genome),(mincount,1))`,
          `limit(25000)`,
          `json(nl,map)`
        ].join("&");

        const url = `${baseUrl}?${query}`;
        
        console.log("Fetching:", url);

        const res = await fetch(url, {
          method: "GET",
          headers: {
            accept: "application/json",
          },
        });

        const json = await res.json();
        
        console.log("DOCS:", json?.response?.docs);
        console.log("RAW RESPONSE:", json);
        console.log("JSON KEYS:", Object.keys(json));
        console.log("RESPONSE:", json.response);
        console.log("DOCS:", json.response?.docs);

        // -------------------------
        // TABLE DATA
        // -------------------------
        const docs: TableRow[] = Array.isArray(json) ? json : [];

        setTableData(docs);

        // -------------------------
        // BUILD CHART DATA MANUALLY
        // -------------------------
        const counts: Record<string, number> = {};

        docs.forEach((doc) => {
          const key = doc.reference_genome || "Unknown";

          counts[key] = (counts[key] || 0) + 1;
        });

        const chart: ChartData[] = Object.entries(counts).map(
          ([key, value]) => ({
            label: `${key} (${value})`,
            value,
            link: `#view_tab=genomes&filter=eq(reference_genome,${encodeURIComponent(
              key
            )})`,
          })
        );

        setChartData(chart);
      } catch (err) {
        console.error("ReferenceGenomePanel fetch failed:", err);
        setChartData([]);
        setTableData([]);
      } finally {
        setLoading(false);
      }
    }

    fetchReferenceGenomes();
  }, [taxonId]);

  if (loading) {
    return (
      <div className="rounded-lg border p-4 text-sm text-muted-foreground">
        Loading reference genomes...
      </div>
    );
  }

  return (
    <div className="rounded-lg border bg-card p-4 shadow-sm space-y-4">
      {/* Header */}
      <div className="flex items-center">

        <div className="ml-auto flex items-center gap-1">
          <button
            onClick={() => setView("chart")}
            className={`p-2 rounded hover:bg-muted ${
              view === "chart" ? "bg-muted" : ""
            }`}
            title="Chart view"
          >
            📊
          </button>

          <button
            onClick={() => setView("table")}
            className={`p-2 rounded hover:bg-muted ${
              view === "table" ? "bg-muted" : ""
            }`}
            title="Table view"
          >
            📋
          </button>
        </div>
      </div>

      {/* Body */}
      {view === "chart" ? (
        chartData.length ? (
          <MetadataPieChart
            title="Reference Genomes"
            data={chartData}
          />
        ) : (
          <div className="text-sm text-muted-foreground">
            No reference genome chart data available
          </div>
        )
      ) : tableData.length ? (
          <div className="max-h-[500px] overflow-y-auto overflow-x-auto">
            <table className="w-full text-sm">
            <thead>
              <tr className="border-b text-left">
                <th className="py-2">Type</th>
                <th className="py-2">Genome Name</th>
              </tr>
            </thead>

            <tbody>
              {tableData.map((row, i) => (
                <tr key={i} className="border-b hover:bg-muted/30">
                  <td className="py-2 px-2">
                    {row.reference_genome}
                  </td>

                  <td className="py-2 px-2">
                    <a
                      href={`/view/Genome/${row.genome_id}`}
                      className="text-blue-600 hover:underline"
                    >
                      {row.genome_name}
                    </a>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      ) : (
        <div className="text-sm text-muted-foreground">
          No reference genome data available
        </div>
      )}
    </div>
  );
}