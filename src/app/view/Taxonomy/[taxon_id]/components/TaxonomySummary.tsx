import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

interface Taxonomy {
  taxon_id: number;
  taxon_name: string;
  taxon_rank?: string;
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
  summary: TaxonomySummaryData;
};

export default function TaxonomySummary({ taxonomy, summary }: Props) {

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
  ].filter(([, value]) => {
    // always keep text fields
    if (typeof value === "string") {
      return value.trim() !== "";
    }

    // hide null/undefined/0
    return value != null && value !== 0;
  });

  return (
    <Card>
      <CardHeader>
        <CardTitle>Summary</CardTitle>
      </CardHeader>

      <CardContent>
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
      </CardContent>
    </Card>
  );
}