'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { useEffect } from 'react';
import { IoCheckmarkCircle } from 'react-icons/io5';

const Toast = ({ message, isVisible, onClose }) => {
  useEffect(() => {
    if (isVisible) {
      const timer = setTimeout(() => {
        onClose();
      }, 3000);

      return () => clearTimeout(timer);
    }
  }, [isVisible, onClose]);

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 0, y: 50, scale: 0.3 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, scale: 0.5, transition: { duration: 0.2 } }}
          className="fixed bottom-8 right-8 z-50"
        >
          <div className="relative">
            <div className="absolute -inset-1 bg-gradient-to-r from-accent via-secondary to-accent rounded-lg blur opacity-30" />
            <div className="relative px-6 py-4 bg-background-dark/90 backdrop-blur-xl rounded-lg border border-accent/10 shadow-xl">
              <div className="flex items-center gap-3">
                <motion.div
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ delay: 0.2, type: "spring" }}
                >
                  <IoCheckmarkCircle className="w-6 h-6 text-accent" />
                </motion.div>
                <motion.p
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.3 }}
                  className="text-text-primary font-medium"
                >
                  {message}
                </motion.p>
              </div>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default Toast;
