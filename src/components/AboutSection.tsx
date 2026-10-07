"use client";

import { motion } from "framer-motion";

export function AboutSection() {
  return (
    <section id="about" className="py-24 md:py-32 bg-[#FAFAFA]">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-[#0A0A0C] leading-tight mb-8">
              More Than A Logo.<br/> We Craft Identity.
            </h2>
            <div className="space-y-6 text-neutral-600 font-light text-lg leading-relaxed">
              <p>
                Brandotixs is a creative studio focused on building brands with clarity, character, and consistency. We believe that a brand is more than just visual aesthetics—it is the feeling your audience gets when they interact with you.
              </p>
              <p>
                Led by Muhammad Adil, Brandotixs combines strategic thinking with creative execution. We strip away the noise to find the core truth of your brand and translate it into a distinctive visual language that commands attention and builds lasting recognition.
              </p>
            </div>
            
            <div className="mt-10">
              <a href="#founder" className="inline-flex items-center text-[#0A0A0C] font-semibold hover:text-[#D4A373] transition-colors border-b-2 border-[#0A0A0C] hover:border-[#D4A373] pb-1">
                Discover Brandotixs <span className="ml-2">→</span>
              </a>
            </div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="grid grid-cols-2 gap-4 md:gap-8"
          >
            {[
              { number: "50+", label: "Brands Crafted" },
              { number: "120+", label: "Creative Projects" },
              { number: "15+", label: "Industries" },
              { number: "5+", label: "Years of Experience" }
            ].map((stat, idx) => (
              <div key={idx} className="bg-white p-8 rounded-2xl shadow-[0_4px_20px_-10px_rgba(0,0,0,0.05)] border border-neutral-100 flex flex-col justify-center text-center">
                <span className="text-4xl md:text-5xl font-serif font-bold text-[#0A0A0C] mb-2">{stat.number}</span>
                <span className="text-sm font-medium text-neutral-500 uppercase tracking-wide">{stat.label}</span>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
