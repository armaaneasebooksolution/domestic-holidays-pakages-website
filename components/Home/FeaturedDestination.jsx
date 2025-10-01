"use client";
import { useState, useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import Image from "next/image";
import SectionHeader from "../Common/SectionHeader";
import { ArrowUpRight } from "lucide-react";
import { motion } from "framer-motion";

import "swiper/css";

const destinations = {
  "Northern India": [
    { id: 1, src: "/assets/img/home1/destination-img1.jpg", alt: "Goa" },
    { id: 2, src: "/assets/img/home1/destination-img2.jpg", alt: "Delhi" },
    { id: 3, src: "/assets/img/home1/destination-img3.jpg", alt: "Jaipur" },
    { id: 4, src: "/assets/img/home1/destination-img4.jpg", alt: "Agra" },
    { id: 5, src: "/assets/img/home1/destination-img5.jpg", alt: "Kerala" },
  ],
  "Southern India": [
    { id: 1, src: "/assets/img/home1/destination-img3.jpg", alt: "Chennai" },
    { id: 2, src: "/assets/img/home1/destination-img4.jpg", alt: "Hyderabad" },
    { id: 3, src: "/assets/img/home1/destination-img5.jpg", alt: "Bengaluru" },
    { id: 4, src: "/assets/img/home1/destination-img6.jpg", alt: "Mysore" },
  ],
  "Eastern India": [
    { id: 1, src: "/assets/img/home1/destination-img2.jpg", alt: "Kolkata" },
    { id: 2, src: "/assets/img/home1/destination-img4.jpg", alt: "Puri" },
    { id: 3, src: "/assets/img/home1/destination-img5.jpg", alt: "Darjeeling" },
    { id: 4, src: "/assets/img/home1/destination-img6.jpg", alt: "Assam" },
  ],
  "Western India": [
    { id: 1, src: "/assets/img/home1/destination-img2.jpg", alt: "Mumbai" },
    { id: 2, src: "/assets/img/home1/destination-img4.jpg", alt: "Goa" },
    { id: 3, src: "/assets/img/home1/destination-img5.jpg", alt: "Ahmedabad" },
    { id: 4, src: "/assets/img/home1/destination-img6.jpg", alt: "Rajasthan" },
  ],
};

export default function FeaturedDestination() {
  const [activeTab, setActiveTab] = useState("Northern India");
  const swiperRef = useRef(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const [progressKey, setProgressKey] = useState(0);

  const handleSlideChange = (swiper) => {
    setActiveIndex(swiper.realIndex);
    setProgressKey((k) => k + 1);
  };

  const getIndexes = (offers) => {
    if (!offers?.length) return [0, 0, 0];
    const total = offers.length;
    const prev = (activeIndex - 1 + total) % total;
    const next = (activeIndex + 1) % total;
    return [prev, activeIndex, next];
  };

  const offers = destinations[activeTab];
  const [prev, current, next] = getIndexes(offers);

  // Animations
  const containerVariants = {
    hidden: { opacity: 0 },
    show: { opacity: 1, transition: { staggerChildren: 0.15 } },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
  };

  return (
    <section className="w-full mb-20">
      <div className="container mx-auto px-4">
        {/* Section Heading */}
        <SectionHeader title="Featured Destinations" align="center" />

        {/* Tabs + View More */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          viewport={{ once: true }}
          className="flex items-center justify-between flex-wrap gap-4 mb-8"
        >
          <div className="flex flex-wrap justify-center gap-4">
            {Object.keys(destinations).map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`px-5 py-2 rounded-full text-sm font-semibold transition ${
                  activeTab === tab
                    ? "bg-primary-gradient text-white"
                    : "bg-gray-200 text-gray-600 hover:bg-gray-300"
                }`}
              >
                {tab}
              </button>
            ))}
          </div>
          <motion.button
            whileHover={{ scale: 1.05 }}
            className="text-primary font-semibold hover:underline flex gap-1 items-center"
          >
            View More <ArrowUpRight className="w-5 h-5" />
          </motion.button>
        </motion.div>

        {/* Swiper */}
        {offers && (
          <Swiper
            modules={[Autoplay]}
            spaceBetween={20}
            slidesPerView={1}
            autoplay={{ delay: 4000, disableOnInteraction: false }}
            loop={true}
            onSwiper={(swiper) => (swiperRef.current = swiper)}
            onSlideChange={handleSlideChange}
            className="discount-swiper"
            breakpoints={{
              640: { slidesPerView: 1 },
              768: { slidesPerView: 2 },
              1024: { slidesPerView: 5 },
            }}
          >
            {offers.map((offer) => (
              <SwiperSlide key={offer.id}>
                <motion.div
                  variants={itemVariants}
                  initial="hidden"
                  whileInView="show"
                  viewport={{ once: true }}
                  className="destination-card group relative min-h-[260px] max-h-[260px]"
                >
                  {/* Image */}
                  <a
                    href="destination-details.html"
                    className="block destination-img"
                  >
                    <Image
                      src={offer.src}
                      alt={offer.alt}
                      width={800}
                      height={400}
                      className="w-full h-[210px] rounded-[20px] object-cover object-center transition-all duration-500 group-hover:h-[156px]"
                    />
                  </a>

                  {/* Content */}
                  <div className="destination-content px-2 pt-5 text-center">
                    <a
                      href="destination-details.html"
                      className="title-area flex items-center justify-center gap-2 text-[20px] font-semibold text-gray-900 transition-colors duration-500 group-hover:text-primary"
                    >
                      <svg
                        width="16"
                        height="16"
                        viewBox="0 0 16 16"
                        xmlns="http://www.w3.org/2000/svg"
                        className="fill-gray-900 transition-colors duration-500 group-hover:fill-primary"
                      >
                        <path d="M7.81276 0C4.31734 0 1.47305 2.84433 1.47305 6.34163C1.47305 9.07242 5.2847 13.5258 6.92356 15.3136C7.15052 15.5628 7.47606 15.7042 7.81276 15.7042C8.14946 15.7042 8.475 15.5628 8.70196 15.3136C10.3408 13.5258 14.1525 9.07238 14.1525 6.34163C14.1525 2.84433 11.3082 0 7.81276 0ZM8.35966 14.9991C8.21642 15.1535 8.02297 15.2391 7.81276 15.2391C7.60255 15.2391 7.4091 15.1536 7.26586 14.9991C5.66417 13.2525 1.93812 8.90875 1.93812 6.34167C1.93812 3.10103 4.57221 0.465067 7.81276 0.465067C11.0533 0.465067 13.6874 3.10103 13.6874 6.34167C13.6874 8.90875 9.96135 13.2524 8.35966 14.9991Z"></path>
                        <path d="M7.81277 9.76634C9.6713 9.76634 11.1779 8.25971 11.1779 6.40118C11.1779 4.54265 9.6713 3.03601 7.81277 3.03601C5.95424 3.03601 4.4476 4.54265 4.4476 6.40118C4.4476 8.25971 5.95424 9.76634 7.81277 9.76634Z"></path>
                      </svg>
                      {offer.alt}
                    </a>

                    {/* Hover Content */}
                    <div className="content max-w-[180px] mx-auto pt-2 opacity-0 translate-y-2 transition-all duration-500 ease-in-out group-hover:opacity-100 group-hover:translate-y-0">
                      <p className="text-sm font-medium text-gray-600 leading-relaxed">
                        120 tours | 250 departure | 15,786 guest travelled.
                      </p>
                    </div>
                  </div>
                </motion.div>
              </SwiperSlide>
            ))}
          </Swiper>
        )}

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
