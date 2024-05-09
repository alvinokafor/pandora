import React, { useState } from "react";
import { SearchIcon } from "@/assets/icons";

export default function Search() {
  const [searchParam, setSearchParam] = useState("");
  return (
    <div className="flex justify-between mb-3">
      <div className="flex w-[690px] items-center gap-x-2 rounded-lg border border-slate-300 px-3 py-2.5 shadow-sm">
        <SearchIcon />
        <input
          required
          type="Text"
          id="search"
          placeholder="Search for files..."
          value={searchParam}
          onChange={(e) => {
            setSearchParam(e.target.value);
          }}
          className="w-full bg-transparent placeholder:text-sm placeholder:text-gray-400 focus:outline-none"
        />
      </div>

      <button className="p-2 px-6 bg-base-purple text-base rounded-lg shadow-sm text-white transition-all duration-100 hover:text-neutral-50 hover:shadow-md">
        Search
      </button>
    </div>
  );
}
