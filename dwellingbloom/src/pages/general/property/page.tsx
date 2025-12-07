import CategorySection from "../home/components/CategorySection";
import SearchSection from "./components/SearchSection";
import HeroSection from "./components/HeroSection";
import PropertyListSection from "./components/PropertyListSection";

function Property() {
  document.title = "Property: DwellingBloom";

  return (
    <article className='container-xxl bg-white p-0'>
      <HeroSection />
      <SearchSection />
      <CategorySection />
      <PropertyListSection />
    </article>
  );
}

export default Property;
