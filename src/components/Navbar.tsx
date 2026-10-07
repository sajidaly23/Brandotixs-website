"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const links = ["Home", "About", "Services", "Work", "Process", "Testimonials", "FAQ", "Contact"];

  return (
    <nav className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${scrolled ? 'bg-[#FAFAFA]/90 backdrop-blur-md border-b border-neutral-200 py-4' : 'bg-transparent py-6'}`}>
      <div className="container mx-auto px-6 flex justify-between items-center">
        {/* Logo */}
        <a href="#" className="flex items-center">
          <img
            src="/logo.png"
            alt="Brandotixs Logo"
            className="h-8 md:h-10 w-auto object-contain"
          />
        </a>

        {/* Desktop Links */}
        <div className="hidden lg:flex space-x-8 items-center">
          {links.map((link) => (
            <a key={link} href={`#${link.toLowerCase()}`} className="text-sm font-medium text-neutral-600 hover:text-[#0A0A0C] transition-colors">
              {link}
            </a>
          ))}
          <a href="#contact" className="px-6 py-2.5 bg-[#0A0A0C] text-white text-sm font-medium rounded-full hover:bg-[#D4A373] transition-colors duration-300">
            Start a Project
          </a>
        </div>

        {/* Mobile Toggle */}
        <button className="lg:hidden text-[#0A0A0C] focus:outline-none" onClick={() => setIsOpen(true)}>
          <Menu size={28} />
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "spring", damping: 25, stiffness: 200 }}
            className="fixed inset-0 bg-[#FAFAFA] z-[100] flex flex-col p-8"
          >
            <div className="flex justify-between items-center mb-12">
              <img
                src="/logo.png"
                alt="Brandotixs Logo"
                className="h-8 w-auto object-contain"
              />
              <button onClick={() => setIsOpen(false)} className="text-[#0A0A0C]">
                <X size={32} />
              </button>
            </div>
            <div className="flex flex-col space-y-6 flex-grow justify-center">
              {links.map((link) => (
                <a
                  key={link}
                  href={`#${link.toLowerCase()}`}
                  onClick={() => setIsOpen(false)}
                  className="text-3xl font-light text-[#0A0A0C] hover:text-[#D4A373] transition-colors"
                >
                  {link}
                </a>
              ))}
            </div>
            <div className="mt-auto pt-8">
              <a href="#contact" className="block w-full py-4 bg-[#0A0A0C] text-white text-center text-lg font-medium rounded-full hover:bg-[#D4A373] transition-colors duration-300">
                Start a Project
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
