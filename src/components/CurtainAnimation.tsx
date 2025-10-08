import { useState, useEffect } from "react";

interface CurtainAnimationProps {
  children: React.ReactNode;
}

const CurtainAnimation = ({ children }: CurtainAnimationProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const [fadeOut, setFadeOut] = useState(false);

  useEffect(() => {
    const openTimer = setTimeout(() => {
      setIsOpen(true);
    }, 800);
    
    const fadeTimer = setTimeout(() => {
      setFadeOut(true);
    }, 2000);
    
    return () => {
      clearTimeout(openTimer);
      clearTimeout(fadeTimer);
    };
  }, []);

  return (
    <div className="relative">
      {/* Left Curtain */}
      <div
        className={`fixed inset-y-0 left-0 w-1/2 z-50 transition-all duration-[2000ms] ease-curtain ${
          isOpen ? "-translate-x-full" : "translate-x-0"
        } ${fadeOut ? "opacity-0" : "opacity-100"}`}
        style={{
          background: 'linear-gradient(90deg, #8B0000 0%, #B22222 20%, #8B0000 40%, #B22222 60%, #8B0000 80%, #B22222 100%)',
          boxShadow: 'inset -20px 0 40px rgba(0,0,0,0.5), inset 20px 0 40px rgba(0,0,0,0.3)',
        }}
      >
        {/* Curtain folds */}
        <div className="absolute inset-0 opacity-40"
          style={{
            background: 'repeating-linear-gradient(90deg, transparent, transparent 40px, rgba(0,0,0,0.2) 40px, rgba(0,0,0,0.2) 80px)',
          }}
        />
        {/* Velvet texture */}
        <div className="absolute inset-0 opacity-20"
          style={{
            backgroundImage: 'radial-gradient(circle at 20% 50%, rgba(255,255,255,0.1) 0%, transparent 50%)',
            backgroundSize: '60px 60px',
          }}
        />
        {/* Edge highlight */}
        <div className="absolute inset-y-0 right-0 w-2 bg-gradient-to-r from-transparent via-accent/30 to-accent/50" />
      </div>

      {/* Right Curtain */}
      <div
        className={`fixed inset-y-0 right-0 w-1/2 z-50 transition-all duration-[2000ms] ease-curtain ${
          isOpen ? "translate-x-full" : "translate-x-0"
        } ${fadeOut ? "opacity-0" : "opacity-100"}`}
        style={{
          background: 'linear-gradient(90deg, #B22222 0%, #8B0000 20%, #B22222 40%, #8B0000 60%, #B22222 80%, #8B0000 100%)',
          boxShadow: 'inset 20px 0 40px rgba(0,0,0,0.5), inset -20px 0 40px rgba(0,0,0,0.3)',
        }}
      >
        {/* Curtain folds */}
        <div className="absolute inset-0 opacity-40"
          style={{
            background: 'repeating-linear-gradient(90deg, transparent, transparent 40px, rgba(0,0,0,0.2) 40px, rgba(0,0,0,0.2) 80px)',
          }}
        />
        {/* Velvet texture */}
        <div className="absolute inset-0 opacity-20"
          style={{
            backgroundImage: 'radial-gradient(circle at 80% 50%, rgba(255,255,255,0.1) 0%, transparent 50%)',
            backgroundSize: '60px 60px',
          }}
        />
        {/* Edge highlight */}
        <div className="absolute inset-y-0 left-0 w-2 bg-gradient-to-l from-transparent via-accent/30 to-accent/50" />
      </div>

      {/* Content */}
      <div className={`transition-opacity duration-1000 ${isOpen ? "opacity-100" : "opacity-0"}`}>
        {children}
      </div>
    </div>
  );
};

export default CurtainAnimation;
