'use client';

import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

const CustomCursor = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isPointer, setIsPointer] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    // Check if device is mobile
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 768);
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);

    // If mobile, don't show custom cursor
    if (isMobile) {
      document.body.classList.remove('custom-cursor-active');
      return;
    }

    let rafId;
    
    const updateMousePosition = (e) => {
      cancelAnimationFrame(rafId);
      rafId = requestAnimationFrame(() => {
        setMousePosition({ x: e.clientX, y: e.clientY });
      });
    };

    const updateCursorType = (e) => {
      const target = e.target;
      setIsPointer(
        target?.tagName === 'A' ||
        target?.tagName === 'BUTTON' ||
        target?.closest('a') ||
        target?.closest('button') ||
        window.getComputedStyle(target || document.body).cursor === 'pointer'
      );
    };

    const handleMouseEnter = () => {
      setIsVisible(true);
      document.body.classList.add('custom-cursor-active');
    };

    const handleMouseLeave = () => {
      setIsVisible(false);
      document.body.classList.remove('custom-cursor-active');
    };

    window.addEventListener('pointermove', updateMousePosition, { passive: true });
    window.addEventListener('pointerover', updateCursorType, { passive: true });
    document.addEventListener('mouseenter', handleMouseEnter);
    document.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      window.removeEventListener('pointermove', updateMousePosition);
      window.removeEventListener('pointerover', updateCursorType);
      document.removeEventListener('mouseenter', handleMouseEnter);
      document.removeEventListener('mouseleave', handleMouseLeave);
      window.removeEventListener('resize', checkMobile);
      cancelAnimationFrame(rafId);
      document.body.classList.remove('custom-cursor-active');
    };
  }, [isMobile]);

  if (isMobile || !isVisible) return null;

  return (
    <>
      <motion.div
        className="fixed top-0 left-0 w-3.5 h-3.5 bg-accent rounded-full pointer-events-none z-[100]"
        animate={{
          x: mousePosition.x - 7,
          y: mousePosition.y - 7,
          scale: isPointer ? 1.35 : 1,
        }}
        transition={{
          type: "spring",
          stiffness: 1400,
          damping: 26,
          mass: 0.08,
        }}
      />
      <motion.div
        className="fixed top-0 left-0 w-7 h-7 border border-accent/40 rounded-full pointer-events-none z-[100]"
        animate={{
          x: mousePosition.x - 14,
          y: mousePosition.y - 14,
          scale: isPointer ? 1.25 : 1,
        }}
        transition={{
          type: "spring",
          stiffness: 1000,
          damping: 24,
          mass: 0.16,
          restDelta: 0.001
        }}
      />
      <motion.div
        className="fixed top-0 left-0 w-1.5 h-1.5 bg-accent/30 rounded-full pointer-events-none z-[90]"
        animate={{
          x: mousePosition.x - 3,
          y: mousePosition.y - 3,
          scale: isPointer ? 1.15 : 1,
        }}
        transition={{
          type: "spring",
          stiffness: 900,
          damping: 22,
          mass: 0.12,
          restDelta: 0.001
        }}
      />
    </>
  );
};

export default CustomCursor;
