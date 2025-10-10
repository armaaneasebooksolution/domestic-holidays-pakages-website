"use client";

import { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import { ChevronLeft, ChevronRight } from "lucide-react";
import Image from "next/image";

const images = [
  "/assets/img/innerpages/destination-details-gallery-img1.jpg",
  "/assets/img/innerpages/destination-details-gallery-img2.jpg",
  "/assets/img/innerpages/destination-details-gallery-img3.jpg",
  "/assets/img/innerpages/destination-details-gallery-img4.jpg",
  "/assets/img/innerpages/destination-details-gallery-img5.jpg",
];

export default function DestinationSlider() {
  const swiperRef = useRef(null);

  return (
    <section className="relative mx-auto w-full px-4 py-6">
      {/* ===== Swiper Container ===== */}
      <Swiper
        modules={[Navigation]}
        loop={true}
        spaceBetween={25}
        slidesPerView={3} // ✅ show 3 slides at once
        onBeforeInit={(swiper) => {
          swiperRef.current = swiper;
        }}
        breakpoints={{
          0: { slidesPerView: 1 }, // mobile
          640: { slidesPerView: 2 }, // tablets
          1024: { slidesPerView: 3 }, // desktop
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
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      {/* ===== Custom Navigation Buttons ===== */}
      <button
        onClick={() => swiperRef.current?.slidePrev()}
        className="absolute top-1/2 left-2 z-20 -translate-y-1/2 rounded-full bg-gray-800/40 p-2 text-white transition hover:bg-gray-800"
      >
        <ChevronLeft className="h-6 w-6" />
      </button>

      <button
        onClick={() => swiperRef.current?.slideNext()}
        className="absolute top-1/2 right-2 z-20 -translate-y-1/2 rounded-full bg-gray-800/40 p-2 text-white transition hover:bg-gray-800"
      >
        <ChevronRight className="h-6 w-6" />
      </button>
    </section>
  );
}
