import ProductionCard from "./ProductionCard";
import romeoJulietImg from "@/assets/romeo-juliet.jpg";
import wizardOzImg from "@/assets/wizard-oz.jpg";
import hamiltonImg from "@/assets/hamilton-style.jpg";
import midsummerImg from "@/assets/midsummer.jpg";
import greaseImg from "@/assets/grease.jpg";
import lesMisImg from "@/assets/les-mis.jpg";
import { Sparkles } from "lucide-react";

const productions = [
  {
    title: "Romeo & Juliet",
    year: "2024",
    description: "Shakespeare's timeless tale of star-crossed lovers brought to life with stunning period costumes and powerful performances.",
    image: romeoJulietImg,
    cast: 24
  },
  {
    title: "The Wizard of Oz",
    year: "2023",
    description: "Follow Dorothy's magical journey through Oz in this beloved musical featuring the iconic yellow brick road.",
    image: wizardOzImg,
    cast: 32
  },
  {
    title: "Revolution",
    year: "2023",
    description: "A contemporary musical inspired by Hamilton, telling stories of change and transformation through powerful hip-hop performances.",
    image: hamiltonImg,
    cast: 28
  },
  {
    title: "A Midsummer Night's Dream",
    year: "2022",
    description: "Shakespeare's enchanted forest comes alive with fairies, lovers, and mischievous magic in this whimsical production.",
    image: midsummerImg,
    cast: 20
  },
  {
    title: "Grease",
    year: "2022",
    description: "Rock 'n' roll high school comes alive in this electrifying production of the 1950s classic with unforgettable music.",
    image: greaseImg,
    cast: 30
  },
  {
    title: "Les Misérables",
    year: "2021",
    description: "An epic tale of justice, love, and redemption set against the backdrop of revolutionary France.",
    image: lesMisImg,
    cast: 35
  }
];

const ProductionGallery = () => {
  return (
    <section id="productions" className="py-24 px-4 bg-background relative">
      {/* Decorative Background Elements */}
      <div className="absolute inset-0 bg-gradient-spotlight opacity-5" />
      
      <div className="max-w-7xl mx-auto relative">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-card/30 backdrop-blur-sm border border-accent/30 mb-6">
            <Sparkles className="w-4 h-4 text-accent" />
            <span className="text-accent font-medium text-sm tracking-wider uppercase">
              Our Productions
            </span>
          </div>
          
          <h2 className="font-playfair text-5xl md:text-6xl font-bold mb-6 text-foreground">
            Past <span className="text-accent">Performances</span>
          </h2>
          
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Celebrating years of theatrical excellence and unforgettable performances 
            from the talented students of American High School.
          </p>
        </div>

        {/* Productions Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {productions.map((production, index) => (
            <ProductionCard
              key={production.title}
              {...production}
              delay={`${index * 0.1}s`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductionGallery;
