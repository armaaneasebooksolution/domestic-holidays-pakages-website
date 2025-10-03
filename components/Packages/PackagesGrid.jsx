"use client";

import Image from "next/image";
import {
  MapPin,
  Heart,
  Wifi,
  Coffee,
  Car,
  Dumbbell,
  Utensils,
  Star,
  Eye,
  Wind,
  Hotel,
  Bus,
} from "lucide-react";

// ---------------------------
// Tour/Package Data (from JSON)
// ---------------------------
const packages = [
  {
    id: 1,
    title: "Heaven on earth: Uttarakhand",
    url: "/packages/uttarakhand-tour-itinerary-for-5-days",
    image:
      "https://img.traveltriangle.com/apac/attachments/pictures/884570/original/River_Kosi_687x478.jpg?tr=w-680,h-400",
    duration: "5 Days & 4 Nights",
    customizable: true,
    price: {
      newPrice: "₹16,000/-",
      oldPrice: "₹17,391/-",
      discount: "8% Off",
      perPersonBasis: "Per Person on twin sharing",
      note: "Exact prices may vary based on availability.",
    },
    tags: ["Uttarakhand-Tour-FOBP", "Adventure", "Nature", "Sightseeing"],
    hotel: {
      included: true,
      starCategory: "3 Star",
      uptoStars: "Upto 3 Stars",
    },
    cities: [
      { city: "Mussoorie", days: "2D" },
      { city: "Rishikesh", days: "1D" },
      { city: "Haridwar", days: "2D" },
    ],
    description:
      "The majestic mountains are going to mesmerize you and you will also be able to enjoy the p....",
    inclusions: ["Upto 3 Stars", "Meals", "Sightseeing", "Transfers"],
    compareOption: {
      available: true,
      defaultChecked: true,
      label: "Add To Compare",
    },
  },
];

// ---------------------------
// Icon Mapping for Inclusions
// ---------------------------
const inclusionIcons = {
  "Upto 3 Stars": <Hotel size={14} className="text-indigo-600" />,
  Meals: <Utensils size={14} className="text-orange-500" />,
  Sightseeing: <Eye size={14} className="text-green-600" />,
  Transfers: <Bus size={14} className="text-blue-600" />,
};

// ---------------------------
// Card Component
// ---------------------------
export default function PackagesGrid() {
  return (
    <div className="grid grid-cols-1 gap-6">
      {packages.map((pkg) => (
        <div
          key={pkg.id}
          className="group hover:border-primary relative flex flex-col overflow-hidden rounded-2xl bg-white shadow-sm transition-all duration-500"
        >
          {/* Discount Badge */}
          {pkg.price.discount && (
            <div className="absolute top-4 left-4 z-20">
              <span className="rounded-full bg-gradient-to-r from-red-500 to-pink-600 px-3 py-1.5 text-xs leading-6 font-semibold text-white">
                {pkg.price.discount}
              </span>
            </div>
          )}

          <div className="flex flex-col md:flex-row">
            {/* Left Image Section */}
            <div className="relative h-52 w-full flex-shrink-0 overflow-hidden md:h-auto md:w-72 lg:w-96">
              <Image
                src={pkg.image}
                alt={pkg.title}
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-110"
              />

              {/* Duration Badge */}
              <div className="absolute bottom-4 left-4">
                <span className="rounded-lg bg-white/95 px-3 py-1.5 text-sm leading-6 font-semibold shadow-md backdrop-blur-sm">
                  {pkg.duration}
                </span>
              </div>

              {/* Wishlist */}
              <button className="hover:text-primary absolute top-4 right-4 z-10 flex h-9 w-9 items-center justify-center rounded-full bg-white/90 shadow-md transition hover:bg-red-50">
                <Heart size={16} />
              </button>
            </div>

            {/* Right Content Section */}
            <div className="flex flex-1 flex-col p-6">
              {/* Title + Tags */}
              <div className="mb-3 flex items-start justify-between">
                <div>
                  <h3 className="mb-2 line-clamp-1 text-lg leading-6 font-semibold">
                    {pkg.title}
                  </h3>
                  <div className="flex flex-wrap gap-2 text-xs">
                    {pkg.tags.map((tag, idx) => (
                      <span
                        key={idx}
                        className="rounded-full bg-gray-100 px-2 py-1"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Description */}
              <p className="mb-3 line-clamp-2 text-sm">{pkg.description}</p>

              {/* Cities */}
              <div className="mb-3">
                <p className="text-sm font-semibold">Cities:</p>
                <div className="flex flex-wrap gap-2 text-xs">
                  {pkg.cities.map((c, i) => (
                    <span
                      key={i}
                      className="text-primary border-primary/20 hover:bg-primary/10 cursor-pointer rounded border px-2 py-1"
                    >
                      {c.city} ({c.days})
                    </span>
                  ))}
                </div>
              </div>

              {/* Inclusions */}
              <div className="mb-3">
                <p className="text-sm font-semibold">Inclusions:</p>
                <div className="flex flex-wrap gap-2">
                  {pkg.inclusions.map((inc, i) => (
                    <span
                      key={i}
                      className="flex items-center gap-1 rounded-lg bg-gray-50 px-2 py-1 text-xs text-gray-700"
                    >
                      {inclusionIcons[inc] || "✅"} {inc}
                    </span>
                  ))}
                </div>
              </div>

              {/* Divider */}
              <svg
                height="6"
                viewBox="0 0 872 6"
                xmlns="http://www.w3.org/2000/svg"
                className="w-full max-w-3xl text-gray-300"
                fill="currentColor"
              >
                <path d="M5 2.5L0 0.113249V5.88675L5 3.5V2.5ZM867 3.5L872 5.88675V0.113249L867 2.5V3.5ZM4.5 3.5H867.5V2.5H4.5V3.5Z"></path>
              </svg>

              {/* Price & CTA */}
              <div className="mt-auto flex flex-col gap-3 pt-3 sm:flex-row sm:items-center sm:justify-between">
                <div>
                  <div className="flex items-center gap-2">
                    <span className="text-xl font-bold text-red-600">
                      {pkg.price.newPrice}
                    </span>
                    {pkg.price.oldPrice && (
                      <span className="text-sm text-gray-400 line-through">
                        {pkg.price.oldPrice}
                      </span>
                    )}
                  </div>
                  <p className="text-xs text-gray-500">
                    {pkg.price.perPersonBasis}
                  </p>
                </div>

                <div className="flex gap-2">
                  <a
                    href={pkg.url}
                    className="rounded-lg border border-indigo-600 px-4 py-2 text-sm font-semibold text-indigo-600 transition hover:bg-indigo-600 hover:text-white"
                  >
                    View Details
                  </a>
                  <button className="bg-primary-gradient rounded-lg px-4 py-2 text-sm font-semibold text-white shadow-md transition hover:shadow-lg">
                    <Eye size={16} /> Get Quotes
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
