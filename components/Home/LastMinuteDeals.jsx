"use client";
import { useState, useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation } from "swiper/modules";
import Image from "next/image";
import SectionHeader from "../Common/SectionHeader";
import { ArrowUpRight, MoveLeft, MoveRight } from "lucide-react";
import { motion } from "framer-motion";

import "swiper/css";
import "swiper/css/navigation";

const offers = [
  {
    id: 1,
    src: "/assets/img/home1/destination-img1.jpg",
    alt: "Great Temple",
    tours: 12,
  },
  {
    id: 2,
    src: "/assets/img/home1/destination-img2.jpg",
    alt: "Delhi",
    tours: 8,
  },
  {
    id: 3,
    src: "/assets/img/home1/destination-img3.jpg",
    alt: "Jaipur",
    tours: 10,
  },
  {
    id: 4,
    src: "/assets/img/home1/destination-img4.jpg",
    alt: "Agra",
    tours: 6,
  },
  {
    id: 5,
    src: "/assets/img/home1/destination-img5.jpg",
    alt: "Kerala",
    tours: 15,
  },
  {
    id: 6,
    src: "/assets/img/home1/destination-img1.jpg",
    alt: "Great Temple",
    tours: 12,
  },
  {
    id: 7,
    src: "/assets/img/home1/destination-img2.jpg",
    alt: "Delhi",
    tours: 8,
  },
  {
    id: 8,
    src: "/assets/img/home1/destination-img3.jpg",
    alt: "Jaipur",
    tours: 10,
  },
  {
    id: 9,
    src: "/assets/img/home1/destination-img4.jpg",
    alt: "Agra",
    tours: 6,
  },
  {
    id: 10,
    src: "/assets/img/home1/destination-img5.jpg",
    alt: "Kerala",
    tours: 15,
  },
];

export default function LastMinuteDeals() {
  const swiperRef = useRef(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const [progressKey, setProgressKey] = useState(0);

  const handleSlideChange = (swiper) => {
    setActiveIndex(swiper.realIndex);
    setProgressKey((k) => k + 1);
  };

  const getIndexes = () => {
    const total = offers.length;
    const prev = (activeIndex - 1 + total) % total;
    const next = (activeIndex + 1) % total;
    return [prev, activeIndex, next];
  };

  const [prev, current, next] = getIndexes();

  return (
    <section className="w-full mb-20 relative">
      <div className="container mx-auto px-4 relative">
        {/* Section Heading */}
        <SectionHeader
          title="Last Minute Deals"
          subtitle="Book now and save big on last-minute flights and hotels—your getaway is just a click away."
          align="center"
        />

        {/* Swiper wrapper with nav arrows */}
        <div className="relative">
          <Swiper
            modules={[Autoplay, Navigation]}
            spaceBetween={20}
            slidesPerView={1}
            autoplay={{ delay: 4000, disableOnInteraction: false }}
            loop={true}
            onSwiper={(swiper) => (swiperRef.current = swiper)}
            onSlideChange={handleSlideChange}
            className="discount-swiper"
            navigation={{
              nextEl: ".custom-next",
              prevEl: ".custom-prev",
            }}
            breakpoints={{
              640: { slidesPerView: 1 },
              768: { slidesPerView: 4 },
              1024: { slidesPerView: 5 },
            }}
          >
            {offers.map((offer) => (
              <SwiperSlide key={offer.id}>
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, ease: "easeOut" }}
                  viewport={{ once: true }}
                  className="group relative rounded-lg overflow-hidden"
                >
                  {/* Image */}
                  <div className="relative overflow-hidden rounded-lg">
                    <Image
                      src={offer.src}
                      alt={offer.alt}
                      width={800}
                      height={400}
                      className="w-full h-96 object-cover rounded-[20px] transition-transform duration-500 group-hover:scale-105"
                    />
                    {/* Shine */}
                    <div className="absolute inset-0 rounded-lg overflow-hidden pointer-events-none">
                      <div className="shine-effect"></div>
                    </div>
                    {/* Hover Arrow */}
                    <a
                      href="destination-details.html"
                      className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-500 bg-black/30"
                    >
                      <ArrowUpRight className="w-10 h-10 text-white bg-primary-gradient rounded-full p-2" />
                    </a>
                  </div>

                  {/* Content */}
                  <div className="text-center mt-4">
                    <h3 className="text-lg font-semibold text-gray-900">
                      {offer.alt}
                    </h3>
                    <p className="text-sm text-gray-600">
                      Tours ({offer.tours})
                    </p>
                  </div>
                </motion.div>
              </SwiperSlide>
            ))}
          </Swiper>

          {/* Prev/Next Arrows */}

          <button className="custom-prev hidden md:flex items-center justify-center absolute top-1/2 -translate-y-1/1 -left-8 z-10 w-10 h-10 rounded-full bg-white shadow-md hover:bg-primary-light transition">
            <svg
              width="18"
              height="18"
              viewBox="0 0 14 14"
              xmlns="http://www.w3.org/2000/svg"
              className="stroke-gray-600 hover:stroke-primary transition"
              fill="none"
            >
              <path
                d="M11.002 13.0005C10.002 10.5005 5.00195 8.00049 2.00195 7.00049C5.00195 6.00049 9.50195 4.50049 11.002 1.00049"
                strokeWidth="1.8"
                strokeLinecap="round"
              />
            </svg>
          </button>

          <button className="custom-next hidden md:flex items-center justify-center absolute top-1/2 -translate-y-1/1 -right-8 z-10 w-10 h-10 rounded-full bg-white shadow-md hover:bg-primary-light transition">
            <svg
              width="18"
              height="18"
              viewBox="0 0 14 14"
              xmlns="http://www.w3.org/2000/svg"
              className="stroke-gray-600 hover:stroke-primary transition"
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

        {/* Pagination */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="discount-offers-pagination mt-6 flex justify-center items-center gap-4"
        >
          {[prev, current, next].map((idx, i) => (
            <button
              key={i}
              className={`custom-bullet ${
                idx === current ? "active" : "inactive"
              }`}
              onClick={() => swiperRef.current?.slideToLoop(idx)}
            >
              {idx === current && (
                <span key={progressKey} className="bullet-progress" />
              )}
            </button>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
