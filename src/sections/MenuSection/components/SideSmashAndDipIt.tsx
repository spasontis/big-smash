export const SideSmashAndDipIt = () => {
  const sideSmashItems = [
    { name: "CARAMELIZED ONION", price: "0.99" },
    { name: "CHEESE SAUSE", price: "0.99" },
    { name: "MUSHROOM SAUSE", price: "1.29" },
    { name: "ONION RINGS", price: "1.29" },
    { name: "HASHBROWN", price: "1.29" },
    { name: "GRILLED MUSHROOM", price: "1.29" },
    { name: "TURKEY RASHERS", price: "1.99" },
    { name: "FRIED EGG", price: "1.99" },
  ];

  const dipItItems = [
    { name: "MINI SMASH BURGER", price: "6.99" },
    { name: "FISH FINGERS", price: "5.49" },
    { name: "CHICKEN NUGGETS", price: "5.49" },
  ];

  const sipItItems = [
    { name: "MINI SMASH BURGER", price: "6.99" },
    { name: "FISH FINGERS", price: "5.49" },
    { name: "CHICKEN NUGGETS", price: "5.49" },
  ];

  return (
    <div className="flex flex-col gap-4 md:gap-8 justify-between">
      <div className="px-4 py-2">
        <h2 className="text-3xl md:text-6xl font-extrabold text-center">
          SIDE SMASH
        </h2>
        <div className="h-5 w-full bg-[#f1a123]"></div>
        <ul>
          {sideSmashItems.map((item) => (
            <li key={item.name}>
              <div className="flex justify-between md:text-3xl text-2xl font-semibold">
                <h1>{item.name}</h1>
                <p>{item.price}</p>
              </div>
            </li>
          ))}
        </ul>
      </div>

      <div className="text-white py-2">
        <h2 className="inline-block text-3xl md:text-6xl font-extrabold bg-[#f1a123]">
          DIP IT BABY!
        </h2>
        <ul className="px-4">
          {dipItItems.map((item) => (
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
      <div className="text-white bg-[#f1a123] px-4 py-2">
        <h2 className="text-3xl md:text-6xl font-extrabold text-center ">
          SIP IT UP
        </h2>
        <ul>
          {sipItItems.map((item) => (
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
