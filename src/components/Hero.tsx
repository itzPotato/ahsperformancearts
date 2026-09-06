import { Menu, X, Link as LinkIcon, Instagram, Award } from "lucide-react";
import { useState } from "react";
import { Link } from "react-router-dom";
import heroImage from "@/assets/theater-hero.jpg";

const Hero = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navItems = [
    { label: "Season Update", href: "#current-work", isExternal: false },
    { label: "Past Productions", href: "#productions", isExternal: false },
    { label: "About Us", href: "/about", isExternal: false },
    { label: "Contact", href: "/contact", isExternal: false },
  ];

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Social Media & External Links - Top Left */}
      <div className="absolute top-0 left-0 z-20 p-6 flex flex-col gap-2">
        <a
          href="https://linktr.ee/ahspa"
          target="_blank"
          rel="noopener noreferrer"
          className="px-4 py-2 rounded-lg bg-card/30 backdrop-blur-sm border border-accent/30 text-foreground hover:bg-accent hover:text-accent-foreground transition-all duration-300 font-medium text-sm whitespace-nowrap flex items-center gap-2"
        >
          <LinkIcon className="w-4 h-4" />
          Linktree
        </a>
        <a
          href="https://instagram.com/ahsperformingarts"
          target="_blank"
          rel="noopener noreferrer"
          className="px-4 py-2 rounded-lg bg-card/30 backdrop-blur-sm border border-accent/30 text-foreground hover:bg-accent hover:text-accent-foreground transition-all duration-300 font-medium text-sm whitespace-nowrap flex items-center gap-2"
        >
          <Instagram className="w-4 h-4" />
          Instagram
        </a>
        <a
          href="http://www.whspac.org/sara-bareilles-awards.html"
          target="_blank"
          rel="noopener noreferrer"
          className="px-4 py-2 rounded-lg bg-card/30 backdrop-blur-sm border border-accent/30 text-foreground hover:bg-accent hover:text-accent-foreground transition-all duration-300 font-medium text-sm whitespace-nowrap flex items-center gap-2"
        >
          <Award className="w-4 h-4" />
          Sara Bareilles Awards
        </a>
      </div>

      {/* Navigation */}
      <nav className="absolute top-0 right-0 z-20 p-6">
        <button 
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="md:hidden p-2 rounded-lg bg-card/30 backdrop-blur-sm border border-accent/30 text-foreground hover:bg-card/50 transition-all"
        >
          {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
        
        <div className={`${isMenuOpen ? 'flex' : 'hidden'} md:flex flex-col md:flex-row gap-2 md:gap-4 absolute md:relative top-full right-0 mt-2 md:mt-0 bg-card/90 md:bg-transparent backdrop-blur-sm md:backdrop-blur-none p-4 md:p-0 rounded-lg md:rounded-none border md:border-0 border-accent/30 min-w-[200px] md:min-w-0`}>
          {navItems.map((item) => {
            const className = "px-4 py-2 rounded-lg bg-card/30 backdrop-blur-sm border border-accent/30 text-foreground hover:bg-accent hover:text-accent-foreground transition-all duration-300 font-medium text-sm whitespace-nowrap";
            
            return item.isExternal ? (
              <a
                key={item.href}
                href={item.href}
                onClick={() => setIsMenuOpen(false)}
                target="_blank"
                rel="noopener noreferrer"
                className={className}
              >
                {item.label}
              </a>
            ) : item.href.startsWith('/') ? (
              <Link
                key={item.href}
                to={item.href}
                onClick={() => setIsMenuOpen(false)}
                className={className}
              >
                {item.label}
              </Link>
            ) : (
              <a
                key={item.href}
                href={item.href}
                onClick={() => setIsMenuOpen(false)}
                className={className}
              >
                {item.label}
              </a>
            );
          })}
        </div>
      </nav>

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
          <Link 
            to="/about"
            className="px-8 py-4 bg-card/50 backdrop-blur-sm text-foreground rounded-lg font-semibold border border-accent/30 hover:bg-card/70 transition-all duration-300"
          >
            About Us
          </Link>
        </div>
      </div>

      {/* Stage Floor Effect */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent" />
    </section>
  );
};

export default Hero;
