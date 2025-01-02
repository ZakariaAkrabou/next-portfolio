"use client";
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  FaGithub, 
  FaExternalLinkAlt, 
  FaCode, 
  FaReact, 
  FaNodeJs, 
  FaLaravel, 
  FaHtml5, 
  FaJs 
} from 'react-icons/fa';
import { 
  SiTailwindcss, 
  SiExpress, 
  SiFramer, 
  SiBlade 
} from 'react-icons/si';
import Image from 'next/image';
import CustomCursor from '../../components/CustomCursor';
import ProjectGallery from '../../components/ProjectGallery';

const projects = [
  {
    title: "Travel & Tourism Website",
    description: "A dynamic travel platform built with Express.js and React, offering seamless booking experiences for tours and camping adventures. Features interactive maps, user authentication, and responsive design for optimal user experience.",
    technologies: ["Express.js", "React", "Tailwind CSS", "Framer Motion"],
    github: "https://github.com/ZakariaAkrabou/GuideTour-final",
    category: "FullStack",
    thumbnail: "/projects/travel/home.png",
    images: [
      "/projects/travel/home.png",
      "/projects/travel/camping.png",
      "/projects/travel/login.png",
      "/projects/travel/registre.png"
    ]
  },
  {
    title: "Food Reservation Website",
    description: "An elegant restaurant reservation system built with Laravel, featuring real-time table booking, menu management, and automated confirmation emails. Includes an intuitive admin dashboard for restaurant management.",
    technologies: ["Laravel", "Blade", "Tailwind CSS"],
    github: "https://github.com/ZakariaAkrabou/food-reservation",
    category: "FullStack",
    thumbnail: "/projects/food.png",
    images: [
      "/projects/food.png"
    ]
  },
  {
    title: "Movies Information",
    description: "A comprehensive movie database application powered by Node.js, providing detailed information about films, ratings, and reviews. Features a clean UI with server-side rendering using EJS templates.",
    technologies: ["Node.js", "EJS", "Tailwind CSS", "HTML"],
    github: "https://github.com/ZakariaAkrabou/MovieInfo",
    category: "FullStack",
    thumbnail: "/projects/movie.png",
    images: [
      "/projects/movie.png"
    ]
  },
  {
    title: "Ecommerce Website",
    description: "A full-featured ecommerce platform built with Laravel, offering product management, shopping cart functionality, and secure payment integration. Includes an advanced admin dashboard for inventory and order management.",
    technologies: ["Laravel", "Blade", "JavaScript", "Tailwind CSS"],
    github: "https://github.com/ZakariaAkrabou/ecommerce",
    category: "FullStack",
    thumbnail: "/projects/ecommerce/home.png",
    images: [
      "/projects/ecommerce/home.png",
      "/projects/ecommerce/dash.png",
      "/projects/ecommerce/orders.png"
    ]
  },
  {
    title: "Survey Management System",
    description: "A sophisticated survey platform enabling users to create, distribute, and analyze surveys with real-time analytics. Features customizable templates and detailed response tracking.",
    technologies: ["Laravel", "Blade", "JavaScript", "Tailwind CSS"],
    github: "https://github.com/ZakariaAkrabou/survey-appe",
    category: "FullStack",
    thumbnail: "/projects/survey.png",
    images: [
      "/projects/survey.png"
    ]
  },
  {
    title: "Image Generator AI",
    description: "An innovative AI-powered image generation tool that creates unique images based on text descriptions. Utilizes advanced machine learning models for creative and accurate image synthesis.",
    technologies: ["Laravel", "Blade", "JavaScript", "Tailwind CSS"],
    github: "https://github.com/ZakariaAkrabou/imagegenerate",
    category: "FullStack",
    thumbnail: "/projects/ai.png",
    images: [
      "/projects/ai.png"
    ]
  },
  {
    title: "Photography Website",
    description: "A visually stunning photography portfolio showcasing high-quality images with advanced gallery features. Includes image optimization and lazy loading for optimal performance.",
    technologies: ["Laravel", "Blade", "JavaScript", "Tailwind CSS"],
    github: "https://github.com/ZakariaAkrabou/imagegenerate",
    category: "FullStack",
    thumbnail: "/projects/photograph.png",
    images: [
      "/projects/photograph.png"
    ]
  },
  {
    title: "Landing Page",
    description: "A modern and engaging landing page with smooth animations and interactive elements. Optimized for conversion with responsive design and performance optimization.",
    technologies: ["Laravel", "Blade", "JavaScript", "Tailwind CSS"],
    github: "https://github.com/ZakariaAkrabou/Arkx-landingPage",
    category: "FullStack",
    thumbnail: "/projects/landing.png",
    images: [
      "/projects/landing.png"
    ]
  }
];

