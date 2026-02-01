export const BigBoyBurgers = () => {
  return (
    <div
      className="text-white bg-[#f1a123] px-6 pt-2 pb-14"
      style={{
        clipPath:
          "polygon(0 0, 100% 0, 100% calc(100% - 160px), 0% 100%, 0 calc(100% - 40px))",
      }}
    >
      <h2 className="text-3xl md:text-6xl font-extrabold text-center">
        BIG BOY
      </h2>
      <h2 className="text-3xl md:text-6xl font-extrabold text-center">
        BURGERS
      </h2>
      <ul>
        <li>
          <div className="flex justify-between md:text-3xl text-2xl font-semibold">
            <h1>THE BIG SMASH</h1>
            <p>8.49</p>
          </div>
          <p>
            2 x Beff patties, brioche bun, lettuce, tomato, cheese, smash sause
          </p>
        </li>
        <li>
          <div className="flex justify-between md:text-3xl text-2xl font-semibold">
            <h1>THE SMASH STACK</h1>
            <p>11.49</p>
          </div>
          <p>
            4 x Beff patties, brioche bun, lettuce, tomato, cheese, smash sause
          </p>
        </li>
        <li>
          <div className="flex justify-between md:text-3xl text-2xl font-semibold">
            <h1>THE SHROOM SMASH</h1>
            <p>8.99</p>
          </div>
          <p>
            2 x Beff patties, brioche bun, lettuce, tomato, cheese, mushroom
            sauce
          </p>
        </li>
        <li>
          <div className="flex justify-between md:text-3xl text-2xl font-semibold">
            <h1>THE SMOOKIN SMASH</h1>
            <p>11.49</p>
          </div>
          <p>
            2 x Beff patties, brioche bun, lettuce, tomato, cheese, smash sause
          </p>
        </li>
        <li>
          <div className="flex justify-between md:text-3xl text-2xl font-semibold">
            <h1>THE PULLED COW</h1>
            <p>10.99</p>
          </div>
          <p>
            Pulled beef, lettuce, jalapenos, caramelized onion, cheese, smash
            sause
          </p>
        </li>
        <li>
          <div className="flex justify-between md:text-3xl text-2xl font-semibold">
            <h1>THE CLUCK SMASH</h1>
            <p>8.49</p>
          </div>
          <p>
            2 x Smashed chicken patties, brioche bun, lettuce,grilled onion,
            tomato, cheese
          </p>
        </li>
        <li>
          <div className="flex justify-between md:text-3xl text-2xl font-semibold">
            <h1>THE CRISPY CLUCK</h1>
            <p>6.49</p>
          </div>
          <p>Chicken fillet, brioche bun, lettuce, mayo, cheese</p>
        </li>
        <li>
          <div className="flex justify-between md:text-3xl text-2xl font-semibold">
            <h1>THE OCEAN CATCH</h1>
            <p>6.49</p>
          </div>
          <p>Fish fillet, brioche bun, lettuce, mayo, cheese</p>
        </li>
        <li>
          <div className="flex justify-between md:text-3xl text-2xl font-semibold">
            <h1>THE VEGGIE CRUNCH</h1>
            <p>6.49</p>
          </div>
          <p>Veggie patty, brioche bun, lettuce, tomato</p>
        </li>
      </ul>
    </div>
  );
};
