import { AddonsAndJuniorMenu } from "../components/AddonsAndJuniorMenu";
import { BigBoyBurgers } from "../components/BigBoyBurgers";
import { LoadThemUp } from "../components/LoadThemUp";
import { SideSmashAndDipIt } from "../components/SideSmashAndDipIt";
import { TacoTimeAndPhiliySteak } from "../components/TacoTimeAndPhiliySteak";
import { WingsAndTings } from "../components/WingsAndTings";

export const MenuSection = () => {
  return (
    <section id="menu">
      <h2 className="text-3xl md:text-7xl text-[#f1a123] font-extrabold text-center py-14">
        MENU
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 px-8">
        <BigBoyBurgers />
        <AddonsAndJuniorMenu />
        <TacoTimeAndPhiliySteak />
        <LoadThemUp />
        <SideSmashAndDipIt />
        <WingsAndTings />
      </div>
    </section>
  );
};
