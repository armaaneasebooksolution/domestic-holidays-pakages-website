import React from "react";
import SearchForm from "./SearchForm";

export default function HeroBanner() {
  return (
    <section className="relative max-w-[92%] mx-auto h-[40vh] md:h-[80vh] rounded-[50px] overflow-hidden z-20 mb-20">
      {/* Background Video */}
      <video
        className="absolute top-0 left-0 w-full h-full object-cover"
        autoPlay
        muted
        loop
        playsInline
        preload="auto"
      >
        <source src="/assets/video/home4-banner-video.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/25 z-10 pointer-events-none" />

      {/* Content Container */}
      <div className="relative z-20 flex flex-col  justify-center h-full px-4">
        <div className="w-full max-w-7xl mx-auto text-center">
          {/* Heading */}
          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold text-white drop-shadow-lg">
            All-in-one Travel Booking.
          </h1>

          {/* Subtext */}
          <p className="mt-4 text-md sm:text-lg lg:text-xl text-white font-medium">
            Best travel agency in world-wide &amp; achieve{" "}
            <span
              className="font-semibold tracking-wider leading-4"
              style={{ fontFamily: "var(--font-courgette)" }}
            >
              “World Travel Award”
            </span>
          </p>

          {/* Search Form */}
          <div className="mt-10 hidden md:block">
            <SearchForm />
          </div>
        </div>
      </div>
    </section>
  );
}
