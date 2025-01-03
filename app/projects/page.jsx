"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  FaGithub,
  FaExternalLinkAlt,
  FaCode,
  FaReact,
  FaNodeJs,
  FaLaravel,
  FaHtml5,
  FaJs,
} from "react-icons/fa";
import { SiTailwindcss, SiExpress, SiFramer, SiMongodb, SiBlade } from "react-icons/si";
import Image from "next/image";
import ProjectGallery from "../../components/ProjectGallery";
import AnimatedTitle from "../../components/AnimatedTitle";

const projects = [
  {
    title: "Travel & Tourism Website",
    description: "Dynamic travel platform with Express.js and React. Features tour booking, interactive maps, user authentication, and MongoDB integration. Responsive design ensures optimal experience across devices.",
    technologies: ["Express.js", "React", "MongoDB", "Tailwind CSS"],
    github: "https://github.com/ZakariaAkrabou/GuideTour-final",
    category: "FullStack",
    thumbnail: "/projects/travel/home.png",
    images: [
      "/projects/travel/home.png",
      "/projects/travel/camping.png",
      "/projects/travel/login.png",
      "/projects/travel/registre.png",
    ],
  },
  {
    title: "Food Reservation Website",
    description: "Modern restaurant booking system built with Laravel. Implements real-time table management, menu customization, and automated email notifications. Features an intuitive admin dashboard.",
    technologies: ["Laravel", "Blade", "Tailwind CSS"],
    github: "https://github.com/ZakariaAkrabou/food-reservation",
    category: "FullStack",
    thumbnail: "/projects/food.png",
    images: ["/projects/food.png"],
  },
  {
    title: "Movies Information",
    description: "Comprehensive movie database app using Node.js. Provides detailed film information, user ratings, and reviews. Clean UI with server-side rendering and responsive design.",
    technologies: ["Node.js", "EJS", "Tailwind CSS", "HTML"],
    github: "https://github.com/ZakariaAkrabou/MovieInfo",
    category: "FullStack",
    thumbnail: "/projects/movie.png",
    images: ["/projects/movie.png"],
  },
  {
    title: "Ecommerce Website",
    description: "Feature-rich ecommerce platform with Laravel. Includes product management, shopping cart, and secure payments. Advanced admin dashboard for inventory and order tracking.",
    technologies: ["Laravel", "Blade", "JavaScript", "Tailwind CSS"],
    github: "https://github.com/ZakariaAkrabou/ecommerce",
    category: "FullStack",
    thumbnail: "/projects/ecommerce/home.png",
    images: [
      "/projects/ecommerce/home.png",
      "/projects/ecommerce/dash.png",
      "/projects/ecommerce/orders.png",
    ],
  },
  {
    title: "Survey Management System",
    description: "Advanced survey platform for creating and analyzing surveys. Features customizable templates, real-time analytics, and detailed response tracking. Intuitive interface for data visualization.",
    technologies: ["Laravel", "Blade", "JavaScript", "Tailwind CSS"],
    github: "https://github.com/ZakariaAkrabou/survey-appe",
    category: "FullStack",
    thumbnail: "/projects/survey.png",
    images: ["/projects/survey.png"],
  },
  {
    title: "Image Generator AI",
    description: "AI-powered image generation tool using advanced ML models. Creates unique images from text descriptions. Features creative filters and customization options.",
    technologies: ["Laravel", "Blade", "JavaScript", "Tailwind CSS"],
    github: "https://github.com/ZakariaAkrabou/imagegenerate",
    category: "FullStack",
    thumbnail: "/projects/ai.png",
    images: ["/projects/ai.png"],
  },
  {
    title: "Photography Website",
    description: "Modern photography portfolio with advanced gallery features. Implements image optimization, lazy loading, and smooth transitions. Responsive design with optimal performance.",
    technologies: ["Laravel", "Blade", "JavaScript", "Tailwind CSS"],
    github: "https://github.com/ZakariaAkrabou/imagegenerate",
    category: "FullStack",
    thumbnail: "/projects/photograph.png",
    images: ["/projects/photograph.png"],
  },
  {
    title: "Landing Page",
    description: "Modern landing page optimized for conversions. Features smooth animations, interactive elements, and responsive design. Built with performance and user experience in mind.",
    technologies: ["React", "Tailwind CSS","Framer Motion"],
    github: "https://github.com/ZakariaAkrabou/Arkx-landingPage",
    category: "FullStack",
    thumbnail: "/projects/landing.png",
    images: ["/projects/landing.png"],
  },
];

