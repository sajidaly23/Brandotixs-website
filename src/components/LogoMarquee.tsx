"use client";

import { motion } from "framer-motion";

export function LogoMarquee() {
  // We'll use placeholders for logos to maintain aesthetic without needing real assets
  const placeholders = [
    "ACME CORP", "NEXUS", "GLOBAL TECH", "AURORA", "STELLAR", "ELEVATE", "VERTEX", "PULSE"
  ];

  return (
    <section className="py-16 bg-white border-y border-neutral-100 overflow-hidden">
      <div className="container mx-auto px-6 mb-8 text-center">
        <p className="text-sm font-medium text-neutral-400 uppercase tracking-widest">
          Trusted by brands built to stand out.
        </p>
      </div>
      <div className="relative flex overflow-x-hidden">
        <div className="animate-marquee whitespace-nowrap flex items-center">
          {/* Double the array for seamless loop */}
          {[...placeholders, ...placeholders, ...placeholders].map((logo, idx) => (
            <span key={idx} className="mx-12 text-2xl font-bold text-neutral-400 tracking-wider">
              {logo}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
