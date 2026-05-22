"use client";
import { useRef, useEffect } from "react";
import { motion } from "framer-motion";
import Link from "next/link";

const words = ["YALATHE", "ENVIRON-", "MENTAL"];

function ParticleField() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let w = (canvas.width = window.innerWidth);
    let h = (canvas.height = window.innerHeight);

    const particles = Array.from({ length: 60 }, () => ({
      x: Math.random() * w,
      y: Math.random() * h,
      r: Math.random() * 3 + 1,
      vx: (Math.random() - 0.5) * 0.3,
      vy: -Math.random() * 0.4 - 0.1,
      alpha: Math.random() * 0.5 + 0.1,
    }));

    let animId: number;
    const draw = () => {
      ctx.clearRect(0, 0, w, h);
      particles.forEach((p) => {
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(141,255,90,${p.alpha})`;
        ctx.fill();
        p.x += p.vx;
        p.y += p.vy;
        if (p.y < -10) { p.y = h + 10; p.x = Math.random() * w; }
        if (p.x < -10) p.x = w + 10;
        if (p.x > w + 10) p.x = -10;
      });
      animId = requestAnimationFrame(draw);
    };
    draw();

    const onResize = () => {
      w = canvas.width = window.innerWidth;
      h = canvas.height = window.innerHeight;
    };
    window.addEventListener("resize", onResize);
    return () => { cancelAnimationFrame(animId); window.removeEventListener("resize", onResize); };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 w-full h-full pointer-events-none"
      aria-hidden="true"
    />
  );
}

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.15, delayChildren: 0.2 } },
};
const wordVariant = {
  hidden: { y: 120, opacity: 0 },
  show: {
    y: 0,
    opacity: 1,
    transition: { duration: 0.9, ease: [0.76, 0, 0.24, 1] as const },
  },
};

export default function Hero() {
  return (
    <section className="relative min-h-screen bg-forest flex flex-col justify-center overflow-hidden">
      <ParticleField />

      {/* Radial glow */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_60%_50%_at_50%_60%,rgba(141,255,90,0.06),transparent)] pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-10 pt-28 pb-24">
        <motion.div variants={container} initial="hidden" animate="show">
          {words.map((word, i) => (
            <div key={i} className="overflow-hidden">
              <motion.h1
                variants={wordVariant}
                className="font-black text-[clamp(4rem,12vw,10rem)] text-white leading-[0.92] tracking-tight will-change-transform"
              >
                {word}
              </motion.h1>
            </div>
          ))}
        </motion.div>

        <motion.p
          className="mt-8 text-offwhite/70 text-lg md:text-xl max-w-xl leading-relaxed"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 0.7 }}
        >
          Building environmental partnerships that set the benchmark for
          sustainability.
        </motion.p>

        <motion.div
          className="mt-10 flex flex-wrap gap-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.0, duration: 0.6 }}
        >
          <Link
            href="/services"
            className="px-8 py-4 bg-lime text-base font-bold text-sm tracking-wide rounded-sm hover:bg-lime/90 transition-colors"
          >
            Our Services
          </Link>
          <Link
            href="/contact"
            className="px-8 py-4 border border-lime text-lime font-bold text-sm tracking-wide rounded-sm hover:bg-lime/10 transition-colors"
          >
            Contact Us
          </Link>
        </motion.div>
      </div>

      {/* Bottom registration */}
      <motion.div
        className="absolute bottom-8 left-6 md:left-10 text-offwhite/30 text-xs font-mono tracking-widest"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.4 }}
      >
        REG. 2020/208594/07
      </motion.div>

      {/* Bottom-right vertical marquee */}
      <motion.div
        className="absolute bottom-8 right-6 md:right-10 label-vertical text-offwhite/30 text-xs font-mono tracking-widest"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.4 }}
      >
        EAST LONDON · SOUTH AFRICA · EST. 2020
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.6 }}
      >
        <div className="w-px h-12 bg-gradient-to-b from-lime/60 to-transparent" />
        <span className="text-offwhite/30 text-xs tracking-widest font-mono">SCROLL</span>
      </motion.div>
    </section>
  );
}
