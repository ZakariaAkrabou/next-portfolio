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

    window.addEventListener('mousemove', updateMousePosition);
    window.addEventListener('mouseover', updateCursorType);
    document.addEventListener('mouseenter', handleMouseEnter);
    document.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      window.removeEventListener('mousemove', updateMousePosition);
      window.removeEventListener('mouseover', updateCursorType);
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
        className="fixed top-0 left-0 w-4 h-4 bg-accent mix-blend-difference rounded-full pointer-events-none z-[100]"
        animate={{
          x: mousePosition.x - 8,
          y: mousePosition.y - 8,
          scale: isPointer ? 1.5 : 1,
        }}
        transition={{
          type: "spring",
          stiffness: 1000,
          damping: 40,
          mass: 0.1,
        }}
      />
      <motion.div
        className="fixed top-0 left-0 w-8 h-8 border border-accent/40 rounded-full pointer-events-none z-[100] mix-blend-difference"
        animate={{
          x: mousePosition.x - 16,
          y: mousePosition.y - 16,
          scale: isPointer ? 1.5 : 1,
        }}
        transition={{
          type: "spring",
          stiffness: 800,
          damping: 35,
          mass: 0.2,
          restDelta: 0.001
        }}
      />
      <motion.div
        className="fixed top-0 left-0 w-2 h-2 bg-accent/20 rounded-full pointer-events-none z-[90]"
        animate={{
          x: mousePosition.x - 4,
          y: mousePosition.y - 4,
          scale: isPointer ? 1.2 : 1,
        }}
        transition={{
          type: "spring",
          stiffness: 600,
          damping: 30,
          mass: 0.5,
          restDelta: 0.001
        }}
      />
    </>
  );
};

export default CustomCursor;
