"use client";

import { PhoneCall, Mail } from "lucide-react";
import Image from "next/image";

export default function GetAQuestionBox() {
  return (
    <aside className="relative overflow-hidden rounded-[20px]">
      {/* Background Image */}
      <div className="absolute inset-0">
        <Image
          src="/assets/img/home1/destination-img6.jpg"
          alt="Support Background"
          fill
          className="object-cover"
        />
        {/* Orange Overlay */}
        <div className="bg-primary/90 absolute inset-0"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 p-6 text-white">
        <h3 className="mb-3 text-lg font-semibold">Get a Question?</h3>
        <p className="mb-5 text-sm leading-relaxed text-white/90">
          Do not hesitate to give us a call. We are an expert team and we are
          happy to talk to you.
        </p>

        {/* Phone */}
        <div className="mb-4 flex items-center gap-3">
          <PhoneCall className="h-5 w-5 text-white" />
          <p className="text-lg font-semibold">1.8445.3356.33</p>
        </div>

        {/* Email */}
        <div className="flex items-center gap-3">
          <Mail className="h-5 w-5 text-white" />
          <p className="text-sm font-medium">Help@goodlayers.com</p>
        </div>
      </div>
    </aside>
  );
}
