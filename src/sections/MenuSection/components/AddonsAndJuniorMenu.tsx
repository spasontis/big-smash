import smashBurger from "@/shared/assets/smash-burger.png";
import Image from "next/image";

export const AddonsAndJuniorMenu = () => {
  return (
    <div className="flex flex-col gap-8 justify-between">
      <div className="text-[#f1a123] bg-white px-4 md:px-8 py-2">
        <h2 className="text-3xl md:text-6xl font-extrabold text-center">
          + ADD ONS
        </h2>
        <ul>
          <li>
            <div className="flex justify-between md:text-3xl text-2xl font-semibold">
              <h1>CARAMELIZED ONION</h1>
              <p>0.99</p>
            </div>
          </li>
          <li>
            <div className="flex justify-between md:text-3xl text-2xl font-semibold">
              <h1>CHEESE SAUSE</h1>
              <p>0.99</p>
            </div>
          </li>
          <li>
            <div className="flex justify-between md:text-3xl text-2xl font-semibold">
              <h1>MUSHROOM SAUSE</h1>
              <p>1.29</p>
            </div>
          </li>
          <li>
            <div className="flex justify-between md:text-3xl text-2xl font-semibold">
              <h1>ONION RINGS</h1>
              <p>1.29</p>
            </div>
          </li>
          <li>
            <div className="flex justify-between md:text-3xl text-2xl font-semibold">
              <h1>HASHBROWN</h1>
              <p>1.29</p>
            </div>
          </li>
          <li>
            <div className="flex justify-between md:text-3xl text-2xl font-semibold">
              <h1>GRILLED MUSHROOM</h1>
              <p>1.29</p>
            </div>
          </li>
          <li>
            <div className="flex justify-between md:text-3xl text-2xl font-semibold">
              <h1>TURKEY RASHERS</h1>
              <p>1.99</p>
            </div>
          </li>
          <li>
            <div className="flex justify-between md:text-3xl text-2xl font-semibold">
              <h1>FRIED EGG</h1>
              <p>1.99</p>
            </div>
          </li>
        </ul>
      </div>
      <Image src={smashBurger} alt="Wings" width={500} height={500} />
      <div className="text-white bg-[#f1a123] px-4 md:px-8 py-2">
        <h2 className="text-3xl md:text-6xl font-extrabold text-center">
          JUNIORS
        </h2>
        <h2 className="text-3xl md:text-6xl font-extrabold text-center">
          MENU
        </h2>
        <ul>
          <li className="flex justify-between md:text-3xl text-2xl font-semibold">
            <h1>MINI SMASH BURGER</h1>
            <p>6.99</p>
          </li>
          <li className="flex justify-between md:text-3xl text-2xl font-semibold">
            <h1>FISH FINGERS</h1>
            <p>5.49</p>
          </li>
          <li className="flex justify-between md:text-3xl text-2xl font-semibold">
            <h1>CHICKEN NUGGETS</h1>
            <p>5.49</p>
          </li>
        </ul>
      </div>
    </div>
  );
};
