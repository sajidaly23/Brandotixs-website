"use client";

import { motion } from "framer-motion";
import { testimonials } from "@/lib/data";

export function Testimonials() {
  return (
    <section id="testimonials" className="py-24 md:py-32 bg-[#FAFAFA]">
      <div className="container mx-auto px-6">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-[#0A0A0C] leading-tight">
            What It's Like <br/> Working With Us.
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {testimonials.map((testimonial, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="bg-white p-10 rounded-2xl border border-neutral-100 shadow-[0_4px_20px_-10px_rgba(0,0,0,0.05)] flex flex-col h-full"
            >
              <div className="flex-grow">
                <svg className="w-8 h-8 text-[#D4A373] mb-6 opacity-50" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                </svg>
                <p className="text-neutral-600 font-light text-lg leading-relaxed mb-8">
                  "{testimonial.quote}"
                </p>
              </div>
              <div className="flex items-center">
                <div className="w-12 h-12 rounded-full bg-neutral-200 overflow-hidden flex-shrink-0">
                   <div className="w-full h-full bg-[#0A0A0C]/10 flex items-center justify-center text-[#0A0A0C] font-bold text-sm">
                      {testimonial.name.charAt(0)}
                   </div>
                </div>
                <div className="ml-4">
                  <h4 className="text-[#0A0A0C] font-bold tracking-tight">{testimonial.name}</h4>
                  <p className="text-neutral-500 font-medium text-xs uppercase tracking-wider">{testimonial.role}, {testimonial.company}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
