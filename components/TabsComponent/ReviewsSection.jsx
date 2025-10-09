"use client";

import { Star } from "lucide-react";
import Image from "next/image";

export default function ReviewSection() {
  return (
    <section className="container mx-auto rounded-[20px] bg-white px-4 py-10">
      {/* Header */}
      <h2 className="mb-8 text-2xl leading-8 font-semibold tracking-normal md:text-3xl">
        Reviews
      </h2>

      {/* Review Summary Card */}
      <div className="bg-primary-light grid grid-cols-1 gap-6 rounded-xl p-6 md:grid-cols-2">
        {/* Overall Rating */}
        <div className="flex flex-col items-center justify-center border-b border-gray-200 pb-4 md:border-r md:border-b-0 md:pb-0">
          <p className="mb-2 text-base font-semibold text-gray-800">
            Overall rating
          </p>
          <div className="flex items-center gap-2">
            <Star className="fill-primary-hover text-primary-hover h-6 w-6" />
            <span className="text-2xl font-bold text-gray-900">5.0</span>
            <span className="text-sm text-gray-600">/5</span>
          </div>
          <p className="mt-2 text-sm text-gray-500">(1 review)</p>
        </div>

        {/* Review Summary */}
        <div className="grid grid-cols-2 gap-x-6 gap-y-4 text-sm font-medium text-gray-700">
          <div>
            <div className="mb-1 flex justify-between">
              <span>Guide</span>
              <span>5.0/5</span>
            </div>
            <div className="h-1.5 w-full rounded-full bg-gray-200">
              <div className="bg-primary-hover h-1.5 w-full rounded-full"></div>
            </div>
          </div>

          <div>
            <div className="mb-1 flex justify-between">
              <span>Service</span>
              <span>5.0/5</span>
            </div>
            <div className="h-1.5 w-full rounded-full bg-gray-200">
              <div className="bg-primary-hover h-1.5 w-full rounded-full"></div>
            </div>
          </div>

          <div>
            <div className="mb-1 flex justify-between">
              <span>Transportation</span>
              <span>5.0/5</span>
            </div>
            <div className="h-1.5 w-full rounded-full bg-gray-200">
              <div className="bg-primary-hover h-1.5 w-full rounded-full"></div>
            </div>
          </div>

          <div>
            <div className="mb-1 flex justify-between">
              <span>Organization</span>
              <span>5.0/5</span>
            </div>
            <div className="h-1.5 w-full rounded-full bg-gray-200">
              <div className="bg-primary-hover h-1.5 w-full rounded-full"></div>
            </div>
          </div>
        </div>
      </div>

      {/* Individual Review */}
      <div className="mt-8">
        <div className="flex items-start gap-4">
          {/* Avatar */}
          <div className="h-12 w-12 overflow-hidden rounded-full">
            <Image
              src="/assets/img/home1/testimonial-author-img1.png"
              alt="Reviewer"
              width={48}
              height={48}
              className="h-12 w-12 object-cover"
            />
          </div>

          {/* Review Content */}
          <div className="flex-1">
            <p className="font-semibold text-gray-900">Kevin Kay</p>
            <p className="mb-2 text-xs text-gray-500">On July 9, 2025</p>

            {/* Star Rating */}
            <div className="mb-3 flex items-center">
              {[...Array(5)].map((_, i) => (
                <Star
                  key={i}
                  className="fill-primary-hover text-primary-hover h-4 w-4"
                />
              ))}
            </div>

            {/* Review Text */}
            <p className="text-sm leading-relaxed text-gray-700">
              Entire journey on the river cruise was amazing. This is the first
              such cruise dinner for my family. We loved everything, right from
              table organising, food, music and the hospitality. Kudos to the
              entire team!
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
