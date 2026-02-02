export const DontBeWafflinAndAddons = () => {
  const dontBeWafflinItems = [
    { name: "MILK CHOCOLATE", price: "4.99" },
    { name: "WHITE CHOCOLATE", price: "4.99" },
    { name: "OREO", price: "5.75" },
    { name: "BISCOFF", price: "5.75" },
    { name: "KINDER WHITE", price: "5.75" },
    { name: "AERO MINT", price: "5.75" },
  ];

  const addOnsItems = [
    { name: "STRAWBERRIES", price: "1.29" },
    { name: "MARSHMALLOWS", price: "0.80" },
    { name: "KINDER WHITE", price: "0.80" },
    { name: "OREO", price: "0.80" },
    { name: "BISCOFF", price: "0.80" },
    { name: "AERO MINT", price: "0.80" },
    { name: "EXTRA SAUCE", price: "0.80" },
  ];

  return (
    <div className="flex flex-col gap-4 md:gap-8 justify-between">
      <div className="px-4 py-2">
        <h2 className="text-3xl md:text-6xl font-extrabold text-center">
          DONT BE
        </h2>
        <h2 className="text-3xl md:text-6xl font-extrabold text-center">
          WAFFLIN`
        </h2>
        <div className="h-5 w-full bg-[#f1a123]"></div>
        <ul>
          {dontBeWafflinItems.map((item) => (
            <li key={item.name}>
              <div className="flex justify-between md:text-3xl text-2xl font-semibold">
                <h1>{item.name}</h1>
                <p>{item.price}</p>
              </div>
            </li>
          ))}
        </ul>
      </div>
      <div className="text-white bg-[#f1a123] px-4 py-2">
        <h2 className="text-3xl md:text-6xl font-extrabold text-center ">
          +ADD ONS
        </h2>
        <ul>
          {addOnsItems.map((item) => (
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
      <div className="text-[#f1a123] px-4 py-2">
        <span className="flex justify-between items-center">
          <h2 className="text-5xl md:text-6xl font-extrabold">APPLE</h2>
          <h2 className="text-5xl md:text-3xl text-white font-bold bg-[#f1a123] px-4 py-2">
            6.95
          </h2>
        </span>
        <h2 className="text-5xl md:text-6xl font-extrabold">CRUMBLE</h2>
        <p className="text-white">
          Served with a scoop of ice cream or custard
        </p>
      </div>
    </div>
  );
};
