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
    <section className="w-full mb-20">
      <div className="container mx-auto px-4">
        <SectionHeader
          title="Popular Packages"
          subtitle="Explore our handpicked travel packages with amazing deals, curated experiences, and unforgettable destinations."
          align="center"
        />

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {packages.map((pkg) => (
            <div
              key={pkg.id}
              className="bg-white border border-[#e8e8e8] rounded-[20px] overflow-hidden hover:shadow-md transition"
            >
              <div className="p-4">
                {/* Image with Shine */}
                <div className="relative overflow-hidden rounded-[20px] group">
                  <Image
                    src={pkg.img}
                    alt={pkg.title}
                    width={500}
                    height={300}
                    className="w-full h-56 object-cover rounded-[20px] transition-transform duration-500 group-hover:scale-105"
                  />
                  {pkg.hot && (
                    <span className="absolute top-3 right-3 bg-red-500 text-white text-xs font-semibold px-3 py-1 rounded-full">
                      Hot Sale!
                    </span>
                  )}
                  {/* Shine Effect */}
                  <div className="absolute inset-0 rounded-[20px] overflow-hidden pointer-events-none">
                    <div className="shine-effect"></div>
                  </div>
                </div>

                {/* Content */}
                <div className="p-5">
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">
                    {pkg.title}
                  </h3>

                  <div className="flex items-center gap-2 text-gray-600 text-sm mb-4">
                    <MapPin className="w-4 h-4" />
                    <span>{pkg.country}</span>
                    <ArrowRight className="w-4 h-4" />
                    <span>{pkg.days}</span>
                  </div>

                  {/* Price + Button */}
                  <div className="flex items-center justify-between mb-4">
                    <a
                      href="#"
                      className="bg-primary-gradient text-white text-sm font-medium px-4 py-2 rounded-lg flex items-center gap-1 transition"
                    >
                      Book Now <ArrowUpRight className="w-4 h-4" />
                    </a>
                    <span className="text-right text-lg font-bold text-gray-900">
                      <span className="text-sm font-medium text-gray-500 block">
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
                  <div className="flex items-center justify-between text-sm text-gray-600 pt-3">
                    {/* Experience Tooltip */}
                    <div className="relative group/exp">
                      <span className="flex items-center gap-1 cursor-pointer">
                        <Info className="w-4 h-4" /> Experience
                      </span>
                      <div className="absolute bottom-full left-0 mb-2 w-64 p-3 rounded-lg bg-gray-900 text-white text-xs opacity-0 group-hover/exp:opacity-100 transition-all duration-300 transform group-hover/exp:-translate-y-1 pointer-events-none shadow-lg">
                        {pkg.experience}
                      </div>
                    </div>

                    {/* Inclusion Tooltip */}
                    <div className="relative group/inc">
                      <span className="flex items-center gap-1 cursor-pointer">
                        <CheckCircle className="w-4 h-4" /> Inclusion
                      </span>
                      <div className="absolute bottom-full right-0 mb-2 w-64 p-3 rounded-lg bg-gray-900 text-white text-xs opacity-0 group-hover/inc:opacity-100 transition-all duration-300 transform group-hover/inc:-translate-y-1 pointer-events-none shadow-lg">
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
        <div className="flex justify-center mt-10">
          <a
            href="/packages"
            className="bg-primary-gradient text-white font-semibold px-6 py-3 rounded-full shadow-md hover:opacity-90 transition"
          >
            View More Packages
          </a>
        </div>
      </div>
    </section>
  );
}
