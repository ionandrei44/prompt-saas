import HeroSection from "../components/hero-section/HeroSection";
import BenefitsSection from "../components/benefits/BenefitsSection";
import PricingSection from "../components/pricing/PricingSection";
import AboutSection from "../components/about/AboutSection";
import ContactSection from "../components/contact/ContactSection";

const LandingPage = () => {
  return (
    <div id="hero">
      <HeroSection />
      <BenefitsSection />
      <PricingSection />
      <AboutSection />
      <ContactSection />
    </div>
  );
};

export default LandingPage;
