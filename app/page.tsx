import AboutSection from "@/components/AboutSection";
import ContactSection from "@/components/ContactSection";
import FeaturesSection from "@/components/FeaturesSection";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import HowItWorksSection from "@/components/HowItWorksSection";

export default function Home() {
  return (
    <div>
      <Header />
      <HeroSection />
      <HowItWorksSection />
      <FeaturesSection />
      <ContactSection />
      <AboutSection />
      <Footer />
    </div>
  );
}