// Technology icons configuration
const techConfig = {
  'React': { icon: FaReact, color: '#61DAFB' },
  'Express.js': { icon: SiExpress, color: '#000000' },
  'Laravel': { icon: FaLaravel, color: '#FF2D20' },
  'Blade': { icon: SiBlade, color: '#F05340' },
  'JavaScript': { icon: FaJs, color: '#F7DF1E' },
  'HTML': { icon: FaHtml5, color: '#E34F26' },
  'Tailwind CSS': { icon: SiTailwindcss, color: '#38B2AC' },
  'Framer Motion': { icon: SiFramer, color: '#0055FF' },
  'EJS': { icon: FaHtml5, color: '#90A93A' },
  'Node.js': { icon: FaNodeJs, color: '#339933' }
};

const AnimatedText = ({ text }) => {
  const letters = Array.from(text);
  const container = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.03, delayChildren: 0.01 }
    }
  };
  const child = {
    visible: {
      opacity: 1,
      y: 0,
      transition: { type: "spring", damping: 12, stiffness: 200 }
    },
    hidden: { opacity: 0, y: 20 }
  };

  return (
    <motion.span
      style={{ display: "inline-block" }}
      variants={container}
      initial="hidden"
      animate="visible"
    >
      {letters.map((letter, index) => (
        <motion.span
          key={index}
          variants={child}
          style={{ display: "inline-block" }}
          whileHover={{ scale: 1.2, color: "#00ff99" }}
          className="text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-300"
        >
          {letter === " " ? "\u00A0" : letter}
        </motion.span>
      ))}
    </motion.span>
  );
};

const ProjectCard = ({ project, index, onOpenGallery }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ 
        duration: 0.5, 
        delay: index * 0.1,
        type: "spring",
        stiffness: 100
      }}
      whileHover={{ 
        y: -10,
        transition: { duration: 0.3 }
      }}
      className="bg-background-dark rounded-xl overflow-hidden border border-accent/10 hover:border-accent/30 transition-colors"
    >
      <div className="relative group aspect-video overflow-hidden">
        <Image
          src={project.thumbnail}
          alt={project.title}
          width={600}
          height={400}
          className="object-cover w-full h-full transform group-hover:scale-110 transition-transform duration-500"
        />
        <div className="absolute inset-0 bg-accent/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-4">
          <motion.a
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            className="bg-white p-3 rounded-full text-accent"
          >
            <FaGithub className="w-6 h-6" />
          </motion.a>
          <motion.button
            onClick={() => onOpenGallery(project)}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            className="bg-white p-3 rounded-full text-accent"
          >
            <FaExternalLinkAlt className="w-6 h-6" />
          </motion.button>
        </div>
      </div>
      <div className="p-6">
        <h3 className="text-xl font-semibold mb-2 text-accent">{project.title}</h3>
        <p className="text-text-secondary mb-4 text-sm">{project.description}</p>
        <div className="flex flex-wrap gap-2">
          {project.technologies.map((tech) => {
            const techInfo = techConfig[tech] || { icon: FaCode, color: '#666' };
            const IconComponent = techInfo.icon || FaCode;
            
            return (
              <motion.span
                key={tech}
                className="px-3 py-1 text-xs rounded-full bg-accent/10 text-accent flex items-center gap-1.5 group transition-all duration-300 hover:bg-opacity-20"
                style={{
                  '--hover-color': techInfo.color
                }}
                whileHover={{
                  scale: 1.05,
                  color: techInfo.color,
                }}
              >
                <IconComponent className="w-3.5 h-3.5" />
                {tech}
              </motion.span>
            );
          })}
        </div>
      </div>
    </motion.div>
  );
};

const ProjectsPage = () => {
  const [selectedProject, setSelectedProject] = useState(null);

  const handleOpenGallery = (project) => {
    setSelectedProject(project);
  };

  const handleCloseGallery = () => {
    setSelectedProject(null);
  };

  return (
    <div className="container mx-auto px-4 py-12">
      <CustomCursor />
      
      <ProjectGallery
        images={selectedProject?.images || []}
        isOpen={!!selectedProject}
        onClose={handleCloseGallery}
        title={selectedProject?.title}
      />
      
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="max-w-7xl mx-auto relative z-10"
      >
        <div className="text-center mb-16">
          <motion.h1
            initial={{ y: -20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="text-4xl md:text-5xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-text-primary via-accent to-text-primary"
          >
            My Projects
          </motion.h1>
          <motion.p
            initial={{ y: -20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="text-text-secondary max-w-2xl mx-auto"
          >
            Explore my portfolio of web development projects, showcasing a diverse range of skills and technologies.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <ProjectCard
              key={project.title}
              project={project}
              index={index}
              onOpenGallery={handleOpenGallery}
            />
          ))}
        </div>
      </motion.div>
    </div>
  );
};

export default ProjectsPage;
