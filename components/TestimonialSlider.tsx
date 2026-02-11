
import React, { useState, useEffect, useRef } from 'react';

interface Testimonial {
  name: string;
  text: string;
}

interface TestimonialBoxProps {
  testimonial: Testimonial;
  initialPos: { x: number; y: number; rotation: number };
  onFocus: () => void;
  onTypingComplete: () => void;
  zIndex: number;
}

const TestimonialBox: React.FC<TestimonialBoxProps> = ({ 
  testimonial, 
  initialPos, 
  onFocus, 
  onTypingComplete,
  zIndex 
}) => {
  const [displayedText, setDisplayedText] = useState('');
  const [isTyping, setIsTyping] = useState(true);
  const [position, setPosition] = useState(initialPos);
  const [isDragging, setIsDragging] = useState(false);
  const dragStartRef = useRef({ x: 0, y: 0 });
  const boxRef = useRef<HTMLDivElement>(null);
  
  const hasStartedTyping = useRef(false);
  const onTypingCompleteRef = useRef(onTypingComplete);
  
  useEffect(() => {
    onTypingCompleteRef.current = onTypingComplete;
  }, [onTypingComplete]);

  useEffect(() => {
    if (hasStartedTyping.current) return;
    hasStartedTyping.current = true;

    let charIndex = 0;
    const interval = setInterval(() => {
      charIndex++;
      if (charIndex <= testimonial.text.length) {
        setDisplayedText(testimonial.text.slice(0, charIndex));
      } else {
        setIsTyping(false);
        clearInterval(interval);
        // Settle for a brief moment after typing before notifying parent
        setTimeout(() => {
          onTypingCompleteRef.current();
        }, 400);
      }
    }, 30);
    
    return () => clearInterval(interval);
  }, [testimonial.text]);

  const handlePointerDown = (e: React.PointerEvent) => {
    onFocus();
    setIsDragging(true);
    dragStartRef.current = {
      x: e.clientX - position.x,
      y: e.clientY - position.y
    };
    if (boxRef.current) {
      boxRef.current.setPointerCapture(e.pointerId);
    }
  };

  const handlePointerMove = (e: React.PointerEvent) => {
    if (!isDragging) return;
    setPosition({
      ...position,
      x: e.clientX - dragStartRef.current.x,
      y: e.clientY - dragStartRef.current.y
    });
  };

  const handlePointerUp = (e: React.PointerEvent) => {
    setIsDragging(false);
    if (boxRef.current) {
      boxRef.current.releasePointerCapture(e.pointerId);
    }
  };

  return (
    <div
      ref={boxRef}
      onPointerDown={handlePointerDown}
      onPointerMove={handlePointerMove}
      onPointerUp={handlePointerUp}
      className={`absolute cursor-grab active:cursor-grabbing select-none p-6 md:p-10 bg-white rounded-2xl border border-gray-100 w-[420px] max-w-[85vw] md:w-[540px] shadow-[0_4px_35px_-4px_rgba(0,0,0,0.06)] animate-in fade-in zoom-in-95 duration-500 ${
        isDragging ? 'shadow-[0_40px_80px_-15px_rgba(0,0,0,0.12)] scale-[1.02] z-[999!important]' : 'transition-shadow duration-200'
      }`}
      style={{
        left: 0,
        top: 0,
        transform: `translate3d(${position.x}px, ${position.y}px, 0) rotate(${position.rotation}deg)`,
        zIndex: zIndex,
        touchAction: 'none'
      }}
    >
      <p className="handwritten text-blue-600 leading-[1.05] mb-5 min-h-[1.2em]">
        {displayedText}
        {isTyping && <span className="animate-pulse inline-block ml-1">|</span>}
      </p>
      <div className={`transition-opacity duration-1000 ${isTyping ? 'opacity-0' : 'opacity-100'}`}>
        <p className="font-sans text-[11px] font-bold tracking-[0.25em] uppercase text-gray-400">
          — {testimonial.name}
        </p>
      </div>
    </div>
  );
};

interface TestimonialSliderProps {
  testimonials: Testimonial[];
}

