"use client";

import React from "react";
import {
  PieChart,
  Pie,
  Cell,
  Tooltip,
  ResponsiveContainer,
  Legend,
} from "recharts";

interface ChartDatum {
  label: string;
  value: number;
  link?: string;
}

interface Props {
  title: string;
  data: ChartDatum[];
  onSliceClick?: (datum: ChartDatum) => void;
}

const COLORS = [
  "#4f46e5",
  "#06b6d4",
  "#10b981",
  "#f59e0b",
  "#ef4444",
  "#8b5cf6",
  "#64748b",
];

export default function MetadataPieChart({
  title,
  data,
  onSliceClick,
}: Props) {
  if (!data || data.length === 0) return null;

  return (
    <div className="rounded-lg border bg-card p-4 shadow-sm">
      <h3 className="mb-3 text-sm font-semibold">{title}</h3>

      <div className="h-64 w-full">
        <ResponsiveContainer>
          <PieChart>
            <Pie
              data={data}
              dataKey="value"
              nameKey="label"
              outerRadius={90}
              innerRadius={50}
              paddingAngle={2}
              onClick={(entry) => {
                if (onSliceClick) onSliceClick(entry);
              }}
            >
              {data.map((_, index) => (
                <Cell
                  key={`cell-${index}`}
                  fill={COLORS[index % COLORS.length]}
                />
              ))}
            </Pie>

            <Tooltip />
            <Legend className="mt-3" />
          </PieChart>
        </ResponsiveContainer>
      </div>

      {/* optional quick list like old Dojo "table column" */}
      <div className="mt-3 space-y-1 text-xs text-muted-foreground">
        {data.slice(0, 5).map((d) => (
          <div key={d.label} className="flex justify-between gap-2">
            <span className="truncate">{d.label}</span>
            <span className="font-medium">{d.value}</span>
          </div>
        ))}
      </div>
    </div>
  );
}