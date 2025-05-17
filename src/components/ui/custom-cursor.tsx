
'use client';

import { useState, useEffect } from 'react';
import { cn } from '@/lib/utils';

export default function CustomCursor() {
  const [position, setPosition] = useState({ x: -100, y: -100 });
  const [isVisible, setIsVisible] = useState(false);
  const [isHoveringInteractive, setIsHoveringInteractive] = useState(false);

  useEffect(() => {
    const updatePosition = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY });
      if (!isVisible) setIsVisible(true);
    };

    const handleMouseLeaveDocument = () => {
      setIsVisible(false);
    };

    const handleMouseEnterDocument = () => {
      setIsVisible(true);
    };

    const handleMouseOver = (e: MouseEvent) => {
      if (e.target instanceof HTMLElement) {
        const target = e.target;
        // Check if the target or its parents are interactive
        if (target.closest('a, button, input, textarea, select, [role="button"], [data-interactive="true"]')) {
          setIsHoveringInteractive(true);
        } else {
          setIsHoveringInteractive(false);
        }
      }
    };
    
    document.addEventListener('mousemove', updatePosition);
    document.documentElement.addEventListener('mouseleave', handleMouseLeaveDocument);
    document.documentElement.addEventListener('mouseenter', handleMouseEnterDocument);
    document.addEventListener('mouseover', handleMouseOver);

    document.body.style.cursor = 'none';
    // For all interactive elements, also set cursor to none.
    const interactiveElements = document.querySelectorAll('a, button, input, textarea, select, [role="button"], [data-interactive="true"]');
    interactiveElements.forEach(el => {
      if (el instanceof HTMLElement) {
        el.style.cursor = 'none';
      }
    });


    return () => {
      document.removeEventListener('mousemove', updatePosition);
      document.documentElement.removeEventListener('mouseleave', handleMouseLeaveDocument);
      document.documentElement.removeEventListener('mouseenter', handleMouseEnterDocument);
      document.removeEventListener('mouseover', handleMouseOver);
      document.body.style.cursor = 'auto';
      interactiveElements.forEach(el => {
        if (el instanceof HTMLElement) {
          el.style.cursor = 'auto';
        }
      });
    };
  }, [isVisible]); // Re-run if isVisible changes to potentially re-apply styles

  return (
    <div
      className={cn(
        'fixed top-0 left-0 rounded-full pointer-events-none z-[9999] transition-all duration-150 ease-out',
        'border-2 border-primary',
        isVisible ? 'opacity-100' : 'opacity-0',
        isHoveringInteractive 
          ? 'w-10 h-10 bg-primary/30 scale-125' 
          : 'w-6 h-6 bg-primary/20'
      )}
      style={{
        transform: `translate(${position.x}px, ${position.y}px) translate(-50%, -50%)`,
      }}
    />
  );
}
