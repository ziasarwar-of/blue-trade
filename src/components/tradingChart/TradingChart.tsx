"use client";

import React, { useEffect, useState } from "react"; // Added hooks
import {
  ResponsiveContainer,
  ComposedChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Bar,
} from "recharts";

const data = [
  { time: "09:00", price: 62000, volume: 2000 },
  { time: "10:00", price: 63000, volume: 3000 },
  { time: "11:00", price: 64000, volume: 2500 },
  { time: "12:00", price: 65000, volume: 3500 },
  { time: "13:00", price: 64500, volume: 2800 },
  { time: "14:00", price: 66000, volume: 4000 },
  { time: "15:00", price: 67000, volume: 3200 },
  { time: "16:00", price: 68432, volume: 3800 },
];

export default function TradingChart() {
  // 1. Add a mounted state to prevent SSR dimension issues
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <div className="bg-[#0f1229] rounded-2xl p-4 md:p-6 border border-[rgba(59,130,246,0.1)] shadow-lg">
      {/* Top Section */}
      <div className="flex flex-col md:flex-row md:items-center justify-between mb-6 gap-4">
        <div>
          <h3 className="text-lg md:text-xl font-semibold text-white">BTC/USDT</h3>
          <div className="flex items-center gap-4 mt-1">
            <span className="text-xl md:text-2xl font-bold text-white">$68,432.50</span>
            <span className="text-green-400 text-sm">+5.24%</span>
          </div>
        </div>

        <div className="flex gap-2 overflow-x-auto">
          {["1H", "4H", "1D", "1W", "1M"].map((item, index) => (
            <button
              key={index}
              className={`px-4 py-2 rounded-lg whitespace-nowrap transition-all ${
                item === "1H"
                  ? "bg-blue-500 text-white shadow-lg shadow-blue-500/30"
                  : "bg-[#1e293b] text-gray-400 hover:text-white"
              }`}
            >
              {item}
            </button>
          ))}
        </div>
      </div>

      {/* 2. Changed h-75 to h-[300px] (standard Tailwind) */}
      <div className="w-full h-[300px]">
        {/* 3. Only render chart after mounting to avoid Build Warnings */}
        {mounted ? (
          <ResponsiveContainer width="100%" height="100%">
            <ComposedChart data={data}>
              <defs>
                <linearGradient id="blueGlow" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="50%" stopColor="#3b82f6" stopOpacity={0.3} />
                  <stop offset="95%" stopColor="#3b82f6" stopOpacity={0} />
                </linearGradient>
              </defs>

              <CartesianGrid strokeDasharray="3 3" stroke="rgba(59,130,246,0.1)" />

              <XAxis
                dataKey="time"
                stroke="#94a3b8"
                tick={{ fill: "#94a3b8", fontSize: 12 }}
              />

              <YAxis 
                stroke="#94a3b8" 
                tick={{ fill: "#94a3b8", fontSize: 12 }} 
                domain={['auto', 'auto']} // Better for crypto prices
              />

              <Tooltip
                contentStyle={{
                  backgroundColor: "#0f1229",
                  border: "1px solid rgba(59,130,246,0.2)",
                  borderRadius: "8px",
                  color: "#fff",
                }}
              />

              <Bar dataKey="volume" fill="rgba(59,130,246,0.2)" radius={[4, 4, 0, 0]} />

              <Area
                type="monotone"
                dataKey="price"
                stroke="#3b82f6"
                strokeWidth={3}
                fill="url(#blueGlow)"
              />
            </ComposedChart>
          </ResponsiveContainer>
        ) : (
          <div className="w-full h-full flex items-center justify-center text-gray-500">
            Loading Chart...
          </div>
        )}
      </div>
    </div>
  );
}