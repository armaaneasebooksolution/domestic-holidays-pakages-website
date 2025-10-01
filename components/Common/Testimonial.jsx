"use client";
import { useState, useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation } from "swiper/modules";
import Image from "next/image";
import SectionHeader from "../Common/SectionHeader";
import { motion } from "framer-motion";

import "swiper/css";
import "swiper/css/navigation";

const testimonials = [
  {
    id: 1,
    rating: 5,
    title: "Great Experience!",
    text: "Thanks to their expert planning, our Dubai vacation was seamless. Every detail was handled with care.",
    name: "Selina Henry",
    role: "GoFly Traveler",
    img: "/assets/img/users/user1.jpg",
    source: "Trustpilot",
  },
  {
    id: 2,
    rating: 4,
    title: "Great Visitors Venue!",
    text: "We had an incredible Europe tour! The itinerary, bookings, and support were all professionally managed.",
    name: "Michael D Linda",
    role: "GoFly Traveler",
    img: "/assets/img/users/user2.jpg",
    source: "Trustpilot",
  },
  {
    id: 3,
    rating: 5,
    title: "Fantastic Service!",
    text: "Our trip to Bali was unforgettable! Everything was perfectly organized by the agency from start to finish.",
    name: "Amber Lashley",
    role: "GoFly Traveler",
    img: "/assets/img/users/user3.jpg",
    source: "Tripadvisor",
  },
  {
    id: 4,
    rating: 4,
    title: "Great Experience!",
    text: "Thanks to their expert planning, our Dubai vacation was seamless. Every detail was handled with care.",
    name: "Selina Henry",
    role: "GoFly Traveler",
    img: "/assets/img/users/user1.jpg",
    source: "Trustpilot",
  },
];

export default function Testimonials() {
  const swiperRef = useRef(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const [progressKey, setProgressKey] = useState(0);

  const handleSlideChange = (swiper) => {
    setActiveIndex(swiper.realIndex);
    setProgressKey((k) => k + 1);
  };

  const getIndexes = () => {
    const total = testimonials.length;
    const prev = (activeIndex - 1 + total) % total;
    const next = (activeIndex + 1) % total;
    return [prev, activeIndex, next];
  };

  const [prev, current, next] = getIndexes();

  return (
    <section
      className="w-full relative bg-cover bg-center bg-no-repeat py-16"
      style={{
        backgroundImage: "url('/assets/img/home1/home2-testimonial-bg.png')",
      }}
    >
      {/* Colored overlay */}
      <div className="absolute inset-0 bg-primary-light/90 -z-10"></div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Section Heading */}
        <SectionHeader
          title="Hear It from Travelers"
          subtitle="We go beyond just booking trips—we create unforgettable travel experiences that match your dreams!"
          align="center"
        />

        {/* Swiper */}
        <div className="relative mt-10">
          <Swiper
            modules={[Autoplay, Navigation]}
            spaceBetween={20}
            slidesPerView={1}
            autoplay={{ delay: 4000, disableOnInteraction: false }}
            loop={true}
            onSwiper={(swiper) => (swiperRef.current = swiper)}
            onSlideChange={handleSlideChange}
            className="testimonial-swiper"
            navigation={{
              nextEl: ".custom-next",
              prevEl: ".custom-prev",
            }}
            breakpoints={{
              640: { slidesPerView: 1 },
              768: { slidesPerView: 2 },
              1024: { slidesPerView: 3 },
            }}
          >
            {testimonials.map((t) => (
              <SwiperSlide key={t.id} className="flex h-full">
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, ease: "easeOut" }}
                  viewport={{ once: true }}
                  className="bg-white rounded-[20px] p-6 flex flex-col justify-between w-full h-full min-h-[320px]"
                >
                  {/* Rating Stars */}
                  <div className="flex mb-3">
                    {Array.from({ length: t.rating }).map((_, i) => (
                      <span key={i} className="text-amber-400 text-lg">
                        ★
                      </span>
                    ))}
                  </div>

                  {/* Title & Text */}
                  <h3 className="text-lg font-semibold mb-2">{t.title}</h3>
                  <p className="text-gray-600 mb-4 flex-grow">{t.text}</p>

                  {/* User Info */}
                  <div>
                    <h4 className="font-semibold text-gray-900">{t.name}</h4>
                    <p className="text-sm text-gray-500">{t.role}</p>
                  </div>
                </motion.div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>

        {/* Pagination + Arrows */}
        {/* Pagination Bullets */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="testimonial-pagination mt-6 flex justify-center items-center gap-6"
        >
          {/* Left Arrow */}
          <button className="custom-prev flex items-center justify-center w-10 h-10 rounded-full bg-white shadow-md hover:bg-primary-light transition">
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

          {/* Pagination Bullets */}
          <div className="flex gap-4">
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
          </div>

          {/* Right Arrow */}
          <button className="custom-next flex items-center justify-center w-10 h-10 rounded-full bg-white shadow-md hover:bg-primary-light transition">
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
        </motion.div>

        {/* Bottom Ratings */}
        <div className="mt-10 flex flex-col md:flex-row justify-between items-center gap-8">
          {/* Trustpilot */}
          <div className="flex flex-col sm:flex-row items-center gap-3 text-center sm:text-left">
            <div className="flex flex-col items-center sm:items-start">
              <Image
                src="/assets/img/home1/icon/trustpilot-logo.svg"
                alt="Trustpilot"
                width={150}
                height={40}
                className="h-auto"
              />
              <Image
                src="/assets/img/home1/icon/trustpilot-star.svg"
                alt="Trustpilot Stars"
                width={150}
                height={40}
                className="h-auto mt-1"
              />
              <p className="text-sm text-gray-500">(2K reviews)</p>
            </div>
          </div>

          {/* Tripadvisor */}
          <div className="flex flex-col sm:flex-row items-center gap-3 text-center sm:text-left">
            <div className="flex flex-col items-center sm:items-start">
              <Image
                src="/assets/img/home1/icon/tripadvisor-logo.svg"
                alt="Tripadvisor"
                width={150}
                height={40}
                className="h-auto"
              />
              <div className="flex ">
                {Array.from({ length: 5 }).map((_, i) => (
                  <span key={i} className="text-amber-400 text-xl">
                    ★
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
