'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';
import Image from 'next/image';
import { IoClose, IoArrowForward, IoArrowBack } from 'react-icons/io5';

const ProjectGallery = ({ images, isOpen, onClose, title }) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  if (!isOpen || !images.length) return null;

  const nextImage = () => {
    setCurrentImageIndex((prev) => (prev + 1) % images.length);
  };

  const previousImage = () => {
    setCurrentImageIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 backdrop-blur-md p-8"
      onClick={onClose}
    >
      <motion.div
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: 0.9, opacity: 0 }}
        transition={{ type: "spring", damping: 25 }}
        className="relative w-full max-w-4xl mx-auto"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close button */}
        <motion.button
          onClick={onClose}
          className="absolute -top-12 right-0 z-50 p-2 rounded-full bg-accent/10 text-white hover:bg-accent/20 transition-all"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
        >
          <IoClose size={24} />
        </motion.button>

        {/* Title */}
        <motion.h3
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          className="text-2xl font-bold text-white mb-6 text-center"
        >
          {title}
        </motion.h3>

        {/* Main image container */}
        <div className="relative bg-background-dark rounded-xl overflow-hidden border border-accent/10">
          <div className="relative aspect-[16/9] w-full">
            <Image
              src={images[currentImageIndex]}
              alt={`Project image ${currentImageIndex + 1}`}
              fill
              className="object-contain"
              priority
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 80vw, 70vw"
            />
          </div>
          
          {/* Navigation buttons */}
          {images.length > 1 && (
            <>
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  previousImage();
                }}
                className="absolute left-2 top-1/2 -translate-y-1/2 p-3 rounded-full bg-black/50 hover:bg-black/70 text-white transition-all group"
              >
                <IoArrowBack size={24} className="group-hover:-translate-x-1 transition-transform" />
              </button>
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  nextImage();
                }}
                className="absolute right-2 top-1/2 -translate-y-1/2 p-3 rounded-full bg-black/50 hover:bg-black/70 text-white transition-all group"
              >
                <IoArrowForward size={24} className="group-hover:translate-x-1 transition-transform" />
              </button>
            </>
          )}
        </div>

        {/* Image counter */}
        {images.length > 1 && (
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="absolute -top-12 left-0 px-4 py-2 rounded-full bg-accent/10 text-white border border-accent/20"
          >
            {currentImageIndex + 1} / {images.length}
          </motion.div>
        )}

        {/* Thumbnails */}
        {images.length > 1 && (
          <div className="flex gap-2 mt-4 overflow-x-auto pb-2 px-1 justify-center">
            {images.map((image, index) => (
              <motion.button
                key={index}
                onClick={() => setCurrentImageIndex(index)}
                className={`relative flex-shrink-0 w-20 h-12 rounded-lg overflow-hidden border-2 transition-all ${
                  currentImageIndex === index ? 'border-accent' : 'border-transparent'
                }`}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Image
                  src={image}
                  alt={`Thumbnail ${index + 1}`}
                  fill
                  className="object-cover"
                  sizes="80px"
                />
              </motion.button>
            ))}
          </div>
        )}
      </motion.div>
    </motion.div>
  );
};

export default ProjectGallery;
