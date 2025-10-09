"use client";

import { useState, useEffect, useCallback } from "react";
import NextImage from "next/image";
import { Video, Images, X, ChevronLeft, ChevronRight } from "lucide-react";

const images = [
  "/assets/img/home1/destination-img1.jpg",
  "/assets/img/home1/destination-img2.jpg",
  "/assets/img/home1/destination-img3.jpg",
  "/assets/img/home1/destination-img4.jpg",
  "/assets/img/home1/destination-img5.jpg",
];

const TourGallery = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [photoIndex, setPhotoIndex] = useState(0);
  const [animating, setAnimating] = useState(false);

  // Preload images
  useEffect(() => {
    images.forEach((src) => {
      const img = new window.Image();
      img.src = src;
    });
  }, []);

  const openLightbox = (index) => {
    setPhotoIndex(index);
    setIsOpen(true);
  };

  const closeLightbox = () => {
    setIsOpen(false);
  };

  const prevImage = useCallback(() => {
    if (animating) return;
    setAnimating(true);
    setTimeout(() => setAnimating(false), 400);
    setPhotoIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  }, [animating]);

  const nextImage = useCallback(() => {
    if (animating) return;
    setAnimating(true);
    setTimeout(() => setAnimating(false), 400);
    setPhotoIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  }, [animating]);

  return (
    <section className="container mx-auto px-4 py-6">
      {/* ===== Image Grid ===== */}
      <div className="grid grid-cols-1 gap-3 overflow-hidden rounded-2xl md:grid-cols-3">
        {/* Large Image */}
        <div
          className="group relative cursor-pointer overflow-hidden rounded-2xl md:col-span-2"
          onClick={() => openLightbox(0)}
        >
          <NextImage
            src={images[0]}
            alt="Elephant Sanctuary"
            width={1200}
            height={800}
            className="h-[400px] w-full transform rounded-2xl object-cover transition-transform duration-700 ease-in-out group-hover:scale-105 md:h-[500px]"
          />
          <button className="absolute bottom-3 left-3 rounded-full bg-white/80 p-2 backdrop-blur-md transition hover:bg-white">
            <Video className="h-5 w-5 text-gray-700" />
          </button>
          <div className="absolute top-3 right-3 rounded-md bg-white px-3 py-1.5 text-sm font-medium shadow">
            Elephant Jungle
          </div>
        </div>

        {/* Smaller Images */}
        <div className="grid grid-cols-2 grid-rows-2 gap-3">
          {images.slice(1).map((src, i) => (
            <div
              key={i}
              className="group relative cursor-pointer overflow-hidden rounded-2xl"
              onClick={() => openLightbox(i + 1)}
            >
              <NextImage
                src={src}
                alt={`Gallery ${i + 1}`}
                width={600}
                height={400}
                className="h-full w-full transform rounded-2xl object-cover transition-transform duration-700 ease-in-out group-hover:scale-105"
              />
              {i === 3 && (
                <button
                  type="button"
                  className="absolute bottom-3 left-3 flex items-center gap-2 rounded-full bg-white/90 px-3 py-1.5 text-sm text-gray-700 shadow transition hover:bg-white"
                >
                  <Images className="h-4 w-4" />
                  All photos
                </button>
              )}
            </div>
          ))}
        </div>
      </div>

      {/* ===== Custom Lightbox / Slider ===== */}
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm">
          {/* Close Button */}
          <button
            onClick={closeLightbox}
            className="absolute top-5 right-5 text-white transition hover:text-gray-300"
          >
            <X className="h-8 w-8" />
          </button>

          {/* Prev Button */}
          <button
            onClick={prevImage}
            className="absolute left-5 text-white/80 transition hover:text-white"
          >
            <ChevronLeft className="h-10 w-10" />
          </button>

          {/* Image with Smooth Transition */}
          <div className="relative mx-auto flex w-full max-w-5xl items-center justify-center">
            <div
              key={photoIndex}
              className={`transform transition-all duration-500 ${
                animating ? "scale-95 opacity-0" : "scale-100 opacity-100"
              }`}
            >
              <NextImage
                src={images[photoIndex]}
                alt={`Slide ${photoIndex + 1}`}
                width={1200}
                height={800}
                className="max-h-[80vh] w-auto rounded-2xl object-contain"
                priority
              />
            </div>
          </div>

          {/* Next Button */}
          <button
            onClick={nextImage}
            className="absolute right-5 text-white/80 transition hover:text-white"
          >
            <ChevronRight className="h-10 w-10" />
          </button>

          {/* Caption / Counter */}
          <div className="absolute bottom-6 text-sm font-medium text-white">
            {photoIndex + 1} / {images.length}
          </div>
        </div>
      )}
    </section>
  );
};

export default TourGallery;
