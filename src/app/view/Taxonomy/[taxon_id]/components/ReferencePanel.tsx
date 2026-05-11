"use client";

import React from "react";

interface Props {
  taxonomy: {
    taxon_id: number;
    taxon_name: string;
  };
}

export default function ReferencePanel({ taxonomy }: Props) {
  const ncbiUrl = `https://www.ncbi.nlm.nih.gov/Taxonomy/Browser/wwwtax.cgi?id=${taxonomy.taxon_id}`;

  const beiUrl = `https://www.beiresources.org/Catalog.aspx?q=${encodeURIComponent(
    taxonomy.taxon_name
  )}`;

  const pubmedUrl = `https://pubmed.ncbi.nlm.nih.gov/?term=${encodeURIComponent(
    taxonomy.taxon_name
  )}`;

  return (
    <div className="rounded-lg border bg-card p-6 shadow-sm space-y-4">
      <h2 className="text-xl font-semibold">References</h2>

      {/* External Databases */}
      <div className="space-y-2">
        <h3 className="text-sm font-semibold text-muted-foreground">
          External Databases
        </h3>

        <a
          href={ncbiUrl}
          target="_blank"
          className="block text-blue-600 hover:underline"
        >
          NCBI Taxonomy
        </a>

        <a
          href={beiUrl}
          target="_blank"
          className="block text-blue-600 hover:underline"
        >
          BEI Resources
        </a>
      </div>

      {/* Literature */}
      <div className="space-y-2">
        <h3 className="text-sm font-semibold text-muted-foreground">
          Literature
        </h3>

        <a
          href={pubmedUrl}
          target="_blank"
          className="block text-blue-600 hover:underline"
        >
          PubMed Search
        </a>
      </div>
    </div>
  );
}