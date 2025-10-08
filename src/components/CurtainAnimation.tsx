import { useState, useEffect } from "react";

interface CurtainAnimationProps {
  children: React.ReactNode;
}

const CurtainAnimation = ({ children }: CurtainAnimationProps) => {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsOpen(true);
    }, 500);
    
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="relative">
      {/* Left Curtain */}
      <div
        className={`fixed inset-y-0 left-0 w-1/2 bg-gradient-curtain z-50 transition-transform duration-[1500ms] ease-curtain ${
          isOpen ? "-translate-x-full" : "translate-x-0"
        }`}
      >
        <div className="absolute inset-y-0 right-0 w-1 bg-accent/20" />
      </div>

      {/* Right Curtain */}
      <div
        className={`fixed inset-y-0 right-0 w-1/2 bg-gradient-curtain z-50 transition-transform duration-[1500ms] ease-curtain ${
          isOpen ? "translate-x-full" : "translate-x-0"
        }`}
      >
        <div className="absolute inset-y-0 left-0 w-1 bg-accent/20" />
      </div>

      {/* Content */}
      <div className={`transition-opacity duration-700 ${isOpen ? "opacity-100" : "opacity-0"}`}>
        {children}
      </div>
    </div>
  );
};

export default CurtainAnimation;
