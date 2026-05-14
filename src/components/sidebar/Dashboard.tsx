import Image from "next/image";
import TradingChart from "../tradingChart/TradingChart";
import MarketWatchs from "../marketWatch/MarketWatchs";
import AssetAllocation from "../assetsAllocation/AssetAllocation";
import ConvertExchange from "../convertExchange/ConvertExchange";
import TransactionHistory from "../transictionHistory/TransictionHistory";

function Dashboard() {
  return (
    
    <div className="flex-1 p-4 md:p-6 lg:p-8 overflow-auto ">
      <div className="space-y-4 md:space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-4 md:gap-6">
          <div className=" bg-[#0f1229] rounded-2xl px-4 md:p-6 border border-[rgba(59,130,246,0.1)] shadow-lg backdrop-blur-sm ">
            <h3 className="text-gray-400 text-xl">Estimated Balance</h3>
            <h2 className="text-gray-300 text-2xl font-bold py-2">
              $124,582.45
            </h2>
            <p className="text-green-600 px-7 relative  text-sm">
              <Image
                src="https://www.svgrepo.com/show/535172/arrow-trend-up.svg"
                alt="svg arrow"
                width={20}
                height={20}
                className="absolute left-[-3] "
                style={{
                  filter:
                    "brightness(0) saturate(100%) invert(62%) sepia(98%) saturate(749%) hue-rotate(85deg) brightness(119%) contrast(119%)",
                }}
              />
              +12.5% this month
            </p>
          </div>
          <div className=" bg-[#0f1229] rounded-2xl px-4 md:p-6 border border-[rgba(59,130,246,0.1)] shadow-lg backdrop-blur-sm justify-center items-center ">
            <div className="px-10 relative">
              <h3 className="text-gray-200 text-xl font-bold">BTC</h3>
              <p className="text-gray-500">BTCUSD</p>
              <div className="absolute top-1 left-0">
                <span className="w-8 h-8 flex items-center justify-center rounded-full bg-purple-500 text-white">
                  B
                </span>
              </div>
            </div>
            <h2 className="text-gray-300 text-2xl font-bold py-2">
              $67,432.50
            </h2>
            <p className="text-green-600 px-7 relative  text-sm">
              <Image
                src="https://www.svgrepo.com/show/535172/arrow-trend-up.svg"
                alt="svg arrow"
                width={20}
                height={20}
                className="absolute left-[-3] "
                style={{
                  filter:
                    "brightness(0) saturate(100%) invert(62%) sepia(98%) saturate(749%) hue-rotate(85deg) brightness(119%) contrast(119%)",
                }}
              />
              +5.24%
            </p>
            <Image
              src="/zigzag.png"
              alt="svg arrow"
              width={60}
              height={1}
              className="absolute right-10 bottom-10"
              style={{
                filter:
                  "brightness(0) saturate(100%) invert(62%) sepia(98%) saturate(749%) hue-rotate(85deg) brightness(119%) contrast(119%)",
              }}
            />
          </div>
          <div className=" bg-[#0f1229] rounded-2xl px-4 md:p-6 border border-[rgba(59,130,246,0.1)] shadow-lg backdrop-blur-sm justify-center items-center ">
            <div className="px-10 relative">
              <h3 className="text-gray-200 text-xl font-bold">ETH</h3>
              <p className="text-gray-500">ETHUSD</p>
              <div className="absolute top-1 left-0">
                <span className="w-8 h-8 flex items-center justify-center rounded-full bg-purple-500 text-white">
                  Ξ
                </span>
              </div>
            </div>
            <h2 className="text-gray-300 text-2xl font-bold py-2">$3,842.15</h2>
            <p className="text-green-600 px-7 relative  text-sm">
              <Image
                src="https://www.svgrepo.com/show/535172/arrow-trend-up.svg"
                alt="svg arrow"
                width={20}
                height={20}
                className="absolute left-[-3] "
                style={{
                  filter:
                    "brightness(0) saturate(100%) invert(62%) sepia(98%) saturate(749%) hue-rotate(85deg) brightness(119%) contrast(119%)",
                }}
              />
              +3.87%
            </p>
            <Image
              src="/zigzag.png"
              alt="svg arrow"
              width={60}
              height={1}
              className="absolute right-10 bottom-10"
              style={{
                filter:
                  "brightness(0) saturate(100%) invert(62%) sepia(98%) saturate(749%) hue-rotate(85deg) brightness(119%) contrast(119%)",
              }}
            />
          </div>
          <div className=" bg-[#0f1229] rounded-2xl px-4 md:p-6 border border-[rgba(59,130,246,0.1)] shadow-lg backdrop-blur-sm justify-center items-center ">
            <div className="px-10 relative">
              <h3 className="text-gray-200 text-xl font-bold">SOL</h3>
              <p className="text-gray-500">SOLUSDT</p>
              <div className="absolute top-1 left-0">
                <span className="w-8 h-8 flex items-center justify-center rounded-full bg-purple-500 text-white">
                  ◎
                </span>
              </div>
            </div>
            <h2 className="text-gray-300 text-2xl font-bold py-2">$142.38</h2>
            <p className="text-green-600 px-7 relative  text-sm">
              <Image
                src="https://www.svgrepo.com/show/535165/arrow-trend-down.svg"
                alt="svg arrow"
                width={20}
                height={20}
                className="absolute left-[-3] "
                style={{
                  filter:
                    "brightness(0) saturate(100%) invert(62%) sepia(98%) saturate(749%) hue-rotate(85deg) brightness(119%) contrast(119%)",
                }}
              />
              +3.87%
            </p>
            <Image
              src="/zigzag.png"
              alt="svg arrow"
              width={60}
              height={1}
              className="absolute right-10 bottom-10"
              style={{
                filter:
                  "brightness(0) saturate(100%) invert(62%) sepia(98%) saturate(749%) hue-rotate(85deg) brightness(119%) contrast(119%)",
              }}
            />
          </div>
        </div>
        <TradingChart />
        <MarketWatchs />
          <AssetAllocation />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <ConvertExchange />
          <TransactionHistory/>
          
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
