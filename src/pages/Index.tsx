
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import MenuShowcase from "@/components/MenuShowcase";
import Pricing from "@/components/Pricing";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <Hero />
      <MenuShowcase />
      <Pricing />
      <Footer />
    </div>
  );
};

export default Index;
