"use client";

import { motion } from "framer-motion";

export function CaseStudyHighlight() {
  return (
    <section className="py-24 md:py-32 bg-white">
      <div className="container mx-auto px-6">
        <div className="bg-[#0A0A0C] rounded-3xl overflow-hidden flex flex-col lg:flex-row">
          <div className="lg:w-1/2 p-12 md:p-20 flex flex-col justify-center">
            <motion.p
               initial={{ opacity: 0, y: 20 }}
               whileInView={{ opacity: 1, y: 0 }}
               viewport={{ once: true }}
               transition={{ duration: 0.6 }}
               className="text-[#D4A373] text-sm font-medium tracking-widest uppercase mb-6"
            >
              Behind The Scenes
            </motion.p>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-3xl md:text-5xl font-serif font-bold text-white leading-tight mb-8"
            >
              Every Identity Has <br/> A Story Behind It.
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-neutral-400 font-light text-lg mb-10 leading-relaxed"
            >
              We believe that form follows meaning. Explore our creative thinking process—from initial research and color theory to typography selection and strategic positioning.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              <a href="#" className="inline-flex items-center text-white font-medium hover:text-[#D4A373] transition-colors border-b-2 border-white hover:border-[#D4A373] pb-1">
                Read Our Journal <span className="ml-2">→</span>
              </a>
            </motion.div>
          </div>
          <div className="lg:w-1/2 h-64 lg:h-auto relative">
            <img 
              src="https://images.unsplash.com/photo-1558655146-d09347e92766?auto=format&fit=crop&q=80&w=1200" 
              alt="Creative Process" 
              className="absolute inset-0 w-full h-full object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
