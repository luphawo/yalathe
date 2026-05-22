"use client";
import { useRef } from "react";
import { motion, useInView } from "framer-motion";

export default function VisionMission() {
  const visionRef = useRef<HTMLDivElement>(null);
  const missionRef = useRef<HTMLDivElement>(null);
  const visionInView = useInView(visionRef, { once: true, margin: "-80px" });
  const missionInView = useInView(missionRef, { once: true, margin: "-80px" });

  return (
    <div>
      {/* VISION — dark band */}
      <section
        ref={visionRef}
        className="relative bg-forest py-28 md:py-36 overflow-hidden"
      >
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_60%_at_20%_50%,rgba(141,255,90,0.04),transparent)] pointer-events-none" />
        <div className="max-w-7xl mx-auto px-6 md:px-10">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={visionInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
          >
            <span className="text-lime text-xs font-bold tracking-widest uppercase block mb-6">
              Our Vision
            </span>
            <h2 className="font-black text-4xl md:text-6xl text-white leading-tight max-w-4xl">
              To be recognised as the leading environmental management partner in{" "}
              <span className="text-lime">Africa</span>, delivering impactful,
              science-based solutions that protect ecosystems, empower communities,
              and sustain the natural world for generations to come.
            </h2>
          </motion.div>
        </div>
      </section>

      {/* MISSION — lime band */}
      <section
        ref={missionRef}
        className="relative bg-lime py-28 md:py-36 overflow-hidden"
      >
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_60%_at_80%_50%,rgba(196,135,58,0.15),transparent)] pointer-events-none" />
        <div className="max-w-7xl mx-auto px-6 md:px-10">
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={missionInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
          >
            <span className="text-base/60 text-xs font-bold tracking-widest uppercase block mb-6">
              Our Mission
            </span>
            <h2 className="font-black text-4xl md:text-6xl text-base leading-tight max-w-4xl">
              To deliver{" "}
              <span className="text-clay">specialised, innovative</span> environmental
              services that set the benchmark for sustainability — building lasting
              partnerships with government, industry, and communities that drive{" "}
              <span className="text-clay">positive change</span> across South Africa
              and beyond.
            </h2>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
