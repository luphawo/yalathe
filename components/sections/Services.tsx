"use client";
import { useRef, useEffect } from "react";
import { motion, useScroll, useMotionValue } from "framer-motion";
import ServiceCard from "@/components/ServiceCard";
import { services } from "@/lib/data";

/* ─── Desktop: sticky horizontal scroll ─────────────────────────────────── */
function DesktopServices() {
  const containerRef = useRef<HTMLDivElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);
  const translateX = useMotionValue(0);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  useEffect(() => {
    // Measure the actual overflow distance once mounted, update on resize
    const compute = () => {
      if (!trackRef.current) return;
      const trackW = trackRef.current.scrollWidth;
      const containerW = trackRef.current.parentElement?.clientWidth ?? 0;
      const maxT = Math.min(0, -(trackW - containerW));

      const unsub = scrollYProgress.on("change", (v) => {
        translateX.set(v * maxT);
      });
      return unsub;
    };

    let unsub = compute();
    const onResize = () => {
      unsub?.();
      unsub = compute();
    };
    window.addEventListener("resize", onResize);
    return () => {
      unsub?.();
      window.removeEventListener("resize", onResize);
    };
  }, [scrollYProgress, translateX]);

  return (
    /* Outer section provides the scroll distance (300vh) */
    <section
      ref={containerRef}
      className="hidden lg:block relative bg-forest"
      style={{ height: "300vh" }}
    >
      {/* Sticky viewport-height panel */}
      <div className="sticky top-0 h-screen flex">

        {/* Left title panel */}
        <div className="flex flex-col justify-center pl-10 pr-8 shrink-0 w-64 border-r border-white/5">
          <span className="text-offwhite/20 text-xs font-mono tracking-widest uppercase mb-4">
            What We Do
          </span>
          <h2 className="font-black text-5xl text-white leading-tight">
            OUR<br />SERVICES
          </h2>
          <p className="mt-6 text-offwhite/40 text-sm leading-relaxed">
            11 specialised disciplines.<br />One integrated partnership.
          </p>
        </div>

        {/* Scrolling track — clips overflow without blocking the track */}
        <div className="flex-1 flex flex-col justify-center relative min-w-0">
          {/* Clip mask — only hides overflow, doesn't block scroll events */}
          <div className="overflow-hidden w-full">
            <motion.div
              ref={trackRef}
              className="flex gap-4 px-10 will-change-transform"
              style={{ x: translateX }}
            >
              {services.map((service) => (
                <ServiceCard key={service.id} service={service} />
              ))}
            </motion.div>
          </div>

          {/* Progress bar */}
          <div className="absolute bottom-10 left-10 right-10 h-px bg-white/5">
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

/* ─── Mobile: simple snap-scroll, no sticky ─────────────────────────────── */
function MobileServices() {
  return (
    <section className="lg:hidden bg-forest py-20">
      <div className="px-6 mb-8">
        <span className="text-offwhite/40 text-xs font-mono tracking-widest uppercase">
          What We Do
        </span>
        <h2 className="font-black text-4xl text-white mt-2 leading-tight">
          OUR SERVICES
        </h2>
      </div>

      {/* Horizontal snap-scroll — parent has NO overflow-hidden */}
      <div className="flex gap-4 overflow-x-auto snap-x snap-mandatory px-6 pb-6"
        style={{ WebkitOverflowScrolling: "touch" }}
      >
        {services.map((service) => (
          <div
            key={service.id}
            className="snap-start flex-shrink-0"
            style={{ width: "85vw" }}
          >
            <ServiceCard service={service} />
          </div>
        ))}
      </div>
    </section>
  );
}

/* ─── Export: renders both, CSS controls which is visible ────────────────── */
export default function Services() {
  return (
    <>
      <MobileServices />
      <DesktopServices />
    </>
  );
}
