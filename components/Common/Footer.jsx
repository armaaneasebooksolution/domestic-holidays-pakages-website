"use client";
import Image from "next/image";
import Link from "next/link";
import {
  FaFacebookF,
  FaLinkedinIn,
  FaInstagram,
  FaYoutube,
} from "react-icons/fa";
import { FaWhatsapp, FaEnvelope, FaPhone } from "react-icons/fa6";

export default function Footer() {
  return (
    <footer className="relative bg-[#0d0d0d] text-gray-300">
      <div className="container mx-auto grid grid-cols-1 gap-12 px-6 py-14 md:grid-cols-2 lg:grid-cols-4">
        {/* Column 1 - Logo & Address */}
        <div>
          <div className="mb-4 flex items-center gap-2">
            <Image
              src="/assets/img/footer-logo.svg"
              alt="GoFly Logo"
              width={140}
              height={40}
            />
          </div>
          <p className="mb-2 font-semibold text-white">GoFly Travel Agency</p>
          <p className="text-sm">
            Skyline Plaza, 5th Floor, 123 Main Street <br />
            Los Angeles, CA 90001, USA
          </p>

          {/* Social Icons */}
          <div className="mt-5 flex gap-4">
            <Link href="#" className="hover:text-primary">
              <FaFacebookF />
            </Link>
            <Link href="#" className="hover:text-primary">
              <FaLinkedinIn />
            </Link>
            <Link href="#" className="hover:text-primary">
              <FaInstagram />
            </Link>
            <Link href="#" className="hover:text-primary">
              <FaYoutube />
            </Link>
          </div>

          {/* Language Selector */}
          <div className="mt-5">
            <select className="rounded-md border border-gray-600 bg-[#1a1a1a] px-3 py-2 text-sm text-white focus:outline-none">
              <option>EN</option>
              <option>FR</option>
              <option>ES</option>
            </select>
          </div>
        </div>

        {/* Column 2 - Quick Links */}
        <div>
          <h3 className="mb-4 text-lg font-semibold text-white">Quick Links</h3>
          <ul className="space-y-2 text-sm">
            <li>
              <Link href="#" className="hover:text-primary">
                About GoFly
              </Link>
            </li>
            <li>
              <Link href="#" className="hover:text-primary">
                Visa Processing
              </Link>
            </li>
            <li>
              <Link href="#" className="hover:text-primary">
                News & Event
              </Link>
            </li>
            <li>
              <Link href="#" className="hover:text-primary">
                Customer Reviews
              </Link>
            </li>
            <li>
              <Link href="#" className="hover:text-primary">
                Terms & Condition
              </Link>
            </li>
            <li>
              <Link href="#" className="hover:text-primary">
                Sitemap
              </Link>
            </li>
          </ul>
        </div>

        {/* Column 3 - Our Services */}
        <div>
          <h3 className="mb-4 text-lg font-semibold text-white">
            Our Services
          </h3>
          <ul className="space-y-2 text-sm">
            <li>
              <Link href="#" className="hover:text-primary">
                Tourist Visa
              </Link>
            </li>
            <li>
              <Link href="#" className="hover:text-primary">
                Business Visa
              </Link>
            </li>
            <li>
              <Link href="#" className="hover:text-primary">
                Student Visa
              </Link>
            </li>
            <li>
              <Link href="#" className="hover:text-primary">
                Work Permit Visa
              </Link>
            </li>
            <li>
              <Link href="#" className="hover:text-primary">
                Family & Spouse Visa
              </Link>
            </li>
          </ul>
        </div>

        {/* Column 4 - Contact Info */}
        <div>
          <h3 className="mb-4 text-lg font-semibold text-white">
            Contact Info
          </h3>
          <ul className="space-y-4 text-sm">
            <li className="flex items-center gap-3">
              <FaWhatsapp className="text-lg text-green-500" />
              <span>
                <strong>WhatsApp</strong>
                <br />
                +91 345 533 865
              </span>
            </li>
            <li className="flex items-center gap-3">
              <FaEnvelope className="text-lg text-green-500" />
              <span>
                <strong>Mail Us</strong>
                <br />
                info@example.com
              </span>
            </li>
            <li className="flex items-center gap-3">
              <FaPhone className="text-lg text-blue-500" />
              <span>
                <strong>More Inquiry</strong>
                <br />
                +91 456 453 345
              </span>
            </li>
          </ul>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="container mx-auto flex flex-col items-center justify-between border-t border-gray-700 px-6 py-5 text-sm md:flex-row">
        <p className="text-gray-400">
          Copyright © 2025{" "}
          <span className="font-semibold text-white">Easebook</span>. All Right
          Reserved.
        </p>
        <div className="mt-4 flex items-center gap-3 md:mt-0">
          <p className="text-gray-400">Accepted Payment Methods :</p>
          <Image
            src="/assets/img/home1/icon/mastar-card-icon.svg"
            alt="Mastercard"
            width={40}
            height={25}
          />
          <Image
            src="/assets/img/home1/icon/visa-icon.svg"
            alt="Visa"
            width={40}
            height={25}
          />
          <Image
            src="/assets/img/home1/icon/paypal-icon.svg"
            alt="Paypal"
            width={40}
            height={25}
          />
          <Image
            src="/assets/img/home1/icon/gpay-icon.svg"
            alt="Google Pay"
            width={40}
            height={25}
          />
        </div>
      </div>
    </footer>
  );
}
