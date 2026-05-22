"use client";
import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { goals } from "@/lib/data";

export default function Goals() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });

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
            Strategic Objectives
          </span>
          <h2 className="font-black text-5xl md:text-7xl text-white mt-2 leading-tight">
            OUR GOALS
          </h2>
        </motion.div>

        <div className="space-y-0 divide-y divide-white/5">
          {goals.map((goal, i) => (
            <motion.div
              key={goal.id}
              className="flex gap-8 md:gap-16 py-8 group"
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.08 }}
            >
              <span className="font-black text-5xl md:text-6xl text-white/10 leading-none shrink-0 group-hover:text-lime/30 transition-colors duration-300">
                {goal.number}
              </span>
              <p className="text-offwhite/70 text-lg md:text-xl leading-relaxed self-center group-hover:text-white transition-colors duration-300">
                {goal.text}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
