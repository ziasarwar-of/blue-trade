"use client";

import { ArrowDownLeft, ArrowUpRight } from "lucide-react";

const transactions = [
  {
    type: "deposit BTC",
    time: "2 hours ago",
    amount: "+0.5 BTC",
    usd: "$33,716.25",
    status: "completed",
    statusColor: "green",
    icon: "down",
  },
  {
    type: "withdrawal ETH",
    time: "5 hours ago",
    amount: "-2.5 ETH",
    usd: "$9,605.38",
    status: "pending",
    statusColor: "yellow",
    icon: "up",
  },
  {
    type: "deposit USDT",
    time: "1 day ago",
    amount: "+5,000 USDT",
    usd: "$5,000.00",
    status: "completed",
    statusColor: "green",
    icon: "down",
  },
  {
    type: "withdrawal SOL",
    time: "2 days ago",
    amount: "-50 SOL",
    usd: "$7,119.00",
    status: "completed",
    statusColor: "green",
    icon: "up",
  },
  {
    type: "deposit BNB",
    time: "3 days ago",
    amount: "+10 BNB",
    usd: "$5,927.40",
    status: "failed",
    statusColor: "red",
    icon: "down",
  },
];

const statusStyles = {
  green: "bg-green-500/20 text-green-400",
  yellow: "bg-yellow-500/20 text-yellow-400",
  red: "bg-red-500/20 text-red-400",
};

export default function TransactionHistory() {
  return (
    <div className="bg-[#0f1229] rounded-2xl p-6 border border-blue-500/10 shadow-lg">
      {/* Heading */}
      <h3 className="text-lg font-semibold text-white mb-4">
        Transaction History
      </h3>

      {/* List */}
      <div className="space-y-3">
        {transactions.map((tx, index) => (
          <div
            key={index}
            className="flex items-center justify-between p-3 rounded-lg hover:bg-[#1e293b] transition"
          >
            {/* Left Side */}
            <div className="flex items-center gap-3">
              <div
                className={`w-10 h-10 rounded-full flex items-center justify-center ${
                  tx.amount.includes("+")
                    ? "bg-green-500/20 text-green-400"
                    : "bg-red-500/20 text-red-400"
                }`}
              >
                {tx.icon === "down" ? (
                  <ArrowDownLeft className="w-5 h-5" />
                ) : (
                  <ArrowUpRight className="w-5 h-5" />
                )}
              </div>

              <div>
                <p className="text-white font-medium capitalize">{tx.type}</p>
                <p className="text-gray-500 text-xs">{tx.time}</p>
              </div>
            </div>

            {/* Right Side */}
            <div className="text-right">
              <p
                className={`font-medium ${
                  tx.amount.includes("+") ? "text-green-400" : "text-red-400"
                }`}
              >
                {tx.amount}
              </p>

              <div className="flex items-center gap-2 justify-end">
                <span className="text-gray-500 text-xs">{tx.usd}</span>

                <span
                  className={`text-xs px-2 py-0.5 rounded ${
                    statusStyles[tx.statusColor]
                  }`}
                >
                  {tx.status}
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
