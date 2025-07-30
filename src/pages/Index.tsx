import { useState } from "react";
import Navigation from "@/components/Navigation";
import HeroSection from "@/components/sections/HeroSection";
import VideoSection from "@/components/sections/VideoSection";
import FeaturesSection from "@/components/sections/FeaturesSection";
import FAQSection from "@/components/sections/FAQSection";
import DownloadSection from "@/components/sections/DownloadSection";
import HelpSection from "@/components/sections/HelpSection";
import Footer from "@/components/Footer";
import { ProductShowcase } from "@/components/ProductShowcase";

const Index = () => {
  const [activeSection, setActiveSection] = useState("home");

  const renderContent = () => {
    switch (activeSection) {
      case "help":
        return <HelpSection />;
      case "download":
        return <DownloadSection />;
      default:
        return (
          <>
            <HeroSection />
            <ProductShowcase />
            <VideoSection />
            <FeaturesSection />
            <FAQSection />
          </>
        );
    }
  };

  return (
    <div className="min-h-screen bg-gradient-hero">
      <Navigation activeSection={activeSection} onSectionChange={setActiveSection} />
      <main className="pt-20">
        {renderContent()}
      </main>
      <Footer />
    </div>
  );
};

export default Index;
