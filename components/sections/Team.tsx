"use client";
import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import TeamCard from "@/components/TeamCard";
import { team } from "@/lib/data";

export default function Team() {
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
            The People Behind The Work
          </span>
          <h2 className="font-black text-4xl sm:text-5xl md:text-7xl text-white mt-2 leading-tight">
            OUR TEAM
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {team.map((member, i) => (
            <motion.div
              key={member.id}
              initial={{ opacity: 0, y: 50 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: i * 0.15 }}
            >
              <TeamCard member={member} />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
