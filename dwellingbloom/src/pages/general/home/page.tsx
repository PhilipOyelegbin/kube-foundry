import HeroSection from "./components/HeroSection";
import CategorySection from "./components/CategorySection";
import AboutSection from "./components/AboutSection";
import PropertyListSection from "./components/PropertyListSection";
import TestimonialSection from "./components/TestimonialSection";
import Border from "../../../components/Border";

export default function HomePage() {
  document.title = "Home: DwellingBloom";

  return (
    <article className='container-xxl bg-white p-0'>
      <HeroSection />
      <Border />
      <CategorySection />
      <AboutSection />
      <PropertyListSection />
      <TestimonialSection />
    </article>
  );
}
