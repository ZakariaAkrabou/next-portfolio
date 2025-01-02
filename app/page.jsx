'use client';
import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useRouter } from 'next/navigation';
import { FaGithub, FaLinkedin, FaCode, FaTerminal, FaDatabase, FaServer } from 'react-icons/fa';
import { HiOutlineLocationMarker } from 'react-icons/hi';
import { BiCodeAlt } from 'react-icons/bi';
import { SiJavascript, SiReact, SiNodedotjs, SiLaravel } from 'react-icons/si';

// Typing effect component
const TypeWriter = ({ text, delay = 100 }) => {
  const [displayText, setDisplayText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    if (currentIndex < text.length) {
      const timeout = setTimeout(() => {
        setDisplayText(prev => prev + text[currentIndex]);
        setCurrentIndex(prev => prev + 1);
      }, delay);
      return () => clearTimeout(timeout);
    }
  }, [currentIndex, text, delay]);

  return <span>{displayText}</span>;
};

// Floating code elements component
const FloatingCode = ({ children, delay, duration, x, y }) => (
  <motion.div
    initial={{ opacity: 0, x, y }}
    animate={{ 
      opacity: [0.2, 0.5, 0.2],
      x: [x, x + 20, x],
      y: [y, y - 20, y]
    }}
    transition={{
      duration,
      repeat: Infinity,
      delay
    }}
    className="absolute text-accent/10 font-mono text-lg md:text-xl"
    style={{ filter: 'blur(1px)' }}
  >
    {children}
  </motion.div>
);

// Code bracket decoration
const CodeBracket = ({ isOpening, className }) => (
  <motion.div
    initial={{ opacity: 0, x: isOpening ? -20 : 20 }}
    animate={{ opacity: 1, x: 0 }}
    transition={{ duration: 0.5 }}
    className={`text-accent/40 font-mono text-4xl ${className}`}
  >
    {isOpening ? '{' : '}'}
  </motion.div>
);

// Line number component
const LineNumbers = ({ count }) => (
  <div className="absolute left-0 top-0 bottom-0 w-12 flex flex-col items-end pr-3 text-accent/30 font-mono text-sm border-r border-accent/10">
    {Array.from({ length: count }, (_, i) => (
      <div key={i} className="leading-6">
        {i + 1}
      </div>
    ))}
  </div>
);

