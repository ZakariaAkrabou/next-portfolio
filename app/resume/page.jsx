'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import AnimatedTitle from '../../components/AnimatedTitle';

const ResumePage = () => {
    const [isLoading, setIsLoading] = useState(true);

    return (
        <div className="min-h-screen bg-gray-900 py-16 px-4 sm:px-6 lg:px-8">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="max-w-4xl mx-auto"
            >
                <div className="bg-gray-800/50 backdrop-blur-sm rounded-lg p-6 shadow-xl">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                        className="text-center mb-12"
                    >
                        <AnimatedTitle 
                            title="My Resume"
                            subtitle="A detailed overview of my professional experience, education, and skills."
                        />
                    </motion.div>
                    <motion.a
                        href="/cv.pdf"
                        download
                        className="bg-purple-600 hover:bg-purple-700 text-white px-4 py-2 rounded-md transition-colors duration-200 flex items-center gap-2"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                    >
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                        </svg>
                        Download Resume
                    </motion.a>

                    <div className="relative">
                        {isLoading && (
                            <div className="absolute inset-0 flex items-center justify-center bg-gray-800/50">
                                <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-purple-500"></div>
                            </div>
                        )}
                        <div className="w-full aspect-[1/1.4] bg-white rounded-lg overflow-hidden">
                            <object
                                data="/Kakzu_Resume.pdf"
                                type="application/pdf"
                                className="w-full h-full"
                                onLoad={() => setIsLoading(false)}
                            >
                                <div className="flex flex-col items-center justify-center h-full bg-gray-100 text-gray-800 p-4">
                                    <p>Unable to display PDF file.</p>
                                    <a
                                        href="/Kakzu_Resume.pdf"
                                        download
                                        className="mt-2 text-purple-600 hover:text-purple-700 underline"
                                    >
                                        Download instead
                                    </a>
                                </div>
                            </object>
                        </div>
                    </div>
                </div>
            </motion.div>
        </div>
    );
};

export default ResumePage;
