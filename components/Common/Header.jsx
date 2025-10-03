"use client";
import { useState, useEffect, useRef } from "react";
import {
  Search,
  X,
  User,
  LogIn,
  LogOut,
  Settings,
  ChevronDown,
  Menu,
  Phone,
} from "lucide-react";
import Link from "next/link";
import Image from "next/image";

// Top banner messages that rotate every 5 seconds
const topMessages = [
  "Enjoy Family Holiday Packages with Flexible Payment Options",
  "Book Flights & Hotels at Best Deals",
  "24/7 Customer Support Available",
];

// Quick search suggestions for the search bar
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
  // State management for mobile menu, dropdowns, and user authentication
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeSubmenu, setActiveSubmenu] = useState(null);
  const [msgIndex, setMsgIndex] = useState(0);
  const [searchOpen, setSearchOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [isClosing, setIsClosing] = useState(false);

  // User authentication state - null when logged out, object when logged in
  const [user, setUser] = useState(null);

  // Refs for handling click outside dropdown and mobile menu
  const dropdownRef = useRef(null);
  const mobileMenuRef = useRef(null);
  const overlayRef = useRef(null);

  // Rotate top banner messages every 5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setMsgIndex((prev) => (prev + 1) % topMessages.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  // Close mobile menu with smooth animation
  const closeMobileMenu = () => {
    setIsClosing(true);
    setTimeout(() => {
      setMobileOpen(false);
      setIsClosing(false);
    }, 300);
  };

  // Handle user login with dummy data
  // const handleLogin = () => {
  //   setUser({
  //     name: "Armaan Ahmad",
  //     email: "armaan@example.com",
  //     image: "/assets/img/home1/user.png",
  //   });
  //   closeMobileMenu();
  // };

  // Handle user logout
  const handleLogout = () => {
    setUser(null);
    setDropdownOpen(false);
    closeMobileMenu();
  };

  // Close dropdowns when clicking outside
  useEffect(() => {
    function handleClickOutside(e) {
      // Close user dropdown when clicking outside
      if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
        setDropdownOpen(false);
      }

      // Close mobile menu when clicking on overlay
      if (
        overlayRef.current &&
        overlayRef.current.contains(e.target) &&
        mobileOpen
      ) {
        closeMobileMenu();
      }
    }

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [mobileOpen]);

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    if (mobileOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }

    return () => {
      document.body.style.overflow = "unset";
    };
  }, [mobileOpen]);

  return (
    <header className="relative w-full">
      {/* Top Banner with rotating messages */}
      <div className="bg-primary-gradient sm:text-md relative hidden items-center justify-center overflow-hidden py-3 text-sm font-normal tracking-wide text-white sm:py-4 md:flex">
        <div key={msgIndex} className="animate-slide absolute px-4 text-center">
          {topMessages[msgIndex]}
        </div>
      </div>

      {/* Main Navigation Bar */}
      <nav className="relative z-40 bg-white">
        <div className="container mx-auto px-4 py-6 md:py-4">
          {/* Mobile Layout - Hidden on desktop */}
          <div className="flex items-center justify-between md:hidden">
            {/* Logo */}
            <Link href="/" className="flex items-center">
              <Image
                src="/assets/img/header-logo2.svg"
                alt="Travel Explorer Logo"
                width={100}
                height={35}
                priority
                className="h-8 w-auto"
              />
            </Link>

            {/* Mobile Action Buttons */}
            <div className="flex items-center gap-3">
              {/* Search Button - Only show search in mobile */}
              <button
                onClick={() => setSearchOpen(!searchOpen)}
                className="bg-primary-light flex h-9 w-9 items-center justify-center rounded-full transition-transform hover:scale-110"
                aria-label="Open search"
              >
                <Search className="text-primary h-4 w-4" />
              </button>

              {/* Menu Toggle Button */}
              <button
                className="ml-1"
                onClick={() => setMobileOpen(!mobileOpen)}
                aria-label="Toggle menu"
              >
                {mobileOpen ? (
                  <X className="h-6 w-6" />
                ) : (
                  <Menu className="h-6 w-6" />
                )}
              </button>
            </div>
          </div>

          {/* Desktop Layout - Hidden on mobile */}
          <div className="hidden items-center justify-between md:flex">
            {/* Logo */}
            <Link href="/" className="flex items-center">
              <Image
                src="/assets/img/header-logo2.svg"
                alt="Travel Explorer Logo"
                width={120}
                height={40}
                priority
              />
            </Link>

            {/* Desktop Navigation Menu */}
            <ul className="font-poppins flex items-center gap-8 text-[15px] leading-[14px] font-semibold text-[#110F0F] lg:gap-12">
              <li>
                <Link
                  href="/"
                  className="hover:text-primary-hover text-[16px] leading-4 font-[500] tracking-normal transition-colors duration-300"
                >
                  Home
                </Link>
              </li>

              {/* Destination Dropdown with Mega Menu */}
              <li className="group relative">
                <button className="hover:text-primary-hover flex items-center gap-1 text-[16px] leading-4 font-[500] tracking-normal transition-colors duration-300">
                  Destination
                  <ChevronDown className="h-4 w-4 transition-transform duration-300 group-hover:rotate-180" />
                </button>
                <div className="invisible absolute top-15 left-0 z-30 w-[50vw] origin-top scale-y-0 transform rounded-lg border border-gray-100 bg-white opacity-0 shadow-sm transition-all duration-500 group-hover:visible group-hover:scale-y-100 group-hover:opacity-100">
                  <div className="grid grid-cols-3 gap-6 px-6 py-6">
                    {/* Popular Destinations */}
                    <div>
                      <h3 className="text-title mb-3 border-b border-gray-200 pb-2 text-[18px] leading-7 font-semibold">
                        Popular
                      </h3>
                      {["Main Home", "Alternative Home", "Landing Page"].map(
                        (item) => (
                          <Link
                            key={item}
                            href="/"
                            className="font-poppins hover:text-primary-hover block py-2 text-[16px] font-[400] transition-colors"
                          >
                            {item}
                          </Link>
                        ),
                      )}
                    </div>
                    {/* Asia Destinations */}
                    <div>
                      <h3 className="text-title mb-3 border-b border-gray-200 pb-2 text-[18px] leading-7 font-semibold">
                        Asia
                      </h3>
                      {["Dubai", "Bali", "India"].map((item) => (
                        <Link
                          key={item}
                          href="/"
                          className="font-poppins hover:text-primary-hover block py-2 text-[16px] font-[400] transition-colors"
                        >
                          {item}
                        </Link>
                      ))}
                    </div>
                    {/* Europe Destinations */}
                    <div>
                      <h3 className="text-title mb-3 border-b border-gray-200 pb-2 text-[18px] leading-7 font-semibold">
                        Europe
                      </h3>
                      {["Paris", "London", "Rome"].map((item) => (
                        <Link
                          key={item}
                          href="/"
                          className="font-poppins hover:text-primary-hover block py-2 text-[16px] font-[400] transition-colors"
                        >
                          {item}
                        </Link>
                      ))}
                    </div>
                  </div>
                </div>
              </li>

              {/* Additional Navigation Links */}
              {["Travel Package", "Contact"].map((item) => (
                <li key={item}>
                  <Link
                    href="/"
                    className="hover:text-primary-hover text-[16px] leading-4 font-[500] tracking-normal transition-colors duration-300"
                  >
                    {item}
                  </Link>
                </li>
              ))}
            </ul>

            {/* Desktop Right Side Actions */}
            <div className="flex items-center gap-6 lg:gap-10">
              {/* Search Button */}
              <div className="relative">
                <button
                  onClick={() => setSearchOpen(!searchOpen)}
                  className="bg-primary-light flex h-10 w-10 items-center justify-center rounded-full transition-transform hover:scale-110"
                  aria-label="Open search"
                >
                  <Search className="text-primary h-5 w-5" />
                </button>

                {/* Search Dropdown Panel */}
                <div
                  className={`absolute top-18 right-0 z-30 w-[400px] rounded-lg border-b border-gray-200 bg-white shadow-md transition-all duration-500 ease-in-out ${
                    searchOpen
                      ? "translate-y-0 opacity-100"
                      : "pointer-events-none -translate-y-5 opacity-0"
                  }`}
                >
                  <div className="relative container mx-auto px-6 py-6">
                    {/* Close Search Button */}
                    <button
                      onClick={() => setSearchOpen(false)}
                      className="hover:text-primary-hover absolute top-6 right-6 cursor-pointer text-gray-600 transition-colors"
                      aria-label="Close search"
                    >
                      <X className="h-6 w-6" />
                    </button>

                    {/* Search Input Field */}
                    <div className="flex items-center border-b border-gray-400 pb-2">
                      <input
                        type="text"
                        placeholder="Find Your Perfect Tour Package"
                        className="font-poppins w-full px-2 placeholder-gray-400 focus:outline-none"
                      />
                    </div>

                    {/* Quick Search Suggestions */}
                    <div className="mt-4 text-sm">
                      <span className="mr-2 font-semibold">Quick Search :</span>
                      <span className="text-gray-600">
                        {quickSearchItems.join(", ")}
                      </span>
                    </div>
                  </div>
                </div>
              </div>

              {/* User Account Dropdown - Desktop Only */}
              <div className="relative hidden md:block" ref={dropdownRef}>
                <button
                  onClick={() => setDropdownOpen(!dropdownOpen)}
                  className="bg-primary-light text-primary flex h-10 w-10 items-center justify-center rounded-full transition-transform hover:scale-110"
                  aria-label="User account"
                >
                  {user ? (
                    <Image
                      src={user.image}
                      alt={user.name}
                      width={40}
                      height={40}
                      className="h-10 w-10 rounded-full object-cover"
                    />
                  ) : (
                    <User className="h-5 w-5" />
                  )}
                </button>

                {/* User Dropdown Menu */}
                <div
                  className={`absolute top-18 right-0 z-40 w-48 rounded-lg bg-white shadow-lg transition-all duration-500 ease-in-out ${
                    dropdownOpen
                      ? "translate-y-0 opacity-100"
                      : "pointer-events-none -translate-y-5 opacity-0"
                  }`}
                >
                  {user ? (
                    // Logged In State
                    <div className="border-b p-3">
                      <p className="text-sm font-semibold">{user.name}</p>
                      <p className="text-xs">{user.email}</p>
                    </div>
                  ) : null}

                  <ul className="p-2 text-sm">
                    {user ? (
                      // User is logged in - show profile options
                      <>
                        <li>
                          <Link
                            href="/profile"
                            className="hover:text-primary-hover flex items-center gap-2 rounded-md px-3 py-2 text-[16px] leading-4 font-[400] hover:bg-gray-100"
                          >
                            <User className="h-4 w-4" /> Profile
                          </Link>
                        </li>
                        <li>
                          <Link
                            href="/settings"
                            className="hover:text-primary-hover font-[400 hover:bg-gray-100] flex items-center gap-2 rounded-md px-3 py-2 text-[16px] leading-4"
                          >
                            <Settings className="h-4 w-4" /> Settings
                          </Link>
                        </li>
                        <li>
                          <button
                            onClick={handleLogout}
                            className="hover:text-primary-hover flex w-full items-center gap-2 rounded-md px-3 py-2 text-left text-[16px] leading-4 font-[400] hover:bg-gray-100"
                          >
                            <LogOut className="h-4 w-4" /> Logout
                          </button>
                        </li>
                      </>
                    ) : (
                      // User is logged out - show login options
                      <>
                        <li>
                          <Link
                            href="/auth/sign-in"
                            className="hover:text-primary-hover flex w-full items-center gap-2 rounded-md px-3 py-2 text-left text-[16px] leading-4 font-[400] hover:bg-gray-100"
                          >
                            <LogIn className="h-4 w-4" /> Login
                          </Link>
                        </li>
                        <li>
                          <Link
                            href="/auth/sign-up"
                            className="hover:text-primary-hover flex items-center gap-2 rounded-md px-3 py-2 text-[16px] leading-4 font-[400] hover:bg-gray-100"
                          >
                            <User className="h-4 w-4" /> Register
                          </Link>
                        </li>
                      </>
                    )}
                  </ul>
                </div>
              </div>

              {/* Customer Service Phone Number */}
              <Link href="tel:+91-000-000-0000">
                <div className="bg-primary-gradient-light bg-primary-light hidden items-center gap-2 rounded-md px-4 py-2 text-sm shadow-sm transition hover:shadow-md lg:flex">
                  <div className="bg-primary-light flex h-12 w-12 items-center justify-center rounded-full">
                    <Image
                      src="/assets/img/icons/customer-service.png"
                      alt="Customer Service"
                      width={40}
                      height={40}
                    />
                  </div>
                  <div className="font-poppins flex flex-col items-start justify-center">
                    <span className="text-dark text-[16px] font-[400]">
                      Need Help?
                    </span>
                    <span className="text-dark text-[16px] font-semibold">
                      +91-000-000-0000
                    </span>
                  </div>
                </div>
              </Link>
            </div>
          </div>

          {/* Mobile Search Bar - Appears below header when search is open */}
          {searchOpen && (
            <div className="mt-3 md:hidden">
              <div className="relative border border-gray-200 bg-white p-3 shadow-sm">
                <button
                  onClick={() => setSearchOpen(false)}
                  className="absolute top-3 right-3 text-gray-500"
                  aria-label="Close search"
                >
                  <X className="h-5 w-5" />
                </button>
                <div className="flex items-center border-b border-gray-300 pb-2">
                  <input
                    type="text"
                    placeholder="Find Your Perfect Tour Package"
                    className="font-poppins w-full px-2 py-1 text-gray-700 placeholder-gray-400 focus:outline-none"
                  />
                </div>
                <div className="mt-2 text-sm text-gray-700">
                  <span className="mr-2 font-semibold">Quick Search :</span>
                  <div className="mt-1 flex flex-wrap gap-1 text-gray-600">
                    {quickSearchItems.slice(0, 4).map((item, index) => (
                      <span key={index} className="text-xs">
                        {item}
                        {index < 3 ? "," : ""}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Mobile Side Panel Menu */}
        {(mobileOpen || isClosing) && (
          <>
            {/* Overlay for mobile menu with backdrop blur */}
            <div
              ref={overlayRef}
              className={`fixed inset-0 z-[100] bg-black transition-all duration-500 ease-out md:hidden ${
                mobileOpen && !isClosing
                  ? "bg-opacity-50 backdrop-blur-sm"
                  : "bg-opacity-0 backdrop-blur-0"
              } ${isClosing ? "bg-opacity-0" : ""}`}
              onClick={closeMobileMenu}
            />

            {/* Mobile Side Panel Content */}
            <div
              ref={mobileMenuRef}
              className={`fixed top-0 left-0 z-[101] h-full w-80 max-w-[85vw] transform bg-white shadow-2xl transition-all duration-500 ease-out md:hidden ${
                mobileOpen && !isClosing
                  ? "translate-x-0 opacity-100"
                  : "-translate-x-full opacity-0"
              } ${isClosing ? "-translate-x-full opacity-0" : ""}`}
            >
              {/* Mobile Panel Header */}
              <div className="border-b border-gray-200 px-6 py-4">
                <div className="flex items-center justify-between">
                  <Link href="/" onClick={closeMobileMenu}>
                    <div className="flex items-center gap-3">
                      <Image
                        src="/assets/img/header-logo2.svg"
                        alt="Travel Explorer Logo"
                        width={120}
                        height={40}
                        className="w-auto"
                      />
                    </div>
                  </Link>
                  <button
                    onClick={closeMobileMenu}
                    className="hover:bg-opacity-20 rounded-full p-2 transition-all duration-300 hover:scale-110 hover:bg-white"
                    aria-label="Close menu"
                  >
                    <X className="text-primary h-5 w-5" />
                  </button>
                </div>
              </div>

              {/* User Authentication Section */}
              <div className="border-b border-gray-200 bg-white px-6 py-5 transition-all duration-300 hover:bg-gray-50">
                {user ? (
                  // User is logged in - show profile info
                  <div className="animate-fade-in flex items-center gap-3">
                    <div className="relative">
                      <Image
                        src={user.image}
                        alt={user.name}
                        width={48}
                        height={48}
                        className="ring-primary h-12 w-12 rounded-full object-cover ring-2 ring-offset-2 transition-all duration-300 hover:ring-4"
                      />
                      <div className="absolute -right-1 -bottom-1 h-4 w-4 rounded-full bg-green-500 ring-2 ring-white"></div>
                    </div>
                    <div className="min-w-0 flex-1">
                      <p className="truncate font-semibold text-gray-800">
                        {user.name}
                      </p>
                      <p className="truncate text-sm text-gray-500">
                        {user.email}
                      </p>
                    </div>
                  </div>
                ) : (
                  // User is logged out - show login/register buttons
                  <div className="animate-fade-in flex gap-3">
                    <Link
                      href="/auth/sign-in"
                      className="border-primary text-primary hover:bg-primary-light flex-1 rounded-lg border bg-white px-4 py-3 text-center font-normal transition-all duration-300 hover:scale-105 hover:shadow-sm"
                    >
                      <LogIn className="mr-2 inline h-4 w-4" />
                      Login
                    </Link>
                    <Link
                      href="/auth/sign-up"
                      onClick={closeMobileMenu}
                      className="bg-primary-gradient flex-1 rounded-lg px-4 py-3 text-center font-normal text-white transition-all duration-300 hover:scale-105 hover:shadow-md"
                    >
                      <User className="mr-2 inline h-4 w-4" />
                      Register
                    </Link>
                  </div>
                )}
              </div>

              {/* Mobile Navigation Menu */}
              <nav className="flex-1 overflow-y-auto px-6 py-4">
                <ul className="space-y-0">
                  {[
                    { name: "Home", href: "/" },
                    { name: "Destination", hasSubmenu: true },
                    { name: "Travel Package", href: "/packages" },
                    { name: "Contact", href: "/contact" },
                  ].map((item, index) => (
                    <li
                      key={item.name}
                      className="group animate-fade-in border-b border-gray-100 last:border-b-0"
                      style={{ animationDelay: `${index * 100}ms` }}
                    >
                      <div className="transition-all duration-300 hover:bg-gray-50">
                        {item.hasSubmenu ? (
                          // Dropdown menu item
                          <button
                            className="font-poppins hover:text-primary-hover flex w-full items-center justify-between px-2 py-4 text-left text-[16px] font-[500] transition-all duration-300"
                            onClick={() =>
                              setActiveSubmenu(
                                activeSubmenu === item.name ? null : item.name,
                              )
                            }
                          >
                            <span>{item.name}</span>
                            <ChevronDown
                              className={`h-4 w-4 transform transition-transform duration-300 ${
                                activeSubmenu === item.name ? "rotate-180" : ""
                              } text-primary`}
                            />
                          </button>
                        ) : (
                          // Regular menu item
                          <Link
                            href={item.href}
                            onClick={closeMobileMenu}
                            className="font-poppins hover:text-primary-hover flex w-full items-center justify-between px-2 py-4 text-[16px] font-[500] transition-all duration-300"
                          >
                            <span>{item.name}</span>
                            <ChevronDown className="h-4 w-4 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                          </Link>
                        )}

                        {/* Dropdown Content for Destination */}
                        {item.hasSubmenu && activeSubmenu === item.name && (
                          <div className="animate-slide-down overflow-hidden border-t border-gray-100">
                            <div className="space-y-4 bg-gray-50 px-2 py-4">
                              <div>
                                <h4 className="text-title mb-3 border-b border-gray-200 pb-2 text-[16px] leading-7 font-semibold">
                                  Popular
                                </h4>
                                <ul className="space-y-2">
                                  {[
                                    "Main Home",
                                    "Alternative Home",
                                    "Landing Page",
                                  ].map((subItem) => (
                                    <li key={subItem}>
                                      <Link
                                        href="/"
                                        onClick={closeMobileMenu}
                                        className="font-poppins hover:text-primary-hover block rounded-lg px-3 py-2 text-[16px] font-[400] text-gray-600 transition-all duration-300 hover:translate-x-1 hover:bg-white"
                                      >
                                        {subItem}
                                      </Link>
                                    </li>
                                  ))}
                                </ul>
                              </div>
                              <div>
                                <h4 className="text-title mb-3 border-b border-gray-200 pb-2 text-[16px] leading-7 font-semibold">
                                  Asia
                                </h4>
                                <ul className="space-y-2">
                                  {["Dubai", "Bali", "India"].map((subItem) => (
                                    <li key={subItem}>
                                      <Link
                                        href="/"
                                        onClick={closeMobileMenu}
                                        className="font-poppins hover:text-primary-hover block rounded-lg px-3 py-2 text-[16px] font-[400] text-gray-600 transition-all duration-300 hover:translate-x-1 hover:bg-white"
                                      >
                                        {subItem}
                                      </Link>
                                    </li>
                                  ))}
                                </ul>
                              </div>
                              <div>
                                <h4 className="text-title mb-3 border-b border-gray-200 pb-2 text-[16px] leading-7 font-semibold">
                                  Europe
                                </h4>
                                <ul className="space-y-2">
                                  {["Paris", "London", "Rome"].map(
                                    (subItem) => (
                                      <li key={subItem}>
                                        <Link
                                          href="/"
                                          onClick={closeMobileMenu}
                                          className="font-poppins hover:text-primary-hover block rounded-lg px-3 py-2 text-[16px] font-[400] text-gray-600 transition-all duration-300 hover:translate-x-1 hover:bg-white"
                                        >
                                          {subItem}
                                        </Link>
                                      </li>
                                    ),
                                  )}
                                </ul>
                              </div>
                            </div>
                          </div>
                        )}
                      </div>
                    </li>
                  ))}
                </ul>
              </nav>

              {/* Customer Support Section */}
              <div className="border-t border-gray-200 bg-gray-50 px-4 py-6">
                <Link
                  href="tel:+91-000-000-0000"
                  onClick={closeMobileMenu}
                  className="group flex items-center gap-4 rounded-xl bg-white transition-all duration-300 hover:scale-105 hover:shadow-md"
                >
                  <div className="bg-primary-light flex h-14 w-14 items-center justify-center rounded-full transition-all duration-300 group-hover:scale-110">
                    <Image
                      src="/assets/img/icons/customer-service.png"
                      alt="Customer Service"
                      width={32}
                      height={32}
                      className="h-8 w-8"
                    />
                  </div>
                  <div className="flex-1">
                    <p className="text-dark text-sm font-[400]">Need Help?</p>
                    <p className="text-dark text-lg font-semibold">
                      +91-000-000-0000
                    </p>
                    <p className="text-dark mt-1 text-xs font-[400]">
                      24/7 Customer Support
                    </p>
                  </div>
                  <div className="translate-x-2 transform opacity-0 transition-all duration-300 group-hover:translate-x-0 group-hover:opacity-100">
                    <div className="bg-primary h-2 w-2 animate-pulse rounded-full"></div>
                  </div>
                </Link>
              </div>
            </div>
          </>
        )}
      </nav>

      {/* CSS Animations */}
      <style jsx>{`
        .animate-slide {
          animation: slide 0.6s ease-in-out forwards;
        }

        .animate-fade-in {
          animation: fadeIn 0.6s ease-out forwards;
          opacity: 0;
          transform: translateY(20px);
        }

        .animate-slide-down {
          animation: slideDown 0.4s ease-out forwards;
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

        @keyframes fadeIn {
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes slideDown {
          from {
            opacity: 0;
            transform: translateY(-10px);
            max-height: 0;
          }
          to {
            opacity: 1;
            transform: translateY(0);
            max-height: 500px;
          }
        }
      `}</style>
    </header>
  );
}
