'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';

const Logo = () => {
  return (
    <Link href="/" className="relative group cursor-none">
      <motion.div
        className="flex items-center gap-2"
        whileHover={{ scale: 1.05 }}
        transition={{ type: "spring", stiffness: 400, damping: 17 }}
      >
        {/* Logo Symbol */}
        <motion.div 
          className="relative w-12 h-12 bg-gradient-to-br from-accent to-accent-hover rounded-xl overflow-hidden border-2 border-accent shadow-glow transform rotate-3"
          whileHover={{ 
            rotate: 180,
            scale: 1.1,
          }}
          transition={{ type: "spring", stiffness: 200, damping: 10 }}
        >
          <motion.div 
            className="absolute inset-1 bg-primary rounded-lg flex items-center justify-center text-2xl font-black text-accent"
          >
            Z
          </motion.div>
        </motion.div>

        {/* Name */}
        <div className="flex flex-col -space-y-1">
          <motion.span 
            className="text-2xl font-black tracking-wider text-white"
            whileHover={{ scale: 1.05 }}
          >
            ZAKARIA<span className="text-accent">.</span>
          </motion.span>
          <motion.span 
            className="text-sm font-medium text-accent tracking-[0.2em]"
            initial={{ opacity: 0, y: 5 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
          >
            AKRABOU
          </motion.span>
        </div>

        {/* Hover Effect */}
        <motion.div
          className="absolute -inset-2 bg-accent/20 rounded-xl blur-xl opacity-0 group-hover:opacity-100 transition-all duration-300"
          aria-hidden="true"
        />
      </motion.div>
    </Link>
  );
};

export default Logo;
