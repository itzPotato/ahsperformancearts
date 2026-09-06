import { Calendar, MapPin } from "lucide-react";
import { Link } from "react-router-dom";

const CurrentWork = () => {
  const currentProduction = {
    title: "2025-26 Season Wrap-Up",
    description: "Thank you to everyone who supported AHS Performing Arts throughout the 2025-26 academic year. Mean Girls (High School Version) has finished its run, and ticket sales for the production are now closed.",
    showDates: "Mean Girls performed April 2, 3, 4 and April 9, 10, 11, 2026",
    nextUpdate: "Information about the next production will be announced when available.",
    location: "Theater 70, American High School",
  };

  return (
    <section id="current-work" className="py-20 px-4 bg-gradient-to-b from-background to-muted/20">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="font-playfair text-5xl md:text-6xl font-bold text-foreground mb-4">
            Season Update
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Celebrating a finished year of performances
          </p>
        </div>

        <div className="bg-card/50 backdrop-blur-sm rounded-2xl border border-accent/20 overflow-hidden shadow-dramatic hover:shadow-spotlight transition-all duration-300">
          <div className="p-8 md:p-12">
            <h3 className="font-playfair text-4xl md:text-5xl font-bold text-foreground mb-6">
              {currentProduction.title}
            </h3>
            
            <p className="text-muted-foreground text-lg leading-relaxed mb-8">
              {currentProduction.description}
            </p>

            <div className="grid md:grid-cols-2 gap-6">
              <div className="flex items-start gap-4 p-4 bg-background/50 rounded-lg border border-accent/10">
                <Calendar className="w-6 h-6 text-accent flex-shrink-0 mt-1" />
                <div>
                  <h4 className="font-semibold text-foreground mb-1">Completed Production</h4>
                  <p className="text-muted-foreground">{currentProduction.showDates}</p>
                </div>
              </div>

              <div className="flex items-start gap-4 p-4 bg-background/50 rounded-lg border border-accent/10">
                <Calendar className="w-6 h-6 text-accent flex-shrink-0 mt-1" />
                <div>
                  <h4 className="font-semibold text-foreground mb-1">What's Next</h4>
                  <p className="text-muted-foreground">{currentProduction.nextUpdate}</p>
                </div>
              </div>

              <div className="flex items-start gap-4 p-4 bg-background/50 rounded-lg border border-accent/10">
                <MapPin className="w-6 h-6 text-accent flex-shrink-0 mt-1" />
                <div>
                  <h4 className="font-semibold text-foreground mb-1">Location</h4>
                  <p className="text-muted-foreground">{currentProduction.location}</p>
                </div>
              </div>
            </div>

            <div className="mt-8 flex flex-col sm:flex-row gap-4">
              <Link 
                to="/play/mean-girls" 
                className="px-8 py-4 bg-primary text-primary-foreground rounded-lg font-semibold shadow-dramatic hover:shadow-spotlight transition-all duration-300 hover:scale-105 text-center"
              >
                View Mean Girls Archive
              </Link>
              <a 
                href="#productions" 
                className="px-8 py-4 bg-card/50 backdrop-blur-sm text-foreground rounded-lg font-semibold border border-accent/30 hover:bg-card/70 transition-all duration-300 text-center"
              >
                View Past Productions
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CurrentWork;
