'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';
import Image from 'next/image';
import { IoClose, IoArrowForward, IoArrowBack } from 'react-icons/io5';

const ProjectGallery = ({ images, isOpen, onClose, title }) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const nextImage = () => {
    setCurrentImageIndex((prev) => (prev + 1) % images.length);
  };

  const previousImage = () => {
    setCurrentImageIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  if (!isOpen) return null;

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 backdrop-blur-md cursor-none"
        onClick={onClose}
      >
        <motion.div
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          exit={{ scale: 0.9, opacity: 0 }}
          transition={{ type: "spring", damping: 25 }}
          className="relative w-full max-w-6xl p-4"
          onClick={(e) => e.stopPropagation()}
        >
          {/* Close button */}
          <motion.button
            onClick={onClose}
            className="absolute top-6 right-6 z-50 p-3 rounded-full bg-accent/10 text-white hover:bg-accent/20 transition-all cursor-none"
            whileHover={{ scale: 1.1, backgroundColor: 'rgba(255, 51, 102, 0.3)' }}
            whileTap={{ scale: 0.9 }}
          >
            <IoClose size={24} />
          </motion.button>

          {/* Title */}
          <motion.h3
            initial={{ y: -20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-text-primary via-accent to-text-primary mb-6 text-center"
          >
            {title}
          </motion.h3>

          {/* Main image container */}
          <div className="relative aspect-video bg-background-dark rounded-xl overflow-hidden border border-accent/10">
            <Image
              src={images[currentImageIndex]}
              alt={`Project image ${currentImageIndex + 1}`}
              fill
              className="object-contain"
              priority
            />
            
            {/* Navigation buttons */}
            {images.length > 1 && (
              <>
                <motion.button
                  onClick={previousImage}
                  className="absolute left-4 top-1/2 -translate-y-1/2 p-3 rounded-full bg-accent/10 text-white hover:bg-accent/20 transition-all cursor-none"
                  whileHover={{ scale: 1.1, x: -5 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <IoArrowBack size={24} />
                </motion.button>
                <motion.button
                  onClick={nextImage}
                  className="absolute right-4 top-1/2 -translate-y-1/2 p-3 rounded-full bg-accent/10 text-white hover:bg-accent/20 transition-all cursor-none"
                  whileHover={{ scale: 1.1, x: 5 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <IoArrowForward size={24} />
                </motion.button>
              </>
            )}
          </div>

          {/* Image counter */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="absolute top-6 left-6 px-4 py-2 rounded-full bg-accent/10 text-white border border-accent/20"
          >
            {currentImageIndex + 1} / {images.length}
          </motion.div>

          {/* Thumbnails */}
          <div className="flex gap-3 mt-6 overflow-x-auto pb-2 px-1 scrollbar-thin scrollbar-thumb-accent/20 scrollbar-track-background-dark">
            {images.map((image, index) => (
              <motion.button
                key={index}
                onClick={() => setCurrentImageIndex(index)}
                className={`relative w-24 h-16 flex-shrink-0 rounded-lg overflow-hidden border-2 transition-all cursor-none ${
                  index === currentImageIndex ? 'border-accent shadow-glow' : 'border-transparent hover:border-accent/50'
                }`}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Image
                  src={image}
                  alt={`Thumbnail ${index + 1}`}
                  fill
                  className="object-cover"
                />
                <div className={`absolute inset-0 bg-accent/10 transition-opacity ${
                  index === currentImageIndex ? 'opacity-0' : 'opacity-50 hover:opacity-0'
                }`} />
              </motion.button>
            ))}
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
};

export default ProjectGallery;
