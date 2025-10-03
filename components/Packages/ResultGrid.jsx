"use client";

import TopFilterBar from "./TopFilterBar";
import FilterOptions from "./FilterOption";
import TourTypes from "./TourTypes";
import PackagesGrid from "./PackagesGrid";

const ResultGrid = () => {
  return (
    <section className="container mx-auto px-4 py-6">
      {/* Top Bar */}
      <TopFilterBar />

      {/* Tour Types Slider */}
      <TourTypes />

      {/* Grid Layout */}
      <div className="grid grid-cols-1 gap-6 md:grid-cols-4">
        {/* Sidebar Filters */}
        <aside className="space-y-6 rounded-lg bg-white shadow-sm md:col-span-1">
          <FilterOptions />
        </aside>

        {/* Results */}
        <div className="md:col-span-3">
          <PackagesGrid />
        </div>
      </div>
    </section>
  );
};

export default ResultGrid;
