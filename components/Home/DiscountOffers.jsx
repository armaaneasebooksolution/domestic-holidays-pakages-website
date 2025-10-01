"use client";
import { useState, useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import Image from "next/image";
import SectionHeader from "../Common/SectionHeader";
import { motion } from "framer-motion";

import "swiper/css";

const offers = [
  {
    id: 1,
    src: "/assets/img/home1/home1-offer-img1.jpg",
    alt: "Special Deal 1",
  },
  {
    id: 2,
    src: "/assets/img/home1/home1-offer-img2.jpg",
    alt: "Holiday Offer",
  },
  {
    id: 3,
    src: "/assets/img/home1/home1-offer-img3.jpg",
    alt: "Family Travel",
  },
  {
    id: 4,
    src: "/assets/img/home1/home1-offer-img4.jpg",
    alt: "Luxury Escape",
  },
  {
    id: 5,
    src: "/assets/img/home1/home1-offer-img5.jpg",
    alt: "Luxury Escape",
  },
  {
    id: 6,
    src: "/assets/img/home1/home1-offer-img6.jpg",
    alt: "Luxury Escape",
  },
];

export default function DiscountOffers() {
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

  // Animation variants
  const slideVariants = {
    hidden: { opacity: 0, y: 40 },
    show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
  };

  return (
    <section className="w-full mb-20">
      <div className="container mx-auto px-4">
        {/* Section Heading */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          <SectionHeader
            title="Discount Offers"
            subtitle="Grab the best travel deals and save more on your next journey."
            align="center"
          />
        </motion.div>

        {/* Swiper */}
        <Swiper
          modules={[Autoplay]}
          spaceBetween={20}
          slidesPerView={1}
          autoplay={{ delay: 3000, disableOnInteraction: false }}
          loop={true}
          onSwiper={(swiper) => (swiperRef.current = swiper)}
          onSlideChange={handleSlideChange}
          className="discount-swiper"
          breakpoints={{
            640: { slidesPerView: 1 },
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
        >
          {offers.map((offer) => (
            <SwiperSlide key={offer.id}>
              <motion.div
                variants={slideVariants}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true }}
                className="relative group overflow-hidden rounded-lg"
              >
                <Image
                  src={offer.src}
                  alt={offer.alt}
                  width={800}
                  height={400}
                  className="w-full h-60 object-cover rounded-lg transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 rounded-lg overflow-hidden pointer-events-none">
                  <div className="shine-effect"></div>
                </div>
              </motion.div>
            </SwiperSlide>
          ))}
        </Swiper>

        {/* Custom pagination */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.3 }}
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
