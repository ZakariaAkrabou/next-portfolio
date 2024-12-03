'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { useEffect, useState, useRef } from 'react';
import { useRouter } from 'next/navigation';
import { FiTerminal, FiCommand, FiCode } from 'react-icons/fi';

export default function Home() {
  const [isLoading, setIsLoading] = useState(true);
  const [currentLine, setCurrentLine] = useState(0);
  const [showCursor, setShowCursor] = useState(true);
  const [showEnter, setShowEnter] = useState(false);
  const router = useRouter();
  const terminalRef = useRef(null);

  const codeLines = [
    '> Initializing portfolio...',
    '> Loading skills and experience...',
    '> Configuring creative mode...',
    '> System ready.',
    '',
    'Welcome to my creative space!',
  ];

  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 1000);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    if (!isLoading && currentLine < codeLines.length) {
      const timer = setTimeout(() => {
        setCurrentLine(prev => prev + 1);
      }, 500);
      return () => clearTimeout(timer);
    } else if (currentLine === codeLines.length) {
      const timer = setTimeout(() => setShowEnter(true), 500);
      return () => clearTimeout(timer);
    }
  }, [isLoading, currentLine, codeLines.length]);

  useEffect(() => {
    const cursorInterval = setInterval(() => {
      setShowCursor(prev => !prev);
    }, 500);
    return () => clearInterval(cursorInterval);
  }, []);

  const handleEnterPortfolio = () => {
    router.push('/about');
  };

  return (
    <div className="min-h-screen bg-primary text-white overflow-hidden relative w-full">
      <div className="fixed inset-0 opacity-10 overflow-hidden">
        {[...Array(50)].map((_, i) => (
          <motion.div
            key={i}
            initial={{ y: -100, x: Math.random() * (typeof window !== 'undefined' ? window.innerWidth : 1000) }}
            animate={{ 
              y: (typeof window !== 'undefined' ? window.innerHeight : 1000) + 100,
              transition: {
                duration: Math.random() * 10 + 5,
                repeat: Infinity,
                ease: "linear"
              }
            }}
            className="absolute text-accent"
            style={{ fontSize: Math.random() * 20 + 10 }}
          >
            {Math.random() > 0.5 ? '0' : '1'}
          </motion.div>
        ))}
      </div>

      <div className="relative z-10 w-full max-w-[100vw] px-4 py-10 sm:py-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto w-full"
        >
          <div className="bg-gray-900 rounded-lg overflow-hidden shadow-2xl border border-gray-700 w-full">
            <div className="bg-gray-800 px-4 py-2 flex items-center justify-between">
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 sm:w-3 sm:h-3 rounded-full bg-red-500"></div>
                <div className="w-2 h-2 sm:w-3 sm:h-3 rounded-full bg-yellow-500"></div>
                <div className="w-2 h-2 sm:w-3 sm:h-3 rounded-full bg-green-500"></div>
              </div>
              <div className="flex items-center space-x-2">
                <FiTerminal className="text-gray-400 text-sm sm:text-base" />
                <span className="text-xs sm:text-sm text-gray-400">portfolio.exe</span>
              </div>
            </div>

            <div 
              ref={terminalRef}
              className="p-3 sm:p-4 font-mono text-xs sm:text-sm space-y-2 min-h-[350px] sm:min-h-[400px]"
            >
              {codeLines.slice(0, currentLine).map((line, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  className="flex items-center space-x-2"
                >
                  <span className="text-accent">{line}</span>
                </motion.div>
              ))}
              {currentLine < codeLines.length && (
                <span className={`inline-block w-3 h-5 bg-accent ${showCursor ? 'opacity-100' : 'opacity-0'}`}></span>
              )}
              
              {showEnter && (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.5 }}
                  className="pt-4 sm:pt-8 space-y-4 sm:space-y-6"
                >
                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4 w-full">
                    <motion.div
                      whileHover={{ scale: 1.05 }}
                      className="bg-gray-800 p-4 sm:p-6 rounded-lg border border-gray-700 hover:border-accent transition-colors"
                    >
                      <FiCode className="text-2xl sm:text-3xl text-accent mb-3 sm:mb-4" />
                      <h3 className="text-base sm:text-lg font-semibold mb-1 sm:mb-2">Developer</h3>
                      <p className="text-gray-400 text-xs sm:text-sm">Crafting clean, efficient code</p>
                    </motion.div>
                    <motion.div
                      whileHover={{ scale: 1.05 }}
                      className="bg-gray-800 p-4 sm:p-6 rounded-lg border border-gray-700 hover:border-accent transition-colors"
                    >
                      <FiCommand className="text-2xl sm:text-3xl text-accent mb-3 sm:mb-4" />
                      <h3 className="text-base sm:text-lg font-semibold mb-1 sm:mb-2">Problem Solver</h3>
                      <p className="text-gray-400 text-xs sm:text-sm">Finding elegant solutions</p>
                    </motion.div>
                    <motion.div
                      whileHover={{ scale: 1.05 }}
                      className="bg-gray-800 p-4 sm:p-6 rounded-lg border border-gray-700 hover:border-accent transition-colors sm:col-span-2 lg:col-span-1"
                    >
                      <FiTerminal className="text-2xl sm:text-3xl text-accent mb-3 sm:mb-4" />
                      <h3 className="text-base sm:text-lg font-semibold mb-1 sm:mb-2">Tech Enthusiast</h3>
                      <p className="text-gray-400 text-xs sm:text-sm">Always learning, always growing</p>
                    </motion.div>
                  </div>

                  <motion.button
                    onClick={handleEnterPortfolio}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="w-full bg-accent hover:bg-accent-hover text-primary font-bold py-3 sm:py-4 px-6 sm:px-8 rounded-lg transition-colors duration-200 flex items-center justify-center space-x-2 text-sm sm:text-base"
                  >
                    <span>Enter Portfolio</span>
                    <motion.span
                      animate={{ x: [0, 5, 0] }}
                      transition={{ duration: 1, repeat: Infinity }}
                    >
                      →
                    </motion.span>
                  </motion.button>
                </motion.div>
              )}
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
