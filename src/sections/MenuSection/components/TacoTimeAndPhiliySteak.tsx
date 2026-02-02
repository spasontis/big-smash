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
  { name: "GRILLED LAMB DONER WITH" },
  { name: "MIXED PEPPERS, ONIONS," },
  { name: "COOKED IN A SPECIAL SAUCE" },
  { name: "SERVERD WITH FRIES & SALAD" },
];

export const TacoTimeAndPhiliySteak = () => {
  return (
    <div className="flex flex-col gap-4 md:gap-8 justify-between text-white pt-2">
      <span>
        <h2 className="text-3xl md:text-6xl font-extrabold text-[#f1a123]">
          TACO
        </h2>
        <h2 className="text-3xl md:text-6xl font-extrabold">TIME</h2>
        <div className="h-2 w-full bg-[#f1a123]"></div>
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

      <div className="text-white bg-[#f1a123] px-4 md:px-8 py-2">
        <h2 className="text-3xl md:text-5xl font-extrabold">HOUSE SPECIAL</h2>
        <h2 className="text-3xl md:text-5xl font-extrabold">DONER & FRIES</h2>
        <ul>
          {houseSpecialItems.map((item) => (
            <li
              key={item.name}
              className="flex justify-between md:text-2xl text-xl font-semibold"
            >
              <h1>{item.name}</h1>
            </li>
          ))}
        </ul>
        <p className="text-2xl md:text-4xl font-extrabold">11.45</p>
      </div>

      <div className="text-[#f1a123] bg-white px-4 md:px-8 py-2">
        <h2 className="text-5xl md:text-8xl font-extrabold">MAKE IT</h2>
        <h2 className="text-5xl md:text-8xl font-extrabold">A MEAL</h2>
        <div className="flex justify-between md:text-3xl text-2xl font-semibold">
          <h1>UPGRADE TO LOADED FRIES EXTRA</h1>
          <p>2.49</p>
        </div>
      </div>
    </div>
  );
};
