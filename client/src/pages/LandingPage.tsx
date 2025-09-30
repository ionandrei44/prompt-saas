import HeroSection from "../components/hero-section/HeroSection";
import FeaturesSection from "../components/features/FeaturesSection";
import PricingSection from "../components/pricing/PricingSection";
import AboutSection from "../components/about/AboutSection";
import ContactSection from "../components/contact/ContactSection";

const LandingPage = () => {
  return (
    <div id="hero">
      <HeroSection />
      <FeaturesSection />
      <PricingSection />
      <AboutSection />
      <ContactSection />
    </div>
  );
};

export default LandingPage;
