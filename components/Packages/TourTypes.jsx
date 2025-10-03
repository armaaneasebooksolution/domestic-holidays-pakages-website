"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import Image from "next/image";

const tourTypes = [
  {
    name: "Adventure Tours",
    count: 120,
    image: "/assets/img/home1/tour-package-img1.jpg",
  },
  {
    name: "Beach Holidays",
    count: 340,
    image: "/assets/img/home1/tour-package-img1.jpg",
  },
  {
    name: "City Tours",
    count: 275,
    image: "/assets/img/home1/tour-package-img1.jpg",
  },
  {
    name: "Cultural Trips",
    count: 198,
    image: "/assets/img/home1/tour-package-img1.jpg",
  },
  {
    name: "Wildlife Safaris",
    count: 145,
    image: "/assets/img/home1/tour-package-img1.jpg",
  },
  {
    name: "Mountain Treks",
    count: 310,
    image: "/assets/img/home1/tour-package-img1.jpg",
  },
];

export default function TourTypes() {
  return (
    <section className="container mx-auto px-4 py-8">
      <h2 className="mb-6 text-lg font-semibold text-gray-900">
        Choose type of Hotels you are interested
      </h2>

      <div className="flex items-stretch gap-4">
        {/* Static First Card */}
        <div className="w-56 flex-shrink-0">
          <div className="flex min-h-[80px] w-full items-center gap-3 rounded-xl bg-white px-4 py-3 shadow-sm transition-all duration-300 hover:shadow-md">
            <div className="relative h-12 w-12 flex-shrink-0 overflow-hidden rounded-full">
              <Image
                src="/assets/img/home1/tour-package-img1.jpg"
                alt="All Types"
                fill
                className="object-cover"
              />
            </div>
            <div className="flex flex-col justify-center">
              <h3 className="font-poppins text-sm font-semibold text-gray-800">
                All Types
              </h3>
              <p className="text-xs text-gray-500">1894 Hotels</p>
            </div>
          </div>
        </div>

        {/* Swiper Slider */}
        <Swiper
          spaceBetween={16}
          slidesPerView={1.3}
          breakpoints={{
            640: { slidesPerView: 2.3 },
            768: { slidesPerView: 3.3 },
            1024: { slidesPerView: 4.3 },
            1280: { slidesPerView: 5.3 },
          }}
          className="flex-1"
        >
          {tourTypes.map((tour, index) => (
            <SwiperSlide key={index} className="w-56">
              <div className="flex min-h-[80px] w-full cursor-pointer items-center gap-3 rounded-xl bg-white px-4 py-3 shadow-sm transition-all duration-300 hover:shadow-md">
                <div className="relative h-12 w-12 flex-shrink-0 overflow-hidden rounded-full">
                  <Image
                    src={tour.image}
                    alt={tour.name}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="flex flex-col justify-center">
                  <h3 className="font-poppins text-sm font-semibold text-gray-800">
                    {tour.name}
                  </h3>
                  <p className="text-xs text-gray-500">{tour.count} Hotels</p>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}
