"use client";
import { motion } from "framer-motion";

export default function SectionHeader({ title, subtitle, align = "center" }) {
  return (
    <div
      className={`relative mb-12 text-${align} flex flex-col items-${align === "center" ? "center" : align} `}
    >
      {/* Animated Title */}
      <motion.h2
        initial={{ opacity: 0, y: 30, scale: 0.95 }}
        whileInView={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        viewport={{ once: true, amount: 0.5 }}
        className="relative inline-block text-[28px] leading-[1.1] font-semibold tracking-wide text-gray-900 sm:text-[32px] lg:text-[40px]"
      >
        {title}
        {/* Accent underline */}
        <span className="from-primary to-primary-hover absolute -bottom-2 left-1/2 h-1 w-16 -translate-x-1/2 rounded-full bg-gradient-to-r content-['']"></span>
      </motion.h2>

      {subtitle && (
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.6, ease: "easeOut" }}
          viewport={{ once: true, amount: 0.5 }}
          className="mx-auto mt-6 w-full max-w-[545px] text-[16px] leading-[28px] font-normal text-gray-600 sm:text-[17px] lg:text-[18px]"
        >
          {subtitle}
        </motion.p>
      )}
    </div>
  );
}
