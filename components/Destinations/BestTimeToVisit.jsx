"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { CheckCircle2 } from "lucide-react";
import SectionHeader from "../Common/SectionHeader";

export default function BestTimeToVisit({ destination }) {
  const BestTimeToVisit = destination?.bestTimeToVisit || [];

  // If no data, render nothing
  if (!BestTimeToVisit.length) return null;

  return (
    <section className="container mx-auto px-4 py-10">
      {/* Section Title */}
      <SectionHeader
        title="Best Time to Visit "
        subtitle="Book now and save big on last-minute flights and hotels—your getaway is just a click away."
        align="center"
      />

      {/* Grid Layout */}
      <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
        {BestTimeToVisit.map((season, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            viewport={{ once: true }}
            className="flex flex-col rounded-2xl border border-gray-200 bg-white p-5 shadow-sm transition-all duration-300 hover:shadow-md sm:flex-row sm:items-start sm:p-6"
          >
            {/* Image */}
            <div className="mb-4 flex-shrink-0 sm:mr-6 sm:mb-0">
              <Image
                src={season.image}
                alt={season.season}
                width={160}
                height={160}
                className="h-[210px] w-[160px] rounded-xl object-cover"
              />
            </div>

            {/* Content */}
            <div className="flex-1">
              <h3 className="text-lg font-semibold text-gray-900">
                {season.season}
              </h3>
              <p className="mb-3 text-sm text-gray-500">
                Months: {season.months}
              </p>
              <p className="mb-3 text-sm text-gray-500">
                Temperature: {season.temperature}
              </p>

              {/* Highlights */}
              <div className="mb-3">
                <p className="mb-1 font-semibold text-gray-800">Highlights:</p>
                <ul className="space-y-1">
                  <li className="flex items-start gap-2 text-sm text-gray-700">
                    <CheckCircle2 className="mt-0.5 h-4 w-4 text-blue-500" />
                    Best weather to explore {destination.name}.
                  </li>
                  <li className="flex items-start gap-2 text-sm text-gray-700">
                    <CheckCircle2 className="mt-0.5 h-4 w-4 text-blue-500" />
                    Fewer crowds, pleasant experience.
                  </li>
                </ul>
              </div>

              {/* Perfect For */}
              <div className="rounded-full bg-blue-50 py-2 text-center text-sm font-medium text-blue-600 shadow-sm">
                Perfect For: Sightseeing & Local Experiences
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
