import MemberCard from "./MemberCard";
import { Users } from "lucide-react";

const MembersSection = () => {
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

        {/* Core Crew & Faculty */}
        <div className="mb-12">
          <h3 className="font-playfair text-3xl font-bold text-foreground mb-6 text-center">
            Core Crew & Faculty
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {coreCrew.map((member, index) => (
              <div key={index} className="bg-card border border-border rounded-lg p-6 hover:shadow-spotlight transition-all duration-300">
                <div className="flex flex-col items-center text-center mb-4">
                  <div className="w-16 h-16 rounded-full bg-gradient-stage flex items-center justify-center mb-4">
                    <Users className="w-8 h-8 text-accent" />
                  </div>
                  <h3 className="font-playfair text-xl font-bold text-foreground mb-1">
                    {member.name}
                  </h3>
                  <p className="text-accent text-sm font-medium mb-1">
                    {member.role}
                  </p>
                  <p className="text-muted-foreground text-xs mb-4">
                    {member.department}
                  </p>
                </div>
                <p className="text-muted-foreground text-sm leading-relaxed text-center">
                  {member.bio}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Note about cast list */}
        <div className="mb-12 text-center">
          <p className="text-muted-foreground">
            Full cast lists are available on individual production pages. <a href="#productions" className="text-accent hover:underline">View our productions</a> to see cast information for each show.
          </p>
        </div>
      </div>
    </section>
  );
};

export default MembersSection;
