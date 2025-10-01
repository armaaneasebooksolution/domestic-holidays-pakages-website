"use client";
import { useState } from "react";
import {
  Calendar,
  Users,
  SlidersHorizontal,
  ChevronDown,
  ArrowLeft,
  ArrowRight,
} from "lucide-react";

export default function SearchForm() {
  const [fromCity, setFromCity] = useState("New Delhi");
  const [toCity, setToCity] = useState("Goa");
  const [date, setDate] = useState("18 October 2022");
  const [rooms, setRooms] = useState("");
  const [filters, setFilters] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log({ fromCity, toCity, date, rooms, filters });
  };

  return (
    <section className="w-full flex flex-col">
      <div className="relative container mx-auto px-4 py-8 bg-white rounded-xl shadow-lg">
        <form
          onSubmit={handleSubmit}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 border border-gray-200 rounded-none overflow-hidden"
        >
          {/* From City */}
          <div className="px-4 py-4 border-b md:border-b md:border-r border-gray-200">
            <p className="text-sm font-medium text-para text-left leading-6 tracking-wide">
              From City
            </p>
            <h2 className="text-2xl text-gray-900 font-semibold text-left leading-8">
              {fromCity}
            </h2>
            <p className="text-para text-sm text-left">India</p>
          </div>

          {/* To City */}
          <div className="px-4 py-4 border-b md:border-b md:border-r border-gray-200">
            <p className="text-sm font-medium text-para text-left leading-6 tracking-wide">
              To City
            </p>
            <h2 className="text-2xl text-gray-900 font-semibold text-left leading-8">
              {toCity}
            </h2>
            <p className="text-para text-sm text-left">India</p>
          </div>

          {/* Departure Date */}
          <div className="px-4 py-4 border-b md:border-b md:border-r border-gray-200">
            <p className=" text-sm text-para font-medium flex items-center justify-between  gap-1 text-left leading-6 ">
              <span> Departure Date</span>
              {""}
              <span>
                <ChevronDown size={14} />
              </span>
            </p>
            <h2 className="text-2xl text-gray-900 font-semibold text-left leading-8 ">
              18 <span className="text-lg font-normal">Oct, 2025</span>
            </h2>
            <p className="text-para text-sm text-left">Monday</p>
          </div>

          {/* Rooms & Guests */}
          <div className="px-4 py-4 border-b md:border-b md:border-r border-gray-200">
            <p className="text-sm font-medium text-para flex items-center gap-1 text-left leading-6">
              Rooms & Guests <Users size={14} />
            </p>
            <h2 className="text-2xl text-gray-900 font-semibold text-left leading-8 ">
              2 <span className="text-lg font-normal">Adults</span>
            </h2>
            <p className="text-para text-sm text-left">1 Room</p>
          </div>

          {/* Filters */}
          <div className="px-4 py-4 border-b md:border-b-0 border-gray-200">
            <p className="text-sm font-medium text-para flex items-center gap-1 text-left leading-6">
              Filters <SlidersHorizontal size={14} />
            </p>
            <h2 className="text-sm font-[500] text-left text-title">
              Without Flights - ₹30000 - ₹40000
            </h2>
            <p className="text-para text-sm text-left">4 rating</p>
          </div>
        </form>

        {/* Recent Search  */}
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-2 sm:gap-4 mt-4 mb-4">
          {/* Recent Search */}
          <div className="flex flex-col sm:flex-row sm:items-center gap-1 sm:gap-3 ">
            <p className="text-gray-600 text-sm font-medium">Recent Search :</p>
            <span className="flex items-center text-para font-normal text-xs bg-primary-light p-1">
              Amritsar <ArrowRight size={14} className="mx-2 text-primary" />{" "}
              New Delhi
            </span>
            <span className="flex items-center text-para font-normal text-xs bg-primary-light p-1">
              Amritsar <ArrowRight size={14} className="mx-2 text-primary" />{" "}
              New Delhi
            </span>
            <span className="flex items-center text-para font-normal text-xs bg-primary-light p-1">
              Amritsar <ArrowRight size={14} className="mx-2 text-primary" />{" "}
              New Delhi
            </span>
          </div>

          {/* Right Side */}
          <p className="text-para text-sm sm:text-base font-normal leading-6">
            Holiday Packages
          </p>
        </div>

        {/* Search Button */}
        <div className="absolute left-1/2 -translate-x-1/2 -bottom-5">
          <div className="flex flex-col items-center">
            <button
              type="submit"
              onClick={handleSubmit}
              className="mt-6 px-10 py-3 rounded-full bg-primary-gradient text-white font-semibold shadow-lg transition"
            >
              SEARCH
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
