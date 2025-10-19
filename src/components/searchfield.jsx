"use client";

import { useCity } from "@/context/WeatherProvider";
import { Search, X } from "lucide-react";

export default function SearchField() {
  const { city, setCity } = useCity();

  function catchInputValue(e) {
    setCity(e.target.value);
  }

  return (
    <div className="bg-neutral-50 rounded-2xl h-8 py-1 relative w-64 px-1.5 pt-1 text-center items-center flex">
      <Search className="absolute left-3 text-orange-900" />
      <input
        type="search"
        onChange={catchInputValue}
        value={city}
        placeholder="Search for a place"
        className="w-full pl-10 bg-transparent outline-none text-orange-900"
      />
      {city && (
        <button onClick={() => setCity("")} className="absolute right-3">
          <X />
        </button>
      )}
    </div>
  );
}
