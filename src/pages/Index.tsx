import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import DiasporaSection from "@/components/DiasporaSection";
import HowItWorksSection from "@/components/HowItWorksSection";
import FeaturesSection from "@/components/FeaturesSection";
import MobileExperienceSection from "@/components/MobileExperienceSection";
import SocialProofSection from "@/components/SocialProofSection";
import FinalCTASection from "@/components/FinalCTASection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <main className="min-h-screen">
      <Navbar />
      <HeroSection />
      <DiasporaSection />
      <HowItWorksSection />
      <FeaturesSection />
      <MobileExperienceSection />
      <SocialProofSection />
      <FinalCTASection />
      <Footer />
    </main>
  );
};

export default Index;
