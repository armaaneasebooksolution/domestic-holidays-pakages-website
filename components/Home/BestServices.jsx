"use client";
import { Percent, Award, Wallet, ArrowUpRight } from "lucide-react";
import Link from "next/link";
import { motion } from "framer-motion";
import CommonButton from "../Common/CommonButton";

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
    <section className="mb-20 w-full">
      <div className="container mx-auto rounded-[20px] border border-gray-100 bg-white px-4 py-12 shadow-sm">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          viewport={{ once: true }}
          className="relative mb-10 flex flex-col items-center text-center"
        >
          <h2 className="mb-4 text-3xl font-semibold md:text-4xl">
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
          className="mb-8 grid grid-cols-1 gap-8 p-6 md:grid-cols-3"
        >
          {/* Local Guidance */}
          <motion.div
            variants={itemVariants}
            className="flex items-start gap-4"
          >
            <div className="shrink-0 rounded-full bg-yellow-100 p-4">
              <Award className="h-8 w-8 text-yellow-600" />
            </div>
            <div className="text-start">
              <h3 className="mb-2 text-xl font-semibold text-gray-900">
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
            <div className="shrink-0 rounded-full bg-blue-100 p-4">
              <Percent className="h-8 w-8 text-blue-600" />
            </div>
            <div className="text-start">
              <h3 className="mb-2 text-xl font-semibold text-gray-900">
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
            <div className="shrink-0 rounded-full bg-yellow-100 p-4">
              <Wallet className="h-8 w-8 text-yellow-600" />
            </div>
            <div className="text-start">
              <h3 className="mb-2 text-xl font-semibold text-gray-900">
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
          <CommonButton
            href="/"
            text="Flat 30% Discounts All Packages   Check Offer "
          />
        </motion.div>
      </div>
    </section>
  );
}
