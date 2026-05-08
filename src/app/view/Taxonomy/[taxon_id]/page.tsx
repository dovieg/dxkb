"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";
import TaxonomySummary from "./components/TaxonomySummary";

const API_BASE = process.env.NEXT_PUBLIC_DATA_API;

interface Taxonomy {
  taxon_id: number;
  taxon_name: string;
  taxon_rank?: string;
  parent_id?: number;
  genomes?: number;

  lineage_ids: number[];
  lineage_names: string[];
  lineage_ranks: string[];
}

interface PageProps {
  params: Promise<{
    taxon_id: string;
  }>;
}

function TaxonomyBreadcrumbs({ taxonomy }: { taxonomy: Taxonomy }) {
  const visibleRanks = [
    "superkingdom",
    "phylum",
    "class",
    "order",
    "family",
    "genus",
    "species",
  ];

  const visibleIndexes = taxonomy.lineage_ranks
    .map((rank, index) =>
      visibleRanks.includes(rank) ? index : -1
    )
    .filter((index) => index !== -1);

  const lastIndex = taxonomy.lineage_ranks.length - 1;

  // Ensure current taxon always appears
  if (
    visibleIndexes.length === 0 ||
    visibleIndexes[visibleIndexes.length - 1] !== lastIndex
  ) {
    visibleIndexes.push(lastIndex);
  }

  return (
    <div className="flex flex-wrap items-center gap-2 text-sm text-muted-foreground">
      {visibleIndexes.map((idx, i) => {
        const isLast = i === visibleIndexes.length - 1;

        return (
          <React.Fragment key={taxonomy.lineage_ids[idx]}>
            <Link
              href={`/view/Taxonomy/${taxonomy.lineage_ids[idx]}`}
              className={
                isLast
                  ? "font-semibold text-foreground"
                  : "hover:underline"
              }
            >
              {taxonomy.lineage_names[idx]}
            </Link>

            {!isLast && <span>»</span>}
          </React.Fragment>
        );
      })}
    </div>
  );
}

export default function TaxonomyPage({ params }: PageProps) {
  const [taxonomy, setTaxonomy] = useState<Taxonomy | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    async function fetchTaxonomy() {
      try {
        setLoading(true);

        const resolvedParams = await params;

        const response = await fetch(
          `${API_BASE}/taxonomy/${resolvedParams.taxon_id}`,
          {
            headers: {
              accept: "application/json",
            },
            cache: "no-store",
          }
        );

        if (!response.ok) {
          throw new Error("Failed to fetch taxonomy");
        }

        const data = await response.json();

        setTaxonomy(data);
      } catch (err) {
        console.error(err);
        setError("Failed to load taxonomy");
      } finally {
        setLoading(false);
      }
    }

    fetchTaxonomy();
  }, [params]);

  if (loading) {
    return (
      <div className="container mx-auto px-4 py-8">
        Loading taxonomy...
      </div>
    );
  }

  if (error || !taxonomy) {
    return (
      <div className="container mx-auto px-4 py-8">
        <div className="rounded-lg border border-red-300 bg-red-50 p-4 text-red-700">
          {error || "Taxonomy not found"}
        </div>
      </div>
    );
  }

  return (
    <div className="container mx-auto space-y-6 px-4 py-8">
      {/* Header */}
      <div className="space-y-3">
        <TaxonomyBreadcrumbs taxonomy={taxonomy} />

        <div>
          <h1 className="text-3xl font-bold">
            {taxonomy.taxon_name}
          </h1>

          <p className="mt-1 text-muted-foreground">
            Taxonomy ID: {taxonomy.taxon_id}
          </p>
        </div>
      </div>

      {/* Tabs */}
      <div className="border-b">
        <div className="flex gap-6">
          <button className="border-b-2 border-primary pb-3 text-sm font-semibold">
            Overview
          </button>
        </div>
      </div>

      {/* Overview Content */}
      <div className="grid gap-6 xl:grid-cols-3">
        {/* Left column */}
        <div className="xl:col-span-1">
          <TaxonomySummary taxonomy={taxonomy} />
        </div>

        {/* Middle column */}
        <div className="xl:col-span-1">
          <div className="rounded-lg border bg-card p-6 shadow-sm">
            <h2 className="text-xl font-semibold">
              Genomes by Metadata
            </h2>

            <p className="mt-4 text-muted-foreground">
              Coming soon...
            </p>
          </div>
        </div>

        {/* Right column */}
        <div className="xl:col-span-1">
          <div className="rounded-lg border bg-card p-6 shadow-sm">
            <h2 className="text-xl font-semibold">
              Reference / Representative Genomes
            </h2>

            <p className="mt-4 text-muted-foreground">
              Coming soon...
            </p>
          </div>
        </div>
      </div>

      {/* Full Lineage */}
      <div className="rounded-lg border bg-card p-6 shadow-sm">
        <h2 className="mb-4 text-xl font-semibold">
          Full Lineage
        </h2>

        <div className="flex flex-wrap gap-2">
          {taxonomy.lineage_names.map((name, index) => (
            <React.Fragment key={`${name}-${index}`}>
              <Link
                href={`/view/Taxonomy/${taxonomy.lineage_ids[index]}`}
                className="hover:underline"
              >
                {name}
              </Link>

              {index < taxonomy.lineage_names.length - 1 && (
                <span className="text-muted-foreground">»</span>
              )}
            </React.Fragment>
          ))}
        </div>
      </div>
    </div>
  );
}