// Technology icons configuration
const techConfig = {
  React: { icon: FaReact, color: "#61DAFB" },
  "Express.js": { icon: SiExpress, color: "#FFFFFF" },
  Laravel: { icon: FaLaravel, color: "#FF2D20" },
  Blade: { icon: SiBlade, color: "#F05340" },
  JavaScript: { icon: FaJs, color: "#F7DF1E" },
  HTML: { icon: FaHtml5, color: "#E34F26" },
  "Tailwind CSS": { icon: SiTailwindcss, color: "#38B2AC" },
  "Framer Motion": { icon: SiFramer, color: "#0055FF" },
  EJS: { icon: FaHtml5, color: "#90A93A" },
  "Node.js": { icon: FaNodeJs, color: "#339933" },
  MongoDB: { icon: SiMongodb, color: "#47A248" }
};

const AnimatedText = ({ text }) => {
  const letters = Array.from(text);
  const container = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.03, delayChildren: 0.01 },
    },
  };
  const child = {
    visible: {
      opacity: 1,
      y: 0,
      transition: { type: "spring", damping: 12, stiffness: 200 },
    },
    hidden: { opacity: 0, y: 20 },
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
        stiffness: 100,
      }}
      whileHover={{
        y: -5,
        transition: { duration: 0.3 },
      }}
      className="group relative overflow-hidden rounded-2xl bg-gradient-to-br from-background-dark/80 to-background-dark border border-accent/5 hover:border-accent/20 transition-all duration-300 flex flex-col h-full"
    >
      {/* Image Container */}
      <div className="relative aspect-video overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-t from-background-dark to-transparent z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        <Image
          src={project.thumbnail}
          alt={project.title}
          width={600}
          height={400}
          className="object-cover w-full h-full transform group-hover:scale-110 transition-transform duration-500"
        />
        {/* Overlay Actions */}
        <div 
          className="absolute inset-0 z-20 opacity-0 group-hover:opacity-100 transition-all duration-300 flex items-center justify-center gap-4 bg-black/60 backdrop-blur-sm"
        >
          <motion.a
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            className="p-3 rounded-full bg-accent/20 hover:bg-accent/30 transition-colors"
          >
            <FaGithub className="w-6 h-6" />
          </motion.a>
          <motion.button
            onClick={() => onOpenGallery(project)}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            className="p-3 rounded-full bg-accent/20 hover:bg-accent/30 transition-colors"
          >
            <FaExternalLinkAlt className="w-5 h-5" />
          </motion.button>
        </div>
      </div>

      {/* Content Container */}
      <div className="p-6 flex flex-col flex-grow">
        {/* Title with Gradient */}
        <h3 className="text-xl font-bold mb-3">
          <span className="bg-gradient-to-r from-accent via-accent/80 to-accent bg-clip-text text-transparent">
            {project.title}
          </span>
        </h3>

        {/* Description */}
        <p className="text-text-secondary/90 text-sm leading-relaxed mb-6 flex-grow">
          {project.description}
        </p>

        {/* Technologies with New Style */}
        <div className="flex flex-wrap gap-2 pt-4 mt-auto border-t border-accent/10">
          {project.technologies.map((tech, i) => {
            const techInfo = techConfig[tech] || {
              icon: FaCode,
              color: "#666",
            };
            return (
              <motion.div
                key={i}
                className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-background-light/10 backdrop-blur-sm border border-accent/5 hover:border-accent/20"
                style={{
                  color: techInfo.color,
                }}
                whileHover={{
                  scale: 1.05,
                  backgroundColor: "rgba(255, 255, 255, 0.05)",
                }}
                transition={{
                  duration: 0.2,
                }}
              >
                {techInfo.icon && React.createElement(techInfo.icon, { className: "w-3.5 h-3.5 flex-shrink-0" })}
                <span className="text-xs font-medium">{tech}</span>
              </motion.div>
            );
          })}
        </div>
      </div>
    </motion.div>
  );
};

const ProjectsPage = () => {
  const [selectedProject, setSelectedProject] = useState(null);
  const [filterCategory, setFilterCategory] = useState("All");

  const filteredProjects =
    filterCategory === "All"
      ? projects
      : projects.filter((project) => project.category === filterCategory);

  const handleCloseGallery = () => {
    setSelectedProject(null);
  };

  return (
    <div className="min-h-screen w-full py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto space-y-12">
        <motion.div
          className="text-center space-y-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <AnimatedTitle
            title="My Projects"
            subtitle="Here are some of my favorite projects that showcase my skills and passion for web development."
          />
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProjects.map((project, index) => (
            <ProjectCard
              key={project.title}
              project={project}
              index={index}
              onOpenGallery={setSelectedProject}
            />
          ))}
        </div>
      </div>

      <ProjectGallery
        images={selectedProject?.images || []}
        isOpen={!!selectedProject}
        onClose={handleCloseGallery}
        title={selectedProject?.title}
      />
    </div>
  );
};

export default ProjectsPage;
