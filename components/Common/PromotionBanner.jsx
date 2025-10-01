"use client";
import Image from "next/image";
import Link from "next/link";

export default function PromoBanner() {
  return (
    <section className="relative w-full mb-20">
      <div className="container mx-auto px-4">
        {/* Banner Wrapper */}
        <div className="relative w-full min-h-[300px] md:min-h-[380px] rounded-[20px] overflow-hidden flex flex-col md:flex-row">
          {/* Left Side (Teal background, centered content) */}
          <div className="relative bg-primary-gradient flex-1 flex flex-col justify-center items-start text-left p-8 md:p-12 overflow-hidden">
            {/* Limited Offer Tag */}
            <span className="inline-block bg-white border border-gray-300 text-lg font-medium px-8 py-2 rounded-full mb-4 tracking-wide">
              Limited Offer
            </span>

            {/* Heading */}
            <h2 className="text-3xl md:text-5xl font-bold !text-white leading-snug mb-6">
              Flash 50% off all tour packages
            </h2>

            {/* Button */}
            <Link
              href="/packages"
              className="inline-flex items-center gap-2 bg-white text-primary text-md font-semibold px-6 py-3 rounded-full shadow-lg transition-all hover:scale-105"
            >
              Grab the Deal Now
              <svg
                width="14"
                height="14"
                viewBox="0 0 10 10"
                xmlns="http://www.w3.org/2000/svg"
                className="w-4 h-4"
                fill="currentColor"
              >
                <path d="M9.73535 1.14746C9.57033 1.97255 9.32924 3.26406 9.24902 4.66797C9.16817 6.08312 9.25559 7.5453 9.70214 8.73633C9.84754 9.12406 9.65129 9.55659 9.26367 9.70215C8.9001 9.83849 8.4969 9.67455 8.32812 9.33398L8.29785 9.26367L8.19921 8.98438C7.73487 7.5758 7.67054 5.98959 7.75097 4.58203C7.77875 4.09598 7.82525 3.62422 7.87988 3.17969L1.53027 9.53027C1.23738 9.82317 0.762615 9.82317 0.469722 9.53027C0.176829 9.23738 0.176829 8.76262 0.469722 8.46973L6.83593 2.10254C6.3319 2.16472 5.79596 2.21841 5.25 2.24902C3.8302 2.32862 2.2474 2.26906 0.958003 1.79102L0.704097 1.68945L0.635738 1.65527C0.303274 1.47099 0.157578 1.06102 0.310542 0.704102C0.463655 0.347333 0.860941 0.170391 1.22363 0.28418L1.29589 0.310547L1.48828 0.387695C2.47399 0.751207 3.79966 0.827571 5.16601 0.750977C6.60111 0.670504 7.97842 0.428235 8.86132 0.262695L9.95312 0.0585938L9.73535 1.14746Z"></path>
              </svg>
            </Link>

            {/* Decorative Images */}
            <Image
              src="/assets/img/home2/vector/offer-banner-vector1.svg"
              alt="Vector Decoration"
              width={100}
              height={100}
              className="absolute bottom-0 left-0 w-24 md:w-32"
            />
          </div>

          {/* Right Side (Image) */}
          <div className="bg-primary-hover flex-1 flex justify-center items-center">
            <Image
              src="/assets/img/home2/home2-offer-banner-img.png"
              alt="Offer Banner"
              width={600}
              height={400}
              className="w-full h-full object-contain"
            />
          </div>
        </div>
      </div>

      {/* Floating Balloon at bottom-left of section */}
      <div className="absolute bottom-0 left-4 animate-float">
        <Image
          src="/assets/img/home2/vector/home2-offer-banner-vector.svg"
          alt="Balloon"
          width={120}
          height={120}
          className="w-20 md:w-28"
        />
      </div>

      {/* Floating Animation Keyframes */}
      <style jsx>{`
        @keyframes float {
          0% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-15px);
          }
          100% {
            transform: translateY(0px);
          }
        }
        .animate-float {
          animation: float 3s ease-in-out infinite;
        }
      `}</style>
    </section>
  );
}
