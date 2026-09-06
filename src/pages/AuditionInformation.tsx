import { Link } from "react-router-dom";
import { ArrowLeft, Calendar, Users, FileText, Clock } from "lucide-react";
import Footer from "@/components/Footer";

const AuditionInformation = () => {
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
              Audition <span className="text-accent">Information</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl">
              Join the AHS Performing Arts program! Learn about our audition process and requirements.
            </p>
          </div>
        </div>

        <div className="max-w-4xl mx-auto px-4 py-16">
          <div className="bg-card border border-border rounded-lg p-8 md:p-12 space-y-8">
            <section>
              <div className="flex items-center gap-3 mb-4">
                <Calendar className="w-6 h-6 text-accent" />
                <h2 className="font-playfair text-3xl font-bold text-foreground">
                  Audition Dates
                </h2>
              </div>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Audition dates for upcoming productions will be announced throughout the school year. Please check back regularly for updates or contact us for more information.
              </p>
              <div className="bg-background/50 rounded-lg p-4 border border-accent/10">
                <p className="text-foreground font-semibold mb-2">Upcoming Auditions:</p>
                <p className="text-muted-foreground">Check with Ms. Benedetti or Mr. Wong for current audition schedules.</p>
              </div>
            </section>

            <section>
              <div className="flex items-center gap-3 mb-4">
                <FileText className="w-6 h-6 text-accent" />
                <h2 className="font-playfair text-3xl font-bold text-foreground">
                  What to Prepare
                </h2>
              </div>
              <div className="space-y-4">
                <div className="bg-background/50 rounded-lg p-6 border border-accent/10">
                  <h3 className="font-semibold text-foreground mb-2">For Acting Roles:</h3>
                  <ul className="space-y-2 text-muted-foreground list-disc list-inside">
                    <li>Prepare a 1-2 minute monologue (memorized)</li>
                    <li>Be ready to perform cold readings from the script</li>
                    <li>Dress comfortably for movement</li>
                    <li>Bring a resume if you have previous theater experience</li>
                  </ul>
                </div>
                <div className="bg-background/50 rounded-lg p-6 border border-accent/10">
                  <h3 className="font-semibold text-foreground mb-2">For Musical Productions:</h3>
                  <ul className="space-y-2 text-muted-foreground list-disc list-inside">
                    <li>Prepare a 16-32 bar song selection</li>
                    <li>Bring sheet music in your key (accompanist provided)</li>
                    <li>Be prepared for a brief dance/movement audition</li>
                    <li>Have a monologue ready (1 minute)</li>
                  </ul>
                </div>
                <div className="bg-background/50 rounded-lg p-6 border border-accent/10">
                  <h3 className="font-semibold text-foreground mb-2">For Technical/Crew Roles:</h3>
                  <ul className="space-y-2 text-muted-foreground list-disc list-inside">
                    <li>No formal audition required</li>
                    <li>Attend crew information meetings</li>
                    <li>Express interest in specific areas (lights, sound, set, costumes, etc.)</li>
                    <li>Be willing to learn and work collaboratively</li>
                  </ul>
                </div>
              </div>
            </section>

            <section>
              <div className="flex items-center gap-3 mb-4">
                <Clock className="w-6 h-6 text-accent" />
                <h2 className="font-playfair text-3xl font-bold text-foreground">
                  What to Expect
                </h2>
              </div>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Auditions are designed to be a positive and supportive experience. Our faculty is looking for students who are enthusiastic, committed, and willing to collaborate. You don't need to be perfect. We're interested in your potential and passion for theater.
              </p>
              <div className="bg-background/50 rounded-lg p-6 border border-accent/10">
                <p className="text-foreground font-semibold mb-2">Audition Process:</p>
                <ol className="space-y-2 text-muted-foreground list-decimal list-inside">
                  <li>Sign up for an audition time slot</li>
                  <li>Arrive 10 minutes early to check in</li>
                  <li>Perform your prepared piece</li>
                  <li>Participate in any cold readings or callbacks if requested</li>
                  <li>Results will be posted within a few days</li>
                </ol>
              </div>
            </section>

            <section>
              <div className="flex items-center gap-3 mb-4">
                <Users className="w-6 h-6 text-accent" />
                <h2 className="font-playfair text-3xl font-bold text-foreground">
                  Questions?
                </h2>
              </div>
              <p className="text-muted-foreground leading-relaxed mb-4">
                If you have any questions about auditions or the program, please don't hesitate to reach out:
              </p>
              <div className="bg-background/50 rounded-lg p-6 border border-accent/10">
                <p className="text-foreground mb-2">
                  <strong>Ms. Benedetti</strong> - Drama Director
                </p>
                <p className="text-muted-foreground mb-4">
                  Email: drama@americanhs.edu
                </p>
                <p className="text-foreground mb-2">
                  <strong>Mr. Wong</strong> - Technical Director
                </p>
                <p className="text-muted-foreground">
                  Email: drama@americanhs.edu
                </p>
              </div>
            </section>
          </div>
        </div>

        <Footer />
      </div>
  );
};

export default AuditionInformation;
