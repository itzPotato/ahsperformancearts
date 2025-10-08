import { Theater, Mail, MapPin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-card border-t border-border py-12 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <Theater className="w-6 h-6 text-accent" />
              <span className="font-playfair text-2xl font-bold text-foreground">
                AHS Performing Arts
              </span>
            </div>
            <p className="text-muted-foreground">
              American High School's premier performing arts program, 
              nurturing creative talent and theatrical excellence.
            </p>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-playfair text-xl font-bold mb-4 text-foreground">
              Contact Us
            </h3>
            <div className="space-y-2">
              <div className="flex items-center gap-2 text-muted-foreground">
                <Mail className="w-4 h-4 text-accent" />
                <span>drama@americanhs.edu</span>
              </div>
              <div className="flex items-center gap-2 text-muted-foreground">
                <MapPin className="w-4 h-4 text-accent" />
                <span>Theater 70, American High School</span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-playfair text-xl font-bold mb-4 text-foreground">
              Quick Links
            </h3>
            <ul className="space-y-2">
              <li>
                <a href="#productions" className="text-muted-foreground hover:text-accent transition-colors duration-300">
                  Productions
                </a>
              </li>
              <li>
                <a href="#about" className="text-muted-foreground hover:text-accent transition-colors duration-300">
                  About Us
                </a>
              </li>
              <li>
                <a href="#auditions" className="text-muted-foreground hover:text-accent transition-colors duration-300">
                  Auditions
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-border text-center">
          <p className="text-muted-foreground text-sm">
            © {new Date().getFullYear()} American High School Performing Arts. 
            All performances protected by copyright.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
