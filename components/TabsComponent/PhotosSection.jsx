"use client";

import { useState, useEffect, useCallback } from "react";
import NextImage from "next/image";
import { Camera, ChevronLeft, ChevronRight, X } from "lucide-react";

const images = [
  "/assets/img/home1/destination-img1.jpg",
  "/assets/img/home1/destination-img2.jpg",
  "/assets/img/home1/destination-img3.jpg",
  "/assets/img/home1/destination-img4.jpg",
  "/assets/img/home1/destination-img5.jpg",
];

const PhotosSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isOpen, setIsOpen] = useState(false);
  const [photoIndex, setPhotoIndex] = useState(0);
  const [animating, setAnimating] = useState(false);

  // ✅ Preload images
  useEffect(() => {
    images.forEach((src) => {
      const img = new window.Image();
      img.src = src;
    });
  }, []);

  // ✅ Auto-slide (every 4 seconds)
  useEffect(() => {
    const interval = setInterval(() => {
      handleNext();
    }, 4000);

    return () => clearInterval(interval);
  }, [currentIndex]);

  const handleNext = useCallback(() => {
    if (animating) return;
    setAnimating(true);
    setTimeout(() => {
      setAnimating(false);
      setCurrentIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));
    }, 300);
  }, [animating]);

  const handlePrev = useCallback(() => {
    if (animating) return;
    setAnimating(true);
    setTimeout(() => {
      setAnimating(false);
      setCurrentIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
    }, 300);
  }, [animating]);

  const openLightbox = (index) => {
    setPhotoIndex(index);
    setIsOpen(true);
  };

  const closeLightbox = () => setIsOpen(false);

  return (
    <section className="container mx-auto rounded-[20px] bg-white px-4 py-10">
      {/* ===== Title ===== */}
      <div className="mb-6 flex items-center gap-3">
        <Camera className="text-primary h-6 w-6" />
        <h2 className="text-xl leading-8 font-semibold tracking-normal md:text-2xl">
          Tour Photos
        </h2>
      </div>

      {/* ===== Slider ===== */}
      <div className="group relative w-full overflow-hidden rounded-2xl shadow-md">
        <div className="relative h-[400px] w-full md:h-[500px]">
          {images.map((src, i) => (
            <div
              key={i}
              className={`absolute inset-0 transition-opacity duration-700 ease-in-out ${
                i === currentIndex ? "opacity-100" : "opacity-0"
              }`}
            >
              <NextImage
                src={src}
                alt={`Slide ${i + 1}`}
                width={1200}
                height={800}
                className="h-full w-full cursor-pointer rounded-2xl object-cover"
                onClick={() => openLightbox(i)}
              />
            </div>
          ))}
        </div>

        {/* Prev / Next Buttons */}
        <button
          onClick={handlePrev}
          className="absolute top-1/2 left-3 -translate-y-1/2 rounded-full bg-black/40 p-2 text-white transition hover:bg-black/60"
        >
          <ChevronLeft className="h-6 w-6" />
        </button>

        <button
          onClick={handleNext}
          className="absolute top-1/2 right-3 -translate-y-1/2 rounded-full bg-black/40 p-2 text-white transition hover:bg-black/60"
        >
          <ChevronRight className="h-6 w-6" />
        </button>

        {/* Dots */}
        <div className="absolute right-0 bottom-4 left-0 flex justify-center gap-2">
          {images.map((_, i) => (
            <span
              key={i}
              onClick={() => setCurrentIndex(i)}
              className={`h-2 w-2 cursor-pointer rounded-full transition ${
                currentIndex === i ? "bg-orange-500" : "bg-white/70"
              }`}
            ></span>
          ))}
        </div>
      </div>

      {/* ===== Lightbox ===== */}
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
            onClick={() =>
              setPhotoIndex(
                photoIndex === 0 ? images.length - 1 : photoIndex - 1,
              )
            }
            className="absolute left-5 text-white/80 transition hover:text-white"
          >
            <ChevronLeft className="h-10 w-10" />
          </button>

          {/* Image */}
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
              />
            </div>
          </div>

          {/* Next Button */}
          <button
            onClick={() =>
              setPhotoIndex(
                photoIndex === images.length - 1 ? 0 : photoIndex + 1,
              )
            }
            className="absolute right-5 text-white/80 transition hover:text-white"
          >
            <ChevronRight className="h-10 w-10" />
          </button>

          {/* Counter */}
          <div className="absolute bottom-6 text-sm font-medium text-white">
            {photoIndex + 1} / {images.length}
          </div>
        </div>
      )}
    </section>
  );
};

export default PhotosSection;