const TestimonialSlider: React.FC<TestimonialSliderProps> = ({ testimonials }) => {
  const [visibleCount, setVisibleCount] = useState<number>(0);
  const [isWaiting, setIsWaiting] = useState<boolean>(false);
  const [zIndices, setZIndices] = useState<number[]>([]);
  const [initialPositions, setInitialPositions] = useState<{ x: number; y: number; rotation: number }[]>([]);

  useEffect(() => {
    const screenW = window.innerWidth;
    const isMobile = screenW < 768;
    const padding = isMobile ? 20 : 40;
    const boxWidth = isMobile ? Math.min(420, screenW * 0.85) : 540;
    const centerX = screenW / 2 - boxWidth / 2;
    
    const positions = testimonials.map((_, i) => {
      if (isMobile) {
        const horizontalAlternator = i % 2 === 0 ? 1 : -1;
        const xOffset = horizontalAlternator * 12 + (Math.random() - 0.5) * 10;
        const yOffset = i * 20; 
        
        return {
          x: centerX + xOffset,
          y: yOffset,
          rotation: (Math.random() - 0.5) * 3
        };
      } else {
        if (i === 0) {
          return {
            x: centerX,
            y: 120,
            rotation: 0
          };
        }

        const angle = ((i - 1) / (testimonials.length - 1)) * Math.PI * 2;
        const radiusX = screenW * 0.22;
        const radiusY = 70;
        
        const baseX = centerX + Math.cos(angle) * radiusX + (Math.random() * 40 - 20);
        const baseY = 150 + Math.sin(angle) * radiusY + (Math.random() * 40 - 20);
        
        const rotation = (Math.random() - 0.5) * 8;
        
        return { 
          x: Math.max(padding, Math.min(screenW - boxWidth - padding, baseX)), 
          y: baseY, 
          rotation 
        };
      }
    });

    setInitialPositions(positions);
    setZIndices(testimonials.map((_, i) => i + 10));
    setVisibleCount(1);
  }, [testimonials]);

  const bringToFront = (index: number) => {
    const maxZ = Math.max(...zIndices, 100);
    const newZIndices = [...zIndices];
    newZIndices[index] = maxZ + 1;
    setZIndices(newZIndices);
  };

  const handleBoxTypingFinished = () => {
    if (visibleCount < testimonials.length) {
      setIsWaiting(true);
      setTimeout(() => {
        setIsWaiting(false);
        setVisibleCount(prev => prev + 1);
      }, 1000); // 1-second delay as requested
    }
  };

  return (
    <section className="relative w-screen left-1/2 -translate-x-1/2 pt-0 md:pt-12 pb-24 md:pb-48 mb-8 min-h-[420px] md:min-h-[440px] overflow-hidden select-none border-b border-gray-100">
      <div className="relative w-full h-[50vh]">
        {initialPositions.length > 0 && testimonials.slice(0, visibleCount).map((t, i) => (
          <TestimonialBox
            key={i}
            testimonial={t}
            initialPos={initialPositions[i]}
            zIndex={zIndices[i]}
            onFocus={() => bringToFront(i)}
            onTypingComplete={i === visibleCount - 1 ? handleBoxTypingFinished : () => {}}
          />
        ))}
      </div>

      <div className="absolute bottom-4 md:bottom-10 left-0 w-full flex flex-col items-center pointer-events-none space-y-4">
        <div className="flex flex-col items-center opacity-30">
          <span className="text-[12px] font-bold tracking-[0.4em] uppercase text-gray-500">
            {isWaiting ? 'Pregătim următorul gând...' : 'Gânduri în dialog • Drag to move'}
          </span>
          <div className={`mt-2 h-px bg-gray-300 transition-all duration-[1000ms] ease-linear ${isWaiting ? 'w-40' : 'w-20'}`} />
        </div>
        
        <div className="flex items-center gap-3 opacity-20 hover:opacity-100 transition-opacity">
          <span className="text-[10px] font-mono text-gray-400">
            {String(Math.min(visibleCount, testimonials.length)).padStart(2, '0')} / {String(testimonials.length).padStart(2, '0')}
          </span>
        </div>
      </div>
    </section>
  );
};

export default TestimonialSlider;
