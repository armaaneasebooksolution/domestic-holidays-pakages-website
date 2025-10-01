"use client";
import { Percent, Award, Wallet, ArrowUpRight } from "lucide-react";
import Link from "next/link";
import { motion } from "framer-motion";

export default function BestService() {
  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.2 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 40 },
    show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
  };

  return (
    <section className="w-full mb-20">
      <div className="container mx-auto px-4 bg-white border border-gray-100 shadow-sm rounded-[20px] py-12">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          viewport={{ once: true }}
          className="relative flex flex-col items-center mb-10 text-center"
        >
          <h2 className="text-3xl md:text-4xl font-semibold mb-4">
            We’re Providing Best Service Ever!
          </h2>
          <svg
            height="6"
            viewBox="0 0 872 6"
            xmlns="http://www.w3.org/2000/svg"
            className="w-full max-w-3xl text-gray-400"
            fill="currentColor"
          >
            <path d="M5 2.5L0 0.113249V5.88675L5 3.5V2.5ZM867 3.5L872 5.88675V0.113249L867 2.5V3.5ZM4.5 3.5H867.5V2.5H4.5V3.5Z"></path>
          </svg>
        </motion.div>

        {/* Features */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8 p-6"
        >
          {/* Local Guidance */}
          <motion.div
            variants={itemVariants}
            className="flex items-start gap-4"
          >
            <div className="bg-yellow-100 p-4 rounded-full shrink-0">
              <Award className="w-8 h-8 text-yellow-600" />
            </div>
            <div className="text-start">
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                Local Guidance
              </h3>
              <p className="text-lg">
                Travel agencies have experienced professionals guidance.
              </p>
            </div>
          </motion.div>

          {/* Deals & Discounts */}
          <motion.div
            variants={itemVariants}
            className="flex items-start gap-4"
          >
            <div className="bg-blue-100 p-4 rounded-full shrink-0">
              <Percent className="w-8 h-8 text-blue-600" />
            </div>
            <div className="text-start">
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                Deals & Discounts
              </h3>
              <p className="text-lg">
                Agencies have special discounts on flights, hotels, & packages.
              </p>
            </div>
          </motion.div>

          {/* Saves Money */}
          <motion.div
            variants={itemVariants}
            className="flex items-start gap-4"
          >
            <div className="bg-yellow-100 p-4 rounded-full shrink-0">
              <Wallet className="w-8 h-8 text-yellow-600" />
            </div>
            <div className="text-start">
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                Saves Money
              </h3>
              <p className="text-lg">
                Avoids hidden fees & tourist traps, Multi-destination &
                budget-friendly options.
              </p>
            </div>
          </motion.div>
        </motion.div>

        {/* Button */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          viewport={{ once: true }}
          className="flex justify-center"
        >
          <Link
            href="#"
            className="bg-primary-gradient text-white font-semibold text-sm px-6 py-3 rounded-full shadow-md transition transform hover:scale-105 hover:shadow-lg flex items-center gap-2"
          >
            Flat 30% Discounts All Packages
            <span className="flex items-center gap-1">
              Check Offer <ArrowUpRight className="w-4 h-4" />
            </span>
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
