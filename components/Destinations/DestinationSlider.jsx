"use client";

import { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import { ChevronLeft, ChevronRight } from "lucide-react";
import Image from "next/image";

export default function DestinationSlider({ images = [] }) {
  const swiperRef = useRef(null);

  return (
    <section className="relative mx-auto w-full px-4 py-6">
      {/* ===== Swiper Container ===== */}
      <Swiper
        modules={[Navigation]}
        loop={true}
        spaceBetween={25}
        slidesPerView={3}
        centeredSlides={false}
        onBeforeInit={(swiper) => {
          swiperRef.current = swiper;
        }}
        breakpoints={{
          0: { slidesPerView: 1 },
          640: { slidesPerView: 2 },
          1024: { slidesPerView: 3 },
        }}
        className="rounded-2xl"
      >
        {images.map((src, index) => (
          <SwiperSlide key={index}>
            <div className="relative overflow-hidden rounded-2xl">
              <Image
                src={src}
                alt={`Destination Image ${index + 1}`}
                width={800}
                height={600}
                className="h-[400px] w-full rounded-2xl object-cover transition-transform duration-700 ease-in-out hover:scale-105"
              />

              {/* Shine Effect (optional aesthetic touch) */}
              <div className="pointer-events-none absolute inset-0 overflow-hidden rounded-2xl">
                <div className="shine-effect" />
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      {/* ===== Custom Navigation Buttons ===== */}
      <button
        onClick={() => swiperRef.current?.slidePrev()}
        className="absolute top-1/2 left-6 z-20 -translate-y-1/2 rounded-full bg-gray-800/40 p-3 text-white transition hover:bg-gray-800 md:left-10"
        aria-label="Previous slide"
      >
        <ChevronLeft className="h-6 w-6" />
      </button>

      <button
        onClick={() => swiperRef.current?.slideNext()}
        className="absolute top-1/2 right-6 z-20 -translate-y-1/2 rounded-full bg-gray-800/40 p-3 text-white transition hover:bg-gray-800 md:right-10"
        aria-label="Next slide"
      >
        <ChevronRight className="h-6 w-6" />
      </button>
    </section>
  );
}
