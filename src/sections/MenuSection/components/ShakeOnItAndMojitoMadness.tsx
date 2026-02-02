import whiteCocktail from "@/shared/assets/white-cocktail.png";
import redCocktail from "@/shared/assets/red-cocktail.png";
import Image from "next/image";

export const ShakeOnItAndMojitoMadness = () => {
  const shakeItems = [
    {
      name: "PREMIUM MILKSHAKES",
    },
    {
      name: "OREO",
    },
    {
      name: "BISCOFF",
    },
    {
      name: "JAMMY DODGER",
    },
    {
      name: "AERO MINT",
    },
    {
      name: "KINDER BUENO WHITE",
    },
    {
      name: "STRAWBERRY PROTEIN SHAKE",
    },
  ];
  const mojitoItems = [
    {
      name: "STRAWBERRY SPLASH",
    },
    {
      name: "PASSION PUNCH",
    },
    {
      name: "MANGO MADNESS",
    },
  ];
  return (
    <div className="flex flex-col justify-between ">
      <div className="flex flex-col justify-between bg-[#f1a123] relative z-0">
        <div className="text-white px-4 md:px-8 pt-2 pb-14 relative overflow-hidden min-h-[300px] md:min-h-[400px]">
          <div className="relative z-10">
            <h2 className="text-3xl md:text-6xl font-extrabold text-start">
              SHAKE
            </h2>
            <h2 className="text-3xl md:text-6xl font-extrabold text-start">
              ON IT
            </h2>
            <ul className="mt-4">
              {shakeItems.map((item) => (
                <li key={item.name}>
                  <div className="flex justify-between md:text-3xl text-xl font-semibold">
                    <h1>{item.name}</h1>
                  </div>
                </li>
              ))}
            </ul>
          </div>
          <Image
            src={whiteCocktail}
            alt="white-cocktail"
            className="absolute right-8 top-2 w-[136px] h-auto object-contain z-0 pointer-events-none translate-x-1/4 translate-y-1/4 md:translate-x-0 md:translate-y-0"
          />
        </div>

        <div className="text-white bg-[#f1a123] px-4 md:px-8 pt-2 pb-14 relative overflow-hidden min-h-[300px] md:min-h-[400px]">
          <div className="relative z-10 text-end">
            <h2 className="text-3xl md:text-6xl font-extrabold">MOJITO</h2>
            <h2 className="text-3xl md:text-6xl font-extrabold">MADNESS</h2>
            <ul className="mt-4">
              {mojitoItems.map((item) => (
                <li key={item.name}>
                  <div className="md:text-3xl text-xl font-semibold">
                    {item.name}
                  </div>
                </li>
              ))}
            </ul>
          </div>
          <Image
            src={redCocktail}
            alt="red-cocktail"
            className="absolute left-8 bottom-2 w-[136px]  h-auto object-contain z-0 pointer-events-none -translate-x-1/4 translate-y-1/4 md:translate-x-0 md:translate-y-0"
          />
        </div>
      </div>
      <div className="border-[#f1a123] border px-2 md:px-4 py-2 mt-4">
        <h2 className="text-lg md:text-xl font-extrabold">ALLERGEN ADVICE</h2>
        <p>
          IF YOU HAVE A FOOD ALLERGY OR A SPECIAL DIETARY REQUIREMENT, PLEASE
          INFORM A MEMBER OF OUR STAFF BEFORE YOU PLACE YOUR ORDER. THANK YOU.
        </p>
      </div>
    </div>
  );
};
