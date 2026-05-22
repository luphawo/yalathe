"use client";
import { useRef } from "react";
import Link from "next/link";
import { motion, useInView } from "framer-motion";

export default function CTASection() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <section ref={ref} className="relative bg-lime overflow-hidden py-28 md:py-40">
      {/* Animated organic bg shapes */}
      <div className="absolute inset-0 pointer-events-none">
        <motion.div
          className="absolute -top-32 -left-32 w-96 h-96 rounded-full bg-base/5"
          animate={{ scale: [1, 1.1, 1], rotate: [0, 10, 0] }}
          transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute -bottom-24 -right-24 w-80 h-80 rounded-full bg-base/5"
          animate={{ scale: [1, 1.15, 1], rotate: [0, -10, 0] }}
          transition={{ duration: 16, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-base/[0.03]"
          animate={{ scale: [1, 1.05, 1] }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        />
      </div>

      <div className="relative z-10 max-w-5xl mx-auto px-6 md:px-10 text-center">
        <motion.h2
          className="font-black text-3xl sm:text-4xl md:text-6xl lg:text-7xl text-base leading-tight mb-6"
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          LET&apos;S BUILD A SUSTAINABLE
          <br />
          FUTURE TOGETHER
        </motion.h2>

        <motion.p
          className="text-base/60 text-base md:text-lg mb-2"
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          East London, South Africa
        </motion.p>
        <motion.div
          className="flex flex-wrap justify-center gap-4 text-base/60 text-sm mb-10 font-mono"
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <a href="tel:0794695320" className="hover:text-base transition-colors">
            079 469 5320
          </a>
          <span>·</span>
          <a
            href="mailto:mkhu.nxusani@gmail.com"
            className="hover:text-base transition-colors"
          >
            mkhu.nxusani@gmail.com
          </a>
        </motion.div>

        <motion.div
          className="flex flex-wrap justify-center gap-4"
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <Link
            href="/contact"
            className="px-8 py-4 bg-base text-lime font-bold text-sm tracking-wide rounded-sm hover:bg-base/90 transition-colors"
          >
            Get In Touch
          </Link>
          <Link
            href="/services"
            className="px-8 py-4 border-2 border-base text-base font-bold text-sm tracking-wide rounded-sm hover:bg-base/10 transition-colors"
          >
            View Services
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
