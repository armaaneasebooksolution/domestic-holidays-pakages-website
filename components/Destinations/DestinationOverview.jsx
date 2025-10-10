"use client";

import { Info, ArrowUpRight } from "lucide-react";

export default function DestinationOverview() {
  return (
    <section className="container mx-auto max-w-7xl px-6 py-12 text-center">
      {/* ===== Destination Title ===== */}
      <h2 className="mb-6 text-[28px] leading-[1.1] font-semibold tracking-wide text-gray-900 sm:text-[32px] lg:text-[40px]">
        Paris, France
      </h2>

      {/* ===== Info Badges ===== */}
      <div className="mb-6 flex flex-wrap justify-center gap-3">
        <div className="flex items-center gap-2 rounded-full border border-gray-200 bg-white px-4 py-2 text-sm font-medium text-gray-700 shadow-sm">
          Capital - <span className="font-semibold text-gray-900">Paris</span>
        </div>
        <div className="flex items-center gap-2 rounded-full border border-gray-200 bg-white px-4 py-2 text-sm font-medium text-gray-700 shadow-sm">
          Currency - <span className="font-semibold text-gray-900">Euro €</span>
        </div>
        <div className="flex items-center gap-1 rounded-full border border-gray-200 bg-white px-4 py-2 text-sm font-medium text-gray-700 shadow-sm">
          Language -{" "}
          <span className="font-semibold text-gray-900">française</span>
          <Info className="ml-1 h-4 w-4 text-gray-500" />
        </div>
      </div>

      {/* ===== Destination Description ===== */}
      <p className="mx-auto max-w-5xl text-base leading-relaxed text-gray-700">
        Paris, known as the{" "}
        <span className="font-semibold">"City of Light"</span> (
        <em>La Ville Lumière</em>), is the capital of France and one of the most
        romantic and iconic cities in the world. Known for its timeless
        architecture, world-class museums, charming streets, rich history, and
        exquisite cuisine, Paris is a must-visit destination for travelers from
        around the globe. Globally recognized as a fashion capital, Paris is the
        birthplace of haute couture and luxury brands like Chanel, Louis
        Vuitton, and Dior.
      </p>

      {/* ===== CTA Button ===== */}
      <div className="mt-8">
        <button className="border-primary text-primary hover:bg-primary-light text-md inline-flex items-center gap-2 rounded-full border bg-transparent px-6 py-3 font-medium transition hover:shadow-sm">
          Best Time to Visit <ArrowUpRight className="h-4 w-4" />
        </button>
      </div>
    </section>
  );
}
