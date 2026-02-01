"use client";
import { useLayoutEffect, useRef, useState } from "react";

export const LoadThemUp = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [dimensions, setDimensions] = useState({ width: 0, height: 0 });

  useLayoutEffect(() => {
    if (!containerRef.current) return;
    const update = () => {
      const rect = containerRef.current?.getBoundingClientRect();
      if (rect) setDimensions({ width: rect.width, height: rect.height });
    };
    update();
    const observer = new ResizeObserver(update);
    observer.observe(containerRef.current);
    return () => observer.disconnect();
  }, []);

  const { width, height } = dimensions;
  const path = `M 0 0 L ${width} 0 L ${width} ${height - 160} L 0 ${height} L 0 ${height - 40} Z`;

  return (
    <div
      ref={containerRef}
      className="relative text-white px-8 pt-8 pb-14 h-screen"
      style={{
        clipPath:
          "polygon(0 0, 100% 0, 100% calc(100% - 160px), 0% 100%, 0 calc(100% - 40px))",
      }}
    >
      <svg
        className="absolute inset-0 w-full h-full pointer-events-none"
        viewBox={`0 0 ${width} ${height}`}
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d={path} stroke="#f1a123" strokeWidth="36" />
      </svg>

      <h2 className="text-3xl md:text-6xl font-extrabold">LOAD</h2>
      <h2 className="text-3xl md:text-6xl font-extrabold">THEM UP</h2>
      <ul>
        <li>
          <div className="flex justify-between md:text-3xl text-2xl font-semibold">
            <h1>BEEFIN` FRIES</h1>
            <p>5.99</p>
          </div>
          <p>Fries with beef patty, cheese sauce, gherkins, smash sause</p>
        </li>
        <li>
          <div className="flex justify-between md:text-3xl text-2xl font-semibold">
            <h1>CLUCKIN` FRIES</h1>
            <p>5.99</p>
          </div>
          <p>Fries with chicken strips, cheese sauce, gherkins, smash sause</p>
        </li>
        <li>
          <div className="flex justify-between md:text-3xl text-2xl font-semibold">
            <h1>SMASHIN` FRIES</h1>
            <p>7.49</p>
          </div>
          <p>
            Fries with one patty, two chicken strips, cheese sauce, gherkins,
            smash sause
          </p>
        </li>
        <li>
          <div className="flex justify-between md:text-3xl text-2xl font-semibold">
            <h1>PULLED FRIES</h1>
            <p>7.99</p>
          </div>
          <p>
            Fries with pulled beef, cheese sauce, jalapenos, caramelized onion,
            smash sause
          </p>
        </li>
      </ul>
    </div>
  );
};
