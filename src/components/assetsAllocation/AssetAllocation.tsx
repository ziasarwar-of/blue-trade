"use client";

import { PieChart, Pie, Cell, ResponsiveContainer, Legend } from "recharts";

const data = [
  { name: "Bitcoin", value: 45, color: "#3b82f6" },
  { name: "Ethereum", value: 30, color: "#10b981" },
  { name: "Cardano", value: 15, color: "#8b5cf6" },
  { name: "Others", value: 10, color: "#f59e0b" },
];

export default function AssetAllocation() {
  return (
    <div className="bg-[#0f1229] rounded-2xl p-6 border border-blue-500/10 shadow-lg">
      {/* Heading */}
      <h3 className="text-lg font-semibold text-white mb-4">
        Asset Allocation
      </h3>

      {/* Chart Container */}
      <div className="w-full h-75 min-w-0">
        <ResponsiveContainer width="100%" height="100%">
          <PieChart>
            {/* Pie */}
            <Pie
              data={data}
              dataKey="value"
              cx="50%"
              cy="40%"
              innerRadius={60}
              outerRadius={90}
              paddingAngle={3}
            >
              {/* Colors */}
              {data.map((item, index) => (
                <Cell key={index} fill={item.color} stroke="#fff" />
              ))}
            </Pie>

            {/* Bottom Legend */}
            <Legend
              verticalAlign="bottom"
              align="center"
              formatter={(value: string, entry: any) => (
                <span className="text-gray-300 text-sm">
                  {value} ({entry.payload.value}%)
                </span>
              )}
            />
          </PieChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}
