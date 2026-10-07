"use client";

import { motion } from "framer-motion";
import { processSteps } from "@/lib/data";

export function ProcessSection() {
  return (
    <section id="process" className="py-24 md:py-32 bg-[#FAFAFA]">
      <div className="container mx-auto px-6">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-2xl mx-auto text-center mb-20"
        >
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-[#0A0A0C] leading-tight mb-6">
            From First Idea To <br/> Final Identity.
          </h2>
          <p className="text-lg text-neutral-600 font-light">
            Our structured approach ensures that every creative decision is rooted in strategy, resulting in brands that look beautiful and perform beautifully.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-5 gap-8">
          {processSteps.map((step, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="relative flex flex-col"
            >
              {/* Connector line for desktop */}
              {idx < processSteps.length - 1 && (
                <div className="hidden md:block absolute top-6 left-12 right-0 h-px bg-neutral-200 z-0"></div>
              )}
              
              <div className="w-12 h-12 bg-white rounded-full border border-neutral-200 flex items-center justify-center mb-6 relative z-10 font-bold text-[#0A0A0C]">
                {step.number}
              </div>
              
              <h3 className="text-xl font-bold text-[#0A0A0C] mb-3">{step.title}</h3>
              <p className="text-neutral-500 font-light text-sm leading-relaxed">
                {step.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
