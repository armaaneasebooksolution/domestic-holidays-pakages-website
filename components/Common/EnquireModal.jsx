"use client";

import { useState, useEffect } from "react";
import { X } from "lucide-react";

export default function EnquireModal() {
  const [isOpen, setIsOpen] = useState(false);
  const [formData, setFormData] = useState({
    destination: "",
    departure: "",
    name: "",
    phone: "",
    email: "",
  });
  const [agreed, setAgreed] = useState(false);

  // ✅ Auto open modal after 10s
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsOpen(true);
    }, 10000);
    return () => clearTimeout(timer);
  }, []);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!agreed) {
      alert("Please agree to the User Agreement & Privacy Policy");
      return;
    }
    console.log("Form submitted:", formData);
    alert(
      "Thank you for your inquiry! Our holiday expert will contact you soon.",
    );
    setIsOpen(false);
  };

  return (
    <>
      {/* Modal */}
      {isOpen && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 px-4 py-6"
          onClick={(e) => e.target === e.currentTarget && setIsOpen(false)}
        >
          <div className="animate-fadeIn w-full max-w-2xl rounded-2xl bg-white p-8 shadow-xl">
            {/* Header */}
            <div className="mb-8 flex items-center justify-between">
              <h1 className="font-poppins text-2xl font-bold text-gray-900">
                Get a Quote
              </h1>
              <button
                onClick={() => setIsOpen(false)}
                className="rounded-full p-2 hover:bg-gray-100"
              >
                <X className="h-5 w-5 text-gray-500" />
              </button>
            </div>
            <p className="font-poppins mb-8 text-center text-gray-600">
              Please share your details below and our holiday expert will get in
              touch with you.
            </p>

            {/* Form */}
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Destination & Departure */}
              <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
                <div>
                  <label className="font-poppins mb-2 block text-sm font-medium text-gray-700">
                    Destination*
                  </label>
                  <input
                    type="text"
                    name="destination"
                    value={formData.destination}
                    onChange={handleInputChange}
                    required
                    placeholder="e.g. Goa"
                    className="font-poppins focus:ring-opacity-20 block w-full rounded-lg border border-gray-300 bg-white px-4 py-3 text-gray-900 placeholder-gray-500 transition-all duration-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-500"
                  />
                </div>
                <div>
                  <label className="font-poppins mb-2 block text-sm font-medium text-gray-700">
                    Departure City*
                  </label>
                  <input
                    type="text"
                    name="departure"
                    value={formData.departure}
                    onChange={handleInputChange}
                    required
                    placeholder="e.g. New Delhi"
                    className="font-poppins focus:ring-opacity-20 block w-full rounded-lg border border-gray-300 bg-white px-4 py-3 text-gray-900 placeholder-gray-500 transition-all duration-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-500"
                  />
                </div>
              </div>

              {/* Name & Phone */}
              <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
                <div>
                  <label className="font-poppins mb-2 block text-sm font-medium text-gray-700">
                    Name*
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                    placeholder="Your Name"
                    className="font-poppins focus:ring-opacity-20 block w-full rounded-lg border border-gray-300 bg-white px-4 py-3 text-gray-900 placeholder-gray-500 transition-all duration-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-500"
                  />
                </div>
                <div>
                  <label className="font-poppins mb-2 block text-sm font-medium text-gray-700">
                    Phone*
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    required
                    placeholder="Phone Number"
                    className="font-poppins focus:ring-opacity-20 block w-full rounded-lg border border-gray-300 bg-white px-4 py-3 text-gray-900 placeholder-gray-500 transition-all duration-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-500"
                  />
                </div>
              </div>

              {/* Email */}
              <div>
                <label className="font-poppins mb-2 block text-sm font-medium text-gray-700">
                  Email ID*
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  required
                  placeholder="Email Address"
                  className="font-poppins focus:ring-opacity-20 block w-full rounded-lg border border-gray-300 bg-white px-4 py-3 text-gray-900 placeholder-gray-500 transition-all duration-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-500"
                />
              </div>

              {/* Agreement */}
              <div className="flex items-start space-x-2">
                <input
                  type="checkbox"
                  id="agree"
                  checked={agreed}
                  onChange={(e) => setAgreed(e.target.checked)}
                  className="text-primary focus:ring-primary mt-1 h-5 w-5 rounded border-gray-300"
                />
                <label
                  htmlFor="agree"
                  className="font-poppins text-sm text-gray-700"
                >
                  I have read and agree to the{" "}
                  <a
                    href="/privacy"
                    className="font-poppins text-primary hover:text-primary-hover font-semibold"
                  >
                    User Agreement & Privacy Policy
                  </a>
                  .
                </label>
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                className="bg-primary-gradient hover:shadow-primary/25 font-poppins w-full rounded-lg px-4 py-3 font-semibold text-white transition-all duration-300 hover:shadow-lg"
              >
                Submit
              </button>
            </form>

            {/* Footer */}
            <div className="mt-8 border-t pt-6 text-center">
              <p className="font-poppins text-sm text-gray-500">
                1200+ Travel Experts | 40 Lac+ Travellers | 65+ Destinations
              </p>
            </div>
          </div>
        </div>
      )}

      {/* Animation */}
      <style jsx>{`
        .animate-fadeIn {
          animation: fadeIn 0.3s ease-in-out;
        }
        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(-20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </>
  );
}
