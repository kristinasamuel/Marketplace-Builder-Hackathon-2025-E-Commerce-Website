import HeroSection from "@/components/HeroSection";
import ItemsSection from "@/components/itemsSection";
import NewDesignsSection from "@/components/NewDesigns";
import OurProduct from "@/components/Product";
import RoomDesignSection from "@/components/RoomDesign";

export default function HomePage() {
  return (
    <div>
      <HeroSection />
      <ItemsSection />
      <OurProduct />
      <RoomDesignSection />
      <NewDesignsSection />
    </div>
  );
}