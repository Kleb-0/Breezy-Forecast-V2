import { Search } from "lucide-react";

export default function SearchField() {
  return (
    <div className="bg-neutral-50 rounded-2xl h-8 relative w-64 px-1.5 pt-1 text-center">
      <Search className="absolute left-3 text-orange-900" />
      <input
        type="search"
        placeholder="Search for a place"
        className="w-full pl-10 bg-transparent flex-1 outline-none text-orange-900"
      />
    </div>
  );
}
