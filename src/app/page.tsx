import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import StatsSection from "@/components/StatsSection";
import WaveDivider from "@/components/WaveDivider";
import WhyChooseSection from "@/components/WhyChooseSection";
import ServicesSection from "@/components/ServicesSection";
import ToursSection from "@/components/ToursSection";
import ReviewsSection from "@/components/ReviewsSection";
import ContactSection from "@/components/ContactSection";
import FAQSection from "@/components/FAQSection";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <HeroSection />
        <AboutSection />
        <StatsSection />
        <WaveDivider from="white" to="#f8f9fb" />
        <WhyChooseSection />
        <WaveDivider from="#f8f9fb" to="white" />
        <ServicesSection />
        <WaveDivider from="white" to="#f8f9fb" />
        <ToursSection />
        <WaveDivider from="#f8f9fb" to="navy" />
        <ReviewsSection />
        <ContactSection />
        <WaveDivider from="navy" to="white" />
        <FAQSection />
      </main>
      <Footer />
    </>
  );
}
