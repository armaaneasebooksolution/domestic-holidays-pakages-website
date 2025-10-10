"use client";

import { useSelector, useDispatch } from "react-redux";
import { setSearchTerm, resetSearchTerm } from "@/redux/slices/searchSlice";
import { Search, X } from "lucide-react";

export default function GlobalSearch({ section, placeholder = "Search..." }) {
  const dispatch = useDispatch();
  const term = useSelector((state) => state.search[section] || "");

  return (
    <div className="relative w-full sm:w-80">
      <input
        type="text"
        value={term}
        onChange={(e) =>
          dispatch(setSearchTerm({ section, term: e.target.value }))
        }
        placeholder={placeholder}
        className="focus:border-primary focus:ring-primary w-full rounded-lg border border-gray-300 bg-white py-2 pr-10 pl-10 text-sm shadow-sm focus:ring-1 focus:outline-none"
      />
      <Search className="absolute top-2.5 left-3 h-5 w-5 text-gray-400" />

      {term && (
        <button
          onClick={() => dispatch(resetSearchTerm({ section }))}
          className="absolute top-2.5 right-3 text-gray-400 hover:text-gray-600"
        >
          <X className="h-4 w-4" />
        </button>
      )}
    </div>
  );
}
