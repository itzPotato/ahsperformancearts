import { useState, useEffect, useRef } from "react";
import { useLocation } from "react-router-dom";

interface CurtainAnimationProps {
  children: React.ReactNode;
}

const CurtainAnimation = ({ children }: CurtainAnimationProps) => {
  const location = useLocation();
  const [shouldShowAnimation, setShouldShowAnimation] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);
  const [animationComplete, setAnimationComplete] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const allowScrollRef = useRef(false);
  const animationCompleteRef = useRef(false);
  const delayTimeoutRef = useRef<number | null>(null);
  const accumulatedScrollRef = useRef(0);
  const originalBodyOverflowRef = useRef<string>("");
  const originalHtmlOverflowRef = useRef<string>("");

  // Check if animation should be shown (only on home page, first time)
  useEffect(() => {
    const hasSeenAnimation = localStorage.getItem('ahs-curtain-animation-seen');
    const isHomePage = location.pathname === '/';
    
    if (isHomePage && !hasSeenAnimation) {
      setShouldShowAnimation(true);
      localStorage.setItem('ahs-curtain-animation-seen', 'true');
    } else {
      setShouldShowAnimation(false);
      setAnimationComplete(true);
    }
  }, [location.pathname]);

  useEffect(() => {
    if (!shouldShowAnimation) {
      return;
    }
    const maxScroll = 800; // Total scroll amount needed to complete animation (slower)

    const handleWheel = (e: WheelEvent) => {
      if (!animationCompleteRef.current) {
        e.preventDefault();
        if (e.deltaY > 0) {
          accumulatedScrollRef.current = Math.min(maxScroll, accumulatedScrollRef.current + e.deltaY);
          const progress = accumulatedScrollRef.current / maxScroll;
          setScrollProgress(progress);
          if (progress >= 1) {
            animationCompleteRef.current = true;
            setAnimationComplete(true);
          }
        }
      } else if (!allowScrollRef.current) {
        e.preventDefault();
      }
    };

    const handleTouchStart = (e: TouchEvent) => {
      if (!animationCompleteRef.current) {
        const touch = e.touches[0];
        containerRef.current?.setAttribute('data-touch-start', touch.clientY.toString());
      }
    };

    const handleTouchMove = (e: TouchEvent) => {
      if (!animationCompleteRef.current) {
        e.preventDefault();
        const touchStart = parseFloat(containerRef.current?.getAttribute('data-touch-start') || '0');
        const touch = e.touches[0];
        const delta = touchStart - touch.clientY;
        
        if (delta > 0) {
          accumulatedScrollRef.current = Math.min(maxScroll, accumulatedScrollRef.current + Math.abs(delta) * 0.5);
          const progress = accumulatedScrollRef.current / maxScroll;
          setScrollProgress(progress);
          
          if (progress >= 1) {
            animationCompleteRef.current = true;
            setAnimationComplete(true);
          }
        }
        containerRef.current?.setAttribute('data-touch-start', touch.clientY.toString());
      } else if (!allowScrollRef.current) {
        e.preventDefault();
      }
    };

    // Lock scroll during the intro animation.
    originalBodyOverflowRef.current = document.body.style.overflow;
    originalHtmlOverflowRef.current = document.documentElement.style.overflow;
    document.body.style.overflow = "hidden";
    document.documentElement.style.overflow = "hidden";
    window.addEventListener('wheel', handleWheel, { passive: false });
    window.addEventListener('touchstart', handleTouchStart, { passive: false });
    window.addEventListener('touchmove', handleTouchMove, { passive: false });

    return () => {
      window.removeEventListener('wheel', handleWheel);
      window.removeEventListener('touchstart', handleTouchStart);
      window.removeEventListener('touchmove', handleTouchMove);
      document.body.style.overflow = originalBodyOverflowRef.current;
      document.documentElement.style.overflow = originalHtmlOverflowRef.current;
    };
  }, [shouldShowAnimation]);

  useEffect(() => {
    if (animationComplete) {
      delayTimeoutRef.current = window.setTimeout(() => {
        allowScrollRef.current = true;
        // Re-enable native page scrolling after delay
        document.body.style.overflow = originalBodyOverflowRef.current;
        document.documentElement.style.overflow = originalHtmlOverflowRef.current;
      }, 1000);
    }
    return () => {
      if (delayTimeoutRef.current) {
        clearTimeout(delayTimeoutRef.current);
        delayTimeoutRef.current = null;
      }
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

  // If animation shouldn't show, just render children
  if (!shouldShowAnimation) {
    return <>{children}</>;
  }

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
          background: 'linear-gradient(90deg, #4A0000 0%, #8B0000 15%, #B22222 30%, #8B0000 45%, #4A0000 60%, #8B0000 75%, #B22222 90%, #6B0000 100%)',
          boxShadow: `inset -40px 0 80px rgba(0,0,0,0.8), 
                      inset 20px 0 40px rgba(139,0,0,0.5),
                      30px 0 100px rgba(0,0,0,0.7),
                      10px 0 30px rgba(139,0,0,0.4)`,
        }}
      >
        {/* Vertical pleated folds - theater curtain style */}
        <div className="absolute inset-0 opacity-70"
          style={{
            background: `repeating-linear-gradient(90deg, 
              rgba(0,0,0,0.6) 0px, 
              rgba(0,0,0,0.3) 8px,
              rgba(255,255,255,0.1) 12px,
              rgba(0,0,0,0.2) 16px,
              rgba(0,0,0,0.5) 20px,
              rgba(0,0,0,0.7) 28px,
              rgba(255,255,255,0.08) 32px,
              rgba(0,0,0,0.4) 36px,
              rgba(0,0,0,0.6) 40px)`,
          }}
        />
        {/* Rich velvet texture with vertical highlights */}
        <div className="absolute inset-0 opacity-40"
          style={{
            backgroundImage: `
              repeating-linear-gradient(90deg, 
                transparent 0px,
                rgba(255,255,255,0.12) 10px,
                transparent 12px,
                transparent 20px),
              repeating-linear-gradient(90deg, 
                transparent 0px,
                rgba(0,0,0,0.3) 20px,
                transparent 22px,
                transparent 40px)`,
          }}
        />
        {/* Center fold highlight */}
        <div className="absolute inset-y-0 right-0 w-2 bg-gradient-to-r from-transparent via-white/30 to-white/50 shadow-lg" />
        {/* Edge shadows */}
        <div className="absolute inset-y-0 right-0 w-12 bg-gradient-to-l from-black/70 via-black/30 to-transparent" />
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
          background: 'linear-gradient(90deg, #6B0000 0%, #B22222 10%, #8B0000 25%, #4A0000 40%, #8B0000 55%, #B22222 70%, #8B0000 85%, #4A0000 100%)',
          boxShadow: `inset 40px 0 80px rgba(0,0,0,0.8), 
                      inset -20px 0 40px rgba(139,0,0,0.5),
                      -30px 0 100px rgba(0,0,0,0.7),
                      -10px 0 30px rgba(139,0,0,0.4)`,
        }}
      >
        {/* Vertical pleated folds - theater curtain style */}
        <div className="absolute inset-0 opacity-70"
          style={{
            background: `repeating-linear-gradient(90deg, 
              rgba(0,0,0,0.6) 0px,
              rgba(0,0,0,0.4) 8px,
              rgba(255,255,255,0.08) 12px, 
              rgba(0,0,0,0.2) 16px,
              rgba(0,0,0,0.5) 20px,
              rgba(0,0,0,0.7) 28px,
              rgba(255,255,255,0.1) 32px,
              rgba(0,0,0,0.3) 36px,
              rgba(0,0,0,0.6) 40px)`,
          }}
        />
        {/* Rich velvet texture with vertical highlights */}
        <div className="absolute inset-0 opacity-40"
          style={{
            backgroundImage: `
              repeating-linear-gradient(90deg, 
                transparent 0px,
                rgba(255,255,255,0.12) 10px,
                transparent 12px,
                transparent 20px),
              repeating-linear-gradient(90deg, 
                transparent 0px,
                rgba(0,0,0,0.3) 20px,
                transparent 22px,
                transparent 40px)`,
          }}
        />
        {/* Center fold highlight */}
        <div className="absolute inset-y-0 left-0 w-2 bg-gradient-to-l from-transparent via-white/30 to-white/50 shadow-lg" />
        {/* Edge shadows */}
        <div className="absolute inset-y-0 left-0 w-12 bg-gradient-to-r from-black/70 via-black/30 to-transparent" />
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
