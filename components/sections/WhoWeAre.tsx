"use client";
import { useRef } from "react";
import { motion, useInView, type Variants } from "framer-motion";
import StatCounter from "@/components/StatCounter";
import { stats } from "@/lib/data";

const tags = [
  "#Integrity",
  "#Sustainability",
  "#Excellence",
  "#Diversity",
  "#Collaboration",
  "#Impact",
];

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 40 },
  show: { opacity: 1, y: 0, transition: { duration: 0.7, ease: "easeOut" } },
};

export default function WhoWeAre() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="relative bg-base py-20 md:py-28 lg:py-36 overflow-hidden">
      {/* Vertical rotated label */}
      <div className="absolute left-4 md:left-6 top-1/2 -translate-y-1/2 hidden lg:block">
        <span className="label-vertical text-offwhite/10 text-xs font-black tracking-[0.4em] uppercase">
          WHO WE ARE
        </span>
      </div>

      <div className="max-w-7xl mx-auto px-6 md:px-10 lg:px-16">
        <div className="grid md:grid-cols-2 gap-12 md:gap-20 lg:gap-24 items-start">
          {/* Left — quote */}
          <motion.div
            variants={fadeUp}
            initial="hidden"
            animate={inView ? "show" : "hidden"}
          >
            <span className="font-black text-[5rem] sm:text-[7rem] md:text-[9rem] leading-none text-lime/20 block -mb-4 sm:-mb-6 md:-mb-8">
              &ldquo;
            </span>
            <blockquote className="text-xl sm:text-2xl md:text-3xl font-semibold text-white leading-relaxed">
              Born out of the need for specialised environmental services to support and
              manage environmental risks associated with human health and nature.
            </blockquote>
            <p className="mt-8 text-offwhite/50 text-base leading-relaxed">
              Yalathe Environmental is a 100% Black-owned, 30% women-owned South African
              consultancy established in 2020, headquartered in East London, Eastern Cape.
              We operate at the intersection of environmental science, community development,
              and digital innovation.
            </p>
            <div className="mt-8 flex flex-wrap gap-2">
              {tags.map((tag) => (
                <span
                  key={tag}
                  className="px-3 py-1.5 bg-white/5 border border-white/10 rounded-full text-xs font-semibold text-offwhite/60 tracking-wide hover:border-lime/40 hover:text-lime transition-colors"
                >
                  {tag}
                </span>
              ))}
            </div>
          </motion.div>

          {/* Right — stats */}
          <motion.div
            variants={{
              hidden: { opacity: 0, y: 40 },
              show: { opacity: 1, y: 0, transition: { duration: 0.7, delay: 0.2, ease: "easeOut" } },
            }}
            initial="hidden"
            animate={inView ? "show" : "hidden"}
          >
            <div className="grid grid-cols-2 gap-10 md:gap-12">
              {stats.map((stat) => (
                <StatCounter
                  key={stat.id}
                  value={stat.value}
                  suffix={stat.suffix}
                  label={stat.label}
                />
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
