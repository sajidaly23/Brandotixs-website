"use client";

import { motion } from "framer-motion";

export function VisualExperience() {
  return (
    <section className="py-24 md:py-32 bg-[#0A0A0C] text-white overflow-hidden">
      <div className="container mx-auto px-6 mb-16 text-center max-w-3xl">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-4xl md:text-5xl font-serif font-bold leading-tight mb-6"
        >
          One Identity. <br/> Every Touchpoint.
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-lg text-neutral-400 font-light leading-relaxed"
        >
          Your audience experiences your brand in dozens of places. We make sure it feels like the same brand in every one of them.
        </motion.p>
      </div>

      {/* Gallery */}
      <div className="flex gap-4 px-6 md:px-12 overflow-x-auto pb-8 hide-scrollbar snap-x">
        {[
          "https://images.unsplash.com/photo-1586717791821-3f44a563fa4c?auto=format&fit=crop&q=80&w=800", // Business Card
          "https://images.unsplash.com/photo-1629904853716-f0bc54eea481?auto=format&fit=crop&q=80&w=800", // Mobile Screen
          "https://images.unsplash.com/photo-1613140952277-1c6bd0386ff5?auto=format&fit=crop&q=80&w=800", // Packaging
          "https://images.unsplash.com/photo-1542744095-291d1f67b221?auto=format&fit=crop&q=80&w=800", // Website
        ].map((img, idx) => (
           <motion.div
              key={idx}
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: idx * 0.1 }}
              className="flex-shrink-0 w-[80vw] md:w-[40vw] lg:w-[30vw] aspect-[4/5] rounded-3xl overflow-hidden snap-center relative"
           >
             <img src={img} alt="Touchpoint Mockup" className="w-full h-full object-cover" />
             <div className="absolute inset-0 bg-black/10"></div>
           </motion.div>
        ))}
      </div>
    </section>
  );
}
