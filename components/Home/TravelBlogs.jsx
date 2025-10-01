"use client";
import { useState, useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation } from "swiper/modules";
import Image from "next/image";
import { motion } from "framer-motion";
import Link from "next/link";
import { MapPin, ArrowUpRight } from "lucide-react";

import "swiper/css";
import "swiper/css/navigation";
import SectionHeader from "../Common/SectionHeader";
import CommonButton from "../Common/CommonButton";

// ✅ India-focused Inspirations
const inspirations = [
  {
    id: 1,
    title:
      "Explore the Spiritual Essence of Varanasi: A Journey Along the Ganges.",
    location: "Varanasi, Uttar Pradesh",
    date: "02 Jan.",
    image: "/assets/img/home1/blog-img1.jpg",
  },
  {
    id: 2,
    title: "Top 10 Beaches in Goa You Must Visit This Year.",
    location: "Goa, India",
    date: "10 Feb.",
    image: "/assets/img/home1/blog-img2.jpg",
  },
  {
    id: 3,
    title: "Royal Palaces and Heritage Walks Await You in Jaipur.",
    location: "Jaipur, Rajasthan",
    date: "22 Feb.",
    image: "/assets/img/home1/blog-img3.jpg",
  },
  {
    id: 4,
    title: "Backwaters Bliss: Kerala’s Most Relaxing Houseboat Escapes.",
    location: "Alleppey, Kerala",
    date: "05 Mar.",
    image: "/assets/img/home1/blog-img4.jpg",
  },
  {
    id: 5,
    title: "Adventure in the Himalayas: Trekking Routes You Can’t Miss.",
    location: "Manali, Himachal Pradesh",
    date: "18 Apr.",
    image: "/assets/img/home1/blog-img5.jpg",
  },
  {
    id: 6,
    title: "Discover Mumbai: The City of Dreams with Culture and Modernity.",
    location: "Mumbai, Maharashtra",
    date: "25 May.",
    image: "/assets/img/home1/blog-img6.jpg",
  },
];

export default function TravelBlogs() {
  const swiperRef = useRef(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const [progressKey, setProgressKey] = useState(0);

  const handleSlideChange = (swiper) => {
    setActiveIndex(swiper.realIndex);
    setProgressKey((k) => k + 1);
  };

  const getIndexes = () => {
    const total = inspirations.length;
    const prev = (activeIndex - 1 + total) % total;
    const next = (activeIndex + 1) % total;
    return [prev, activeIndex, next];
  };

  const [prev, current, next] = getIndexes();

  return (
    <section className="relative w-full py-16">
      <div className="relative z-10 container mx-auto px-4">
        {/* Section Heading */}

        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          <SectionHeader
            title=" Travel Inspiration from India"
            subtitle="       Stories and guides to inspire your next Indian adventure."
            align="center"
          />
        </motion.div>
        {/* Swiper */}
        <Swiper
          modules={[Autoplay, Navigation]}
          spaceBetween={20}
          slidesPerView={1}
          autoplay={{ delay: 4000, disableOnInteraction: false }}
          loop={true}
          onSwiper={(swiper) => (swiperRef.current = swiper)}
          onSlideChange={handleSlideChange}
          className="inspiration-swiper"
          navigation={{
            nextEl: ".custom-next",
            prevEl: ".custom-prev",
          }}
          breakpoints={{
            640: { slidesPerView: 1 },
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
            1280: { slidesPerView: 4 },
          }}
        >
          {inspirations.map((item, index) => (
            <SwiperSlide key={item.id} className="flex h-full">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.6,
                  ease: "easeOut",
                  delay: index * 0.15,
                }}
                viewport={{ once: true }}
                className="group flex h-[340px] w-full flex-col overflow-hidden rounded-[20px] border border-[#e8e8e8] bg-white p-4 hover:shadow-sm"
              >
                {/* Image with shine + date */}
                <div className="relative overflow-hidden rounded-[20px]">
                  <Image
                    src={item.image}
                    alt={item.title}
                    width={500}
                    height={300}
                    className="h-56 w-full rounded-[20px] object-cover transition-transform duration-500 group-hover:scale-105"
                  />

                  {/* Shine Effect */}
                  <div className="shine-effect pointer-events-none absolute inset-0 rounded-[20px]"></div>

                  {/* Date Badge */}
                  <div className="absolute right-3 bottom-3 rounded-lg bg-white px-3 py-2 text-center shadow-md">
                    <p className="text-primary text-lg leading-none font-bold">
                      {item.date.split(" ")[0]}
                    </p>
                    <p className="text-sm leading-none">
                      {item.date.split(" ")[1]}
                    </p>
                  </div>
                </div>

                {/* Content */}
                <div className="flex flex-grow flex-col py-5">
                  <div>
                    <p className="hover:border-primary hover:text-primary mb-2 inline-flex items-center gap-1 rounded-full border border-[#e8e8e8] px-3 py-1 text-xs font-semibold text-gray-700 transition-colors duration-300">
                      <svg
                        width="14"
                        height="16"
                        viewBox="0 0 14 16"
                        xmlns="http://www.w3.org/2000/svg"
                        className="hover:fill-primary transition-colors duration-300"
                      >
                        <path d="M6.81276 0C3.31734 0 0.473053 2.84433 0.473053 6.34163C0.473053 9.07242 4.2847 13.5258 5.92356 15.3136C6.15052 15.5628 6.47606 15.7042 6.81276 15.7042C7.14946 15.7042 7.475 15.5628 7.70196 15.3136C9.34082 13.5258 13.1525 9.07238 13.1525 6.34163C13.1525 2.84433 10.3082 0 6.81276 0ZM7.35966 14.9991C7.21642 15.1535 7.02297 15.2391 6.81276 15.2391C6.60255 15.2391 6.4091 15.1536 6.26586 14.9991C4.66417 13.2525 0.93812 8.90875 0.93812 6.34167C0.93812 3.10103 3.57221 0.465067 6.81276 0.465067C10.0533 0.465067 12.6874 3.10103 12.6874 6.34167C12.6874 8.90875 8.96135 13.2524 7.35966 14.9991Z"></path>
                        <path d="M6.81277 9.76647C8.6713 9.76647 10.1779 8.25983 10.1779 6.4013C10.1779 4.54277 8.6713 3.03613 6.81277 3.03613C4.95424 3.03613 3.4476 4.54277 3.4476 6.4013C3.4476 8.25983 4.95424 9.76647 6.81277 9.76647Z"></path>
                      </svg>
                      {item.location}
                    </p>
                  </div>

                  <h3 className="group-hover:text-primary line-clamp-2 text-lg font-semibold text-gray-900 transition">
                    {item.title}
                  </h3>
                </div>
              </motion.div>
            </SwiperSlide>
          ))}
        </Swiper>

        {/* Pagination + Arrows */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }}
          viewport={{ once: true }}
          className="inspiration-pagination mt-6 flex items-center justify-center gap-6"
        >
          {/* Left Arrow */}
          <button className="custom-prev hover:bg-primary-light flex h-10 w-10 items-center justify-center rounded-full bg-white shadow-md transition">
            <svg
              width="18"
              height="18"
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
          <button className="custom-next hover:bg-primary-light flex h-10 w-10 items-center justify-center rounded-full bg-white shadow-md transition">
            <svg
              width="18"
              height="18"
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
        </motion.div>

        {/* View All CTA */}
        <div className="mt-10 flex justify-center">
          <CommonButton
            href="/travel-inspiration"
            text="View All Inspiration"
          />
        </div>
      </div>
    </section>
  );
}
