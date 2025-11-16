import Header from "@/components/Header";
import Hero from "@/components/Hero";
import ProblemSection from "@/components/ProblemSection";
import ServicesSection from "@/components/ServicesSection";
import WhyChooseUs from "@/components/WhyChooseUs";
import CTASection from "@/components/CTASection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";
import FloatingActionButtons from "@/components/FloatingActionButtons";

const Index = () => {
  return (
    <main className="min-h-screen">
      <Header />
      <Hero />
      <ProblemSection />
      <ServicesSection />
      <WhyChooseUs />
      <CTASection />
      <ContactSection />
      <Footer />
      <FloatingActionButtons />
    </main>
  );
};

export default Index;