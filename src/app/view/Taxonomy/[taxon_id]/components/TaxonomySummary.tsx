"use client";

import { useEffect, useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const DataAPI = process.env.NEXT_PUBLIC_DATA_API;

interface Taxonomy {
  taxon_id: string;
  taxon_name: string;
  taxon_rank: string;
}

interface TaxonomySummaryData {
  unique_family?: number;
  unique_genus?: number;
  unique_species?: number;
  strains_count?: number;
  count?: number;
  CDS?: number;
  mat_peptide?: number;
  PDB?: number;
}

type Props = {
  taxonomy: Taxonomy;
};

export default function TaxonomySummary({ taxonomy }: Props) {
  const [summary, setSummary] = useState<TaxonomySummaryData | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchSummary() {
      try {
        const res = await fetch(
        `${DataAPI}data/summary_by_taxon/${taxonomy.taxon_id}`,
        {
            headers: {
            accept: "application/json",
            },
            cache: "no-store",
        }
        );
        const data = await res.json();
        setSummary(data);
      } catch (err) {
        console.error("Failed to fetch taxonomy summary:", err);
      } finally {
        setLoading(false);
      }
    }

    fetchSummary();
  }, [taxonomy.taxon_id]);

  const rows = [
    ["Taxon ID", taxonomy.taxon_id],
    ["Taxon Name", taxonomy.taxon_name],
    ["Taxon Rank", taxonomy.taxon_rank],
    ["Families", summary?.unique_family],
    ["Genera", summary?.unique_genus],
    ["Species", summary?.unique_species],
    ["Strains", summary?.strains_count],
    ["Genomes / Segments", summary?.count],
    ["Protein Coding Genes (CDS)", summary?.CDS],
    ["Mature Peptides", summary?.mat_peptide],
    ["3D Protein Structures (PDB)", summary?.PDB],
  ];

  return (
    <Card>
      <CardHeader>
        <CardTitle>Summary</CardTitle>
      </CardHeader>

      <CardContent>
        {loading ? (
          <p>Loading summary...</p>
        ) : (
          <table className="w-full text-sm">
            <tbody>
              {rows.map(([label, value]) => (
                <tr key={label} className="border-b">
                  <td className="py-2 font-medium">{label}</td>
                  <td className="py-2 text-right">
                    {value ?? "-"}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </CardContent>
    </Card>
  );
}