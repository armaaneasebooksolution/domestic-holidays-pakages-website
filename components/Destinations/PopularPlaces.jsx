"use client";

import { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import Image from "next/image";
import { motion } from "framer-motion";
import Link from "next/link";

export default function PopularPlaces({ destination }) {
  const swiperRef = useRef(null);

  // ✅ Use real dynamic data
  const popularPlaces = destination?.popularPlaces || [];

  // ✅ Animation variants
  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
  };

  // ✅ If no data, don't render this section
  if (!popularPlaces.length) return null;

  return (
    <section className="relative mb-20 w-full">
      <div className="container mx-auto px-4">
        {/* ===== Header Row: Title + Nav Arrows ===== */}
        <div className="mb-4 flex flex-wrap items-center justify-between gap-4">
          <h2 className="text-left text-[20px] font-semibold tracking-wide sm:text-[22px] lg:text-[24px]">
            Popular Places to Visit in {destination.name}
          </h2>

          {/* Navigation Arrows beside Title */}
          <div className="flex items-center gap-3">
            <button className="custom-prev hover:bg-primary-light flex h-10 w-10 items-center justify-center rounded-full bg-gray-100 transition hover:scale-105">
              <svg
                width="12"
                height="12"
                viewBox="0 0 14 14"
                xmlns="http://www.w3.org/2000/svg"
                className="hover:stroke-primary stroke-gray-600 transition"
                fill="none"
              >
                <path
                  d="M11.002 13.0005C10.002 10.5005 5.00195 8.00049 2.00195 7.00049C5.00195 6.00049 9.50195 4.50049 11.002 1.00049"
                  strokeWidth="1.8"
                  strokeLinecap="round"
                />
              </svg>
            </button>

            <button className="custom-next hover:bg-primary-light flex h-10 w-10 items-center justify-center rounded-full bg-gray-100 transition hover:scale-105">
              <svg
                width="12"
                height="12"
                viewBox="0 0 14 14"
                xmlns="http://www.w3.org/2000/svg"
                className="hover:stroke-primary stroke-gray-600 transition"
                fill="none"
              >
                <path
                  d="M2.99805 13.0005C3.99805 10.5005 8.99805 8.00049 11.998 7.00049C8.99805 6.00049 4.49805 4.50049 2.99805 1.00049"
                  strokeWidth="1.8"
                  strokeLinecap="round"
                />
              </svg>
            </button>
          </div>
        </div>

        {/* ===== Swiper Section ===== */}
        <div className="relative">
          <Swiper
            modules={[Autoplay, Navigation]}
            spaceBetween={20}
            slidesPerView={1}
            loop={true}
            speed={800}
            autoplay={{ delay: 4000, disableOnInteraction: false }}
            onBeforeInit={(swiper) => {
              swiperRef.current = swiper;
            }}
            navigation={{
              prevEl: ".custom-prev",
              nextEl: ".custom-next",
            }}
            breakpoints={{
              640: { slidesPerView: 2 },
              1024: { slidesPerView: 4 },
            }}
            className="destination-swiper"
          >
            {popularPlaces.map((place, index) => (
              <SwiperSlide key={index}>
                <motion.div
                  variants={itemVariants}
                  initial="hidden"
                  whileInView="show"
                  viewport={{ once: true }}
                  className="group relative overflow-hidden rounded-2xl transition-transform duration-500 hover:scale-[1.02]"
                >
                  {/* ===== Image with Shine Effect ===== */}
                  <div className="relative overflow-hidden rounded-2xl">
                    <Image
                      src={place.image}
                      alt={place.name}
                      width={800}
                      height={400}
                      className="h-[180px] w-full rounded-2xl object-cover"
                    />

                    {/* Shine Effect */}
                    <div className="pointer-events-none absolute inset-0 overflow-hidden rounded-lg">
                      <div className="shine-effect"></div>
                    </div>
                  </div>

                  {/* ===== Title & Map Link ===== */}
                  <div className="mt-2 text-center">
                    <h3 className="text-sm font-semibold text-gray-900 drop-shadow-md">
                      {place.name}
                    </h3>
                    {place.googleLink && (
                      <Link
                        href={place.googleLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-primary text-xs hover:underline"
                      >
                        View on Map →
                      </Link>
                    )}
                  </div>
                </motion.div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </section>
  );
}
