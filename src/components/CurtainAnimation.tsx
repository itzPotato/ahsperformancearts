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
    const maxScroll = 400; // Total scroll amount needed to complete animation

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

  // Multi-stage animation: fast open (0-0.35) -> pause (0.35-0.45) -> slow back (0.45-0.6) -> final open (0.6-1)
  const getCurtainTransform = (progress: number) => {
    if (progress < 0.35) {
      // Fast opening - accelerated
      return (progress / 0.35) * 40; // Move to 40%
    } else if (progress < 0.45) {
      // Pause - hold position
      return 40;
    } else if (progress < 0.6) {
      // Slow backward - curtains move back a bit
      const backProgress = (progress - 0.45) / 0.15;
      return 40 - (backProgress * 8); // Move back 8% slowly
    } else {
      // Final opening - smooth and complete
      const finalProgress = (progress - 0.6) / 0.4;
      return 32 + (finalProgress * 68); // From 32% to 100%
    }
  };

  const curtainTransform = getCurtainTransform(scrollProgress);
  const curtainOpacity = scrollProgress >= 0.85 ? 1 - ((scrollProgress - 0.85) / 0.15) : 1;

  return (
    <div ref={containerRef} className="relative">
      {/* Left Curtain */}
      <div
        className={`fixed inset-y-0 left-0 w-1/2 z-50 ${
          animationComplete ? 'pointer-events-none' : ''
        }`}
        style={{
          transform: `translateX(-${curtainTransform}%) perspective(1000px) rotateY(${curtainTransform * 0.15}deg)`,
          opacity: curtainOpacity,
          transition: scrollProgress < 0.35 ? 'transform 0.05s cubic-bezier(0.4, 0, 0.2, 1)' :
                     scrollProgress < 0.45 ? 'none' :
                     scrollProgress < 0.6 ? 'transform 0.3s cubic-bezier(0.2, 0.8, 0.4, 1)' :
                     'transform 0.15s cubic-bezier(0.4, 0, 0.2, 1)',
          transformOrigin: 'right center',
          background: 'linear-gradient(90deg, #6B0000 0%, #8B0000 10%, #A52A2A 25%, #8B0000 40%, #6B0000 55%, #8B0000 70%, #A52A2A 85%, #8B0000 100%)',
          boxShadow: `inset -30px 0 60px rgba(0,0,0,0.7), 
                      inset 15px 0 30px rgba(139,0,0,0.4),
                      20px 0 80px rgba(0,0,0,0.6),
                      5px 0 20px rgba(139,0,0,0.3)`,
        }}
      >
        {/* Deep folds with 3D effect */}
        <div className="absolute inset-0 opacity-60"
          style={{
            background: `repeating-linear-gradient(90deg, 
              rgba(0,0,0,0.4) 0px, 
              rgba(0,0,0,0.1) 20px,
              rgba(255,255,255,0.05) 30px,
              rgba(0,0,0,0.2) 40px,
              rgba(0,0,0,0.5) 60px)`,
          }}
        />
        {/* Rich velvet texture */}
        <div className="absolute inset-0 opacity-30"
          style={{
            backgroundImage: `radial-gradient(circle at 25% 30%, rgba(255,255,255,0.15) 0%, transparent 40%),
                             radial-gradient(circle at 15% 70%, rgba(255,255,255,0.1) 0%, transparent 35%)`,
            backgroundSize: '80px 80px, 60px 60px',
          }}
        />
        {/* Center fold highlight */}
        <div className="absolute inset-y-0 right-0 w-1 bg-gradient-to-r from-transparent via-white/20 to-white/40" />
        {/* Edge shadows */}
        <div className="absolute inset-y-0 right-0 w-8 bg-gradient-to-l from-black/60 via-black/20 to-transparent" />
      </div>

      {/* Right Curtain */}
      <div
        className={`fixed inset-y-0 right-0 w-1/2 z-50 ${
          animationComplete ? 'pointer-events-none' : ''
        }`}
        style={{
          transform: `translateX(${curtainTransform}%) perspective(1000px) rotateY(-${curtainTransform * 0.15}deg)`,
          opacity: curtainOpacity,
          transition: scrollProgress < 0.35 ? 'transform 0.05s cubic-bezier(0.4, 0, 0.2, 1)' :
                     scrollProgress < 0.45 ? 'none' :
                     scrollProgress < 0.6 ? 'transform 0.3s cubic-bezier(0.2, 0.8, 0.4, 1)' :
                     'transform 0.15s cubic-bezier(0.4, 0, 0.2, 1)',
          transformOrigin: 'left center',
          background: 'linear-gradient(90deg, #8B0000 0%, #A52A2A 15%, #8B0000 30%, #6B0000 45%, #8B0000 60%, #A52A2A 75%, #8B0000 90%, #6B0000 100%)',
          boxShadow: `inset 30px 0 60px rgba(0,0,0,0.7), 
                      inset -15px 0 30px rgba(139,0,0,0.4),
                      -20px 0 80px rgba(0,0,0,0.6),
                      -5px 0 20px rgba(139,0,0,0.3)`,
        }}
      >
        {/* Deep folds with 3D effect */}
        <div className="absolute inset-0 opacity-60"
          style={{
            background: `repeating-linear-gradient(90deg, 
              rgba(0,0,0,0.5) 0px,
              rgba(0,0,0,0.2) 20px,
              rgba(255,255,255,0.05) 30px, 
              rgba(0,0,0,0.1) 40px,
              rgba(0,0,0,0.4) 60px)`,
          }}
        />
        {/* Rich velvet texture */}
        <div className="absolute inset-0 opacity-30"
          style={{
            backgroundImage: `radial-gradient(circle at 75% 30%, rgba(255,255,255,0.15) 0%, transparent 40%),
                             radial-gradient(circle at 85% 70%, rgba(255,255,255,0.1) 0%, transparent 35%)`,
            backgroundSize: '80px 80px, 60px 60px',
          }}
        />
        {/* Center fold highlight */}
        <div className="absolute inset-y-0 left-0 w-1 bg-gradient-to-l from-transparent via-white/20 to-white/40" />
        {/* Edge shadows */}
        <div className="absolute inset-y-0 left-0 w-8 bg-gradient-to-r from-black/60 via-black/20 to-transparent" />
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
