"use client";

import {
  Clock,
  Users,
  CalendarDays,
  Wifi,
  MapPin,
  User,
  Check,
  CircleCheckBig,
  X,
} from "lucide-react";
import PhotosSection from "./PhotosSection";
import ItinerarySection from "./ItinerarySection";
import FAQSection from "./FAQSection";
import ReviewSection from "./ReviewsSection";

export default function DetailSection() {
  return (
    <>
      <section className="rounded-[20px] bg-white p-4">
        {/* ===== Title & Ratings ===== */}
        <div className="mb-4">
          <h2 className="mb-2 text-2xl leading-8 font-semibold tracking-normal md:text-3xl">
            Dubai – All Stunning Places
          </h2>

          <div className="mt-2 flex items-center space-x-2">
            {/* Stars */}
            <div className="flex text-yellow-500">
              {Array.from({ length: 5 }).map((_, i) => (
                <svg
                  key={i}
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  className="h-5 w-5"
                >
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.372 1.24.588 1.81l-2.803 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118L10 13.347l-2.884 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L3.48 8.72c-.784-.57-.38-1.81.588-1.81h3.462a1 1 0 00.95-.69l1.07-3.292z" />
                </svg>
              ))}
            </div>

            <span className="text-sm">(1 Review)</span>
          </div>
        </div>
        {/* ===== Info Grid ===== */}
        <div className="mb-6 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          <div className="flex items-center space-x-3">
            <div className="bg-primary-light flex h-10 w-10 items-center justify-center rounded-full transition-transform hover:scale-110">
              <Clock className="text-primary h-5 w-5" />
            </div>

            <p className="text-sm font-medium">8 Hours</p>
          </div>
          <div className="flex items-center space-x-3">
            <div className="bg-primary-light flex h-10 w-10 items-center justify-center rounded-full transition-transform hover:scale-110">
              <Users className="text-primary h-5 w-5" />
            </div>
            <p className="text-sm font-normal">Max People : 30</p>
          </div>
          <div className="flex items-center space-x-3">
            <div className="bg-primary-light flex h-10 w-10 items-center justify-center rounded-full transition-transform hover:scale-110">
              <Wifi className="text-primary h-5 w-5" />
            </div>

            <p className="text-sm font-normal">Wifi Available</p>
          </div>
          <div className="flex items-center space-x-3">
            <div className="bg-primary-light flex h-10 w-10 items-center justify-center rounded-full transition-transform hover:scale-110">
              <CalendarDays className="text-primary h-5 w-5" />
            </div>

            <p className="text-sm font-normal">Jan 18’ - Dec 21’</p>
          </div>
          <div className="flex items-center space-x-3">
            <div className="bg-primary-light flex h-10 w-10 items-center justify-center rounded-full transition-transform hover:scale-110">
              <User className="text-primary h-5 w-5" />
            </div>

            <p className="text-sm font-normal">Min Age : 10+</p>
          </div>
          <div className="flex items-center space-x-3">
            <div className="bg-primary-light flex h-10 w-10 items-center justify-center rounded-full transition-transform hover:scale-110">
              <MapPin className="text-primary h-5 w-5" />
            </div>

            <p className="text-sm font-normal">Pickup: Airport</p>
          </div>
        </div>
        <hr className="my-6 border-gray-200" />
        {/* ===== Description ===== */}
        <div className="space-y-4 text-sm leading-relaxed">
          <p>
            A wonderful serenity has taken possession of my entire soul, like
            these sweet mornings of spring which I enjoy with my whole heart. I
            am alone, and feel the charm of existence in this spot, which was
            created for the bliss of souls like mine. I am so happy, my dear
            friend, so absorbed in the exquisite sense of mere tranquil
            existence, that I neglect my talents.
          </p>

          <p>
            Lorem Ipsum decided to leave for the far World of Grammar. The Big
            Oxmox advised her not to do so, because there were thousands of bad
            Comma wild Question Marks and devious Semikoli, but the Little Blind
            Text didn’t listen. She packed her seven versalia, put her initial
            into the belt and made herself on the way. When she reached the
            first hills of the journey, she looked back at the skyline of her
            hometown.
          </p>
        </div>
        <hr className="my-6 border-gray-200" />
        {/* ===== Table Details ===== */}
        <div className="overflow-x-auto">
          <table className="min-w-full text-sm text-gray-700">
            <tbody className="divide-y divide-gray-200">
              {/* ===== Row 1 ===== */}
              <tr className="flex flex-col sm:table-row">
                <td className="py-3 font-semibold sm:w-1/3">
                  Departure & Return Location
                </td>
                <td className="py-3">
                  John F.K. International Airport{" "}
                  <span className="text-primary-hover cursor-pointer hover:underline">
                    (Google Map)
                  </span>
                </td>
              </tr>

              {/* ===== Row 2 ===== */}
              <tr className="flex flex-col sm:table-row">
                <td className="py-3 font-semibold">Departure Time</td>
                <td className="py-3">3 Hours Before Flight Time</td>
              </tr>

              {/* ===== Row 3 ===== */}
              <tr className="flex flex-col sm:table-row">
                <td className="py-3 font-semibold">Bedroom</td>
                <td className="py-3">4 Bedrooms</td>
              </tr>

              {/* ===== Row 4 ===== */}
              <tr className="flex flex-col sm:table-row">
                <td className="py-3 font-semibold">Bathroom</td>
                <td className="py-3">6 Bathrooms</td>
              </tr>

              {/* ===== Price Includes ===== */}
              <tr className="flex flex-col sm:table-row">
                <td className="py-3 font-semibold">Price Includes</td>
                <td className="py-3">
                  <ul className="space-y-2">
                    {[
                      "Air fares",
                      "3 Nights Hotel Accomodation",
                      "Tour Guide",
                      "Entrance Fees",
                      "All transportation in destination location",
                    ].map((item, i) => (
                      <li key={i} className="flex items-center gap-2">
                        <Check className="text-primary-hover h-4 w-4" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </td>
              </tr>

              {/* ===== Price Excludes ===== */}
              <tr className="flex flex-col sm:table-row">
                <td className="py-3 font-semibold">Price Excludes</td>
                <td className="py-3">
                  <ul className="space-y-2">
                    {[
                      "Guide Service Fee",
                      "Driver Service Fee",
                      "Any Private Expenses",
                      "Room Service Fees",
                    ].map((item, i) => (
                      <li key={i} className="flex items-center gap-2">
                        <X className="h-4 w-4 text-gray-400" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </td>
              </tr>

              {/* ===== Complementaries ===== */}
              <tr className="flex flex-col sm:table-row">
                <td className="py-3 font-semibold">Complementaries</td>
                <td className="py-3">
                  <ul className="space-y-2">
                    {["Umbrella", "Sunscreen", "T-Shirt", "Entrance Fees"].map(
                      (item, i) => (
                        <li key={i} className="flex items-center gap-2">
                          <Check className="text-primary-hover h-4 w-4" />
                          {item}
                        </li>
                      ),
                    )}
                  </ul>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        <hr className="my-6 border-gray-200" />
        {/* ===== What we expects ===== */}
        <div className="overflow-hidden">
          {/* ===== Title ===== */}
          <h2 className="mb-4 text-xl leading-8 font-semibold tracking-normal md:text-2xl">
            What to Expect
          </h2>
          {/* ===== Description ===== */}
          <div className="mb-6 space-y-4 text-sm leading-relaxed">
            <p>
              Curabitur blandit tempus porttitor. Lorem ipsum dolor sit amet,
              consectetur adipiscing elit. Cras mattis consectetur purus sit
              amet fermentum. Etiam porta sem malesuada magna mollis euismod.
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            </p>

            <p>
              Maecenas sed diam eget risus varius blandit sit amet non magna.
              Morbi leo risus, porta ac consectetur ac, vestibulum at eros.
              Nullam id dolor id nibh ultricies vehicula ut id elit. Donec
              ullamcorper nulla non metus auctor fringilla.
            </p>
          </div>
          {/* ===== Bullet List ===== */}
          <ul className="space-y-3 text-sm font-medium">
            {[
              "Ipsum Amet Mattis Pellentesque",
              "Ultricies Vehicula Mollis Vestibulum Fringilla",
              "Condimentum Sollicitudin Fusce Vestibulum Ultricies",
              "Sollicitudin Consectetur Quam Ligula Vehicula",
              "Cursus Pharetra Purus Porta Parturient",
              "Risus Malesuada Tellus Porta Commodo",
            ].map((item, i) => (
              <li key={i} className="flex items-start gap-3">
                <CircleCheckBig className="text-primary mt-0.5 h-4 w-4 flex-shrink-0" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>
        <hr className="my-6 border-gray-200" />
      </section>

      {/* Photos */}
      <div className="mt-10">
        <PhotosSection />
      </div>
      {/* Itinerary */}
      <div className="mt-10">
        <ItinerarySection />
      </div>
      {/* Faqs */}
      <div className="mt-10">
        <FAQSection />
      </div>
      {/* Reviews */}
      <div className="mt-10">
        <ReviewSection />
      </div>
    </>
  );
}
