import Image from "next/image";

export const Footer = () => {
  return (
    <footer className="w-full py-12 px-4 mt-8">
      <div className="max-w-7xl mx-auto border-t border-gray-500/50 pt-8 flex flex-col md:flex-row justify-between items-center gap-6">
        <div className="flex items-center">
          <Image
            src="/big-smash-logo.png"
            alt="Big Smash"
            width={200}
            height={60}
            className="h-20 w-auto opacity-70 hover:opacity-100 transition-opacity"
          />
        </div>

        <div className="text-gray-500 text-[10px] tracking-[0.2em] font-bold flex flex-col items-center md:items-end gap-2">
          <p>© 2026 BIG SMASH BURGER</p>
          <p className="opacity-50">CRAFTED FOR THE ULTIMATE TASTE</p>
        </div>
      </div>
    </footer>
  );
};
