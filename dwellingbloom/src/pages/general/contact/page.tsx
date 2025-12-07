import Border from "../../../components/Border";
import ContactFormSection from "./components/ContactFormSection";
import HeroSection from "./components/HeroSection";

function ContactPage() {
  document.title = "Contact: DwellingBloom";

  return (
    <article className='container-xxl bg-white p-0'>
      <HeroSection />
      <Border />
      <ContactFormSection />
    </article>
  );
}

export default ContactPage;
