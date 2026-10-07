"use client";

import { motion } from "framer-motion";
import { whyUsFeatures } from "@/lib/data";

export function WhyUs() {
  return (
    <section className="py-24 md:py-32 bg-white border-t border-neutral-100">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <img 
              src="https://images.unsplash.com/photo-1542744094-24638ea0b3b5?auto=format&fit=crop&q=80&w=1200" 
              alt="Strategy and Planning" 
              className="rounded-3xl shadow-xl w-full h-auto"
            />
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-[#0A0A0C] leading-tight mb-8">
              Why Brandotixs?
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-6">
              {whyUsFeatures.map((feature, idx) => (
                <div key={idx} className="flex items-start">
                  <div className="flex-shrink-0 mt-1">
                    <div className="w-2 h-2 bg-[#D4A373] rounded-full"></div>
                  </div>
                  <p className="ml-4 text-lg font-medium text-neutral-800 tracking-tight">{feature}</p>
                </div>
              ))}
            </div>
            
            <div className="mt-12 p-8 bg-[#FAFAFA] rounded-2xl border border-neutral-100">
              <p className="text-neutral-600 font-light italic leading-relaxed">
                "Brandotixs doesn't just deliver files; they deliver a clear direction. Our identity finally matches the ambition of our company."
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
