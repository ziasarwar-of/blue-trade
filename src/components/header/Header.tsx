import React from "react";
import Sidebar from "./Sidebar";
import Search from "./Search";
import Notification from "./Notification";
import Profile from "./Profile";

const Header = () => {
  return (
    <header className="fixed top-0 left-0 w-full h-16 z-50 flex items-center justify-between px-4 py-3 bg-[#0f1229] text-white shadow-md">
      {/* Left */}
      <div className="flex items-center">
        <Sidebar />
      </div>

      {/* Center */}
      <div className="flex flex-1 justify-center">
        <Search />
      </div>

      {/* Right */}
      <div className="flex items-center gap-4">
        <Notification />
        <Profile />
      </div>
    </header>
  );
};

export default Header;
