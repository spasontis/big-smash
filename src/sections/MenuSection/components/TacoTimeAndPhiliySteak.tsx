const tacos = [
  {
    name: "SMASHED BEEF TACOS",
    price: "8.99",
    description:
      "Beff patties, crispy tortilla, lettuce, tomato, cheese, smash sause",
  },
  {
    name: "PULLED BEEF TACOS",
    price: "11.49",
    description:
      "Tender flavourful beef, crispy tortilla, lettuce, tomato, cheese, smash sause",
  },
];

const houseSpecialItems = [
  { name: "MINI SMASH BURGER", price: "6.99" },
  { name: "FISH FINGERS", price: "5.49" },
  { name: "CHICKEN NUGGETS", price: "5.49" },
];

export const TacoTimeAndPhiliySteak = () => {
  return (
    <div className="flex flex-col gap-8 justify-between text-white px-6 pt-2">
      <span>
        <h2 className="text-3xl md:text-6xl font-extrabold text-[#f1a123]">
          TACO
        </h2>
        <h2 className="text-3xl md:text-6xl font-extrabold">TIME</h2>
      </span>
      <ul>
        {tacos.map((taco) => (
          <li key={taco.name}>
            <div className="flex justify-between md:text-3xl text-2xl font-semibold">
              <h1 className="text-[#f1a123]">{taco.name}</h1>
              <p>{taco.price}</p>
            </div>
            <p>{taco.description}</p>
          </li>
        ))}
      </ul>
      <span>
        <h2 className="text-3xl md:text-6xl font-extrabold">THE PHILIY</h2>
        <h2 className="text-3xl md:text-5xl font-extrabold text-[#f1a123]">
          CHEESE STEAK
        </h2>
      </span>
      <p>
        Tender flavourful beef, crispy tortilla, lettuce, tomato, cheese, smash
        sause
      </p>

      <div className="text-white bg-[#f1a123] px-6 py-2">
        <h2 className="text-3xl md:text-5xl font-extrabold">HOUSE SPECIAL</h2>
        <h2 className="text-3xl md:text-5xl font-extrabold">DONER & FRIES</h2>
        <ul>
          {houseSpecialItems.map((item) => (
            <li
              key={item.name}
              className="flex justify-between md:text-3xl text-2xl font-semibold"
            >
              <h1>{item.name}</h1>
              <p>{item.price}</p>
            </li>
          ))}
        </ul>
      </div>

      <div className="text-[#f1a123] bg-white px-6 py-2">
        <h2 className="text-3xl md:text-6xl font-extrabold">MAKE IT</h2>
        <h2 className="text-3xl md:text-6xl font-extrabold">A MEAL</h2>
        <ul>
          {houseSpecialItems.map((item) => (
            <li
              key={item.name}
              className="flex justify-between md:text-3xl text-2xl font-semibold"
            >
              <h1>{item.name}</h1>
              <p>{item.price}</p>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};
