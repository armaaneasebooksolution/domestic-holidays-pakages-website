"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { CheckCircle2 } from "lucide-react";

const seasons = [
  {
    id: 1,
    name: "Spring (March–May)",
    weather: "12–20°C / 53–68°F",
    image: "/assets/img/seasons/spring.jpg",
    highlights: [
      "Cherry blossoms, café culture.",
      "Moderate crowds.",
      "Ideal for outdoor walks & photo spots.",
    ],
    perfectFor: "First-time travelers, couples, light packers",
  },
  {
    id: 2,
    name: "Summer (June–August)",
    weather: "20–30°C / 68–86°F",
    image: "/assets/img/seasons/summer.jpg",
    highlights: [
      "Long daylight hours.",
      "Open-air cinema, festivals.",
      "High tourist volume & prices.",
    ],
    perfectFor: "Festival lovers, families, nightlife explorers",
  },
  {
    id: 3,
    name: "Autumn (Sep to Nov)",
    weather: "0–18°C / 50–64°F",
    image: "/assets/img/seasons/autumn.jpg",
    highlights: [
      "Golden parks, wine season.",
      "Fewer tourists, great photos.",
      "Fashion Week buzz.",
    ],
    perfectFor: "Photographers, solo travelers, wine lovers",
  },
  {
    id: 4,
    name: "Winter (Dec to Feb)",
    weather: "3–8°C / 37–46°F",
    image: "/assets/img/seasons/winter.jpg",
    highlights: [
      "Christmas markets, cozy cafés.",
      "Fewer crowds, better deals.",
      "Occasional snow = pure magic.",
    ],
    perfectFor: "Budget travelers, romantics, festive moods",
  },
];

export default function BestTimeToVisit() {
  return (
    <section className="container mx-auto px-4 py-10">
      {/* Section Title */}
      <h2 className="mb-10 text-center text-[26px] font-bold tracking-tight text-gray-900">
        Best Time to Visit
      </h2>

      {/* Grid Layout */}
      <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
        {seasons.map((season, index) => (
          <motion.div
            key={season.id}
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
                alt={season.name}
                width={160}
                height={120}
                className="h-[120px] w-[160px] rounded-xl object-cover"
              />
            </div>

            {/* Content */}
            <div className="flex-1">
              <h3 className="text-lg font-semibold text-gray-900">
                {season.name}
              </h3>
              <p className="mb-3 text-sm text-gray-500">
                Weather: {season.weather}
              </p>

              {/* Highlights */}
              <div className="mb-3">
                <p className="mb-1 font-semibold text-gray-800">Highlights:</p>
                <ul className="space-y-1">
                  {season.highlights.map((point, i) => (
                    <li
                      key={i}
                      className="flex items-start gap-2 text-sm text-gray-700"
                    >
                      <CheckCircle2 className="mt-0.5 h-4 w-4 text-blue-500" />
                      {point}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Perfect For */}
              <div className="rounded-full bg-blue-50 py-2 text-center text-sm font-medium text-blue-600 shadow-sm">
                Perfect For: {season.perfectFor}
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
