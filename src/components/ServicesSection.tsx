"use client";

import { motion } from "framer-motion";
import { services } from "@/lib/data";

export function ServicesSection() {
  return (
    <section id="services" className="py-24 md:py-32 bg-white">
      <div className="container mx-auto px-6">
        <div className="max-w-3xl mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-4xl md:text-5xl font-serif font-bold text-[#0A0A0C] leading-tight mb-6"
          >
            Everything Your Brand <br/> Needs To Take Shape.
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-lg text-neutral-600 font-light"
          >
            We offer end-to-end creative solutions designed to build cohesive and powerful brand experiences from strategy to final execution.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {services.map((service, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="p-8 md:p-10 border border-neutral-200 rounded-2xl hover:border-[#D4A373] hover:shadow-[0_8px_30px_-10px_rgba(0,0,0,0.1)] transition-all duration-300 group bg-[#FAFAFA] hover:bg-white"
            >
              <div className="w-14 h-14 bg-white rounded-full flex items-center justify-center border border-neutral-100 shadow-sm mb-8 text-[#0A0A0C] group-hover:text-[#D4A373] transition-colors duration-300">
                <service.icon size={24} strokeWidth={1.5} />
              </div>
              <h3 className="text-xl font-bold text-[#0A0A0C] mb-4 tracking-tight">{service.title}</h3>
              <p className="text-neutral-500 font-light leading-relaxed">
                {service.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
