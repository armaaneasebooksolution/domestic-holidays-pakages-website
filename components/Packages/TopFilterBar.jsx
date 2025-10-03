import { Filter } from "lucide-react";
import { useState } from "react";

const TopFilterBar = () => {
  const [sortBy, setSortBy] = useState("popular");
  return (
    <section className="container mx-auto">
      {/* Top Filter Bar */}
      <div className="flex flex-col items-center justify-between gap-4 rounded-lg bg-gray-100 p-3 md:flex-row">
        <div>
          <h2 className="text-md font-[500] text-gray-800">
            Available Packages
          </h2>
          <p className="font-poppins text-sm text-gray-500">
            Showing 24 results
          </p>
        </div>

        <div className="flex items-center gap-3">
          <label className="font-poppins text-sm text-gray-600">Sort by:</label>
          <select
            value={sortBy}
            onChange={(e) => setSortBy(e.target.value)}
            className="rounded-lg border border-gray-300 px-3 py-2 text-sm focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500"
          >
            <option value="popular">Most Popular</option>
            <option value="price_low">Price: Low to High</option>
            <option value="price_high">Price: High to Low</option>
            <option value="rating">Highest Rated</option>
          </select>
        </div>
      </div>
    </section>
  );
};

export default TopFilterBar;
