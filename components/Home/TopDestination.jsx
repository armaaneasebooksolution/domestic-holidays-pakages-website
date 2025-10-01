"use client";
import Image from "next/image";
import Link from "next/link";
import SectionHeader from "../Common/SectionHeader";

const destinations = [
  {
    id: 1,
    src: "/assets/img/home5/destination-img1.jpg",
    title: "Rome, Italy",
    tours: 6,
  },
  {
    id: 2,
    src: "/assets/img/home5/destination-img2.jpg",
    title: "Great Wall of China",
    tours: 12,
  },
  {
    id: 3,
    src: "/assets/img/home5/destination-img3.jpg",
    title: "Great Temple Jordan",
    tours: 18,
  },
  {
    id: 4,
    src: "/assets/img/home5/destination-img4.jpg",
    title: "Switzerland",
    tours: 14,
  },
  {
    id: 5,
    src: "/assets/img/home5/destination-img5.jpg",
    title: "Santorini, Greece",
    tours: 7,
  },
  {
    id: 6,
    src: "/assets/img/home5/destination-img6.jpg",
    title: "Machu Picchu of Peru",
    tours: 26,
  },
];

export default function TopDestinations() {
  return (
    <section className="w-full mb-20">
      <div className="container mx-auto px-4">
        {/* Section Heading */}
        <SectionHeader
          title="Top Destinations"
          subtitle="Discover trending destinations where most travelers are heading right now."
          align="center"
        />

        {/* Custom Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6 mt-10">
          {/* Row 1 */}
          <div className="md:col-span-5">
            <DestinationCard dest={destinations[0]} />
          </div>
          <div className="md:col-span-3">
            <DestinationCard dest={destinations[1]} />
          </div>
          <div className="md:col-span-4">
            <DestinationCard dest={destinations[2]} />
          </div>

          {/* Row 2 */}
          <div className="md:col-span-4">
            <DestinationCard dest={destinations[3]} />
          </div>
          <div className="md:col-span-3">
            <DestinationCard dest={destinations[4]} />
          </div>
          <div className="md:col-span-5">
            <DestinationCard dest={destinations[5]} />
          </div>
        </div>

        {/* View More Button */}
        <div className="flex justify-center mt-10">
          <Link
            href="/destinations"
            className="bg-primary-gradient text-white font-semibold px-8 py-3 rounded-full shadow-md hover:scale-105 transition"
          >
            View More Destinations
          </Link>
        </div>
      </div>
    </section>
  );
}

/* Destination Card */
function DestinationCard({ dest }) {
  return (
    <div className="group relative rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-500 h-[280px] md:h-[320px]">
      {/* Image */}
      <Image
        src={dest.src}
        alt={dest.title}
        fill
        className="object-cover transition-transform duration-700 group-hover:scale-110"
      />

      {/* Shine Effect */}
      <div className="absolute inset-0 rounded-2xl overflow-hidden pointer-events-none">
        <div className="shine-effect"></div>
      </div>

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/20 group-hover:bg-black/30 transition"></div>

      {/* Hover Arrow in Center */}
      <Link
        href="/destination-details"
        className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-500"
      >
        <span className="flex items-center justify-center w-12 h-12 rounded-full bg-primary-gradient text-white shadow-lg">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="w-6 h-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth="2"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M17 7l-10 10M17 17V7H7"
            />
          </svg>
        </span>
      </Link>

      {/* Content */}
      <div className="absolute bottom-5 left-5 text-white z-10">
        <p className="text-sm opacity-90 font-medium">Tours ({dest.tours})</p>
        <h3 className="text-lg md:text-xl font-semibold">{dest.title}</h3>
      </div>
    </div>
  );
}
