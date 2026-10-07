"use client";

import { motion } from "framer-motion";
import { workItems } from "@/lib/data";

export function FeaturedWork() {
  return (
    <section id="work" className="py-24 md:py-32 bg-[#FAFAFA]">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="max-w-2xl"
          >
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-[#0A0A0C] leading-tight">
              Brands We've Helped <br/> Take Their Shape.
            </h2>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <a href="#work" className="px-6 py-3 bg-white border border-neutral-200 text-[#0A0A0C] font-medium rounded-full hover:border-[#0A0A0C] transition-colors duration-300 inline-block text-sm">
              View All Projects
            </a>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
          {workItems.map((item, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: (idx % 2) * 0.2 }}
              className="group cursor-pointer"
            >
              <div className="relative overflow-hidden rounded-2xl aspect-[4/3] mb-6 bg-neutral-200">
                <img 
                  src={item.image} 
                  alt={item.name} 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center backdrop-blur-[2px]">
                  <span className="px-6 py-3 bg-white text-[#0A0A0C] font-medium rounded-full transform translate-y-4 group-hover:translate-y-0 transition-all duration-300">
                    View Case Study →
                  </span>
                </div>
              </div>
              <div className="flex justify-between items-start">
                <div>
                  <h3 className="text-2xl font-bold text-[#0A0A0C] tracking-tight mb-2">{item.name}</h3>
                  <p className="text-neutral-500 font-light">{item.category}</p>
                </div>
                <span className="text-sm font-medium text-neutral-400">{item.year}</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
