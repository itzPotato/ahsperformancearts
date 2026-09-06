import { Link } from "react-router-dom";
import { ArrowLeft, Users, BookOpen, Award, Theater } from "lucide-react";
import MemberCard from "@/components/MemberCard";
import Footer from "@/components/Footer";

const AboutUs = () => {
  const coreCrew = [
    { 
      name: "Ms. Benedetti", 
      role: "Drama Director", 
      department: "Faculty Advisor",
      bio: "Ms. Benedetti brings years of theatrical expertise and passion for student development to the AHS Performing Arts program. She has directed numerous award-winning productions and is dedicated to nurturing the next generation of performers."
    },
    { 
      name: "Mr. Wong", 
      role: "Technical Director", 
      department: "Faculty Advisor",
      bio: "Mr. Wong oversees all technical aspects of our productions, from lighting and sound design to set construction. His technical expertise ensures every performance runs smoothly and looks spectacular."
    },
  ];

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
              About <span className="text-accent">Us</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl">
              Learn about our program, faculty, classes, and the vibrant community that makes AHS Performing Arts special.
            </p>
          </div>
        </div>

        <div className="max-w-7xl mx-auto px-4 py-16">
          {/* Core Crew Section */}
          <section className="mb-16">
            <div className="text-center mb-12">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-card/30 backdrop-blur-sm border border-accent/30 mb-4">
                <Users className="w-4 h-4 text-accent" />
                <span className="text-accent font-medium text-sm tracking-wider uppercase">
                  Core Crew
                </span>
              </div>
              <h2 className="font-playfair text-4xl md:text-5xl font-bold text-foreground mb-4">
                Our <span className="text-accent">Faculty</span>
              </h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
              {coreCrew.map((member, index) => (
                <div key={index} className="bg-card border border-border rounded-lg p-8 hover:shadow-spotlight transition-all duration-300">
                  <div className="flex flex-col items-center text-center mb-6">
                    <div className="w-20 h-20 rounded-full bg-gradient-stage flex items-center justify-center mb-4">
                      <Users className="w-10 h-10 text-accent" />
                    </div>
                    <h3 className="font-playfair text-2xl font-bold text-foreground mb-2">
                      {member.name}
                    </h3>
                    <p className="text-accent text-lg font-medium mb-1">
                      {member.role}
                    </p>
                    <p className="text-muted-foreground text-sm">
                      {member.department}
                    </p>
                  </div>
                  <p className="text-muted-foreground leading-relaxed">
                    {member.bio}
                  </p>
                </div>
              ))}
            </div>
          </section>

          {/* Classes Section */}
          <section className="mb-16">
            <div className="text-center mb-12">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-card/30 backdrop-blur-sm border border-accent/30 mb-4">
                <BookOpen className="w-4 h-4 text-accent" />
                <span className="text-accent font-medium text-sm tracking-wider uppercase">
                  Our Classes
                </span>
              </div>
              <h2 className="font-playfair text-4xl md:text-5xl font-bold text-foreground mb-4">
                Drama & <span className="text-accent">Stagecraft</span>
              </h2>
            </div>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-card border border-border rounded-lg p-8">
                <h3 className="font-playfair text-3xl font-bold text-foreground mb-4 flex items-center gap-3">
                  <Theater className="w-8 h-8 text-accent" />
                  Drama Classes
                </h3>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  Our drama classes provide students with comprehensive training in acting, character development, voice projection, and stage presence. Students learn fundamental techniques while exploring various theatrical styles and genres.
                </p>
                <ul className="space-y-2 text-muted-foreground">
                  <li>• Acting fundamentals and technique</li>
                  <li>• Character development and analysis</li>
                  <li>• Voice and movement training</li>
                  <li>• Scene study and monologue work</li>
                  <li>• Performance opportunities</li>
                </ul>
              </div>
              <div className="bg-card border border-border rounded-lg p-8">
                <h3 className="font-playfair text-3xl font-bold text-foreground mb-4 flex items-center gap-3">
                  <Award className="w-8 h-8 text-accent" />
                  Stagecraft Classes
                </h3>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  Stagecraft classes teach students the technical side of theater production, including set design, lighting, sound, costume design, and stage management. Students gain hands-on experience working on actual productions.
                </p>
                <ul className="space-y-2 text-muted-foreground">
                  <li>• Set design and construction</li>
                  <li>• Lighting and sound design</li>
                  <li>• Costume and prop creation</li>
                  <li>• Stage management</li>
                  <li>• Technical production skills</li>
                </ul>
              </div>
            </div>
          </section>

          {/* Lenaea Information */}
          <section className="mb-16">
            <div className="text-center mb-12">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-card/30 backdrop-blur-sm border border-accent/30 mb-4">
                <Award className="w-4 h-4 text-accent" />
                <span className="text-accent font-medium text-sm tracking-wider uppercase">
                  Lenaea Festival
                </span>
              </div>
              <h2 className="font-playfair text-4xl md:text-5xl font-bold text-foreground mb-4">
                Lenaea <span className="text-accent">Festival</span>
              </h2>
            </div>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-card border border-border rounded-lg p-8">
                <h3 className="font-playfair text-3xl font-bold text-foreground mb-4">
                  Lenaea 2025
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  The Lenaea Festival is an annual high school theater festival that brings together talented students from across the region. In 2025, our students participated with outstanding performances, showcasing their skills in acting, technical theater, and production design.
                </p>
              </div>
              <div className="bg-card border border-border rounded-lg p-8">
                <h3 className="font-playfair text-3xl font-bold text-foreground mb-4">
                  Lenaea 2026
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  We are excited to participate in Lenaea 2026! Our students are preparing exceptional work to present at this prestigious festival. Stay tuned for updates on our participation and performances.
                </p>
              </div>
            </div>
          </section>

          {/* Program Information */}
          <section>
            <div className="bg-card border border-border rounded-lg p-8 md:p-12">
              <h2 className="font-playfair text-4xl font-bold text-foreground mb-6 text-center">
                Program <span className="text-accent">Information</span>
              </h2>
              <div className="prose prose-invert max-w-none">
                <p className="text-muted-foreground leading-relaxed mb-4">
                  The AHS Performing Arts program is dedicated to providing students with a comprehensive theater education that combines artistic excellence with practical skills. Our program offers multiple pathways for students interested in performance, technical theater, and production management.
                </p>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  Students in our program have the opportunity to work on multiple productions throughout the year, from intimate drama productions to large-scale musicals. We emphasize collaboration, creativity, and professional development, preparing students for both college theater programs and careers in the performing arts industry.
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  Our program is committed to creating an inclusive and supportive environment where all students can explore their creative potential and develop their artistic voice.
                </p>
              </div>
            </div>
          </section>
        </div>

        <Footer />
      </div>
  );
};

export default AboutUs;
