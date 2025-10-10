import { useState, useEffect, useRef } from "react";

interface CurtainAnimationProps {
  children: React.ReactNode;
}

const CurtainAnimation = ({ children }: CurtainAnimationProps) => {
  const [scrollProgress, setScrollProgress] = useState(0);
  const [animationComplete, setAnimationComplete] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let accumulatedScroll = 0;
    const maxScroll = 300; // Total scroll amount needed to complete animation

    const handleWheel = (e: WheelEvent) => {
      if (!animationComplete) {
        e.preventDefault();
        accumulatedScroll = Math.min(maxScroll, accumulatedScroll + Math.abs(e.deltaY));
        const progress = accumulatedScroll / maxScroll;
        setScrollProgress(progress);
        
        if (progress >= 1) {
          setAnimationComplete(true);
        }
      }
    };

    const handleTouchStart = (e: TouchEvent) => {
      if (!animationComplete) {
        const touch = e.touches[0];
        containerRef.current?.setAttribute('data-touch-start', touch.clientY.toString());
      }
    };

    const handleTouchMove = (e: TouchEvent) => {
      if (!animationComplete) {
        e.preventDefault();
        const touchStart = parseFloat(containerRef.current?.getAttribute('data-touch-start') || '0');
        const touch = e.touches[0];
        const delta = touchStart - touch.clientY;
        
        if (delta > 0) {
          accumulatedScroll = Math.min(maxScroll, accumulatedScroll + Math.abs(delta) * 0.5);
          const progress = accumulatedScroll / maxScroll;
          setScrollProgress(progress);
          
          if (progress >= 1) {
            setAnimationComplete(true);
          }
        }
        containerRef.current?.setAttribute('data-touch-start', touch.clientY.toString());
      }
    };

    window.addEventListener('wheel', handleWheel, { passive: false });
    window.addEventListener('touchstart', handleTouchStart, { passive: false });
    window.addEventListener('touchmove', handleTouchMove, { passive: false });

    return () => {
      window.removeEventListener('wheel', handleWheel);
      window.removeEventListener('touchstart', handleTouchStart);
      window.removeEventListener('touchmove', handleTouchMove);
    };
  }, [animationComplete]);

  const curtainTransform = scrollProgress * 100;
  const curtainOpacity = scrollProgress >= 0.7 ? 1 - ((scrollProgress - 0.7) / 0.3) : 1;

  return (
    <div ref={containerRef} className="relative">
      {/* Left Curtain */}
      <div
        className={`fixed inset-y-0 left-0 w-1/2 z-50 transition-opacity duration-500 ${
          animationComplete ? 'pointer-events-none' : ''
        }`}
        style={{
          transform: `translateX(-${curtainTransform}%)`,
          opacity: curtainOpacity,
          transition: 'transform 0.1s ease-out, opacity 0.5s ease-out',
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
        className={`fixed inset-y-0 right-0 w-1/2 z-50 transition-opacity duration-500 ${
          animationComplete ? 'pointer-events-none' : ''
        }`}
        style={{
          transform: `translateX(${curtainTransform}%)`,
          opacity: curtainOpacity,
          transition: 'transform 0.1s ease-out, opacity 0.5s ease-out',
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
      <div 
        ref={contentRef}
        className="transition-opacity duration-700"
        style={{ opacity: scrollProgress }}
      >
        {children}
      </div>

      {/* Scroll Indicator */}
      {!animationComplete && scrollProgress < 1 && (
        <div className="fixed bottom-8 left-1/2 -translate-x-1/2 z-50 text-white text-center animate-bounce">
          <div className="text-sm font-medium mb-2">Scroll to unveil</div>
          <div className="w-6 h-10 border-2 border-white rounded-full mx-auto flex justify-center">
            <div className="w-1 h-3 bg-white rounded-full mt-2 animate-pulse" />
          </div>
        </div>
      )}
    </div>
  );
};

export default CurtainAnimation;
