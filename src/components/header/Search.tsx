import { Search } from "lucide-react";

export default function SearchBar() {
  return (
    <div className="relative w-full max-w-md">
      
      {/* Icon */}
      <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 w-4 h-4" />

      {/* Input */}
      <input
        type="text"
        placeholder="Search..."
        className="w-full pl-10 pr-4 py-2 rounded-lg bg-gray-300 text-gray-600 outline-none focus:ring-2 focus:ring-blue-500"
      />
      
    </div>
  );
}