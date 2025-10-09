"use client";

import { Star, Share2, Heart } from "lucide-react";
import Link from "next/link";

const PackagesTitle = () => {
  return (
    <section className="border-t border-t-gray-200 bg-white px-4 py-6 md:px-10">
      <div className="container mx-auto px-4">
        {/* Breadcrumb */}
        <div className="mb-3 flex items-center gap-2 text-sm">
          <Link href="/" className="hover:text-primary transition-colors">
            Home
          </Link>
          <span className="text-gray-400">›</span>
          <span className="leading-6 font-medium">
            Elephant Jungle Sanctuary Half-Day Visit with Meal
          </span>
        </div>

        {/* Title and Details */}
        <div className="flex flex-col md:flex-row md:items-center md:justify-between">
          <div>
            <h1 className="mb-2 text-2xl leading-8 font-semibold tracking-normal md:text-3xl">
              Elephant Jungle Sanctuary Half-Day Visit with Meal
            </h1>

            <div className="flex items-center gap-3 text-sm">
              <div className="flex items-center gap-1 font-semibold text-amber-500">
                <Star className="h-4 w-4 fill-amber-500 text-amber-500" />
                <span>5</span>
                <span className="font-normal">(1 review)</span>
              </div>

              <span className="text-gray-400">•</span>
              <span className="hover:text-primary-hover text-gray-700">
                Phuket, Thailand
              </span>
            </div>
          </div>

          {/* Icons */}
          <div className="mt-4 flex items-center gap-3 md:mt-0">
            <button
              type="button"
              className="rounded-full border border-gray-200 p-2 transition hover:bg-gray-100"
            >
              <Share2 className="h-5 w-5 text-gray-600" />
            </button>
            <button
              type="button"
              className="rounded-full border border-gray-200 p-2 transition hover:bg-gray-100"
            >
              <Heart className="h-5 w-5 text-gray-600" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PackagesTitle;
