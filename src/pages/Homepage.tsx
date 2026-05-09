import HeroSection from "../components/hero/HeroSection";
import CTASection from "../components/hero/CTASection";
import WhyOptiverseSection from "../components/hero/WhyOptiverseSection";
import OurServicesSection from "../components/hero/OurServicesSection";
import BlogsSection from "../components/hero/BlogsSection";
import TestimonialsSection from "../components/hero/TestimonialsSection";
import TransformationCTASection from "../components/hero/TransformationCTASection";
import Footer from "../components/hero/Footer";
import ContactSection from "../components/hero/ContactSection";

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <CTASection />
      <WhyOptiverseSection />
      <OurServicesSection />
      <BlogsSection />
      <TestimonialsSection />
      <TransformationCTASection />
      <ContactSection />
      <Footer />
    </>
  );
}
