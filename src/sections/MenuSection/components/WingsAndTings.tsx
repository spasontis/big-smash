import fallingChicken from "@/shared/assets/falling-chicken.png";
import Image from "next/image";

export const WingsAndTings = () => {
  const houseSpecialItems = [
    { name: "BIG SMASH BURGER", price: "19.99" },
    { name: "LOADED FRIES" },
    { name: "3 WINGS" },
    { name: "SPEACIAL DONER" },
    { name: "DRINK" },
  ];
  const wingsItems = [
    { name: "5 WINGS", price: "5.99" },
    { name: "10 WINGS", price: "5.99" },
    { name: "15 WINGS", price: "5.99" },
  ];

  const stripItems = [
    { name: "3 JUMBO STRIPS", price: "5.99" },
    { name: "6 JUMBO STRIPS", price: "5.99" },
    { name: "9 JUMBO STRIPS", price: "5.99" },
  ];

  return (
    <div className="flex flex-col justify-between">
      <div className="flex flex-col justify-between relative">
        <Image
          src={fallingChicken}
          alt="Falling Fried Chicken"
          width={290}
          height={200}
          className="absolute left-1/2 -translate-x-1/2"
        />
        <div className="px-4 pt-2 pointer-events-none z-10">
          <h2 className="text-3xl md:text-6xl font-extrabold ">WINGS</h2>
          <h2 className="text-3xl md:text-6xl font-extrabold ">& TINGS</h2>
        </div>
        <div className="text-[#f1a123] pt-2 pb-8 bg-[#f1a123] items-center flex flex-col">
          <div className="bg-white mt-36 z-12 w-full">
            <h2 className="text-xl md:text-4xl text-center font-extrabold pt-2 pointer-events-none ">
              CHOOSE YOUR CHICKEN
            </h2>
            <div className="flex w-full">
              <div className="flex-1">
                <h1 className="text-xl md:text-2xl text-center font-extrabold pt-2 pointer-events-none ">
                  WINGS
                </h1>
                <ul className="px-4">
                  {wingsItems.map((item) => (
                    <li
                      key={item.name}
                      className="flex justify-between md:text-xl text-l font-semibold"
                    >
                      <h1>{item.name}</h1>
                      <p>{item.price}</p>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="flex-1">
                <h1 className="text-xl md:text-2xl text-center font-extrabold px-2 md:px-4 pt-2 pointer-events-none ">
                  JUMBO STRIPS
                </h1>
                <ul className="px-2 md:px-4">
                  {stripItems.map((item) => (
                    <li
                      key={item.name}
                      className="flex justify-between md:text-xl text-l font-semibold"
                    >
                      <h1>{item.name}</h1>
                      <p>{item.price}</p>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="text-[#f1a123] bg-white px-4 md:px-8 py-2 mt-4">
        <h2 className="text-3xl md:text-6xl font-extrabold">SMASH</h2>
        <h2 className="text-3xl md:text-6xl font-extrabold">BOX</h2>
        <ul>
          {houseSpecialItems.map((item) => (
            <li
              key={item.name}
              className="flex justify-between md:text-2xl text-l font-semibold"
            >
              <h1>{item.name}</h1>
              <p className="text-3xl">{item.price}</p>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};
