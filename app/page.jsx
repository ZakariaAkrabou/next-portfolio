'use client';
import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useRouter } from 'next/navigation';
import { FaGithub, FaLinkedin, FaCode, FaTerminal, FaDatabase, FaServer, FaRocket } from 'react-icons/fa';
import { HiOutlineLocationMarker, HiOutlineCode, HiOutlineCube, HiOutlineLightningBolt } from 'react-icons/hi';
import { BiCodeAlt } from 'react-icons/bi';
import { SiJavascript, SiReact, SiNodedotjs, SiLaravel } from 'react-icons/si';

const TypeWriter = ({ text, delay = 100, onComplete }) => {
  const [displayText, setDisplayText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    if (currentIndex < text.length) {
      const timeout = setTimeout(() => {
        setDisplayText(prev => prev + text[currentIndex]);
        setCurrentIndex(prev => prev + 1);
      }, delay);
      return () => clearTimeout(timeout);
    } else if (onComplete) {
      onComplete();
    }
  }, [currentIndex, text, delay, onComplete]);

  return <span>{displayText}</span>;
};

const TerminalPrompt = ({ command, output, isTyping }) => (
  <div className="font-mono space-y-1">
    <div className="flex items-center gap-2 text-accent">
      <span className="text-accent/60">❯</span>
      <span>{command}</span>
      {isTyping && (
        <motion.span
          animate={{ opacity: [0, 1] }}
          transition={{ duration: 0.5, repeat: Infinity }}
        >
          _
        </motion.span>
      )}
    </div>
    {output && (
      <div className="text-text-secondary pl-4">
        {output}
      </div>
    )}
  </div>
);

const GlowingIcon = ({ icon: Icon, color, className }) => (
  <div className="relative group">
    <div className={`absolute inset-0 blur-lg opacity-40 group-hover:opacity-60 transition-opacity ${color}`} />
    <Icon className={`relative ${className}`} />
  </div>
);

const FloatingParticle = ({ delay }) => (
  <motion.div
    className="absolute w-1 h-1 bg-accent rounded-full"
    initial={{ opacity: 0, scale: 0 }}
    animate={{ 
      opacity: [0, 1, 0],
      scale: [0, 1.5, 0],
      y: [-20, 20],
      x: [-20, 20]
    }}
    transition={{
      duration: 2,
      delay,
      repeat: Infinity,
      repeatType: "reverse"
    }}
  />
);

