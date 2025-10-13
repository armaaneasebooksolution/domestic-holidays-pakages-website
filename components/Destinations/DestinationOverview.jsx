"use client";

import { Info, ArrowUpRight } from "lucide-react";

export default function DestinationOverview({ destination }) {
  if (!destination) return null;

  return (
    <section className="container mx-auto max-w-7xl px-6 py-12 text-center">
      {/* ===== Destination Title ===== */}
      <h2 className="mb-6 text-[28px] leading-[1.1] font-semibold tracking-wide text-gray-900 sm:text-[32px] lg:text-[40px]">
        {destination.name}
      </h2>

      {/* ===== Info Badges ===== */}
      <div className="mb-6 flex flex-wrap justify-center gap-3">
        {destination.capital && (
          <div className="flex items-center gap-2 rounded-full border border-gray-200 bg-white px-4 py-2 text-sm font-medium text-gray-700 shadow-sm">
            Capital -{" "}
            <span className="font-semibold text-gray-900">
              {destination.capital}
            </span>
          </div>
        )}

        {destination.currency && (
          <div className="flex items-center gap-2 rounded-full border border-gray-200 bg-white px-4 py-2 text-sm font-medium text-gray-700 shadow-sm">
            Currency -{" "}
            <span className="font-semibold text-gray-900">
              {destination.currency}
            </span>
          </div>
        )}

        {destination.language && (
          <div className="flex items-center gap-1 rounded-full border border-gray-200 bg-white px-4 py-2 text-sm font-medium text-gray-700 shadow-sm">
            Language -{" "}
            <span className="font-semibold text-gray-900">
              {destination.language}
            </span>
            <Info className="ml-1 h-4 w-4 text-gray-500" />
          </div>
        )}
      </div>

      {/* ===== Destination Description ===== */}
      <p className="mx-auto max-w-5xl text-base leading-relaxed text-gray-700">
        {destination.about}
      </p>

      {/* ===== CTA Button ===== */}
      <div className="mt-8">
        <a
          href="#best-time-to-visit"
          className="border-primary text-primary hover:bg-primary-light text-md inline-flex items-center gap-2 rounded-full border bg-transparent px-6 py-3 font-medium transition hover:shadow-sm"
        >
          Best Time to Visit <ArrowUpRight className="h-4 w-4" />
        </a>
      </div>
    </section>
  );
}
