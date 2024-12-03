"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import Logo from "./Logo";
import { HiOutlineMenuAlt4 } from "react-icons/hi";
import { IoClose } from "react-icons/io5";
import { useState } from "react";

const links = [
    { name: "home", path: "/" },
    { name: "about", path: "/about" },
    { name: "projects", path: "/projects" },
    { name: "contact", path: "/contact" }
];

const Nav = () => {
    const pathname = usePathname();
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

    return (
        <header className="fixed top-0 left-0 w-full z-[100] bg-background/80 backdrop-blur-xl border-b border-accent/10 shadow-lg">
            <div className="container mx-auto px-4 h-20">
                <div className="flex items-center justify-between h-full">
                    <Logo />

                    <nav className="hidden md:flex items-center gap-8">
                        {links.map((link, index) => (
                            <motion.div
                                key={link.path}
                                initial={{ opacity: 0, y: -20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{
                                    duration: 0.5,
                                    delay: index * 0.1,
                                    type: "spring",
                                    stiffness: 400,
                                    damping: 25
                                }}
                            >
                                <Link 
                                    href={link.path}
                                    className={`relative group cursor-none px-4 py-2 text-sm uppercase tracking-wider font-medium ${
                                        pathname === link.path 
                                            ? "text-accent" 
                                            : "text-text-secondary hover:text-accent transition-colors"
                                    }`}
                                >
                                    {link.name}
                                    {pathname === link.path && (
                                        <motion.span
                                            className="absolute inset-0 bg-accent/10 rounded-lg"
                                            layoutId="nav-active"
                                            transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                                        />
                                    )}
                                    <motion.span
                                        className="absolute -inset-2 bg-accent/5 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity"
                                        aria-hidden="true"
                                    />
                                </Link>
                            </motion.div>
                        ))}

                        <motion.a
                            href="/contact"
                            className="relative cursor-none px-6 py-2.5 rounded-lg overflow-hidden group"
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                        >
                            <span className="absolute inset-0 bg-gradient-to-r from-accent via-secondary to-accent opacity-50 group-hover:opacity-80 transition-opacity" />
                            <span className="relative text-sm uppercase tracking-wider font-medium text-white">
                                Let's Talk
                            </span>
                        </motion.a>
                    </nav>

                    <motion.button
                        className="md:hidden p-2 rounded-lg bg-accent/10 text-accent"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                    >
                        {mobileMenuOpen ? (
                            <IoClose className="w-6 h-6" />
                        ) : (
                            <HiOutlineMenuAlt4 className="w-6 h-6" />
                        )}
                    </motion.button>

                    <AnimatePresence>
                        {mobileMenuOpen && (
                            <motion.div
                                initial={{ opacity: 0, x: "100%" }}
                                animate={{ opacity: 1, x: 0 }}
                                exit={{ opacity: 0, x: "100%" }}
                                transition={{ type: "spring", bounce: 0, duration: 0.4 }}
                                className="fixed top-20 left-0 w-full h-[calc(100vh-5rem)] bg-background/95 backdrop-blur-xl md:hidden"
                            >
                                <nav className="flex flex-col items-center justify-center h-full gap-8 p-4">
                                    {links.map((link, index) => (
                                        <motion.div
                                            key={link.path}
                                            initial={{ opacity: 0, y: 20 }}
                                            animate={{ opacity: 1, y: 0 }}
                                            transition={{
                                                duration: 0.4,
                                                delay: index * 0.1,
                                            }}
                                        >
                                            <Link
                                                href={link.path}
                                                className="relative group"
                                                onClick={() => setMobileMenuOpen(false)}
                                            >
                                                <motion.div 
                                                    className="relative px-4 py-2"
                                                    whileHover={{ y: -2 }}
                                                    transition={{ type: "spring", stiffness: 400, damping: 17 }}
                                                >
                                                    <motion.span 
                                                        className={`relative z-10 text-lg uppercase tracking-wider font-medium ${
                                                            pathname === link.path 
                                                                ? "text-accent" 
                                                                : "text-text-secondary hover:text-accent transition-colors"
                                                        }`}
                                                    >
                                                        {link.name}
                                                    </motion.span>
                                                    
                                                    {pathname === link.path && (
                                                        <motion.span
                                                            className="absolute inset-0 bg-accent/10 rounded-lg"
                                                            layoutId="mobile-nav-active"
                                                            transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                                                        />
                                                    )}
                                                </motion.div>
                                            </Link>
                                        </motion.div>
                                    ))}

                                    <motion.a
                                        href="/contact"
                                        className="relative px-8 py-3 rounded-lg overflow-hidden group"
                                        whileHover={{ scale: 1.05 }}
                                        whileTap={{ scale: 0.95 }}
                                        onClick={() => setMobileMenuOpen(false)}
                                    >
                                        <span className="absolute inset-0 bg-gradient-to-r from-accent via-secondary to-accent opacity-50 group-hover:opacity-80 transition-opacity" />
                                        <span className="relative text-lg uppercase tracking-wider font-medium text-white">
                                            Let's Talk
                                        </span>
                                    </motion.a>
                                </nav>
                            </motion.div>
                        )}
                    </AnimatePresence>
                </div>
            </div>
        </header>
    );
};

export default Nav;
