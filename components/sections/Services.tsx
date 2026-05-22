"use client";
import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import ServiceCard from "@/components/ServiceCard";
import { services } from "@/lib/data";

export default function Services() {
  const containerRef = useRef<HTMLDivElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  // On desktop: translate the track horizontally as you scroll through the sticky zone
  const cardWidth = 396; // 380px card + 16px gap
  const totalWidth = services.length * cardWidth;
  const viewportW = typeof window !== "undefined" ? window.innerWidth : 1440;
  const maxTranslate = -(totalWidth - viewportW + 80);

  const x = useTransform(scrollYProgress, [0, 1], [0, maxTranslate]);

  return (
    <section
      ref={containerRef}
      className="relative bg-forest"
      style={{ height: "300vh" }}
    >
      <div className="sticky top-0 h-screen flex overflow-hidden">
        {/* Left sticky title */}
        <div className="hidden lg:flex flex-col justify-center pl-10 pr-8 shrink-0 w-64 border-r border-white/5">
          <span className="text-offwhite/20 text-xs font-mono tracking-widest uppercase mb-4">
            What We Do
          </span>
          <h2 className="font-black text-5xl text-white leading-tight">
            OUR<br />SERVICES
          </h2>
          <p className="mt-6 text-offwhite/40 text-sm leading-relaxed">
            11 specialised disciplines.
            One integrated partnership.
          </p>
        </div>

        <div className="flex-1 flex flex-col justify-center overflow-hidden relative">
          {/* Mobile heading */}
          <div className="lg:hidden px-6 pt-6 pb-4">
            <h2 className="font-black text-4xl text-white">OUR SERVICES</h2>
          </div>

          {/* Scrolling track — desktop: framer motion; mobile: snap-scroll */}
          <div className="hidden lg:block">
            <motion.div
              ref={trackRef}
              className="flex gap-4 px-10 will-change-transform"
              style={{ x }}
            >
              {services.map((service) => (
                <ServiceCard key={service.id} service={service} />
              ))}
            </motion.div>
          </div>

          {/* Mobile: snap-scroll vertical */}
          <div className="lg:hidden flex gap-4 overflow-x-auto snap-x snap-mandatory px-6 pb-6 scrollbar-hide">
            {services.map((service) => (
              <div key={service.id} className="snap-start flex-shrink-0 w-[85vw]">
                <ServiceCard service={service} />
              </div>
            ))}
          </div>

          {/* Progress bar (desktop only) */}
          <div className="hidden lg:block absolute bottom-10 left-10 right-10 h-px bg-white/5">
            <motion.div
              className="h-px bg-lime origin-left"
              style={{ scaleX: scrollYProgress }}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
