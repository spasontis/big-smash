export const BigBoyBurgers = () => {
  const burgerItems = [
    {
      name: "THE BIG SMASH",
      price: "8.49",
      description:
        "2 x Beff patties, brioche bun, lettuce, tomato, cheese, smash sause",
    },
    {
      name: "THE SMASH STACK",
      price: "11.49",
      description:
        "4 x Beff patties, brioche bun, lettuce, tomato, cheese, smash sause",
    },
    {
      name: "THE SHROOM SMASH",
      price: "8.99",
      description:
        "2 x Beff patties, brioche bun, lettuce, tomato, cheese, mushroom sauce",
    },
    {
      name: "THE SMOOKIN SMASH",
      price: "11.49",
      description:
        "2 x Beff patties, brioche bun, lettuce, tomato, cheese, smash sause",
    },
    {
      name: "THE PULLED COW",
      price: "10.99",
      description:
        "Pulled beef, lettuce, jalapenos, caramelized onion, cheese, smash sause",
    },
    {
      name: "THE CLUCK SMASH",
      price: "8.49",
      description:
        "2 x Smashed chicken patties, brioche bun, lettuce,grilled onion, tomato, cheese",
    },
    {
      name: "THE CRISPY CLUCK",
      price: "6.49",
      description: "Chicken fillet, brioche bun, lettuce, mayo, cheese",
    },
    {
      name: "THE OCEAN CATCH",
      price: "6.49",
      description: "Fish fillet, brioche bun, lettuce, mayo, cheese",
    },
    {
      name: "THE VEGGIE CRUNCH",
      price: "6.49",
      description: "Veggie patty, brioche bun, lettuce, tomato",
    },
  ];

  return (
    <div className="text-white bg-[#f1a123] px-4 pt-2 pb-14">
      <h2 className="text-3xl md:text-6xl font-extrabold text-center">
        BIG BOY
      </h2>
      <h2 className="text-3xl md:text-6xl font-extrabold text-center">
        BURGERS
      </h2>
      <ul>
        {burgerItems.map((item) => (
          <li key={item.name}>
            <div className="flex justify-between md:text-3xl text-2xl font-semibold">
              <h1>{item.name}</h1>
              <p>{item.price}</p>
            </div>
            <p>{item.description}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};
