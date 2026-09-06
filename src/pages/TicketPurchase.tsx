import { Link } from "react-router-dom";
import { ArrowLeft, Calendar, MapPin, Ticket } from "lucide-react";
import Footer from "@/components/Footer";

const TicketPurchase = () => {
  return (
    <div className="min-h-screen bg-background">
        {/* Header */}
        <div className="bg-gradient-to-b from-card to-background border-b border-border py-8 px-4">
          <div className="max-w-7xl mx-auto">
            <Link 
              to="/" 
              className="inline-flex items-center gap-2 text-muted-foreground hover:text-accent transition-colors mb-6"
            >
              <ArrowLeft className="w-4 h-4" />
              <span>Back to Home</span>
            </Link>
            <h1 className="font-playfair text-5xl md:text-6xl font-bold text-foreground mb-4">
              Ticket <span className="text-accent">Information</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl">
              Mean Girls (High School Version) has finished its run, and ticket sales are now closed.
            </p>
          </div>
        </div>

        <div className="max-w-4xl mx-auto px-4 py-16">
          {/* Season Status */}
          <div className="bg-card border border-border rounded-lg p-8 md:p-12 mb-8">
            <div className="flex items-center gap-3 mb-6">
              <Calendar className="w-6 h-6 text-accent" />
              <h2 className="font-playfair text-3xl font-bold text-foreground">
                2025-26 Season Wrap-Up
              </h2>
            </div>
            <div className="bg-background/50 rounded-lg p-4 border border-accent/10">
              <p className="text-muted-foreground leading-relaxed">
                Thank you to everyone who attended and supported Mean Girls. Details for future productions and ticket availability will be posted when they are announced.
              </p>
            </div>
          </div>

          {/* Ticket Information */}
          <div className="bg-card border border-border rounded-lg p-8 md:p-12 mb-8">
            <div className="flex items-center gap-3 mb-6">
              <Ticket className="w-6 h-6 text-accent" />
              <h2 className="font-playfair text-3xl font-bold text-foreground">
                Ticket Information
              </h2>
            </div>
            <div className="space-y-4">
              <p className="text-muted-foreground leading-relaxed">
                There are currently no active ticket sales for AHS Performing Arts productions.
              </p>
              <div className="bg-background/50 rounded-lg p-6 border border-accent/10">
                <h3 className="font-semibold text-foreground mb-3">Looking for updates?</h3>
                <p className="text-muted-foreground mt-4">
                  Follow AHS Performing Arts announcements or contact the drama department with questions about future productions.
                </p>
              </div>
            </div>
          </div>

          {/* Location */}
          <div className="bg-card border border-border rounded-lg p-8 md:p-12">
            <div className="flex items-center gap-3 mb-4">
              <MapPin className="w-6 h-6 text-accent" />
              <h2 className="font-playfair text-3xl font-bold text-foreground">
                Location
              </h2>
            </div>
            <p className="text-muted-foreground leading-relaxed mb-4">
              AHS Performing Arts productions take place at:
            </p>
            <div className="bg-background/50 rounded-lg p-6 border border-accent/10">
              <p className="text-foreground font-semibold text-lg mb-2">
                Theater 70, American High School
              </p>
              <p className="text-muted-foreground">
                Future performance details will be shared once the next production is announced.
              </p>
            </div>
          </div>
        </div>

        <Footer />
      </div>
  );
};

export default TicketPurchase;
