"use client";

import manEatBurger from "@/shared/assets/man-eat-burger.jpg";
import juiceAndSausages from "@/shared/assets/juice-and-sausages.jpg";
import juiceAndSausagesTwo from "@/shared/assets/juice-and-sausages-2.jpg";
import juiceAndSausagesThree from "@/shared/assets/juice-and-sausages-3.jpg";

import Image from "next/image";
import { useState, useEffect, useCallback } from "react";
import {
  ChevronLeft,
  ChevronRight,
  Instagram,
  Phone,
  MapPin,
} from "lucide-react";

const images = [
  { src: manEatBurger, alt: "Man Eat Burger" },
  { src: juiceAndSausages, alt: "Juice and Sausages" },
  { src: juiceAndSausagesTwo, alt: "Juice and Sausages" },
  { src: juiceAndSausagesThree, alt: "Juice and Sausages" },
];

export const HomeSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = useCallback(() => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  }, []);

  const prevSlide = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + images.length) % images.length,
    );
  };

  useEffect(() => {
    const interval = setInterval(nextSlide, 5000);
    return () => clearInterval(interval);
  }, [nextSlide]);

  return (
    <section
      className="min-h-[90vh] flex flex-col items-center justify-center py-10 md:py-0"
      id="home"
    >
      <div className="w-full max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-center p-4 gap-10 md:gap-20 mt-20 md:mt-16">
        <div className="flex flex-col items-center justify-center w-[500px] h-[500px] max-md:w-full max-md:h-auto">
          <Image
            src="/big-smash-logo.png"
            alt="365 Burger Label"
            width={500}
            height={500}
            sizes="(max-width: 768px) 90vw, 500px"
            priority
            className="w-full h-full object-contain"
          />
          <div className="flex gap-8 text-[#f1a123]">
            <a
              href="https://www.google.com/maps/search/?api=1&query=510+Stafford+Road,+WV10+6AN"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white transition-colors"
            >
              <MapPin size={36} strokeWidth={2.5} />
            </a>
            <a
              href="https://www.instagram.com/BigSmashUK/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white transition-colors"
            >
              <Instagram size={36} strokeWidth={2.5} />
            </a>
            <a
              href="tel:01902964669"
              className="hover:text-white transition-colors"
            >
              <Phone size={36} strokeWidth={2.5} />
            </a>
          </div>
        </div>

        <div className="relative group w-full max-w-[570px] flex flex-col items-center">
          <div className="relative w-full aspect-4/5 overflow-hidden rounded-xl border border-gray-500 shadow-2xl bg-black/10">
            {images.map((image, index) => (
              <div
                key={index}
                className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
                  index === currentIndex ? "opacity-100" : "opacity-0"
                }`}
              >
                <Image
                  src={image.src}
                  alt={image.alt}
                  fill
                  sizes="(max-width: 768px) 100vw, 400px"
                  className="object-cover"
                  priority={index === 0}
                />
              </div>
            ))}

            <button
              onClick={prevSlide}
              className="absolute left-2 md:left-4 top-1/2 -translate-y-1/2 bg-black/40 hover:bg-black/60 text-white p-2 md:p-3 rounded-full backdrop-blur-sm transition-all md:opacity-0 md:group-hover:opacity-100 opacity-100 z-10 cursor-pointer active:scale-90"
            >
              <ChevronLeft size={24} className="md:w-8 md:h-8" />
            </button>
            <button
              onClick={nextSlide}
              className="absolute right-2 md:right-4 top-1/2 -translate-y-1/2 bg-black/40 hover:bg-black/60 text-white p-2 md:p-3 rounded-full backdrop-blur-sm transition-all md:opacity-0 md:group-hover:opacity-100 opacity-100 z-10 cursor-pointer active:scale-90"
            >
              <ChevronRight size={24} className="md:w-8 md:h-8" />
            </button>
          </div>

          <div className="flex gap-4 mt-6">
            {images.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-3 h-3 md:w-2.5 md:h-2.5 rounded-full transition-all cursor-pointer ${
                  index === currentIndex
                    ? "bg-white scale-125"
                    : "bg-white/30 hover:bg-white/60"
                }`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
