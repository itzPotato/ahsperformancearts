import Hero from "@/components/Hero";
import CurrentWork from "@/components/CurrentWork";
import ProductionGallery from "@/components/ProductionGallery";
import Footer from "@/components/Footer";
import CurtainAnimation from "@/components/CurtainAnimation";

const Index = () => {
  return (
    <CurtainAnimation>
      <div className="min-h-screen bg-background">
        <Hero />
        <CurrentWork />
        <ProductionGallery />
        <Footer />
      </div>
    </CurtainAnimation>
  );
};

export default Index;
