import { Bell } from "lucide-react";

export default function Notification() {
  return (
    <button className="relative text-xl text-gray-400 hover:text-gray-700 transition">
        <Bell className="w-7 h-7"/>
        <span className="absolute -top-0.5 -right-0.5 bg-red-500 text-white text-[10px] w-2 h-2 flex items-center justify-center rounded-full">
        
      </span>
    </button>
  );
}
