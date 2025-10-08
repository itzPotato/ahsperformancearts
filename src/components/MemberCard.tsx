import { User } from "lucide-react";

interface MemberCardProps {
  name: string;
  role: string;
  department?: string;
}

const MemberCard = ({ name, role, department }: MemberCardProps) => {
  return (
    <div className="group relative bg-card border border-border rounded-lg p-6 hover:shadow-spotlight transition-all duration-300 hover:scale-105">
      <div className="flex flex-col items-center text-center">
        <div className="w-16 h-16 rounded-full bg-gradient-stage flex items-center justify-center mb-4 group-hover:shadow-dramatic transition-shadow duration-300">
          <User className="w-8 h-8 text-accent" />
        </div>
        <h3 className="font-playfair text-lg font-bold text-foreground mb-1">
          {name}
        </h3>
        <p className="text-accent text-sm font-medium mb-1">
          {role}
        </p>
        {department && (
          <p className="text-muted-foreground text-xs">
            {department}
          </p>
        )}
      </div>
    </div>
  );
};

export default MemberCard;
