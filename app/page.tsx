import { HomeSection } from "@/sections/HomeSection";
import { Header } from "@/widgets/header";
import { ContactsSection } from "@/sections/ContactsSection";
import { MenuSection } from "@/sections/MenuSection";
import { ReviewsSection } from "@/sections/ReviewsSection";

export default function Home() {
  return (
    <div>
      <Header />
      <HomeSection />
      <MenuSection />
      <ReviewsSection />
      <ContactsSection />
    </div>
  );
}
