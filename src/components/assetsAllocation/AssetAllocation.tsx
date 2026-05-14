"use client";

import React, { useEffect, useState } from "react"; // Added hooks
import { PieChart, Pie, Cell, ResponsiveContainer, Legend } from "recharts";

const data = [
  { name: "Bitcoin", value: 45, color: "#3b82f6" },
  { name: "Ethereum", value: 30, color: "#10b981" },
  { name: "Cardano", value: 15, color: "#8b5cf6" },
  { name: "Others", value: 10, color: "#f59e0b" },
];

export default function AssetAllocation() {
  // 1. Guard against SSR rendering
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <div className="bg-[#0f1229] rounded-2xl p-6 border border-blue-500/10 shadow-lg">
      <h3 className="text-lg font-semibold text-white mb-4">
        Asset Allocation
      </h3>

      {/* 2. Fixed h-75 to h-[300px] (or h-80) */}
      <div className="w-full h-[300px] min-w-0">
        {mounted ? (
          <ResponsiveContainer width="100%" height="100%">
            <PieChart margin={{ top: 10, bottom: 10 }}>
              <Pie
                data={data}
                dataKey="value"
                cx="50%"
                cy="50%"
                innerRadius={60}
                outerRadius={90}
                paddingAngle={3}
              >
                {data.map((item, index) => (
                  <Cell key={index} fill={item.color} stroke="#fff" />
                ))}
              </Pie>

              <Legend
                verticalAlign="bottom"
                align="center"
                iconType="circle"
                wrapperStyle={{ paddingTop: "20px" }}
                formatter={(value: string, entry: any) => (
                  <span className="text-gray-300 text-sm">
                    {value} ({entry.payload.value}%)
                  </span>
                )}
              />
            </PieChart>
          </ResponsiveContainer>
        ) : (
          /* 3. Placeholder for build-time / server-side */
          <div className="w-full h-full flex items-center justify-center text-gray-600 text-sm italic">
            Loading Distribution...
          </div>
        )}
      </div>
    </div>
  );
}
