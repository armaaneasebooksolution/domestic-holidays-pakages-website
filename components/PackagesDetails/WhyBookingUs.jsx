"use client";

import { DollarSign, Headphones, Star, LifeBuoy } from "lucide-react";

export default function WhyBookWithUs() {
  const features = [
    {
      icon: <DollarSign className="text-primary h-5 w-5" />,
      text: "No-hassle best price guarantee",
    },
    {
      icon: <Headphones className="text-primary h-5 w-5" />,
      text: "Customer care available 24/7",
    },
    {
      icon: <Star className="text-primary h-5 w-5" />,
      text: "Hand-picked Tours & Activities",
    },
    {
      icon: <LifeBuoy className="text-primary h-5 w-5" />,
      text: "Free Travel Insurance",
    },
  ];

  return (
    <aside className="rounded-[20px] bg-white p-4">
      {/* Title */}
      <h3 className="mb-4 text-base font-semibold text-gray-900">
        Why Book With Us?
      </h3>

      {/* Features List */}
      <ul className="space-y-3">
        {features.map((item, i) => (
          <li
            key={i}
            className="hover:bg-primary-light/60 flex items-center gap-3 rounded-md bg-white px-4 py-3 text-sm text-gray-700 transition"
          >
            {item.icon}
            <span>{item.text}</span>
          </li>
        ))}
      </ul>
    </aside>
  );
}
