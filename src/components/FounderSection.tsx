"use client";

import { motion } from "framer-motion";

export function FounderSection() {
  return (
    <section id="founder" className="py-24 md:py-32 bg-white">
      <div className="container mx-auto px-6">
        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          <motion.div
             initial={{ opacity: 0, scale: 0.95 }}
             whileInView={{ opacity: 1, scale: 1 }}
             viewport={{ once: true }}
             transition={{ duration: 0.6 }}
             className="relative aspect-[3/4] md:aspect-auto md:h-[600px] rounded-3xl overflow-hidden"
          >
            <img 
              src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=800" 
              alt="Muhammad Adil - Founder" 
              className="w-full h-full object-cover grayscale contrast-125"
            />
            <div className="absolute inset-0 bg-black/10"></div>
          </motion.div>
          
          <motion.div
             initial={{ opacity: 0, y: 20 }}
             whileInView={{ opacity: 1, y: 0 }}
             viewport={{ once: true }}
             transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h2 className="text-3xl md:text-5xl font-serif font-bold text-[#0A0A0C] leading-tight mb-4">
              Creative Direction With A Personal Touch.
            </h2>
            <h3 className="text-xl font-medium text-[#D4A373] tracking-wide mb-8">
              Muhammad Adil <span className="text-neutral-400 font-light text-base block sm:inline sm:ml-2">Founder & Creative Director</span>
            </h3>
            
            <div className="space-y-6 text-neutral-600 font-light text-lg leading-relaxed mb-10">
              <p>
                "I started Brandotixs with a simple belief: the best brands aren't just seen, they are felt. My approach combines rigorous strategic planning with expressive visual design to create identities that leave a lasting impression."
              </p>
              <p>
                Having worked across multiple industries globally, I bring a unique perspective to every project, ensuring your brand stands out confidently in its category while remaining authentic to its core values.
              </p>
            </div>
            
            <a href="#" className="px-8 py-4 bg-[#0A0A0C] text-white text-base font-medium rounded-full hover:bg-[#D4A373] transition-colors duration-300 inline-block">
              More About The Founder
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
