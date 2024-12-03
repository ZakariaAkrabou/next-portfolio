'use client';
import Link from "next/link";
import { Button } from "./ui/button";
import { motion } from "framer-motion";

//components
import Nav from "./Nav";
import MobileHeader from "./MobileHeader";

const Header = () => {
  return (
    <motion.header 
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="fixed top-0 left-0 right-0 z-50 bg-primary/80 backdrop-blur-sm py-4 sm:py-6 xl:py-8"
    >
      <div className="container mx-auto px-4 flex justify-between items-center">
        <Link href="/">
          <motion.h1 
            whileHover={{ scale: 1.05 }}
            className="text-2xl sm:text-3xl xl:text-4xl font-semibold text-white"
          >
            Zakaria <span className="text-accent">.</span>
          </motion.h1>
        </Link>
        
        {/* Desktop Navigation */}
        <div className="hidden xl:flex items-center gap-8">
          <Nav />
          <Link href="/contact">
            <Button 
              className="bg-accent hover:bg-accent-hover transition-colors"
            >
              Contact Me
            </Button>
          </Link>
        </div>

        {/* Mobile Navigation */}
        <div className="xl:hidden">
          <MobileHeader />
        </div>
      </div>
    </motion.header>
  );
};

export default Header;
