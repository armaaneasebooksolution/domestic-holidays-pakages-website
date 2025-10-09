"use client";

import BookingEnquiryForm from "./BookingEnquireForm";
import GetAQuestionBox from "./GetAQuestions";
import TabsSection from "./TabsSection";
import WhyBookWithUs from "./WhyBookingUs";

const PackageInfoGrid = () => {
  return (
    <section className="">
      <div className="container mx-auto px-4">
        {/* ===== Grid Layout (8/4 columns) ===== */}
        <div className="grid grid-cols-1 gap-4 lg:grid-cols-12">
          {/* ===== Main Content (8 columns) ===== */}
          <main className="lg:col-span-9">
            <TabsSection />
          </main>

          {/* ===== Sticky Sidebar (4 columns) ===== */}
          <aside className="lg:sticky lg:top-6 lg:col-span-3 lg:h-fit">
            {/* Booking Enquire Fomr */}
            <BookingEnquiryForm />
            <div className="mt-10">
              <WhyBookWithUs />
            </div>
            <div className="mt-10">
              <GetAQuestionBox />
            </div>
          </aside>
        </div>
      </div>
    </section>
  );
};

export default PackageInfoGrid;
