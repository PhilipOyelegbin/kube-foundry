import Border from "../../../components/Border";
import AboutSection from "../home/components/AboutSection";
import HeroSection from "./components/HeroSection";
import ValueSection from "./components/ValueSection";

function About() {
  document.title = "About: DwellingBloom";

  return (
    <article className='container-xxl bg-white p-0'>
      <HeroSection />
      <Border />
      <AboutSection />
      <ValueSection />
    </article>
  );
}

export default About;
