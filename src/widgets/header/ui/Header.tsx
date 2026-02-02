"use client";
import { useState } from "react";
import Image from "next/image";
import { Home, Menu, X } from "lucide-react";

export const Header = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
    setIsSidebarOpen(false);
  };

  return (
    <header className="flex justify-between items-center px-4 min-h-[68px] border-b text-[#f1a123] border-gray-500 bg-black fixed top-0 left-0 w-full z-50">
      <button
        className="flex items-center"
        onClick={() => scrollToSection("home")}
      >
        <span className="md:hidden">
          <Home className="w-8 h-8" />
        </span>
        <span className="hidden md:block">
          <Image
            src="/big-smash-label.png"
            alt="Big Smash"
            width={620}
            height={420}
            className="h-8 w-auto"
          />
        </span>
      </button>

      <nav className="hidden md:flex gap-16 absolute left-1/2 transform -translate-x-1/2 ">
        <button
          onClick={() => scrollToSection("home")}
          className="font-semibold hover:text-white transition-colors"
        >
          ABOUT US
        </button>
        <button
          onClick={() => scrollToSection("reviews")}
          className="font-semibold hover:text-white transition-colors"
        >
          REVIEWS
        </button>
        <button
          onClick={() => scrollToSection("contacts")}
          className="font-semibold hover:text-white transition-colors"
        >
          CONTACTS
        </button>
      </nav>

      <button
        onClick={() => scrollToSection("menu")}
        className="hidden md:block font-semibold text-[#f1a123] hover:text-white transition-colors"
      >
        MENU
      </button>

      <button className="md:hidden p-2" onClick={() => setIsSidebarOpen(true)}>
        <Menu className="w-8 h-8" />
      </button>

      {isSidebarOpen && (
        <div
          className="fixed inset-0 bg-black/50 z-60"
          onClick={() => setIsSidebarOpen(false)}
        />
      )}

      <div
        className={`fixed top-0 right-0 h-full w-64 bg-black border-l border-gray-500 z-70 transition-transform duration-300 transform ${
          isSidebarOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex justify-end p-4">
          <button onClick={() => setIsSidebarOpen(false)}>
            <X className="w-8 h-8 text-[#f1a123]" />
          </button>
        </div>
        <nav className="flex flex-col gap-8 p-8 items-center text-xl">
          <button
            onClick={() => scrollToSection("home")}
            className="font-semibold hover:text-white transition-colors"
          >
            ABOUT US
          </button>
          <button
            onClick={() => scrollToSection("reviews")}
            className="font-semibold hover:text-white transition-colors"
          >
            REVIEWS
          </button>
          <button
            onClick={() => scrollToSection("contacts")}
            className="font-semibold hover:text-white transition-colors"
          >
            CONTACTS
          </button>
          <button
            onClick={() => scrollToSection("menu")}
            className="font-semibold text-[#f1a123] hover:text-white transition-colors"
          >
            MENU
          </button>
        </nav>
      </div>
    </header>
  );
};
