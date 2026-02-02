export const LoadThemUp = () => {
  const loadThemUpItems = [
    {
      name: "BEEFIN` FRIES",
      price: "5.99",
      description: "Fries with beef patty, cheese sauce, gherkins, smash sause",
    },
    {
      name: "CLUCKIN` FRIES",
      price: "5.99",
      description:
        "Fries with chicken strips, cheese sauce, gherkins, smash sause",
    },
    {
      name: "SMASHIN` FRIES",
      price: "7.49",
      description:
        "Fries with one patty, two chicken strips, cheese sauce, gherkins, smash sause",
    },
    {
      name: "PULLED FRIES",
      price: "7.99",
      description:
        "Fries with pulled beef, cheese sauce, jalapenos, caramelized onion, smash sause",
    },
  ];

  return (
    <div className="relative text-white px-4 pt-4 pb-14 border-20 border-[#f1a123]">
      <h2 className="text-3xl md:text-6xl font-extrabold text-[#f1a123]">
        LOAD
      </h2>
      <h2 className="text-3xl md:text-6xl font-extrabold">THEM UP</h2>
      <ul>
        {loadThemUpItems.map((item) => (
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