export default function Home() {
  const [isWelcomeScreen, setIsWelcomeScreen] = useState(true);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const router = useRouter();

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsWelcomeScreen(false);
    }, 3000);
    return () => clearTimeout(timer);
  }, []);

  // Code elements for background
  const codeElements = [
    { content: '<div>', delay: 0, duration: 4, x: '10%', y: '20%' },
    { content: 'function()', delay: 1, duration: 5, x: '80%', y: '15%' },
    { content: '=> {}', delay: 2, duration: 4.5, x: '60%', y: '70%' },
    { content: 'const', delay: 0.5, duration: 5, x: '20%', y: '80%' },
    { content: '</>', delay: 1.5, duration: 4, x: '75%', y: '40%' },
    { content: '[]', delay: 2.5, duration: 5, x: '15%', y: '50%' },
  ];

  return (
    <div className="fixed inset-0 bg-primary text-white overflow-hidden">
      <AnimatePresence mode="wait">
        {isWelcomeScreen ? (
          <motion.div
            key="welcome"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0, scale: 1.1 }}
            transition={{ duration: 0.8 }}
            className="h-screen w-screen flex items-center justify-center bg-gradient-to-br from-primary-dark to-primary relative overflow-hidden"
          >
            <div className="absolute inset-0">
              {codeElements.map((el, i) => (
                <FloatingCode key={i} {...el} />
              ))}
            </div>
            <div className="relative z-10 text-center space-y-6 px-4 sm:px-6 lg:px-8">
              <motion.div
                animate={{ 
                  rotateY: [0, 360],
                  scale: [1, 1.2, 1]
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  repeatDelay: 1
                }}
              >
                <BiCodeAlt className="text-5xl sm:text-6xl md:text-7xl text-accent mx-auto" />
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="space-y-4"
              >
                <div className="flex items-center justify-center gap-2 text-accent/80 font-mono">
                  <span className="text-lg sm:text-xl md:text-2xl">{'>'}</span>
                  <TypeWriter text="npx create-portfolio" delay={100} />
                  <motion.span
                    animate={{ opacity: [0, 1] }}
                    transition={{ duration: 0.5, repeat: Infinity }}
                    className="text-lg sm:text-xl md:text-2xl"
                  >
                    _
                  </motion.span>
                </div>
              </motion.div>
            </div>
          </motion.div>
        ) : (
          <motion.div
            key="content"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            className="h-screen w-screen relative overflow-hidden bg-gradient-to-br from-primary-dark to-primary"
          >
            {/* IDE-like header */}
            <div className="absolute top-0 left-0 right-0 h-8 bg-primary-dark/80 flex items-center px-4 gap-2">
              {/* Mobile menu button */}
              <button 
                onClick={() => setIsSidebarOpen(!isSidebarOpen)}
                className="lg:hidden text-accent hover:text-accent/80 transition-colors"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <line x1="3" y1="12" x2="21" y2="12"></line>
                  <line x1="3" y1="6" x2="21" y2="6"></line>
                  <line x1="3" y1="18" x2="21" y2="18"></line>
                </svg>
              </button>
              <div className="flex gap-1.5">
                <div className="w-3 h-3 rounded-full bg-red-500/50"></div>
                <div className="w-3 h-3 rounded-full bg-yellow-500/50"></div>
                <div className="w-3 h-3 rounded-full bg-green-500/50"></div>
              </div>
              <div className="flex-1 text-center text-xs font-mono text-accent/50">portfolio.jsx - Visual Studio Code</div>
            </div>

            {/* File explorer sidebar */}
            <div 
              className={`fixed left-0 top-8 bottom-0 w-48 bg-[#0a0a0a]/95 border-r border-accent/5 transform transition-transform duration-200 ease-in-out ${
                isSidebarOpen ? 'translate-x-0' : '-translate-x-full lg:translate-x-0'
              } z-30`}
            >
              <div className="h-full overflow-y-auto">
                <div className="p-4">
                  <div className="text-xs font-mono text-accent/40 mb-4 flex items-center gap-2">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-[#10B981]">
                      <path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"></path>
                    </svg>
                    EXPLORER
                  </div>
                  <div className="space-y-3">
                    <div className="group flex items-center gap-2 text-[#10B981] text-sm cursor-pointer hover:text-[#10B981]/80 transition-colors">
                      <motion.span 
                        animate={{ rotate: 90 }}
                        transition={{ duration: 0.2 }}
                        className="text-xs"
                      >
                        ▶
                      </motion.span>
                      <span className="flex items-center gap-2">
                        <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                          <path d="M3 3h18v18H3z"/>
                          <path d="M8 12h8"/>
                          <path d="M12 8v8"/>
                        </svg>
                        src/
                      </span>
                    </div>
                    <motion.div 
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: 'auto' }}
                      className="pl-4 space-y-2"
                    >
                      <div className="flex items-center gap-2 text-[#10B981] text-sm group cursor-pointer hover:text-[#10B981]/80 transition-colors">
                        <div className="flex items-center gap-2">
                          <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="currentColor" className="text-[#61DAFB]">
                            <path d="M12 13.5a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3Z"/>
                            <path d="M12 21.9c-1.9 0-3.6-.4-4.9-1.1-1.2-.7-2-1.6-2.3-2.7-.3-1 0-2.1.7-3.2.7-1 1.9-2 3.3-2.7-1.4-.7-2.6-1.7-3.3-2.7-.8-1.1-1.1-2.2-.7-3.2.3-1 1.1-2 2.3-2.7C8.4 2.5 10.1 2 12 2c1.9 0 3.6.4 4.9 1.1 1.2.7 2 1.6 2.3 2.7.3 1 0 2.1-.7 3.2-.7 1-1.9 2-3.3 2.7 1.4.7 2.6 1.7 3.3 2.7.8 1.1 1.1 2.2.7 3.2-.3 1-1.1 2-2.3 2.7-1.3.8-3 1.2-4.9 1.2Zm0-9c-1.6 0-3.1.3-4.2.9-1.1.5-1.8 1.2-2 1.9-.2.7 0 1.4.5 2.1.5.7 1.4 1.3 2.5 1.8 1.1.5 2.5.7 3.9.7 1.4 0 2.8-.2 3.9-.7 1.1-.5 2-1.1 2.5-1.8.5-.7.7-1.4.5-2.1-.2-.7-.9-1.4-2-1.9-1.1-.6-2.6-.9-4.2-.9Zm-4.2-4.8c-.5.7-.7 1.4-.5 2.1.2.7.9 1.4 2 1.9 1.1.5 2.5.8 4.1.8 1.6 0 3.1-.3 4.2-.8 1.1-.5 1.8-1.2 2-1.9.2-.7 0-1.4-.5-2.1-.5-.7-1.4-1.3-2.5-1.8-1.1-.5-2.5-.7-3.9-.7-1.4 0-2.8.2-3.9.7-1.1.5-2 1.1-2.5 1.8Z"/>
                          </svg>
                          portfolio.jsx
                        </div>
                      </div>
                    </motion.div>
                    <div className="group flex items-center gap-2 text-[#10B981] text-sm cursor-pointer hover:text-[#10B981]/80 transition-colors">
                      <span className="text-xs">▶</span>
                      <span className="flex items-center gap-2">
                        <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                          <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/>
                          <polyline points="17 8 12 3 7 8"/>
                          <line x1="12" y1="3" x2="12" y2="15"/>
                        </svg>
                        data/
                      </span>
                    </div>
                    <div className="group flex items-center gap-2 text-[#10B981] text-sm cursor-pointer hover:text-[#10B981]/80 transition-colors">
                      <span className="text-xs">▶</span>
                      <span className="flex items-center gap-2">
                        <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                          <rect x="2" y="2" width="20" height="8" rx="2" ry="2"/>
                          <rect x="2" y="14" width="20" height="8" rx="2" ry="2"/>
                          <line x1="6" y1="6" x2="6.01" y2="6"/>
                          <line x1="6" y1="18" x2="6.01" y2="18"/>
                        </svg>
                        api/
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Overlay for mobile */}
            {isSidebarOpen && (
              <div
                className="fixed inset-0 bg-black/50 z-20 lg:hidden"
                onClick={() => setIsSidebarOpen(false)}
              />
            )}

            {/* Main content */}
            <div className="relative z-10 h-full flex items-center justify-center p-4 sm:p-6 lg:p-8 lg:ml-48 mt-8">
              <div className="max-w-4xl w-full">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8 }}
                  className="relative"
                >
                  {/* Code brackets decoration */}
                  <CodeBracket isOpening={true} className="absolute -left-4 sm:-left-8 -top-6 hidden sm:block" />
                  <CodeBracket isOpening={false} className="absolute -right-4 sm:-right-8 -bottom-6 hidden sm:block" />

                  {/* Content card */}
                  <div className="bg-primary-dark/40 backdrop-blur-xl rounded-2xl p-4 sm:p-6 lg:p-8 border border-accent/10">
                    <div className="space-y-6 sm:space-y-8">
                      {/* Profile section */}
                      <div className="space-y-3 sm:space-y-4">
                        <motion.div
                          initial={{ opacity: 0, x: -20 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ duration: 0.6, delay: 0.2 }}
                          className="flex items-center gap-2 sm:gap-3 flex-wrap"
                        >
                          <span className="text-accent/60 font-mono text-sm sm:text-base">export const</span>
                          <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-accent to-accent/80">
                            zakaria
                          </h1>
                          <span className="text-accent/60 font-mono text-sm sm:text-base">= {`{`}</span>
                        </motion.div>

                        <motion.div
                          initial={{ opacity: 0, y: 20 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ duration: 0.6, delay: 0.3 }}
                          className="pl-4 sm:pl-8 space-y-2 sm:space-y-3 relative"
                        >
                          <LineNumbers count={3} />
                          <div className="pl-12 flex items-center gap-2 flex-wrap">
                            <span className="text-accent/60 font-mono text-sm sm:text-base">name:</span>
                            <span className="text-lg sm:text-xl text-white/90">"Zakaria Akrabou"</span>
                          </div>
                          <div className="pl-12 flex items-center gap-2 flex-wrap">
                            <span className="text-accent/60 font-mono text-sm sm:text-base">role:</span>
                            <div className="flex items-center gap-2 text-white/90">
                              <FaCode className="text-accent" />
                              <span className="text-lg sm:text-xl">"Full Stack Developer"</span>
                            </div>
                          </div>
                          <div className="pl-12 flex items-center gap-2 flex-wrap">
                            <span className="text-accent/60 font-mono text-sm sm:text-base">location:</span>
                            <div className="flex items-center gap-2 text-white/90">
                              <HiOutlineLocationMarker className="text-accent" />
                              <span className="text-base sm:text-lg">"Morocco"</span>
                            </div>
                          </div>
                        </motion.div>

                        {/* Tech stack */}
                        <motion.div
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          transition={{ duration: 0.6, delay: 0.4 }}
                          className="space-y-3 sm:space-y-4"
                        >
                          <div className="pl-4 sm:pl-8 flex items-center gap-2">
                            <span className="text-accent/60 font-mono text-sm sm:text-base">technologies: [</span>
                          </div>
                          <div className="pl-12 sm:pl-16 flex flex-wrap gap-3">
                            <motion.div
                              whileHover={{ scale: 1.05 }}
                              className="px-3 sm:px-4 py-1.5 sm:py-2 rounded-full bg-green-500/20 text-white/90 font-mono text-xs sm:text-sm flex items-center gap-2"
                            >
                              <SiNodedotjs className="text-green-500" />
                              "Node.js/Express.js"
                            </motion.div>
                            <motion.div
                              whileHover={{ scale: 1.05 }}
                              className="px-3 sm:px-4 py-1.5 sm:py-2 rounded-full bg-blue-500/20 text-white/90 font-mono text-xs sm:text-sm flex items-center gap-2"
                            >
                              <SiReact className="text-blue-500" />
                              "React.js"
                            </motion.div>
                            <motion.div
                              whileHover={{ scale: 1.05 }}
                              className="px-3 sm:px-4 py-1.5 sm:py-2 rounded-full bg-red-500/20 text-white/90 font-mono text-xs sm:text-sm flex items-center gap-2"
                            >
                              <SiLaravel className="text-red-500" />
                              "Laravel"
                            </motion.div>
                          </div>
                          <div className="pl-4 sm:pl-8 flex items-center gap-2">
                            <span className="text-accent/60 font-mono text-sm sm:text-base">]</span>
                          </div>
                        </motion.div>
                        <div className="pl-4 sm:pl-8">
                          <span className="text-accent/60 font-mono text-sm sm:text-base">{`}`}</span>
                        </div>
                      </div>

                      {/* Actions */}
                      <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.5 }}
                        className="pt-4 flex flex-col sm:flex-row items-center gap-4"
                      >
                        <motion.button
                          onClick={() => router.push('/about')}
                          className="group px-4 sm:px-6 py-2.5 sm:py-3 bg-accent/10 border border-accent/20 text-accent rounded-lg font-mono flex items-center gap-2 hover:bg-accent hover:text-primary transition-all duration-300 w-full sm:w-auto justify-center text-sm sm:text-base"
                          whileHover={{ scale: 1.02 }}
                          whileTap={{ scale: 0.98 }}
                        >
                          <span className="group-hover:scale-110 transition-transform">{'<'}</span>
                          View Portfolio
                          <span className="group-hover:scale-110 transition-transform">{'/>'}</span>
                        </motion.button>
                        <div className="flex gap-3 sm:gap-4">
                          <motion.a
                            href="https://github.com/ZakariaAkrabou"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="p-2.5 sm:p-3 bg-accent/10 border border-accent/20 text-accent rounded-lg hover:bg-accent hover:text-primary transition-all duration-300"
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                          >
                            <FaGithub className="w-5 h-5 sm:w-6 sm:h-6" />
                          </motion.a>
                          <motion.a
                            href="https://www.linkedin.com/in/zakaria-akrabou-b4381827a/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="p-2.5 sm:p-3 bg-accent/10 border border-accent/20 text-accent rounded-lg hover:bg-accent hover:text-primary transition-all duration-300"
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                          >
                            <FaLinkedin className="w-5 h-5 sm:w-6 sm:h-6" />
                          </motion.a>
                        </div>
                      </motion.div>
                    </div>
                  </div>
                </motion.div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
