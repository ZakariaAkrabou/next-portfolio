'use client';

import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import Image from 'next/image';
import { skillCategories } from '../../data/skills';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { HiOutlineArrowNarrowRight } from 'react-icons/hi';
import AOS from 'aos';
import 'aos/dist/aos.css';
import AnimatedTitle from '../../components/AnimatedTitle';

const AboutPage = () => {
    const [ref, inView] = useInView({
        triggerOnce: true,
        threshold: 0.1,
    });

    useEffect(() => {
        AOS.init({
            duration: 1000,
            once: true,
            offset: 100,
            easing: 'ease-out-cubic',
            delay: 50
        });
    }, []);

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.2,
            },
        },
    };

    const itemVariants = {
        hidden: { y: 20, opacity: 0 },
        visible: {
            y: 0,
            opacity: 1,
            transition: {
                duration: 0.5,
                ease: 'easeOut',
            },
        },
    };

    const cardVariants = {
        hidden: { scale: 0.9, opacity: 0 },
        visible: { 
            scale: 1, 
            opacity: 1,
            transition: {
                type: "spring",
                stiffness: 100,
                damping: 10
            }
        },
        hover: { 
            scale: 1.02,
            transition: {
                type: "spring",
                stiffness: 400,
                damping: 10
            }
        }
    };

    return (
        <div className="bg-primary text-white">
            <div className="max-w-7xl mx-auto space-y-8 sm:space-y-12 md:space-y-20">
                {/* Profile Section */}
                <div 
                    className="relative"
                    data-aos="fade-up"
                    data-aos-duration="1000"
                >
                    <div className="absolute -inset-1 bg-gradient-to-r from-accent via-secondary to-accent rounded-2xl blur opacity-30" />
                    <div className="relative bg-background-dark/90 backdrop-blur-xl rounded-2xl p-4 sm:p-6 md:p-8 lg:p-12 border border-accent/10">
                        <div className="grid md:grid-cols-2 gap-6 md:gap-8 lg:gap-12 items-center">
                            <motion.div
                                variants={cardVariants}
                                whileHover="hover"
                                className="relative group max-w-sm mx-auto w-full"
                                data-aos="fade-right"
                                data-aos-delay="200"
                            >
                                <div className="absolute -inset-1 bg-gradient-to-r from-accent via-secondary to-accent rounded-2xl blur opacity-30 group-hover:opacity-50 transition-opacity" />
                                <div className="relative aspect-square overflow-hidden rounded-2xl">
                                    <Image
                                        src="/profile.jpg"
                                        alt="Zakaria Akrabou"
                                        fill
                                        className="object-cover"
                                        priority
                                    />
                                </div>
                            </motion.div>

                            <div 
                                className="space-y-4 sm:space-y-6" 
                                data-aos="fade-left"
                                data-aos-delay="400"
                            >
                                <div>
                                    <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-2 sm:mb-4 bg-clip-text text-transparent bg-gradient-to-r from-text-primary via-accent to-text-primary">
                                        Zakaria Akrabou
                                    </h1>
                                    <p className="text-lg sm:text-xl text-text-secondary font-light">
                                        Backend-Focused Full Stack Developer
                                    </p>
                                </div>
                                <p className="text-sm sm:text-base text-text-secondary leading-relaxed">
                                    I'm a passionate full-stack developer with a strong focus on backend development.
                                    I love creating efficient, scalable solutions and exploring new technologies.
                                    When I'm not coding, you can find me learning about new tech trends or contributing to open-source projects.
                                </p>
                                <div className="flex flex-wrap gap-3 sm:gap-4">
                                    <motion.a
                                        href="/cv.pdf"
                                        download
                                        whileHover={{ scale: 1.1 }}
                                        whileTap={{ scale: 0.95 }}
                                        className="flex items-center gap-2 px-4 py-2 bg-accent text-white rounded-lg hover:bg-accent/90 transition-colors"
                                    >
                                        <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                                        </svg>
                                        Download CV
                                    </motion.a>
                                    <motion.a
                                        href="https://github.com/ZakariaAkrabou"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        whileHover={{ scale: 1.1 }}
                                        whileTap={{ scale: 0.95 }}
                                        className="p-2 sm:p-3 bg-background-light/10 rounded-lg hover:bg-background-light/20 transition-colors"
                                    >
                                        <FaGithub className="w-5 h-5 sm:w-6 sm:h-6" />
                                    </motion.a>
                                    <motion.a
                                        href="https://www.linkedin.com/in/zakaria-akrabou/"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        whileHover={{ scale: 1.1 }}
                                        whileTap={{ scale: 0.95 }}
                                        className="p-2 sm:p-3 bg-background-light/10 rounded-lg hover:bg-background-light/20 transition-colors"
                                    >
                                        <FaLinkedin className="w-5 h-5 sm:w-6 sm:h-6" />
                                    </motion.a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* About Page Title */}
                <AnimatedTitle 
                    title="About Me"
                    subtitle="Get to know more about my journey, skills, and what drives me as a developer."
                />

                {/* Skills Section */}
                <div 
                    className="space-y-4 sm:space-y-6 md:space-y-8"
                    data-aos="fade-up"
                    data-aos-duration="1000"
                >
                    <h2 className="text-2xl sm:text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-text-primary via-accent to-text-primary">
                        Technical Skills
                    </h2>
                    <div className="grid gap-4 sm:gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
                        {skillCategories.map((category, index) => (
                            <motion.div
                                key={category.title}
                                variants={cardVariants}
                                whileHover="hover"
                                initial="hidden"
                                whileInView="visible"
                                viewport={{ once: true }}
                                className="relative group h-full"
                                data-aos="zoom-in-up"
                                data-aos-delay={index * 100}
                            >
                                <div className="absolute -inset-1 bg-gradient-to-r from-accent via-secondary to-accent rounded-2xl blur opacity-30 group-hover:opacity-50 transition-opacity" />
                                <div className="relative h-full bg-background-dark/90 backdrop-blur-xl rounded-2xl p-6 border border-accent/10 flex flex-col">
                                    <div className="flex items-center gap-3 mb-4">
                                        <span className="p-2 rounded-lg bg-accent/10">
                                            {category.icon && <category.icon className="w-5 h-5 text-accent" />}
                                        </span>
                                        <h3 className="text-xl font-semibold bg-clip-text text-transparent bg-gradient-to-r from-text-primary to-accent">
                                            {category.title}
                                        </h3>
                                    </div>
                                    <div className="grid grid-cols-2 gap-4 flex-1">
                                        {category.skills.map((skill, skillIndex) => (
                                            <motion.div
                                                key={skill.name}
                                                whileHover={{ scale: 1.05 }}
                                                className="flex items-center gap-3 p-2 rounded-lg hover:bg-accent/5 transition-colors"
                                                data-aos="fade-up"
                                                data-aos-delay={skillIndex * 50 + (index * 100)}
                                            >
                                                <span className="p-1.5 rounded-md bg-background-light/10" style={{ color: skill.color }}>
                                                    <skill.icon className="w-4 h-4" />
                                                </span>
                                                <span className="text-sm font-medium text-text-secondary group-hover:text-text-primary transition-colors">
                                                    {skill.name}
                                                </span>
                                            </motion.div>
                                        ))}
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>

                {/* What I Do Section */}
                <div 
                    className="space-y-4 sm:space-y-6 md:space-y-8"
                    data-aos="fade-up"
                    data-aos-duration="1000"
                >
                    <h2 className="text-2xl sm:text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-text-primary via-accent to-text-primary">
                        What I Do
                    </h2>
                    <div className="grid gap-4 sm:gap-6 grid-cols-1 md:grid-cols-2">
                        <motion.div
                            variants={cardVariants}
                            whileHover="hover"
                            className="relative group"
                            data-aos="fade-right"
                            data-aos-delay="200"
                        >
                            <div className="absolute -inset-1 bg-gradient-to-r from-accent via-secondary to-accent rounded-2xl blur opacity-30 group-hover:opacity-50 transition-opacity" />
                            <div className="relative bg-background-dark/90 backdrop-blur-xl rounded-2xl p-6 border border-accent/10 h-full">
                                <div className="flex items-center gap-4 mb-4">
                                    <span className="p-3 rounded-lg bg-accent/10 text-accent">
                                        <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 12h14M5 12a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v4a2 2 0 01-2 2M5 12a2 2 0 00-2 2v4a2 2 0 002 2h14a2 2 0 002-2v-4a2 2 0 00-2-2m-2-4h.01M17 16h.01" />
                                        </svg>
                                    </span>
                                    <h3 className="text-xl font-semibold text-accent">Backend Development</h3>
                                </div>
                                <p className="text-text-secondary leading-relaxed">
                                    Specializing in building robust server-side applications, APIs, and database architectures. 
                                    Experienced in creating scalable solutions using modern backend technologies and best practices.
                                </p>
                            </div>
                        </motion.div>

                        <motion.div
                            variants={cardVariants}
                            whileHover="hover"
                            className="relative group"
                            data-aos="fade-left"
                            data-aos-delay="400"
                        >
                            <div className="absolute -inset-1 bg-gradient-to-r from-accent via-secondary to-accent rounded-2xl blur opacity-30 group-hover:opacity-50 transition-opacity" />
                            <div className="relative bg-background-dark/90 backdrop-blur-xl rounded-2xl p-6 border border-accent/10 h-full">
                                <div className="flex items-center gap-4 mb-4">
                                    <span className="p-3 rounded-lg bg-accent/10 text-accent">
                                        <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                                        </svg>
                                    </span>
                                    <h3 className="text-xl font-semibold text-accent">Frontend Development</h3>
                                </div>
                                <p className="text-text-secondary leading-relaxed">
                                    Creating beautiful, responsive user interfaces with modern frameworks and libraries. 
                                    Focused on delivering exceptional user experiences through clean, efficient code.
                                </p>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AboutPage;
