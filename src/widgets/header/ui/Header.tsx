"use client";
import Image from "next/image";

export const Header = () => {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <header className="flex justify-between items-center px-4 min-h-[68px] border-b text-[#f1a123] border-gray-500 bg-black fixed top-0 left-0 w-full z-50">
      <button
        className="flex items-center"
        onClick={() => scrollToSection("home")}
      >
        <Image
          src="/big-smash-label.png"
          alt="Big Smash"
          width={620}
          height={420}
          className="h-8 w-auto"
        />
      </button>

      <nav className="flex gap-16 absolute left-1/2 transform -translate-x-1/2 ">
        <button
          onClick={() => scrollToSection("breakfast")}
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
        className="font-semibold text-white hover:text-[#f1a123] transition-colors"
      >
        MENU
      </button>
    </header>
  );
};
