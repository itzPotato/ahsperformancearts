import { Calendar, Users, MapPin } from "lucide-react";

const CurrentWork = () => {
  const currentProduction = {
    title: "Spring Musical 2025",
    description: "Our cast and crew are hard at work bringing this spectacular production to life. Join us for an unforgettable theatrical experience featuring talented student performers, stunning choreography, and breathtaking musical numbers.",
    rehearsalStart: "January 2025",
    showDates: "March 14-16, 2025",
    location: "Theater 70, American High School",
    castSize: "35+ students",
    status: "In Rehearsal"
  };

  return (
    <section id="current-work" className="py-20 px-4 bg-gradient-to-b from-background to-muted/20">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent/10 backdrop-blur-sm border border-accent/30 mb-4">
            <span className="relative flex h-3 w-3">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-accent opacity-75"></span>
              <span className="relative inline-flex rounded-full h-3 w-3 bg-accent"></span>
            </span>
            <span className="text-accent font-medium text-sm tracking-wider uppercase">
              {currentProduction.status}
            </span>
          </div>
          <h2 className="font-playfair text-5xl md:text-6xl font-bold text-foreground mb-4">
            Current Work
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Experience the magic as it unfolds
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
                  <h4 className="font-semibold text-foreground mb-1">Performance Dates</h4>
                  <p className="text-muted-foreground">{currentProduction.showDates}</p>
                  <p className="text-sm text-muted-foreground/70 mt-1">Rehearsing since {currentProduction.rehearsalStart}</p>
                </div>
              </div>

              <div className="flex items-start gap-4 p-4 bg-background/50 rounded-lg border border-accent/10">
                <MapPin className="w-6 h-6 text-accent flex-shrink-0 mt-1" />
                <div>
                  <h4 className="font-semibold text-foreground mb-1">Location</h4>
                  <p className="text-muted-foreground">{currentProduction.location}</p>
                </div>
              </div>

              <div className="flex items-start gap-4 p-4 bg-background/50 rounded-lg border border-accent/10 md:col-span-2">
                <Users className="w-6 h-6 text-accent flex-shrink-0 mt-1" />
                <div>
                  <h4 className="font-semibold text-foreground mb-1">Cast & Crew</h4>
                  <p className="text-muted-foreground">{currentProduction.castSize} talented students collaborating to create theatrical excellence</p>
                </div>
              </div>
            </div>

            <div className="mt-8 flex flex-col sm:flex-row gap-4">
              <a 
                href="#auditions" 
                className="px-8 py-4 bg-primary text-primary-foreground rounded-lg font-semibold shadow-dramatic hover:shadow-spotlight transition-all duration-300 hover:scale-105 text-center"
              >
                Audition Information
              </a>
              <a 
                href="#members" 
                className="px-8 py-4 bg-card/50 backdrop-blur-sm text-foreground rounded-lg font-semibold border border-accent/30 hover:bg-card/70 transition-all duration-300 text-center"
              >
                Meet the Cast
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CurrentWork;
