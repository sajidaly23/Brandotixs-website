import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { LogoMarquee } from "@/components/LogoMarquee";
import { AboutSection } from "@/components/AboutSection";
import { Philosophy } from "@/components/Philosophy";
import { ServicesSection } from "@/components/ServicesSection";
import { FeaturedWork } from "@/components/FeaturedWork";
import { CaseStudyHighlight } from "@/components/CaseStudyHighlight";
import { ProcessSection } from "@/components/ProcessSection";
import { WhyUs } from "@/components/WhyUs";
import { VisualExperience } from "@/components/VisualExperience";
import { FounderSection } from "@/components/FounderSection";
import { Testimonials } from "@/components/Testimonials";
import { FAQSection } from "@/components/FAQSection";
import { FinalCTA } from "@/components/FinalCTA";
import { Footer } from "@/components/Footer";

export default function Home() {
  return (
    <main className="bg-[#FAFAFA] min-h-screen font-sans selection:bg-[#D4A373] selection:text-[#0A0A0C]">
      <Navbar />
      <Hero />
      <LogoMarquee />
      <AboutSection />
      <Philosophy />
      <ServicesSection />
      <FeaturedWork />
      <CaseStudyHighlight />
      <ProcessSection />
      <WhyUs />
      <VisualExperience />
      <FounderSection />
      <Testimonials />
      <FAQSection />
      <FinalCTA />
      <Footer />
    </main>
  );
}
