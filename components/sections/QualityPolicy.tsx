"use client";
import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { qualityPolicy } from "@/lib/data";

export default function QualityPolicy() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <section ref={ref} className="bg-base py-20 md:py-28 lg:py-36">
      <div className="max-w-7xl mx-auto px-6 md:px-10 text-center">
        <motion.div
          className="mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
        >
          <span className="text-lime text-xs font-bold tracking-widest uppercase">
            Quality Policy
          </span>
          <h2 className="font-black text-3xl sm:text-4xl md:text-6xl text-white mt-2 leading-tight">
            THE FIVE KEY ELEMENTS
            <br />
            <span className="text-offwhite/30">OF SERVICE</span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
          {qualityPolicy.map((el, i) => (
            <motion.div
              key={el.id}
              className="bg-card border border-white/5 rounded-sm p-8 text-left group hover:border-lime/20 transition-colors"
              initial={{ opacity: 0, y: 40 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.1 }}
            >
              <span className="font-black text-5xl text-lime leading-none block mb-4">
                {el.number}
              </span>
              <h3 className="font-bold text-base text-white mb-3">{el.title}</h3>
              <p className="text-offwhite/40 text-sm leading-relaxed">{el.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
