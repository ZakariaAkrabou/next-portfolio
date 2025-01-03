'use client';

import { motion } from 'framer-motion';

const AnimatedTitle = ({ title, subtitle }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.8 }}
      className="text-center mb-12"
    >
      <div className="title-container mb-8">
        <div className="title-accent" />
        <motion.h1 
          className="page-title" 
          data-text={title}
          initial={{ backgroundPosition: "200% 0" }}
          whileInView={{ backgroundPosition: "0% 0" }}
          viewport={{ once: true }}
          transition={{ duration: 1.2 }}
        >
          {title}
        </motion.h1>
      </div>
      {subtitle && (
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-text-secondary max-w-2xl mx-auto"
        >
          {subtitle}
        </motion.p>
      )}
    </motion.div>
  );
};

export default AnimatedTitle;
