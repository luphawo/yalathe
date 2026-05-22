"use client";
import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import Marquee from "@/components/ui/Marquee";
import { values } from "@/lib/data";

const marqueeText =
  "INTEGRITY · SUSTAINABILITY · EXCELLENCE · DIVERSITY · COLLABORATION · IMPACT · ";

export default function Values() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <section className="bg-base py-28 md:py-36 overflow-hidden">
      {/* Big marquee */}
      <div className="mb-20 border-y border-white/5 py-6">
        <Marquee
          text={marqueeText}
          speed="slow"
          textClassName="font-black text-5xl md:text-7xl text-lime tracking-tight"
        />
      </div>

      {/* Values grid */}
      <div ref={ref} className="max-w-7xl mx-auto px-6 md:px-10">
        <motion.div
          className="mb-12"
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
        >
          <span className="text-lime text-xs font-bold tracking-widest uppercase">
            What Drives Us
          </span>
          <h2 className="font-black text-5xl md:text-7xl text-white mt-2 leading-tight">
            OUR VALUES
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {values.map((val, i) => (
            <motion.div
              key={val.id}
              className="bg-card border border-white/5 rounded-sm p-8 group hover:border-lime/20 transition-colors"
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.1 }}
            >
              <span className="font-black text-4xl text-lime/20 leading-none block mb-4">
                0{val.id}
              </span>
              <h3 className="font-bold text-xl text-white mb-3">{val.title}</h3>
              <p className="text-offwhite/50 text-sm leading-relaxed">{val.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
