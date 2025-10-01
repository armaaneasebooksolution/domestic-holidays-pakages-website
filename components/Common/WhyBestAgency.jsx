"use client";
import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import { motion } from "framer-motion";
import Link from "next/link";

export default function WhyBestAgency() {
  return (
    <section
      className="w-full py-16 bg-white bg-no-repeat bg-center bg-cover relative"
      style={{
        backgroundImage: "url('/assets/img/home1/home1-about-bg.png')",
      }}
    >
      <div className="container mx-auto px-4 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center relative z-10">
        {/* Left Content */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          viewport={{ once: true }}
          className="flex flex-col justify-center"
        >
          <h2
            className="relative inline-block text-[28px] sm:text-[32px] lg:text-[40px] 
          font-semibold leading-[1.1] text-gray-900 tracking-wide mb-6"
          >
            Why We’re Best Agency
          </h2>
          <h3 className="text-xl md:text-2xl font-semibold text-gray-800 mb-4">
            Welcome to GoFly Travel Agency – Your Gateway to Unforgettable
            Journeys!
          </h3>
          <p className="mb-6 font-normal leading-[28px] text-[16px] sm:text-[17px] lg:text-[18px] text-gray-600">
            GoFly Travel Agency is a trusted name in the travel industry,
            offering seamless travel planning, personalized itineraries, and
            unforgettable adventures. With years of experience and a network of
            global partners, we ensure a hassle-free and memorable journey for
            every traveler.
          </p>

          {/* CTA */}
          <Link
            href="#"
            className="group flex items-center font-semibold text-lg text-title hover:text-primary transition mb-8"
          >
            About More GoFly
            <ArrowUpRight className="ml-1 w-5 h-5 transform transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1" />
          </Link>

          {/* Ratings */}
          <div className="max-w-lg w-full flex items-center justify-between gap-6 border border-[#e8e8e8] rounded-[20px] shadow-sm px-6 py-5 bg-white">
            {/* Tripadvisor */}
            <div className="flex items-center gap-3">
              <div className="w-14 h-14 border border-[#e8e8e8] rounded-full flex items-center justify-center">
                <span className="text-xl font-semibold">4.5</span>
              </div>
              <div className="flex flex-col">
                <p className="font-semibold text-gray-800 flex items-center gap-1">
                  <Image
                    src="/assets/img/home1/icon/tripadvisor-logo.svg"
                    alt="Tripadvisor"
                    width={80}
                    height={30}
                    className="h-auto"
                  />
                </p>
                <div className="flex items-center gap-2">
                  <p className="text-sm text-gray-600">Reviews</p>
                  <div className="flex text-green-500">●●●●◐</div>
                </div>
              </div>
            </div>

            {/* Divider */}
            <div className="h-14 flex items-center">
              <svg
                className="divider"
                width="6"
                height="54"
                viewBox="0 0 6 54"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M3.5 5L5.88675 0H0.113249L2.5 5H3.5ZM2.5 49L0.113249 54H5.88675L3.5 49H2.5ZM2.5 4.5V49.5H3.5V4.5H2.5Z"></path>
              </svg>
            </div>

            {/* Trustpilot */}
            <div className="flex items-center gap-3">
              <div className="w-14 h-14 border border-[#e8e8e8] rounded-full flex items-center justify-center">
                <span className="text-xl font-semibold">4.5</span>
              </div>
              <div className="flex flex-col">
                <p className="font-semibold text-gray-800 flex items-center gap-1">
                  <Image
                    src="/assets/img/home1/icon/trustpilot-logo.svg"
                    alt="Trustpilot"
                    width={80}
                    height={30}
                    className="h-auto"
                  />
                </p>
                <Image
                  src="/assets/img/home1/icon/trustpilot-star.svg"
                  alt="Trustpilot Stars"
                  width={120}
                  height={30}
                  className="h-auto mt-1"
                />
              </div>
            </div>
          </div>
        </motion.div>

        {/* Right Image (single creative shape) */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          viewport={{ once: true }}
          className="flex justify-center lg:justify-end"
        >
          <div className="relative w-full max-w-xl">
            <Image
              src="/assets/img/home1/about-img.png"
              alt="Adventure"
              width={500}
              height={500}
              className="w-full h-auto object-cover rounded-[30px]"
            />
            {/* Optional overlay effect */}
            <div className="absolute inset-0 rounded-[30px] ring-4 ring-white/40"></div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
