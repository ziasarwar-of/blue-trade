import React from "react";

const Notification = () => {
  return (
    <div className="flex flex-col p-6 m-4 md:space-y-6 justify-center ">
      <h2 className="text-gray-100 font-bold text-3xl">Notifications</h2>
      <div className="bg-[#0f1229] border border-slate-600 w-full rounded-2xl p-4 shadow-[6px_0_30px_rgba(59,130,246,0.2)]">
        <h3 className="text-gray-100 font-bold text-xl">BTC Price Alert</h3>
        <p className="text-gray-400 text-md mb-2">
          Bitcoin has reached $68,000
        </p>
        <p className="text-gray-500 text-sm">5 minutes ago</p>
      </div>
      <div className="bg-[#0f1229] border border-slate-600 w-full rounded-2xl p-4 shadow-[6px_0_30px_rgba(59,130,246,0.2)]">
        <h3 className="text-gray-100 font-bold text-xl">Deposit Confirmed</h3>
        <p className="text-gray-400 text-md mb-2">
          Your deposit of 0.5 BTC has been confirmed
        </p>
        <p className="text-gray-500 text-sm">2 hours ago</p>
      </div>

      <div className="bg-[#0f1229] border border-slate-600 w-full rounded-2xl p-4 shadow-[6px_0_30px_rgba(59,130,246,0.2)]">
        <h3 className="text-gray-100 font-bold text-xl">Price Drop Alert</h3>
        <p className="text-gray-400 text-md mb-2">SOL dropped below $145</p>
        <p className="text-gray-500 text-sm">5 hours ago</p>
      </div>
      <div className="bg-[#0f1229] border border-slate-600 w-full rounded-2xl p-4 shadow-[6px_0_30px_rgba(59,130,246,0.2)]">
        <h3 className="text-gray-100 font-bold text-xl">New Feature</h3>
        <p className="text-gray-400 text-md mb-2">
          Advanced charting tools are now available
        </p>
        <p className="text-gray-500 text-sm">1 day ago</p>
      </div>
    </div>
  );
};

export default Notification;
