import { Sparkles } from "lucide-react";
import heroImage from "@/assets/theater-hero.jpg";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${heroImage})` }}
      >
        <div className="absolute inset-0 bg-gradient-stage opacity-60" />
        <div className="absolute inset-0 bg-gradient-spotlight animate-spotlight" />
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-4 max-w-5xl mx-auto animate-fade-in">
        <div className="mb-6 inline-flex items-center gap-2 px-4 py-2 rounded-full bg-card/30 backdrop-blur-sm border border-accent/30">
          <Sparkles className="w-4 h-4 text-accent" />
          <span className="text-accent font-medium text-sm tracking-wider uppercase">
            Performing Arts Excellence
          </span>
        </div>
        
        <h1 className="font-playfair text-6xl md:text-8xl font-black mb-6 tracking-tight">
          <span className="block text-foreground drop-shadow-dramatic">
            AHS Performing
          </span>
          <span className="block text-accent drop-shadow-spotlight">
            Arts
          </span>
        </h1>
        
        <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-2xl mx-auto font-light">
          Where creativity takes center stage and students transform into storytellers. 
          Explore our legacy of theatrical excellence.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <a 
            href="#productions" 
            className="px-8 py-4 bg-primary text-primary-foreground rounded-lg font-semibold shadow-dramatic hover:shadow-spotlight transition-all duration-300 hover:scale-105"
          >
            View Productions
          </a>
          <a 
            href="#about" 
            className="px-8 py-4 bg-card/50 backdrop-blur-sm text-foreground rounded-lg font-semibold border border-accent/30 hover:bg-card/70 transition-all duration-300"
          >
            About Us
          </a>
        </div>
      </div>

      {/* Stage Floor Effect */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent" />
    </section>
  );
};

export default Hero;
