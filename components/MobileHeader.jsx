"use client";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Button } from "./ui/button";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { CiMenuFries } from "react-icons/ci";
import { motion, AnimatePresence } from "framer-motion";

const links = [
  { name: "Home", path: "/" },
  { name: "About", path: "/about" },
  { name: "Resume", path: "/resume" },
  { name: "Projects", path: "/projects" },
  { name: "Contact", path: "/contact" },
];

const MobileHeader = () => {
  const pathname = usePathname();

  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button variant="ghost" size="icon" className="text-white">
          <CiMenuFries className="w-6 h-6" />
        </Button>
      </SheetTrigger>
      <SheetContent className="bg-primary/95 backdrop-blur-md border-accent/20">
        <div className="flex flex-col h-full justify-center -mt-16">
          <div className="flex flex-col items-center gap-y-8">
            {links.map((link, index) => (
              <motion.div
                key={link.path}
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ 
                  duration: 0.3, 
                  delay: index * 0.1,
                  type: "spring",
                  stiffness: 300
                }}
              >
                <Link
                  href={link.path}
                  className={`text-2xl font-medium ${
                    pathname === link.path
                      ? "text-accent"
                      : "text-white hover:text-accent transition-colors"
                  }`}
                >
                  {link.name}
                </Link>
              </motion.div>
            ))}
            <motion.div
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.5, type: "spring" }}
            >
              <Link href="/contact">
                <Button 
                  size="lg" 
                  className="bg-accent hover:bg-accent-hover transition-colors mt-4"
                >
                  Contact Me
                </Button>
              </Link>
            </motion.div>
          </div>
        </div>
      </SheetContent>
    </Sheet>
  );
};

export default MobileHeader;
