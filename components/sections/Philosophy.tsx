"use client";
import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { philosophy } from "@/lib/data";

export default function Philosophy() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section ref={ref} className="bg-forest py-20 md:py-28 lg:py-36">
      <div className="max-w-7xl mx-auto px-6 md:px-10">
        <motion.div
          className="mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
        >
          <span className="text-lime text-xs font-bold tracking-widest uppercase">
            How We Work
          </span>
          <h2 className="font-black text-4xl sm:text-5xl md:text-7xl text-white mt-2 leading-tight">
            BUSINESS
            <br />
            PHILOSOPHY
          </h2>
        </motion.div>

        {/* 2×2 asymmetric grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {philosophy.map((card, i) => {
            const Icon = card.icon;
            const offset = i === 1 ? "md:mt-10" : i === 3 ? "md:-mt-10" : "";
            return (
              <motion.div
                key={card.id}
                className={`bg-card border border-white/5 rounded-sm p-10 ${offset}`}
                initial={{ opacity: 0, y: 50 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: i * 0.12 }}
              >
                <div className="w-12 h-12 rounded-sm bg-lime/10 flex items-center justify-center mb-6">
                  <Icon size={24} className="text-lime" />
                </div>
                <h3 className="font-bold text-2xl text-white mb-4">{card.title}</h3>
                <p className="text-offwhite/50 text-base leading-relaxed">
                  {card.description}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
