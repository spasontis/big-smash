import { HomeSection } from "@/sections/HomeSection";
import { Header } from "@/widgets/header";
import { ContactsSection } from "@/sections/ContactsSection";
import { MenuSection } from "@/sections/MenuSection";
import { ReviewsSection } from "@/sections/ReviewsSection";
import { Footer } from "@/shared/components/Footer";

export default function Home() {
  return (
    <div>
      <Header />
      <HomeSection />
      <MenuSection />
      <ReviewsSection />
      <ContactsSection />
      <Footer />
    </div>
  );
}
