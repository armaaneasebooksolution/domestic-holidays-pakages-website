"use client";
import Image from "next/image";
import {
  MapPin,
  ArrowRight,
  ArrowUpRight,
  Info,
  CheckCircle,
} from "lucide-react";
import SectionHeader from "../Common/SectionHeader";
import Link from "next/link";
import CommonButton from "../Common/CommonButton";

const packages = [
  {
    id: 1,
    img: "/assets/img/home1/tour-package-img1.jpg",
    title: "Golden Triangle Tour",
    country: "Delhi - Agra - Jaipur",
    days: "06 Days",
    price: "$299",
    hot: true,
    experience:
      "Including Activities: Sightseeing of Taj Mahal, Amber Fort & Local Markets",
    inclusion: "Accommodation, Guided Tours, Entry Tickets & Local Transfers",
  },
  {
    id: 2,
    img: "/assets/img/home1/tour-package-img2.jpg",
    title: "Kerala Backwaters Escape",
    country: "Kerala",
    days: "07 Days",
    price: "$349",
    hot: true,
    experience: "Houseboat Ride, Ayurvedic Spa & Cultural Shows",
    inclusion: "Stay, Meals, Backwater Cruise & Local Transfers",
  },
  {
    id: 3,
    img: "/assets/img/home1/tour-package-img3.jpg",
    title: "Goa Beach Getaway",
    country: "Goa",
    days: "05 Days",
    price: "$259",
    hot: false,
    experience: "Beach Parties, Water Sports & Sunset Cruise",
    inclusion: "Hotel, Breakfast, Beach Transfers & Sightseeing",
  },
  {
    id: 4,
    img: "/assets/img/home1/tour-package-img4.jpg",
    title: "Kashmir Paradise Tour",
    country: "Srinagar - Gulmarg - Pahalgam",
    days: "08 Days",
    price: "$399",
    hot: false,
    experience: "Shikara Ride, Gondola in Gulmarg & Local Handicrafts",
    inclusion: "Stay, Meals, Shikara Ride & Local Transfers",
  },
  {
    id: 5,
    img: "/assets/img/home1/tour-package-img5.jpg",
    title: "Rajasthan Desert Safari",
    country: "Jaisalmer - Jodhpur",
    days: "06 Days",
    price: "$329",
    hot: true,
    experience: "Camel Safari, Folk Dance & Desert Camping",
    inclusion: "Accommodation, Jeep Safari, Meals & Cultural Show",
  },
  {
    id: 6,
    img: "/assets/img/home1/tour-package-img6.jpg",
    title: "Darjeeling & Gangtok Retreat",
    country: "West Bengal - Sikkim",
    days: "07 Days",
    price: "$379",
    hot: true,
    experience: "Toy Train Ride, Tiger Hill Sunrise & Monastery Visits",
    inclusion: "Hotels, Transfers, Entry Fees & Meals",
  },
];

export default function PopularPackages() {
  return (
    <section className="mb-20 w-full">
      <div className="container mx-auto px-4">
        <SectionHeader
          title="Popular Packages"
          subtitle="Explore our handpicked travel packages with amazing deals, curated experiences, and unforgettable destinations."
          align="center"
        />

        {/* Cards */}
        <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
          {packages.map((pkg) => (
            <div
              key={pkg.id}
              className="overflow-hidden rounded-[20px] border border-[#e8e8e8] bg-white transition hover:shadow-md"
            >
              <div className="p-4">
                {/* Image with Shine */}
                <div className="group relative overflow-hidden rounded-[20px]">
                  <Image
                    src={pkg.img}
                    alt={pkg.title}
                    width={500}
                    height={300}
                    className="h-56 w-full rounded-[20px] object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  {pkg.hot && (
                    <span className="absolute top-3 right-3 rounded-full bg-red-500 px-3 py-1 text-xs font-semibold text-white">
                      Hot Sale!
                    </span>
                  )}
                  {/* Shine Effect */}
                  <div className="pointer-events-none absolute inset-0 overflow-hidden rounded-[20px]">
                    <div className="shine-effect"></div>
                  </div>
                </div>

                {/* Content */}
                <div className="p-5">
                  <h3 className="mb-2 text-lg font-semibold text-gray-900">
                    {pkg.title}
                  </h3>

                  <div className="mb-4 flex items-center gap-2 text-sm text-gray-600">
                    <MapPin className="h-4 w-4" />
                    <span>{pkg.country}</span>
                    <ArrowRight className="h-4 w-4" />
                    <span>{pkg.days}</span>
                  </div>

                  {/* Price + Button */}
                  <div className="mb-4 flex items-center justify-between">
                    <Link
                      href="#"
                      className="group bg-primary-gradient hover:from-primary-light0 hover:ring-primary-light0 relative flex items-center gap-1 overflow-hidden rounded-lg px-4 py-2 text-sm font-medium text-white transition-all duration-300 ease-out hover:bg-gradient-to-r"
                    >
                      {/* Shine effect */}
                      <span className="ease absolute right-0 -mt-12 h-32 w-8 translate-x-12 rotate-12 transform bg-white opacity-10 transition-all duration-1000 group-hover:-translate-x-40"></span>
                      Book Now
                      <ArrowUpRight className="h-4 w-4 transform transition-transform duration-300 ease-out group-hover:translate-x-1 group-hover:-translate-y-1" />
                    </Link>
                    <span className="text-right text-lg font-bold text-gray-900">
                      <span className="block text-sm font-medium text-gray-500">
                        Per Person
                      </span>
                      {pkg.price}
                    </span>
                  </div>

                  {/* Divider */}
                  <svg
                    height="6"
                    viewBox="0 0 872 6"
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-full max-w-3xl text-gray-400"
                    fill="currentColor"
                  >
                    <path d="M5 2.5L0 0.113249V5.88675L5 3.5V2.5ZM867 3.5L872 5.88675V0.113249L867 2.5V3.5ZM4.5 3.5H867.5V2.5H4.5V3.5Z"></path>
                  </svg>

                  {/* Footer with Individual Tooltips */}
                  <div className="flex items-center justify-between pt-3 text-sm text-gray-600">
                    {/* Experience Tooltip */}
                    <div className="group/exp relative">
                      <span className="flex cursor-pointer items-center gap-1">
                        <Info className="h-4 w-4" /> Experience
                      </span>
                      <div className="pointer-events-none absolute bottom-full left-0 mb-2 w-64 transform rounded-lg bg-gray-900 p-3 text-xs text-white opacity-0 shadow-lg transition-all duration-300 group-hover/exp:-translate-y-1 group-hover/exp:opacity-100">
                        {pkg.experience}
                      </div>
                    </div>

                    {/* Inclusion Tooltip */}
                    <div className="group/inc relative">
                      <span className="flex cursor-pointer items-center gap-1">
                        <CheckCircle className="h-4 w-4" /> Inclusion
                      </span>
                      <div className="pointer-events-none absolute right-0 bottom-full mb-2 w-64 transform rounded-lg bg-gray-900 p-3 text-xs text-white opacity-0 shadow-lg transition-all duration-300 group-hover/inc:-translate-y-1 group-hover/inc:opacity-100">
                        {pkg.inclusion}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* View More Button */}
        <div className="mt-10 flex justify-center">
          <CommonButton href="/travel-inspiration" text="View All Packages" />
        </div>
      </div>
    </section>
  );
}
