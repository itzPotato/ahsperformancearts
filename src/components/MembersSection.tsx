import MemberCard from "./MemberCard";
import { Users } from "lucide-react";

const MembersSection = () => {
  const faculty = [
    { name: "Ms. Sarah Martinez", role: "Drama Director", department: "Faculty Advisor" },
    { name: "Mr. David Chen", role: "Technical Director", department: "Faculty Advisor" },
    { name: "Mrs. Jennifer Williams", role: "Choreographer", department: "Faculty Advisor" },
  ];

  const leadActors = [
    { name: "Emma Thompson", role: "Lead Actress" },
    { name: "Marcus Johnson", role: "Lead Actor" },
    { name: "Sophia Rodriguez", role: "Lead Actress" },
    { name: "Liam Patterson", role: "Lead Actor" },
    { name: "Olivia Chen", role: "Lead Actress" },
    { name: "Noah Williams", role: "Lead Actor" },
  ];

  const supportingActors = [
    { name: "Ava Martinez", role: "Supporting Cast" },
    { name: "Ethan Brown", role: "Supporting Cast" },
    { name: "Isabella Garcia", role: "Supporting Cast" },
    { name: "Mason Lee", role: "Supporting Cast" },
    { name: "Mia Anderson", role: "Supporting Cast" },
    { name: "Lucas Taylor", role: "Supporting Cast" },
    { name: "Charlotte Kim", role: "Supporting Cast" },
    { name: "Jackson Smith", role: "Supporting Cast" },
    { name: "Amelia Jones", role: "Supporting Cast" },
    { name: "Aiden Davis", role: "Supporting Cast" },
    { name: "Harper Wilson", role: "Supporting Cast" },
    { name: "Logan Martinez", role: "Supporting Cast" },
    { name: "Ella Thompson", role: "Supporting Cast" },
    { name: "Carter Rodriguez", role: "Supporting Cast" },
  ];

  const crew = [
    { name: "Ryan Mitchell", role: "Stage Manager", department: "Production" },
    { name: "Emily Parker", role: "Lighting Designer", department: "Technical" },
    { name: "Jake Sullivan", role: "Sound Engineer", department: "Technical" },
    { name: "Maya Patel", role: "Set Designer", department: "Production" },
    { name: "Alex Turner", role: "Costume Designer", department: "Wardrobe" },
    { name: "Zoe Campbell", role: "Props Master", department: "Production" },
    { name: "Tyler Brooks", role: "Stage Crew Chief", department: "Technical" },
    { name: "Grace Murphy", role: "Makeup Artist", department: "Wardrobe" },
  ];

  return (
    <section id="members" className="py-20 px-4 bg-background">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16 animate-fade-in">
          <div className="inline-flex items-center gap-2 mb-4">
            <Users className="w-6 h-6 text-accent" />
          </div>
          <h2 className="font-playfair text-5xl md:text-6xl font-bold text-foreground mb-4">
            Our <span className="text-accent">Crew</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Meet the talented students and dedicated faculty who bring our productions to life
          </p>
        </div>

        {/* Faculty */}
        <div className="mb-12">
          <h3 className="font-playfair text-3xl font-bold text-foreground mb-6 text-center">
            Faculty Advisors
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {faculty.map((member, index) => (
              <MemberCard key={index} {...member} />
            ))}
          </div>
        </div>

        {/* Lead Actors */}
        <div className="mb-12">
          <h3 className="font-playfair text-3xl font-bold text-foreground mb-6 text-center">
            Lead Actors
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {leadActors.map((member, index) => (
              <MemberCard key={index} {...member} />
            ))}
          </div>
        </div>

        {/* Supporting Cast */}
        <div className="mb-12">
          <h3 className="font-playfair text-3xl font-bold text-foreground mb-6 text-center">
            Supporting Cast
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {supportingActors.map((member, index) => (
              <MemberCard key={index} {...member} />
            ))}
          </div>
        </div>

        {/* Technical Crew */}
        <div>
          <h3 className="font-playfair text-3xl font-bold text-foreground mb-6 text-center">
            Technical & Production Crew
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {crew.map((member, index) => (
              <MemberCard key={index} {...member} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default MembersSection;
