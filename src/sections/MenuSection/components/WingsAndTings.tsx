export const WingsAndTings = () => {
  return (
    <div className="relative">
      <div className="absolute top-0 left-0 px-6 pt-2 z-10 pointer-events-none">
        <h2 className="text-3xl md:text-6xl font-extrabold ">WINGS</h2>
        <h2 className="text-3xl md:text-6xl font-extrabold ">& TINGS</h2>
      </div>

      <div
        className="text-white bg-[#f1a123] px-6 pt-2 pb-14 h-screen"
        style={{
          clipPath: "polygon(0 160px, 100% 0, 100% 40px, 100% 100%, 0 100%)",
        }}
      >
        <div className="invisible">
          <h2 className="text-3xl md:text-6xl font-extrabold">LOAD</h2>
          <h2 className="text-3xl md:text-6xl font-extrabold">THEM UP</h2>
        </div>
        <ul>
          <li>
            <div className="flex justify-between md:text-3xl text-2xl font-semibold">
              <h1>BEEFIN` FRIES</h1>
              <p>5.99</p>
            </div>
            <p>Fries with beef patty, cheese sauce, gherkins, smash sause</p>
          </li>
          <li>
            <div className="flex justify-between md:text-3xl text-2xl font-semibold">
              <h1>CLUCKIN` FRIES</h1>
              <p>5.99</p>
            </div>
            <p>
              Fries with chicken strips, cheese sauce, gherkins, smash sause
            </p>
          </li>
          <li>
            <div className="flex justify-between md:text-3xl text-2xl font-semibold">
              <h1>SMASHIN` FRIES</h1>
              <p>7.49</p>
            </div>
            <p>
              Fries with one patty, two chicken strips, cheese sauce, gherkins,
              smash sause
            </p>
          </li>
          <li>
            <div className="flex justify-between md:text-3xl text-2xl font-semibold">
              <h1>PULLED FRIES</h1>
              <p>7.99</p>
            </div>
            <p>
              Fries with pulled beef, cheese sauce, jalapenos, caramelized
              onion, smash sause
            </p>
          </li>
        </ul>
      </div>
    </div>
  );
};
