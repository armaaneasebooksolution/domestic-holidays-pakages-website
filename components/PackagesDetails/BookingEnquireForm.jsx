"use client";

import { useState } from "react";
import { CalendarDays, Users, Zap, Heart } from "lucide-react";

export default function BookingEnquiryForm() {
  const [activeTab, setActiveTab] = useState("booking");

  return (
    <aside className="w-full rounded-[20px] bg-white p-4">
      {/* ===== Price Section ===== */}
      <div className="mb-6">
        <h3 className="text-xl font-semibold">Price</h3>
        <p className="mt-1 flex items-baseline gap-2 text-2xl font-bold">
          <span className="text-base text-gray-500">From</span> $1,200
          <span className="text-sm font-normal text-gray-400">
            <i className="ml-1 text-xs">ⓘ</i>
          </span>
        </p>
      </div>

      {/* ===== Tabs ===== */}
      <div className="flex border-b border-gray-200 text-sm font-semibold">
        <button
          onClick={() => setActiveTab("booking")}
          className={`w-1/2 pb-2 text-center ${
            activeTab === "booking"
              ? "border-primary text-primary border-b-2"
              : "text-gray-500 hover:text-gray-700"
          }`}
        >
          Booking Form
        </button>
        <button
          onClick={() => setActiveTab("enquiry")}
          className={`w-1/2 pb-2 text-center ${
            activeTab === "enquiry"
              ? "border-primary text-primary border-b-2"
              : "text-gray-500 hover:text-gray-700"
          }`}
        >
          Enquiry Form
        </button>
      </div>

      {/* ===== Booking Form ===== */}
      {activeTab === "booking" && (
        <div className="mt-6 space-y-5">
          {/* Date Selector */}
          <div>
            <label className="mb-1 flex items-center gap-2 text-sm font-medium text-gray-700">
              <CalendarDays className="text-primary h-4 w-4" />
              Select Date
            </label>
            <select className="focus:border-primary focus:ring-primary mt-1 w-full rounded-lg border border-gray-300 bg-gray-50 px-3 py-2 text-sm">
              <option>7 Oct 2025</option>
              <option>8 Oct 2025</option>
              <option>9 Oct 2025</option>
            </select>
            <p className="mt-1 text-xs text-gray-500">Available: 40 seats</p>
          </div>

          {/* Number of People */}
          <div>
            <label className="mb-1 flex items-center gap-2 text-sm font-medium text-gray-700">
              <Users className="text-primary h-4 w-4" />
              Number Of People
            </label>
            <select className="focus:border-primary focus:ring-primary mt-1 w-full rounded-lg border border-gray-300 bg-gray-50 px-3 py-2 text-sm">
              <option>1 Person</option>
              <option>2 People</option>
              <option>3 People</option>
              <option>4 People</option>
            </select>
          </div>

          {/* Proceed Button */}
          <button className="bg-primary-gradient mt-2 flex w-full items-center justify-center gap-2 rounded-lg py-2.5 text-white transition">
            <Zap className="h-4 w-4" />
            PROCEED BOOKING
          </button>

          {/* Wishlist & Views */}
          <div className="mt-3 flex items-center justify-between text-sm">
            <div className="hover:text-primary flex cursor-pointer items-center gap-2">
              <Heart className="h-4 w-4" />
              Save To Wish List
            </div>
            <p>👁️ 8858</p>
          </div>
        </div>
      )}

      {/* ===== Enquiry Form ===== */}
      {activeTab === "enquiry" && (
        <form className="mt-6 space-y-4">
          <div>
            <label className="mb-1 block text-sm font-medium text-gray-700">
              Full Name*
            </label>
            <input
              type="text"
              className="focus:border-primary focus:ring-primary w-full rounded-lg border border-gray-300 px-3 py-2 text-sm"
              placeholder="Enter your full name"
            />
          </div>

          <div>
            <label className="mb-1 block text-sm font-medium text-gray-700">
              Email Address*
            </label>
            <input
              type="email"
              className="focus:border-primary focus:ring-primary w-full rounded-lg border border-gray-300 px-3 py-2 text-sm"
              placeholder="Enter your email"
            />
          </div>

          <div>
            <label className="mb-1 block text-sm font-medium text-gray-700">
              Your Enquiry*
            </label>
            <textarea
              rows={4}
              className="focus:border-primary focus:ring-primary w-full rounded-lg border border-gray-300 px-3 py-2 text-sm"
              placeholder="Write your message here..."
            ></textarea>
          </div>

          {/* Terms Checkbox */}
          <div className="flex items-start gap-2 text-xs">
            <input
              type="checkbox"
              className="text-primary focus:ring-primary mt-0.5 h-4 w-4 rounded border-gray-300"
            />
            <span>
              * I agree with{" "}
              <a href="#" className="text-primary underline">
                Terms of Service
              </a>{" "}
              and{" "}
              <a href="#" className="text-primary underline">
                Privacy Statement
              </a>
              .
            </span>
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="bg-primary-gradient w-full rounded-lg py-2.5 text-sm font-semibold text-white transition hover:bg-orange-600"
          >
            SUBMIT ENQUIRY
          </button>
        </form>
      )}
    </aside>
  );
}
