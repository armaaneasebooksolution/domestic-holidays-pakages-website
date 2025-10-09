"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus, Minus } from "lucide-react";

const faqs = [
  {
    question: "I'm a solo traveller, is there a single supplement?",
    answer: `A wonderful serenity has taken possession of my entire soul, like these sweet mornings of spring which I enjoy with my whole heart. 
I am alone, and feel the charm of existence in this spot, which was created for the bliss of souls like mine. 
I am so happy, my dear friend, so absorbed in the exquisite.`,
  },
  {
    question: "Which currency is most widely accepted on this tour?",
    answer: `The Euro and US Dollar are widely accepted in most travel destinations. 
However, it’s recommended to carry some local currency for small purchases and local markets.`,
  },
  {
    question: "Should I book pre/post tour accommodation?",
    answer: `Yes, we recommend booking at least one night before and after your tour to avoid any inconvenience due to flight delays or early departures.`,
  },
  {
    question: "What is cancellation policy?",
    answer: `Cancellations made 15 days or more before departure are fully refundable. 
For cancellations made within 7 days of the trip, a 50% refund applies.`,
  },
];

export default function FAQSection() {
  const [activeIndex, setActiveIndex] = useState(0);

  const toggleFAQ = (index) => {
    setActiveIndex(index === activeIndex ? null : index);
  };

  return (
    <section className="container mx-auto rounded-[20px] bg-white px-4 py-10">
      {/* Header */}
      <h2 className="mb-8 text-xl leading-8 font-semibold tracking-normal md:text-2xl">
        FAQ
      </h2>

      {/* FAQ List */}
      <div className="space-y-4">
        {faqs.map((faq, index) => (
          <div
            key={index}
            className="border-b border-gray-200 pb-3 transition-colors duration-300"
          >
            {/* Question */}
            <button
              onClick={() => toggleFAQ(index)}
              className="flex w-full items-start gap-4 text-left focus:outline-none"
            >
              {/* Toggle Button */}
              <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-sm bg-gray-100 transition-all duration-300 hover:bg-gray-200">
                {activeIndex === index ? (
                  <Minus className="h-5 w-5 text-gray-900" />
                ) : (
                  <Plus className="h-5 w-5 text-gray-900" />
                )}
              </div>

              {/* Question Text */}
              <span
                className={`text-sm font-semibold transition-colors duration-300 ${
                  activeIndex === index ? "" : "hover:text-gray-900"
                }`}
              >
                {faq.question}
              </span>
            </button>

            {/* Smooth Animated Answer */}
            <AnimatePresence initial={false}>
              {activeIndex === index && (
                <motion.div
                  key="content"
                  initial={{ height: 0, opacity: 0, y: -5 }}
                  animate={{ height: "auto", opacity: 1, y: 0 }}
                  exit={{ height: 0, opacity: 0, y: -5 }}
                  transition={{
                    duration: 0.35,
                    ease: [0.25, 0.8, 0.5, 1],
                  }}
                  className="overflow-hidden"
                >
                  <p className="mt-3 ml-14 text-sm leading-relaxed text-gray-600">
                    {faq.answer}
                  </p>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        ))}
      </div>
    </section>
  );
}
