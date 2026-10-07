"use client";

import { motion } from "framer-motion";

export function FinalCTA() {
  return (
    <section id="contact" className="py-32 md:py-48 bg-[#0A0A0C] relative overflow-hidden">
      {/* Decorative gradient orb */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-[#D4A373]/20 rounded-full blur-[120px] pointer-events-none"></div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-5xl md:text-7xl lg:text-8xl font-serif font-bold text-white leading-[1.1] mb-12"
          >
            Let's Make It <br className="hidden md:block"/> <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-[#D4A373]">Impossible To Ignore.</span>
          </motion.h2>
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex flex-col sm:flex-row justify-center items-center space-y-4 sm:space-y-0 sm:space-x-6"
          >
            <a href="mailto:hello@brandotixs.com" className="px-10 py-5 bg-[#D4A373] text-[#0A0A0C] text-lg font-bold rounded-full hover:bg-white transition-colors duration-300 w-full sm:w-auto text-center">
              Start Your Project
            </a>
            <a href="#" className="px-10 py-5 bg-transparent border border-neutral-700 text-white text-lg font-medium rounded-full hover:border-white transition-colors duration-300 w-full sm:w-auto text-center">
              Get In Touch
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
