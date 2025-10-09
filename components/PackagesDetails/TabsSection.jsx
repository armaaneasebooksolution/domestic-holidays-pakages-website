"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

// Import tab content components
import DetailSection from "../TabsComponent/DetailSection";
import PhotosSection from "../TabsComponent/PhotosSection";
import ItinerarySection from "../TabsComponent/ItinerarySection";
import FAQSection from "../TabsComponent/FAQSection";
import ReviewsSection from "../TabsComponent/ReviewsSection";

// Tab definitions
const tabs = [
  { id: "detail", label: "Detail", component: <DetailSection /> },
  { id: "photos", label: "Photos", component: <PhotosSection /> },
  { id: "itinerary", label: "Itinerary", component: <ItinerarySection /> },
  { id: "faq", label: "FAQ", component: <FAQSection /> },
  { id: "reviews", label: "Reviews", component: <ReviewsSection /> },
];

export default function TabsSection() {
  const [activeTab, setActiveTab] = useState("detail");
  const [hoverTab, setHoverTab] = useState(null);

  return (
    <div className="relative">
      {/* ===== Tabs Navbar (Static) ===== */}
      <nav className="hidden rounded-[20px] bg-white md:block">
        <div className="flex max-w-7xl gap-14 px-4">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              onMouseEnter={() => setHoverTab(tab.id)}
              onMouseLeave={() => setHoverTab(null)}
              className={`text-md relative py-4 leading-8 font-normal tracking-wide transition-colors ${
                activeTab === tab.id
                  ? "text-gray-900"
                  : "text-gray-400 hover:text-gray-700"
              }`}
            >
              {tab.label}

              {/* Underline Animation */}
              <span
                className={`bg-primary absolute bottom-0 left-0 h-[2px] transition-all duration-300 ease-in-out ${
                  activeTab === tab.id || hoverTab === tab.id
                    ? "w-full opacity-100"
                    : "w-0 opacity-0"
                }`}
              ></span>
            </button>
          ))}
        </div>
      </nav>

      {/* ===== Tab Content Area ===== */}
      <div className="mx-auto max-w-7xl py-4">
        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.25 }}
          >
            {tabs.find((tab) => tab.id === activeTab)?.component}
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
}
