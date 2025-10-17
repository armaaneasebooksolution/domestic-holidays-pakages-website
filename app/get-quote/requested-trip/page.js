"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import Header from "@/components/Common/Header";
import Footer from "@/components/Common/Footer";

export default function RequestedTrip() {
  const [details, setDetails] = useState(null);

  useEffect(() => {
    const data = localStorage.getItem("quoteDetails");
    if (data) setDetails(JSON.parse(data));
  }, []);

  if (!details)
    return (
      <div className="py-40 text-center text-gray-600">Loading details...</div>
    );

  return (
    <>
      <Header />
      <section className="container mx-auto px-4 py-20">
        <div className="mx-auto max-w-3xl rounded-2xl border border-gray-200 bg-white p-8 text-center shadow-md">
          <h2 className="mb-4 text-3xl font-semibold text-gray-900">
            🎉 Thank You! Your Quote Request is Submitted.
          </h2>
          <p className="mb-6 text-gray-600">
            Our team will reach out shortly with the best deals for{" "}
            <strong>{details.to}</strong>.
          </p>

          <div className="mb-6 space-y-2 text-left text-sm text-gray-700">
            <p>
              <strong>Booking ID:</strong> {details.token}
            </p>
            <p>
              <strong>From:</strong> {details.from}
            </p>
            <p>
              <strong>To:</strong> {details.to}
            </p>
            <p>
              <strong>Email:</strong> {details.email}
            </p>
            <p>
              <strong>Mobile:</strong> {details.mobile}
            </p>
            <p>
              <strong>Adults:</strong> {details.adults} |{" "}
              <strong>Children:</strong> {details.children} |{" "}
              <strong>Infants:</strong> {details.infants}
            </p>
            <p>
              <strong>Preferred Hotel:</strong> {details.hotelCategory} Star
            </p>
            <p>
              <strong>Flight Included:</strong> {details.flightIncluded}
            </p>
            <p>
              <strong>Budget:</strong> {details.budget}
            </p>
            <p>
              <strong>Tour Type:</strong> {details.tourType}
            </p>
            <p>
              <strong>Preferred Call Time:</strong> {details.callTime}
            </p>
          </div>

          <Link
            href="/"
            className="bg-primary hover:bg-primary-dark rounded-full px-8 py-3 font-medium text-white"
          >
            Back to Home
          </Link>
        </div>
      </section>
      <Footer />
    </>
  );
}
