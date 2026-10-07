"use client";

import { motion } from "framer-motion";

export function Philosophy() {
  const values = [
    "Distinctive", "Strategic", "Memorable", "Consistent", 
    "Purposeful", "Timeless", "Human", "Bold"
  ];

  return (
    <section className="py-24 md:py-32 bg-[#0A0A0C] text-white">
      <div className="container mx-auto px-6 max-w-5xl text-center">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-4xl md:text-6xl lg:text-7xl font-serif font-bold leading-tight mb-10 text-[#FAFAFA]"
        >
          "Good Design Gets Attention. <br/> <span className="text-[#D4A373] italic">Great Branding</span> Builds Recognition."
        </motion.h2>
        
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-lg md:text-xl text-neutral-400 font-light max-w-3xl mx-auto mb-16 leading-relaxed"
        >
          We don't just design logos; we build complete brand systems. Every color, typeface, and layout decision is rooted in strategy to ensure your brand tells a cohesive and compelling story across every touchpoint.
        </motion.p>
        
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="flex flex-wrap justify-center gap-4"
        >
          {values.map((value, idx) => (
            <span key={idx} className="px-6 py-3 rounded-full border border-neutral-800 text-sm font-medium text-neutral-300 hover:border-[#D4A373] hover:text-[#D4A373] transition-colors duration-300 cursor-default">
              {value}
            </span>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
