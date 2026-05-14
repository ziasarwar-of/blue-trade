import { Star } from "lucide-react";
import Image from "next/image";
const MarketWatchs = () => {
  return (
    <div className="bg-[#0f1229] mt-4 rounded-2xl p-4 md:p-6 border border-[rgba(59,130,246,0.1)] shadow-lg">
      <div className="flex flex-col md:flex-col md:items-start justify-between mb-6 gap-4 relative ">
        <div className="">
            <h2 className="text-2xl font-bold text-white mb-6 ">Market Watch</h2>

          <div className="mx-8 ">
            <h2 className="text-white font-bold">BTC/USDT</h2>
            <p className="text-gray-600 ">Binance</p>
            <Star className="text-yellow-400 w-5 h-5 fill-yellow-400 absolute left-0 bottom-3" />
          </div>
          <div className="absolute right-0 bottom-0.5">
            <h2 className="text-white font-bold">$67,432.50</h2>
            <p className="text-green-500">+5.24%</p>
            <Image
              src="https://www.svgrepo.com/show/535172/arrow-trend-up.svg"
              alt="arrow svg"
              width={20}
              height={20}
              className="absolute right-[90] bottom-0.5 "
              style={{
                filter:
                  "brightness(0) saturate(100%) invert(62%) sepia(98%) saturate(749%) hue-rotate(85deg) brightness(119%) contrast(119%)",
              }}
            />
          </div>
        </div>
      </div>
      <div className="flex flex-col md:flex-col md:items-start justify-between mb-6 gap-4 relative ">
        <div className="">
          <div className="mx-8 ">
            <h2 className="text-white font-bold">ETH/USDT</h2>
            <p className="text-gray-600 ">Binance</p>
            <Star className="text-yellow-400 w-5 h-5 fill-yellow-400 absolute left-0 bottom-3" />
          </div>
          <div className="absolute right-0 bottom-0.5">
            <h2 className="text-white font-bold">$3,842.15</h2>
            <p className="text-green-500">+3.87%</p>
            <Image
              src="https://www.svgrepo.com/show/535172/arrow-trend-up.svg"
              alt="arrow svg"
              width={20}
              height={20}
              className="absolute right-[90] bottom-0.5 "
              style={{
                filter:
                  "brightness(0) saturate(100%) invert(62%) sepia(98%) saturate(749%) hue-rotate(85deg) brightness(119%) contrast(119%)",
              }}
            />
          </div>
        </div>
      </div>
      <div className="flex flex-col md:flex-col md:items-start justify-between mb-6 gap-4 relative ">
        <div className="">
          <div className="mx-8 ">
            <h2 className="text-white font-bold">SOL/USDT</h2>
            <p className="text-gray-600 ">Binance</p>
            <Star className="text-yellow-400 w-5 h-5 fill-yellow-400 absolute left-0 bottom-3" />
          </div>
          <div className="absolute right-0 bottom-0.5">
            <h2 className="text-white font-bold">$142.38</h2>
            <p className="text-green-500">-2.14%</p>
            <Image
              src="https://www.svgrepo.com/show/535172/arrow-trend-up.svg"
              alt="arrow svg"
              width={20}
              height={20}
              className="absolute right-[90] bottom-0.5 "
              style={{
                filter:
                  "brightness(0) saturate(100%) invert(62%) sepia(98%) saturate(749%) hue-rotate(85deg) brightness(119%) contrast(119%)",
              }}
            />
          </div>
        </div>
      </div>
      <div className="flex flex-col md:flex-col md:items-start justify-between mb-6 gap-4 relative ">
        <div className="">
          <div className="mx-8 ">
            <h2 className="text-white font-bold">BNB/USDT</h2>
            <p className="text-gray-600 ">Binance</p>
            <Star className="text-gray-400 w-5 h-5 fill-gray-400 absolute left-0 bottom-3" />
          </div>
          <div className="absolute right-0 bottom-0.5">
            <h2 className="text-white font-bold">$592.74</h2>
            <p className="text-green-500">+1.92%</p>
            <Image
              src="https://www.svgrepo.com/show/535172/arrow-trend-up.svg"
              alt="arrow svg"
              width={20}
              height={20}
              className="absolute right-[90] bottom-0.5 "
              style={{
                filter:
                  "brightness(0) saturate(100%) invert(62%) sepia(98%) saturate(749%) hue-rotate(85deg) brightness(119%) contrast(119%)",
              }}
            />
          </div>
        </div>
      </div>
      <div className="flex flex-col md:flex-col md:items-start justify-between mb-6 gap-4 relative ">
        <div className="">
          <div className="mx-8 ">
            <h2 className="text-white font-bold">ADA/USDT</h2>
            <p className="text-gray-600 ">Binance</p>
            <Star className="text-yellow-400 w-5 h-5 fill-yellow-400 absolute left-0 bottom-3" />
          </div>
          <div className="absolute right-0 bottom-0.5">
            <h2 className="text-white font-bold">$0.5847</h2>
            <p className="text-green-500">-0.85%</p>
            <Image
              src="https://www.svgrepo.com/show/535172/arrow-trend-up.svg"
              alt="arrow svg"
              width={20}
              height={20}
              className="absolute right-[90] bottom-0.5 "
              style={{
                filter:
                  "brightness(0) saturate(100%) invert(62%) sepia(98%) saturate(749%) hue-rotate(85deg) brightness(119%) contrast(119%)",
              }}
            />
          </div>
        </div>
      </div>
      <div className="flex flex-col md:flex-col md:items-start justify-between mb-6 gap-4 relative ">
        <div className="">
          <div className="mx-8 ">
            <h2 className="text-white font-bold">XRP/USDT</h2>
            <p className="text-gray-600 ">Binance</p>
            <Star className="text-gray-400 w-5 h-5 fill-gray-400 absolute left-0 bottom-3" />
          </div>
          <div className="absolute right-0 bottom-0.5">
            <h2 className="text-white font-bold">$0.6234</h2>
            <p className="text-green-500">+4.12%</p>
            <Image
              src="https://www.svgrepo.com/show/535172/arrow-trend-up.svg"
              alt="arrow svg"
              width={20}
              height={20}
              className="absolute right-[90] bottom-0.5 "
              style={{
                filter:
                  "brightness(0) saturate(100%) invert(62%) sepia(98%) saturate(749%) hue-rotate(85deg) brightness(119%) contrast(119%)",
              }}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default MarketWatchs;
