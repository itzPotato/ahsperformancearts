import Hero from "@/components/Hero";
import ProductionGallery from "@/components/ProductionGallery";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Hero />
      <ProductionGallery />
      <Footer />
    </div>
  );
};

export default Index;
