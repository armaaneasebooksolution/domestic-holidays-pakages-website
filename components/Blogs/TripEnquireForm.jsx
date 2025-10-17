"use client";

import { useState } from "react";
import {
  CalendarDays,
  Users,
  ChevronDown,
  CheckCircle,
  MessageCircle,
} from "lucide-react";

export default function TripEnquiryBox() {
  const [selectedDate, setSelectedDate] = useState("18 Oct 2025");
  const [travellers, setTravellers] = useState(1);
  const [month, setMonth] = useState("Oct");
  const [form, setForm] = useState({ name: "", phone: "", email: "" });

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Lead Submitted:", {
      ...form,
      selectedDate,
      travellers,
    });
    // TODO: send this to backend CRM / API via axios
  };

  const tripDates = [
    { date: "18 Oct 2025", price: 25999 },
    { date: "25 Oct 2025", price: 25999 },
  ];

  return (
    <div className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm">
      {/* Price Header */}
      <div className="mb-5 border-b border-gray-100 pb-3">
        <p className="text-sm text-gray-500">Trip Starts From</p>
        <h3 className="text-2xl font-semibold text-green-600">
          ₹ 25,999{" "}
          <span className="text-sm font-medium text-gray-500">Per Person</span>
        </h3>
      </div>

      {/* Trip Dates */}
      <div className="mb-5">
        <div className="mb-2 flex items-center justify-between">
          <div className="flex items-center gap-2 font-medium text-gray-800">
            <CalendarDays className="text-primary h-5 w-5" />
            Trip Dates
          </div>
          <div className="focus:border-primary flex w-20 cursor-pointer appearance-none items-center justify-center rounded-full border border-gray-300 px-3 py-1 text-sm focus:outline-none">
            <select
              value={month}
              onChange={(e) => setMonth(e.target.value)}
              className="w-20 cursor-pointer appearance-none text-sm focus:outline-none"
            >
              <option>Oct</option>
              <option>Nov</option>
              <option>Dec</option>
            </select>
            <ChevronDown className="h-5 w-5 text-gray-500" />
          </div>
        </div>

        <div className="space-y-3">
          {tripDates.map((item) => (
            <div
              key={item.date}
              onClick={() => setSelectedDate(item.date)}
              className={`flex cursor-pointer items-center justify-between rounded-lg border px-4 py-2 transition ${
                selectedDate === item.date
                  ? "border-primary bg-primary-light/10"
                  : "hover:border-primary/40 border-gray-200"
              }`}
            >
              <div>
                <p className="text-sm font-semibold text-gray-800">
                  {item.date}
                </p>
                <p className="text-xs text-gray-500">
                  Starting ₹ {item.price.toLocaleString()} /Person
                </p>
              </div>
              {selectedDate === item.date && (
                <CheckCircle className="text-primary h-5 w-5" />
              )}
            </div>
          ))}
        </div>
      </div>

      {/* Travellers Counter */}
      <div className="mb-6">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2 font-medium text-gray-800">
            <Users className="h-5 w-5 text-purple-600" />
            No. of Travellers
          </div>
          <div className="flex items-center gap-4">
            <button
              onClick={() => setTravellers(Math.max(1, travellers - 1))}
              className="rounded-full border border-gray-300 px-2 py-0.5 text-lg"
            >
              –
            </button>
            <span className="font-medium text-gray-800">{travellers}</span>
            <button
              onClick={() => setTravellers(travellers + 1)}
              className="rounded-full border border-gray-300 px-2 py-0.5 text-lg"
            >
              +
            </button>
          </div>
        </div>
      </div>

      {/* Lead Form */}
      <form onSubmit={handleSubmit} className="space-y-3">
        <input
          type="text"
          placeholder="Full Name"
          value={form.name}
          onChange={(e) => setForm({ ...form, name: e.target.value })}
          required
          className="focus:border-primary w-full rounded-lg border border-gray-300 px-4 py-2 text-sm focus:outline-none"
        />
        <input
          type="tel"
          placeholder="Phone Number"
          value={form.phone}
          onChange={(e) => setForm({ ...form, phone: e.target.value })}
          required
          className="focus:border-primary w-full rounded-lg border border-gray-300 px-4 py-2 text-sm focus:outline-none"
        />
        <input
          type="email"
          placeholder="Email ID"
          value={form.email}
          onChange={(e) => setForm({ ...form, email: e.target.value })}
          required
          className="focus:border-primary w-full rounded-lg border border-gray-300 px-4 py-2 text-sm focus:outline-none"
        />

        <button
          type="submit"
          className="bg-primary-gradient w-full rounded-full py-2.5 text-sm font-semibold text-white shadow-md transition hover:shadow-lg"
        >
          Send Enquiry
        </button>
      </form>

      {/* WhatsApp CTA */}
      <div className="mt-5 flex flex-col items-center justify-center gap-2 text-center text-sm">
        <span className="text-gray-500">Any Doubt?</span>
        <a
          href="https://wa.me/918668095078"
          target="_blank"
          className="flex w-full items-center justify-center gap-2 rounded-full border border-green-500 bg-green-50 px-4 py-1.5 text-green-700 transition hover:bg-green-100"
        >
          <MessageCircle className="h-4 w-4" /> WhatsApp
        </a>
      </div>
    </div>
  );
}
