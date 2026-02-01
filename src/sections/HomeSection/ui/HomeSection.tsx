"use client";

import manEatBurger from "@/shared/assets/man-eat-burger.jpg";
import juiceAndSausages from "@/shared/assets/juice-and-sausages.jpg";
import juiceAndSausagesTwo from "@/shared/assets/juice-and-sausages-2.jpg";
import juiceAndSausagesThree from "@/shared/assets/juice-and-sausages-3.jpg";

import Image from "next/image";
import { useState, useEffect, useCallback } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

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
      className="h-[90vh] flex flex-col items-center justify-center overflow-hidden"
      id="home"
    >
      <div className="w-full max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-center p-4 gap-10 md:gap-20 mt-16">
        <div className="flex items-center justify-center w-[500px] h-[500px] max-md:w-full max-md:h-auto">
          <Image
            src="/big-smash-logo.png"
            alt="365 Burger Label"
            width={500}
            height={500}
            sizes="(max-width: 768px) 90vw, 500px"
            priority
            className="w-full h-full object-contain"
          />
        </div>

        <div className="relative group w-full max-w-[570px] flex flex-col items-center">
          <div className="relative w-full aspect-4/5 overflow-hidden rounded-xl border-1 border-gray-500 shadow-2xl bg-black/10">
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

            {/* Arrows */}
            <button
              onClick={prevSlide}
              className="absolute left-4 top-1/2 -translate-y-1/2 bg-black/30 hover:bg-black/50 text-white p-2 rounded-full backdrop-blur-sm transition-all opacity-0 group-hover:opacity-100 z-10 cursor-pointer"
            >
              <ChevronLeft size={30} />
            </button>
            <button
              onClick={nextSlide}
              className="absolute right-4 top-1/2 -translate-y-1/2 bg-black/30 hover:bg-black/50 text-white p-2 rounded-full backdrop-blur-sm transition-all opacity-0 group-hover:opacity-100 z-10 cursor-pointer"
            >
              <ChevronRight size={30} />
            </button>
          </div>

          {/* Dots below the image block */}
          <div className="flex gap-3 mt-4">
            {images.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-2.5 h-2.5 rounded-full transition-all cursor-pointer ${
                  index === currentIndex
                    ? "bg-white scale-125"
                    : "bg-white/30 hover:bg-white/60"
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
