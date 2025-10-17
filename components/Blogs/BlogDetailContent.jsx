"use client";

import { useState } from "react";
import TripEnquiryBox from "./TripEnquireForm";
import Articles from "../BlogDetails/Articles";

export default function BlogDetailContent({ blog }) {
  const [query, setQuery] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Query Submitted:", query);
  };

  const categories = [
    "Adventure Travel",
    "Solo Trips",
    "Travel Tips",
    "Luxury Stays",
    "Food & Culture",
    "Weekend Getaways",
  ];

  return (
    <section className="container mx-auto px-4 py-20">
      <div className="grid grid-cols-1 gap-10 lg:grid-cols-12">
        {/* ===== LEFT SIDE: Blog Content ===== */}
        <div className="lg:col-span-8">
          <Articles />
        </div>

        {/* ===== RIGHT SIDE: Sidebar ===== */}
        <aside className="lg:col-span-4">
          <div className="space-y-10 lg:sticky lg:top-24">
            {/* ====== Trip Enquiry Form ===== */}
            <TripEnquiryBox />

            {/* ===== Categories Widget ===== */}
            <div className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm">
              <h3 className="mb-4 text-lg font-semibold text-gray-900">
                Categories
              </h3>
              <ul className="space-y-3">
                {categories.map((cat, index) => (
                  <li
                    key={index}
                    className="hover:border-primary hover:bg-primary-light/10 hover:text-primary cursor-pointer rounded-lg border border-gray-100 bg-gray-50 px-4 py-2 text-sm font-medium text-gray-700 transition"
                  >
                    {cat}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </aside>
      </div>
    </section>
  );
}