const LoadingMessage = ({ messages, onComplete }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [currentText, setCurrentText] = useState('');
  const [showCursor, setShowCursor] = useState(true);

  useEffect(() => {
    if (currentIndex >= messages.length) {
      onComplete?.();
      return;
    }

    const text = messages[currentIndex];
    let charIndex = 0;

    const typingInterval = setInterval(() => {
      if (charIndex <= text.length) {
        setCurrentText(text.slice(0, charIndex));
        charIndex++;
      } else {
        clearInterval(typingInterval);
        setTimeout(() => {
          setCurrentIndex(prev => prev + 1);
          setCurrentText('');
        }, 1000);
      }
    }, 50);

    return () => clearInterval(typingInterval);
  }, [currentIndex, messages, onComplete]);

  useEffect(() => {
    const cursorInterval = setInterval(() => {
      setShowCursor(prev => !prev);
    }, 500);

    return () => clearInterval(cursorInterval);
  }, []);

  return (
    <div className="font-mono text-accent/80">
      <div className="flex items-center gap-2">
        <span className="text-accent/60">$</span>
        <span>{currentText}</span>
        <span className={`${showCursor ? 'opacity-100' : 'opacity-0'} transition-opacity`}>_</span>
      </div>
      <div className="mt-2 text-sm opacity-60">
        {messages.slice(0, currentIndex).map((msg, index) => (
          <div key={index} className="flex items-center gap-2">
            <span className="text-green-500">✓</span>
            <span>{msg}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

const CodeBlock = ({ delay = 0 }) => {
  const codeSnippets = [
    'const portfolio = new Portfolio();',
    'await portfolio.initialize();',
    'portfolio.setTheme("modern");',
    'portfolio.deploy();'
  ];
  
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay }}
      className="absolute font-mono text-xs sm:text-sm text-accent/20"
      style={{
        left: `${Math.random() * 80}%`,
        top: `${Math.random() * 80}%`,
      }}
    >
      {codeSnippets[Math.floor(Math.random() * codeSnippets.length)]}
    </motion.div>
  );
};

const LoadingBar = ({ progress }) => (
  <div className="w-48 h-1 bg-accent/20 rounded-full overflow-hidden">
    <motion.div
      className="h-full bg-accent"
      initial={{ width: 0 }}
      animate={{ width: `${progress}%` }}
      transition={{ duration: 0.5 }}
    />
  </div>
);

export default function Home() {
  const [isWelcomeScreen, setIsWelcomeScreen] = useState(true);
  const [loadingProgress, setLoadingProgress] = useState(0);
  const [terminalStage, setTerminalStage] = useState(0);
  const [isExploreHovered, setIsExploreHovered] = useState(false);
  const router = useRouter();

  const loadingMessages = [
    'npm install portfolio-dependencies',
    'Configuring development environment...',
    'Loading creative modules...',
    'Initializing React components...',
    'Starting development server...',
    'Portfolio compilation complete!'
  ];

  const terminalCommands = [
    { command: "initialize portfolio", output: "Initializing development environment..." },
    { command: "load profile --name 'Zakaria Akrabou'", output: "Full Stack Developer | Morocco" },
    { command: "get skills --category all", output: "Loading technical expertise..." },
    { command: "start portfolio --mode awesome", output: "Portfolio is ready! Welcome aboard! 🚀" }
  ];

  useEffect(() => {
    const progressInterval = setInterval(() => {
      setLoadingProgress(prev => {
        if (prev >= 100) {
          clearInterval(progressInterval);
          setTimeout(() => setIsWelcomeScreen(false), 500);
          return 100;
        }
        return prev + 2;
      });
    }, 50);

    return () => clearInterval(progressInterval);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      if (terminalStage < terminalCommands.length) {
        setTerminalStage(prev => prev + 1);
      }
    }, 2000);
    return () => clearInterval(interval);
  }, [terminalStage]);

  return (
    <div className="fixed inset-0 bg-primary text-white overflow-hidden">
      <AnimatePresence mode="wait">
        {isWelcomeScreen ? (
          <motion.div
            key="welcome"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.8 }}
            className="h-screen w-screen flex items-center justify-center bg-gradient-to-br from-primary-dark to-primary relative overflow-hidden"
          >
            {/* Animated background elements */}
            <div className="absolute inset-0">
              {Array.from({ length: 20 }).map((_, i) => (
                <FloatingParticle key={i} delay={i * 0.1} />
              ))}
              {Array.from({ length: 8 }).map((_, i) => (
                <CodeBlock key={i} delay={i * 0.2} />
              ))}
              <motion.div
                className="absolute inset-0"
                animate={{
                  background: [
                    'radial-gradient(circle at 50% 50%, rgba(16,185,129,0.1) 0%, transparent 50%)',
                    'radial-gradient(circle at 60% 60%, rgba(16,185,129,0.1) 0%, transparent 50%)',
                    'radial-gradient(circle at 40% 40%, rgba(16,185,129,0.1) 0%, transparent 50%)',
                    'radial-gradient(circle at 50% 50%, rgba(16,185,129,0.1) 0%, transparent 50%)',
                  ],
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  repeatType: "reverse"
                }}
              />
            </div>

            {/* Central loading content */}
            <div className="relative z-10 space-y-8 text-center">
              <motion.div
                animate={{ 
                  rotateY: [0, 360],
                  scale: [1, 1.1, 1]
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  repeatDelay: 1
                }}
                className="relative"
              >
                <motion.div
                  className="absolute inset-0 blur-2xl"
                  animate={{
                    opacity: [0.5, 0.8, 0.5],
                    scale: [0.8, 1.2, 0.8],
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                  }}
                >
                  <BiCodeAlt className="text-6xl sm:text-7xl md:text-8xl text-accent/50 mx-auto" />
                </motion.div>
                <BiCodeAlt className="text-6xl sm:text-7xl md:text-8xl text-accent mx-auto relative" />
              </motion.div>

              <div className="space-y-6">
                <LoadingMessage 
                  messages={loadingMessages} 
                  onComplete={() => setLoadingProgress(100)}
                />
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3 }}
                  className="flex flex-col items-center gap-2"
                >
                  <LoadingBar progress={loadingProgress} />
                  <div className="text-sm text-accent/60 font-mono">
                    {loadingProgress}% Complete
                  </div>
                </motion.div>
              </div>
            </div>

            {/* Binary rain effect */}
            <div className="absolute inset-0 pointer-events-none overflow-hidden">
              {Array.from({ length: 20 }).map((_, i) => (
                <motion.div
                  key={i}
                  className="absolute text-accent/10 font-mono text-sm"
                  initial={{ 
                    opacity: 0, 
                    y: -100,
                    x: Math.random() * window.innerWidth 
                  }}
                  animate={{
                    opacity: [0, 1, 0],
                    y: window.innerHeight + 100,
                  }}
                  transition={{
                    duration: 2 + Math.random() * 2,
                    repeat: Infinity,
                    delay: Math.random() * 2,
                    ease: "linear"
                  }}
                >
                  {Math.random() > 0.5 ? '1' : '0'}
                </motion.div>
              ))}
            </div>
          </motion.div>
        ) : (
          <motion.div
            key="content"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="h-screen w-screen relative overflow-hidden bg-gradient-to-br from-primary-dark to-primary p-4 sm:p-6 lg:p-8"
          >
            <div className="absolute inset-0 overflow-hidden">
              <div className="absolute w-full h-full bg-[radial-gradient(circle_at_50%_50%,rgba(16,185,129,0.1),transparent_50%)]" />
              <motion.div
                animate={{
                  backgroundPosition: ['0% 0%', '100% 100%'],
                }}
                transition={{
                  duration: 20,
                  repeat: Infinity,
                  repeatType: 'reverse',
                }}
                className="absolute inset-0 opacity-30"
                style={{
                  backgroundImage: 'url("data:image/svg+xml,%3Csvg width="60" height="60" viewBox="0 0 60 60" xmlns="http://www.w3.org/2000/svg"%3E%3Cg fill="none" fill-rule="evenodd"%3E%3Cg fill="%2310B981" fill-opacity="0.1"%3E%3Cpath d="M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z"/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")',
                }}
              />
              {Array.from({ length: 10 }).map((_, i) => (
                <motion.div
                  key={i}
                  className="absolute text-accent/5 font-mono text-sm"
                  initial={{ opacity: 0, x: -100, y: Math.random() * window.innerHeight }}
                  animate={{
                    opacity: [0, 1, 0],
                    x: [window.innerWidth + 100],
                    y: Math.random() * window.innerHeight
                  }}
                  transition={{
                    duration: 15,
                    delay: i * 2,
                    repeat: Infinity,
                    ease: "linear"
                  }}
                >
                  {'{code}'}
                </motion.div>
              ))}
            </div>

            <div className="relative z-10 max-w-7xl mx-auto grid lg:grid-cols-2 gap-8 h-full items-center">
              {/* Terminal Section - Hidden on mobile */}
              <motion.div
                initial={{ x: -100, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.8 }}
                className="bg-primary-dark/50 backdrop-blur-xl rounded-xl border border-accent/10 p-4 sm:p-6 relative group hidden lg:block"
              >
                <motion.div
                  className="absolute inset-0 bg-accent/5 rounded-xl"
                  animate={{
                    boxShadow: ['0 0 0px rgba(16,185,129,0.2)', '0 0 20px rgba(16,185,129,0.2)', '0 0 0px rgba(16,185,129,0.2)']
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    repeatType: "reverse"
                  }}
                />
                <div className="flex items-center gap-2 mb-4">
                  <div className="w-3 h-3 rounded-full bg-red-500/50" />
                  <div className="w-3 h-3 rounded-full bg-yellow-500/50" />
                  <div className="w-3 h-3 rounded-full bg-green-500/50" />
                  <div className="flex-1 text-center text-sm font-mono text-accent/50">terminal</div>
                </div>
                <div className="space-y-4">
                  {terminalCommands.map((cmd, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: index * 0.5 }}
                    >
                      <TerminalPrompt
                        command={cmd.command}
                        output={terminalStage >= index ? cmd.output : null}
                        isTyping={terminalStage === index}
                      />
                    </motion.div>
                  ))}
                </div>
              </motion.div>

              {/* Content Section */}
              <motion.div
                initial={{ x: 100, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="space-y-6 lg:ml-auto text-center lg:text-left"
              >
                <div className="space-y-4">
                  <motion.h1 
                    className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight"
                    animate={{ 
                      backgroundSize: ['100% 200%', '200% 100%', '100% 200%']
                    }}
                    transition={{
                      duration: 5,
                      repeat: Infinity,
                      repeatType: "reverse"
                    }}
                    style={{
                      backgroundImage: 'linear-gradient(45deg, #10B981, #34D399, #10B981)',
                      backgroundClip: 'text',
                      WebkitBackgroundClip: 'text',
                      color: 'transparent',
                      backgroundSize: '200% 200%'
                    }}
                  >
                    Zakaria Akrabou
                  </motion.h1>
                  <motion.p 
                    className="text-xl sm:text-2xl text-text-secondary font-light"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3 }}
                  >
                    Full Stack Developer
                  </motion.p>
                  <motion.div 
                    className="flex items-center gap-2 text-accent/60 justify-center lg:justify-start"
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.4 }}
                  >
                    <HiOutlineLocationMarker />
                    <span>Morocco</span>
                  </motion.div>
                </div>

                <motion.div 
                  className="flex flex-wrap gap-4 justify-center lg:justify-start"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5 }}
                >
                  {[
                    { icon: SiJavascript, color: "js", glowColor: "250, 204, 21" },
                    { icon: SiReact, color: "react", glowColor: "34, 211, 238" },
                    { icon: SiNodedotjs, color: "node", glowColor: "34, 197, 94" },
                    { icon: SiLaravel, color: "laravel", glowColor: "239, 68, 68" }
                  ].map((tech, index) => (
                    <motion.div
                      key={index}
                      whileHover={{ scale: 1.1 }}
                      className="tech-icon-container relative group cursor-pointer"
                      style={{ '--glow-color': tech.glowColor }}
                    >
                      <div 
                        className="tech-icon-glow"
                        style={{ '--glow-color': tech.glowColor }}
                      />
                      <tech.icon 
                        className={`relative w-8 h-8 sm:w-10 sm:h-10 tech-icon-${tech.color}`}
                        style={{ '--glow-color': tech.glowColor }}
                      />
                    </motion.div>
                  ))}
                </motion.div>

                <div className="flex flex-wrap gap-4 justify-center lg:justify-start">
                  <motion.div
                    className="relative"
                    onHoverStart={() => setIsExploreHovered(true)}
                    onHoverEnd={() => setIsExploreHovered(false)}
                  >
                    <motion.div
                      className="absolute inset-0 bg-accent rounded-lg blur-lg"
                      animate={{
                        opacity: isExploreHovered ? 0.6 : 0.2,
                        scale: isExploreHovered ? 1.1 : 1
                      }}
                      transition={{ duration: 0.2 }}
                    />
                    <motion.button
                      onClick={() => router.push('/about')}
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="relative flex items-center gap-2 px-6 sm:px-8 py-2 sm:py-3 bg-accent rounded-lg text-white font-medium group overflow-hidden"
                    >
                      <motion.div
                        className="absolute inset-0 bg-gradient-to-r from-accent via-accent/80 to-accent"
                        animate={{
                          x: isExploreHovered ? ['0%', '100%'] : '0%'
                        }}
                        transition={{
                          duration: 1,
                          repeat: Infinity
                        }}
                      />
                      <motion.div className="relative flex items-center gap-2">
                        <motion.div
                          animate={{
                            rotate: isExploreHovered ? 45 : 0
                          }}
                          transition={{ duration: 0.2 }}
                        >
                          <FaRocket className="w-4 h-4" />
                        </motion.div>
                        <span className="relative">Explore Portfolio</span>
                        <HiOutlineLightningBolt 
                          className={`w-4 h-4 transition-opacity duration-200 ${isExploreHovered ? 'opacity-100' : 'opacity-0'}`}
                        />
                      </motion.div>
                    </motion.button>
                  </motion.div>

                  <motion.div 
                    className="flex gap-3"
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.6 }}
                  >
                    {[
                      { icon: FaGithub, href: "https://github.com/ZakariaAkrabou" },
                      { icon: FaLinkedin, href: "https://www.linkedin.com/in/zakaria-akrabou/" }
                    ].map((social, index) => (
                      <motion.a
                        key={index}
                        href={social.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        whileHover={{ scale: 1.1, rotate: 10 }}
                        whileTap={{ scale: 0.95 }}
                        className="relative group"
                      >
                        <motion.div
                          className="absolute inset-0 bg-accent rounded-lg blur-md opacity-20 group-hover:opacity-40"
                          animate={{
                            scale: [1, 1.2, 1],
                          }}
                          transition={{
                            duration: 2,
                            repeat: Infinity,
                          }}
                        />
                        <div className="relative p-2 sm:p-3 bg-background-light/10 rounded-lg hover:bg-background-light/20 transition-colors">
                          <social.icon className="w-5 h-5 sm:w-6 sm:h-6" />
                        </div>
                      </motion.a>
                    ))}
                  </motion.div>
                </div>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
