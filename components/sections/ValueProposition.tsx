"use client";
import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { pillars } from "@/lib/data";

export default function ValueProposition() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section ref={ref} className="bg-base py-28 md:py-36">
      <div className="max-w-7xl mx-auto px-6 md:px-10">
        <motion.div
          className="mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
        >
          <span className="text-lime text-xs font-bold tracking-widest uppercase">
            Our Value Proposition
          </span>
          <h2 className="font-black text-5xl md:text-7xl text-white mt-2 leading-tight">
            THREE PILLARS
            <br />
            <span className="text-offwhite/20">OF EXCELLENCE</span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {pillars.map((pillar, i) => {
            const Icon = pillar.icon;
            return (
              <motion.div
                key={pillar.id}
                className="group relative bg-card border border-white/5 rounded-sm p-8 overflow-hidden cursor-pointer"
                initial={{ opacity: 0, y: 40 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: i * 0.15 }}
              >
                {/* Flood fill from bottom on hover */}
                <div className="absolute inset-0 bg-lime translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-[cubic-bezier(0.77,0,0.175,1)]" />

                <div className="relative z-10">
                  <div className="mb-6">
                    <Icon
                      size={32}
                      className="text-lime group-hover:text-base transition-colors duration-300"
                    />
                  </div>
                  <div className="w-8 h-0.5 bg-lime group-hover:bg-base transition-colors duration-300 mb-6" />
                  <p className="text-lime/60 text-xs font-bold tracking-widest uppercase mb-2 group-hover:text-base/60 transition-colors duration-300">
                    {pillar.subtitle}
                  </p>
                  <h3 className="font-bold text-2xl text-white group-hover:text-base transition-colors duration-300 mb-4">
                    {pillar.title}
                  </h3>
                  <p className="text-offwhite/50 text-sm leading-relaxed group-hover:text-base/70 transition-colors duration-300">
                    {pillar.description}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
