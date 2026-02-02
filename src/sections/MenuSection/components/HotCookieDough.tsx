import bigCake from "@/shared/assets/big-cake.png";
import Image from "next/image";

export const HotCookieDough = () => {
  const hotCookieDoughItems = [
    {
      name: "MILK CHOCOLATE CHIP",
      price: "6.65",
    },
    {
      name: "WHITE CHOCOLATE CHIP",
      price: "6.65",
    },
    {
      name: "RED VELVET",
      price: "6.95",
    },
    {
      name: "SNICKER-DOUGH",
      price: "7.95",
    },
  ];

  return (
    <div className="relative">
      <div className="text-white px-4 pt-4 pb-24 border-20 border-[#f1a123] relative z-0 h-full mb-64">
        <h2 className="text-3xl md:text-6xl font-extrabold">HOT</h2>
        <h2 className="text-3xl md:text-6xl font-extrabold">COOKIE</h2>
        <h2 className="text-3xl md:text-6xl font-extrabold">DOUGH</h2>

        <ul>
          {hotCookieDoughItems.map((item) => (
            <li key={item.name}>
              <div className="flex justify-between md:text-3xl text-2xl font-semibold">
                <h1>{item.name}</h1>
                <p>{item.price}</p>
              </div>
            </li>
          ))}
        </ul>
      </div>

      <Image
        src={bigCake}
        alt="big-cake"
        className="absolute bottom-0 -translate-x-1/2 w-[560px] z-10 pointer-events-none left-[49%]"
      />
    </div>
  );
};
