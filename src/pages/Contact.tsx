import { Link } from "react-router-dom";
import { ArrowLeft, Mail, MapPin, Phone, Users } from "lucide-react";
import Footer from "@/components/Footer";

const Contact = () => {
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
              Contact <span className="text-accent">Us</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl">
              Get in touch with the AHS Performing Arts program. We'd love to hear from you!
            </p>
          </div>
        </div>

        <div className="max-w-4xl mx-auto px-4 py-16">
          <div className="grid md:grid-cols-2 gap-8 mb-12">
            {/* Contact Information */}
            <div className="bg-card border border-border rounded-lg p-8">
              <h2 className="font-playfair text-3xl font-bold text-foreground mb-6">
                Contact <span className="text-accent">Information</span>
              </h2>
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <Mail className="w-6 h-6 text-accent flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-semibold text-foreground mb-1">Email</h3>
                    <a 
                      href="mailto:drama@americanhs.edu" 
                      className="text-muted-foreground hover:text-accent transition-colors"
                    >
                      drama@americanhs.edu
                    </a>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <MapPin className="w-6 h-6 text-accent flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-semibold text-foreground mb-1">Location</h3>
                    <p className="text-muted-foreground">
                      Theater 70, American High School
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Faculty Contacts */}
            <div className="bg-card border border-border rounded-lg p-8">
              <h2 className="font-playfair text-3xl font-bold text-foreground mb-6">
                Faculty <span className="text-accent">Contacts</span>
              </h2>
              <div className="space-y-6">
                <div>
                  <h3 className="font-semibold text-foreground mb-2 flex items-center gap-2">
                    <Users className="w-5 h-5 text-accent" />
                    Ms. Benedetti
                  </h3>
                  <p className="text-muted-foreground mb-1">Drama Director</p>
                  <a 
                    href="mailto:drama@americanhs.edu" 
                    className="text-accent hover:underline"
                  >
                    drama@americanhs.edu
                  </a>
                </div>
                <div>
                  <h3 className="font-semibold text-foreground mb-2 flex items-center gap-2">
                    <Users className="w-5 h-5 text-accent" />
                    Mr. Wong
                  </h3>
                  <p className="text-muted-foreground mb-1">Technical Director</p>
                  <a 
                    href="mailto:drama@americanhs.edu" 
                    className="text-accent hover:underline"
                  >
                    drama@americanhs.edu
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Additional Information */}
          <div className="bg-card border border-border rounded-lg p-8">
            <h2 className="font-playfair text-3xl font-bold text-foreground mb-6">
              Get <span className="text-accent">Involved</span>
            </h2>
            <div className="space-y-4 text-muted-foreground leading-relaxed">
              <p>
                Whether you're a student interested in joining our program, a parent with questions, or a community member wanting to support our productions, we welcome your inquiries.
              </p>
              <p>
                The 2025-26 season has finished. Future production and ticket updates will be announced when available.
              </p>
              <p>
                To learn more about our program, visit our <Link to="/about" className="text-accent hover:underline">About Us</Link> page.
              </p>
            </div>
          </div>
        </div>

        <Footer />
      </div>
  );
};

export default Contact;
