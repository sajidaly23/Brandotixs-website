"use client";

import { motion } from "framer-motion";

export function Hero() {
  return (
    <section id="home" className="pt-32 pb-20 md:pt-48 md:pb-32 bg-[#FAFAFA] overflow-hidden min-h-[90vh] flex flex-col justify-center">
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-sm md:text-base font-semibold tracking-widest text-[#D4A373] uppercase mb-6"
          >
            Independent Brand Identity & Creative Studio
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-5xl md:text-7xl lg:text-8xl font-serif font-bold text-[#0A0A0C] tracking-tight leading-[1.05] mb-8"
          >
            We Build Brands <br className="hidden md:block" /> People Remember.
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-lg md:text-xl text-neutral-600 font-light leading-relaxed mb-12 max-w-2xl mx-auto"
          >
            Brandotixs helps ambitious businesses turn ideas into distinctive visual identities that communicate clearly, connect emotionally, and stand confidently in their market.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex flex-col sm:flex-row justify-center items-center space-y-4 sm:space-y-0 sm:space-x-6 mb-16"
          >
            <a href="#contact" className="px-8 py-4 bg-[#0A0A0C] text-white text-base font-medium rounded-full hover:bg-[#D4A373] transition-colors duration-300 w-full sm:w-auto text-center">
              Start Your Brand
            </a>
            <a href="#work" className="px-8 py-4 bg-transparent border border-[#0A0A0C] text-[#0A0A0C] text-base font-medium rounded-full hover:bg-neutral-100 transition-colors duration-300 w-full sm:w-auto text-center">
              Explore Our Work
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="flex flex-wrap justify-center gap-3 text-xs md:text-sm font-medium text-neutral-500"
          >
            <span className="px-4 py-2 rounded-full border border-neutral-200">Brand Strategy</span>
            <span className="hidden md:inline px-2 py-2 text-neutral-300">•</span>
            <span className="px-4 py-2 rounded-full border border-neutral-200">Visual Identity</span>
            <span className="hidden md:inline px-2 py-2 text-neutral-300">•</span>
            <span className="px-4 py-2 rounded-full border border-neutral-200">Graphic Design</span>
            <span className="hidden md:inline px-2 py-2 text-neutral-300">•</span>
            <span className="px-4 py-2 rounded-full border border-neutral-200">Digital Experiences</span>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
