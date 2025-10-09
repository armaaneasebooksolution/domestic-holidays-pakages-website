"use client";

import { motion } from "framer-motion";
import Link from "next/link";

const DestinationBanner = () => {
  return (
    <section
      className="relative flex h-[40vh] items-center justify-center bg-cover bg-center"
      style={{
        backgroundImage: `url('/assets/img/innerpages/breadcrumb-bg3.jpg')`,
      }}
    >
      {/* ===== Overlay ===== */}
      <div className="absolute inset-0 bg-black/50"></div>

      {/* ===== Content ===== */}
      <motion.div
        initial={{ y: -60, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.9, ease: "easeOut" }}
        className="relative z-10 px-4 text-center text-white"
      >
        {/* ===== Title ===== */}
        <h1 className="mb-4 text-3xl font-bold drop-shadow-lg sm:text-4xl md:text-5xl">
          Explore Destinations
        </h1>

        {/* ===== Breadcrumbs ===== */}
        <div className="flex items-center justify-center gap-2 text-sm sm:text-base">
          <Link
            href="/"
            className="transition-colors duration-300 hover:text-yellow-400"
          >
            Home
          </Link>
          <span>/</span>
          <span className="font-medium text-yellow-400">Destinations</span>
        </div>
      </motion.div>
    </section>
  );
};

export default DestinationBanner;
