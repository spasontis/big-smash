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
    <header className="flex justify-between items-center px-4 min-h-[68px] border-b border-gray-500 bg-black fixed top-0 left-0 w-full z-50">
      <button
        className="flex items-center"
        onClick={() => scrollToSection("home")}
      >
        <Image
          src="/big-smash-logo.png"
          alt="Big Smash"
          width={220}
          height={220}
          sizes="46px"
          className="h-10 w-auto"
        />
      </button>

      <nav className="flex gap-16 absolute left-1/2 transform -translate-x-1/2 text-[#f1a123]">
        <button
          onClick={() => scrollToSection("breakfast")}
          className="font-semibold hover:text-white transition-colors"
        >
          MENU
        </button>
        <button
          onClick={() => scrollToSection("breakfast")}
          className="font-semibold hover:text-white transition-colors"
        >
          ABOUT US
        </button>
        <button
          onClick={() => scrollToSection("contacts")}
          className="font-semibold hover:text-white transition-colors"
        >
          CONTACTS
        </button>
      </nav>

      <div className="w-10 md:w-[220px]" aria-hidden="true" />
    </header>
  );
};
