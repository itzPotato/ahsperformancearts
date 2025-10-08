import { Calendar, Users } from "lucide-react";

interface ProductionCardProps {
  title: string;
  year: string;
  description: string;
  image: string;
  cast: number;
  delay?: string;
}

const ProductionCard = ({ title, year, description, image, cast, delay = "0s" }: ProductionCardProps) => {
  return (
    <div 
      className="group relative overflow-hidden rounded-xl bg-card border border-border shadow-dramatic hover:shadow-spotlight transition-all duration-500 hover:scale-[1.02] animate-fade-in"
      style={{ animationDelay: delay }}
    >
      {/* Image Container */}
      <div className="relative aspect-[4/3] overflow-hidden">
        <img 
          src={image} 
          alt={`${title} production`}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-card via-card/50 to-transparent opacity-60 group-hover:opacity-40 transition-opacity duration-500" />
        
        {/* Year Badge */}
        <div className="absolute top-4 right-4 px-3 py-1 rounded-full bg-accent/90 backdrop-blur-sm">
          <span className="text-accent-foreground font-semibold text-sm">{year}</span>
        </div>

        {/* Spotlight Effect on Hover */}
        <div className="absolute inset-0 bg-gradient-spotlight opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
      </div>

      {/* Content */}
      <div className="p-6">
        <h3 className="font-playfair text-2xl font-bold mb-2 text-foreground group-hover:text-accent transition-colors duration-300">
          {title}
        </h3>
        
        <p className="text-muted-foreground mb-4 line-clamp-2">
          {description}
        </p>

        <div className="flex items-center gap-4 text-sm text-muted-foreground">
          <div className="flex items-center gap-1">
            <Calendar className="w-4 h-4" />
            <span>{year}</span>
          </div>
          <div className="flex items-center gap-1">
            <Users className="w-4 h-4" />
            <span>{cast} Cast Members</span>
          </div>
        </div>
      </div>

      {/* Bottom Accent Line */}
      <div className="h-1 bg-gradient-curtain transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />
    </div>
  );
};

export default ProductionCard;
