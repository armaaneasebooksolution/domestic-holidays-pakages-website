"use client";
import { useState, useEffect } from "react";
import { Menu, X, ChevronDown, Phone, Search, LogIn } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

const topMessages = [
  "Enjoy Family Holiday Packages with Flexible Payment Options",
  "Book Flights & Hotels at Best Deals",
  "24/7 Customer Support Available",
];

const quickSearchItems = [
  "Thailand Tour",
  "Philippines Tour",
  "Bali Tour",
  "Hawaii",
  "USA Tour",
  "Switzerland Tour",
  "Maldives Tour",
  "Paris Tour",
];

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeSubmenu, setActiveSubmenu] = useState(null);
  const [msgIndex, setMsgIndex] = useState(0);
  const [searchOpen, setSearchOpen] = useState(false);

  // cycle messages in top bar
  useEffect(() => {
    const interval = setInterval(() => {
      setMsgIndex((prev) => (prev + 1) % topMessages.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <header className="w-full relative">
      {/* Top Bar */}
      <div className="bg-primary-gradient text-white text-sm sm:text-md py-3 sm:py-4 flex items-center justify-center relative overflow-hidden tracking-wide font-normal">
        <div key={msgIndex} className="absolute animate-slide">
          {topMessages[msgIndex]}
        </div>
      </div>

      {/* Main Navbar */}
      <nav className="bg-white relative z-40">
        <div className="container mx-auto px-4 flex items-center justify-between py-4">
          {/* Logo */}
          <Link href="/" className="flex items-center">
            <Image
              src="/assets/img/header-logo2.svg"
              alt="Logo"
              width={120}
              height={40}
              priority
            />
          </Link>

          {/* Desktop Menu */}
          <ul className="hidden md:flex gap-12 items-center font-poppins font-semibold text-[#110F0F] text-[15px] leading-[14px]">
            <li>
              <Link
                href="/"
                className=" font-[500] text-[16px] leading-4 tracking-normal transition-colors duration-300 hover:text-primary-hover"
              >
                Home
              </Link>
            </li>

            {/* Destination with Mega Menu */}
            <li className="group relative ">
              <button className="flex items-center font-[500] gap-1 text-[16px] leading-4 tracking-normal transition-colors duration-300 hover:text-primary-hover">
                Destination
                <ChevronDown className="w-4 h-4 transition-transform duration-300 group-hover:rotate-180" />
              </button>
              <div className="absolute z-30 left-0 top-15 w-[50vw] bg-white border border-gray-100 shadow-sm rounded-none opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-500 origin-top transform scale-y-0 group-hover:scale-y-100">
                <div className="px-6 py-6 grid grid-cols-3 gap-6">
                  {/* Popular */}
                  <div>
                    <h3 className="text-[18px] font-semibold mb-3 leading-7 border-b border-gray-200 pb-2 text-title">
                      Popular
                    </h3>
                    {["Main Home", "Alternative Home", "Landing Page"].map(
                      (item) => (
                        <Link
                          key={item}
                          href="/"
                          className="block py-2 text-[16px] font-[400] font-poppins transition-colors hover:text-primary-hover"
                        >
                          {item}
                        </Link>
                      )
                    )}
                  </div>
                  {/* Asia */}
                  <div>
                    <h3 className="text-[18px] font-semibold  mb-3 leading-7 border-b border-gray-200 pb-2 text-title">
                      Asia
                    </h3>
                    {["Dubai", "Bali", "India"].map((item) => (
                      <Link
                        key={item}
                        href="/"
                        className="block py-2 text-[16px] font-[400] font-poppins transition-colors hover:text-primary-hover"
                      >
                        {item}
                      </Link>
                    ))}
                  </div>
                  {/* Europe */}
                  <div>
                    <h3 className="text-[18px] font-semibold  mb-3 leading-7 border-b border-gray-200 pb-2 text-title">
                      Europe
                    </h3>
                    {["Paris", "London", "Rome"].map((item) => (
                      <Link
                        key={item}
                        href="/"
                        className="block py-2 text-[16px] font-[400] font-poppins transition-colors hover:text-primary-hover"
                      >
                        {item}
                      </Link>
                    ))}
                  </div>
                </div>
              </div>
            </li>

            {/* Other links */}
            {["Travel Package", "Contact"].map((item) => (
              <li key={item}>
                <Link
                  href="/"
                  className=" font-[500] text-[16px] leading-4 tracking-normal transition-colors duration-300 hover:text-primary-hover"
                >
                  {item}
                </Link>
              </li>
            ))}
          </ul>

          {/* Right Actions */}
          <div className="hidden md:flex items-center gap-10">
            {/* Search Button */}
            <div className="relative">
              <button
                onClick={() => setSearchOpen(!searchOpen)}
                className="w-10 h-10 rounded-full bg-primary-light flex items-center justify-center transition-transform hover:scale-110 "
              >
                <Search className="w-5 h-5 text-primary" />
              </button>
              {/* Search Input Dropdown */}
              <div
                className={`absolute top-18 right-0 w-[400px] bg-white shadow-md border-b border-gray-200 z-30 transition-all duration-500 ease-in-out ${
                  searchOpen
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 -translate-y-5 pointer-events-none"
                }`}
              >
                <div className="container mx-auto px-6 py-6 relative">
                  {/* Close Button */}
                  <button
                    onClick={() => setSearchOpen(false)}
                    className="absolute right-6 top-6 text-gray-600 hover:text-primary-hover transition-colors cursor-pointer"
                  >
                    <X className="w-6 h-6" />
                  </button>

                  {/* Search Input */}
                  <div className="flex items-center border-b border-gray-400 pb-2">
                    <input
                      type="text"
                      placeholder="Find Your Perfect Tour Package"
                      className="w-full px-2 py-2 text-gray-700 placeholder-gray-400 focus:outline-none font-poppins"
                    />
                  </div>

                  {/* Quick Search Links */}
                  <div className="mt-4 text-sm text-gray-700">
                    <span className="font-semibold mr-2">Quick Search :</span>
                    <span className="text-gray-600">
                      {quickSearchItems.join(", ")}
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* Phone */}
            <Link href="tel:+91-000-000-0000">
              <div className="flex items-center gap-2 text-sm bg-primary-gradient-light px-4 py-2 rounded-md bg-primary-light">
                <div className="w-12 h-12 rounded-full bg-primary-light flex items-center justify-center ">
                  <Image
                    src="/assets/img/icons/customer-service.png"
                    alt="Customer Service"
                    width={40}
                    height={40}
                  />
                </div>
                <div className="flex flex-col items-start justify-center font-poppins">
                  <span className="text-[16px] font-[400] text-dark">
                    Need Help?
                  </span>
                  <span className="text-[16px] font-semibold text-dark">
                    +91-000-000-0000
                  </span>
                </div>
              </div>
            </Link>

            {/* Login Button */}
            <a
              href="#_"
              className="relative rounded-md px-5 py-2.5 overflow-hidden group bg-primary-gradient hover:bg-gradient-to-r hover:from-primary-light0 hover:to-blue-600 text-white hover:ring-2 hover:ring-offset-2 hover:ring-primary-light0 transition-all ease-out duration-300 flex items-center gap-1 font-poppins"
            >
              <span className="absolute right-0 w-8 h-32 -mt-12 transition-all duration-1000 transform translate-x-12 bg-white opacity-10 rotate-12 group-hover:-translate-x-40 ease"></span>
              <LogIn className="w-4 h-4 mr-2" /> Login
            </a>
          </div>

          {/* Mobile Menu Toggle */}
          <button
            className="md:hidden"
            onClick={() => setMobileOpen(!mobileOpen)}
          >
            {mobileOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </button>
        </div>

        {/* Mobile Side Panel */}
        <div
          className={`fixed top-0 left-0 h-full w-72 bg-white shadow-lg transform transition-transform duration-500 z-50 ${
            mobileOpen ? "translate-x-0" : "-translate-x-full"
          }`}
        >
          <div className="flex items-center justify-between px-4 py-3 border-b">
            <h2 className="font-bold text-lg">Menu</h2>
            <button onClick={() => setMobileOpen(false)}>
              <X className="w-6 h-6" />
            </button>
          </div>
          <ul className="p-4 space-y-3">
            {[
              "Home",
              "Destination",
              "Travel Package",
              "Visa",
              "Pages",
              "Contact",
            ].map((item) => (
              <li key={item}>
                <button
                  className="flex justify-between items-center w-full font-medium transition-colors hover:text-primary-hover"
                  onClick={() =>
                    setActiveSubmenu(activeSubmenu === item ? null : item)
                  }
                >
                  {item}
                  <ChevronDown
                    className={`w-4 h-4 transform transition-transform ${
                      activeSubmenu === item ? "rotate-180" : ""
                    }`}
                  />
                </button>
                {activeSubmenu === item && (
                  <ul className="ml-4 mt-2 space-y-2 text-sm text-gray-600">
                    <li className="hover:text-primary-hover">Submenu 1</li>
                    <li className="hover:text-primary-hover">Submenu 2</li>
                    <li className="hover:text-primary-hover">Submenu 3</li>
                  </ul>
                )}
              </li>
            ))}
          </ul>
        </div>
      </nav>

      {/* Full-width Search Dropdown */}

      {/* ✅ Animations */}
      <style jsx>{`
        .animate-slide {
          animation: slide 0.6s ease-in-out forwards;
        }
        @keyframes slide {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </header>
  );
}
