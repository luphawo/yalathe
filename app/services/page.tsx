"use client";
import { useState, useRef, useEffect } from "react";
import { motion, useInView, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";
import { services } from "@/lib/data";
import Link from "next/link";

function ServiceAccordion({ service, index }: { service: (typeof services)[0]; index: number }) {
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-40px" });
  const Icon = service.icon;

  // Auto-open when navigated to via hash link
  useEffect(() => {
    const hash = window.location.hash;
    if (hash === `#service-${service.number}`) {
      setOpen(true);
      ref.current?.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  }, [service.number]);

  return (
    <motion.div
      id={`service-${service.number}`}
      ref={ref}
      className="border-b border-white/5 scroll-mt-20"
      initial={{ opacity: 0, y: 30 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, delay: index * 0.05 }}
    >
      <button
        className="w-full flex items-center justify-between py-8 text-left group"
        onClick={() => setOpen((o) => !o)}
        aria-expanded={open}
      >
        <div className="flex items-center gap-4 md:gap-8 min-w-0">
          <span className="font-black text-2xl sm:text-3xl md:text-4xl text-lime/20 leading-none shrink-0 group-hover:text-lime/40 transition-colors w-10 sm:w-auto">
            {service.number}
          </span>
          <div className="flex items-center gap-4">
            <Icon size={20} className="text-lime shrink-0" />
            <h2 className="font-bold text-base sm:text-xl md:text-2xl text-white group-hover:text-lime transition-colors leading-tight">
              {service.title}
            </h2>
          </div>
        </div>
        <motion.div
          animate={{ rotate: open ? 180 : 0 }}
          transition={{ duration: 0.3 }}
          className="shrink-0 ml-4"
        >
          <ChevronDown size={20} className="text-lime" />
        </motion.div>
      </button>

      <AnimatePresence>
        {open && (
          <motion.div
            key="content"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.4, ease: [0.76, 0, 0.24, 1] }}
            className="overflow-hidden"
          >
            <div className="pb-10 pl-2 sm:pl-4 md:pl-[calc(2.5rem+40px+1.5rem)]">
              <p className="text-offwhite/60 text-base leading-relaxed mb-6 max-w-2xl">
                {service.description}
              </p>
              <ul className="space-y-3">
                {service.bullets.map((bullet, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <span className="w-1.5 h-1.5 rounded-full bg-lime mt-2 shrink-0" />
                    <span className="text-offwhite/60 text-sm leading-relaxed">{bullet}</span>
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}

export default function ServicesPage() {
  return (
    <div className="min-h-screen bg-base">
      {/* Hero */}
      <section className="relative bg-forest pt-40 pb-24 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_60%_50%_at_30%_60%,rgba(141,255,90,0.05),transparent)] pointer-events-none" />
        <div className="max-w-7xl mx-auto px-6 md:px-10">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <span className="text-lime text-xs font-bold tracking-widest uppercase block mb-4">
              What We Offer
            </span>
            <h1 className="font-black text-4xl sm:text-6xl md:text-8xl lg:text-[10rem] text-white leading-[0.9] tracking-tight">
              OUR
              <br />
              SERVICES
            </h1>
            <p className="mt-8 text-offwhite/60 text-lg max-w-xl leading-relaxed">
              Eleven specialised environmental disciplines, delivered with technical
              rigour and a genuine commitment to sustainable outcomes.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Accordion */}
      <section className="max-w-7xl mx-auto px-6 md:px-10 py-16 md:py-20">
        {services.map((service, i) => (
          <ServiceAccordion key={service.id} service={service} index={i} />
        ))}
      </section>

      {/* CTA strip */}
      <section className="bg-lime py-16">
        <div className="max-w-7xl mx-auto px-6 md:px-10 flex flex-col md:flex-row items-center justify-between gap-6">
          <h2 className="font-black text-2xl sm:text-3xl md:text-4xl text-base leading-tight text-center md:text-left">
            Need a tailored environmental solution?
          </h2>
          <Link
            href="/contact"
            className="shrink-0 px-8 py-4 bg-base text-lime font-bold text-sm tracking-wide rounded-sm hover:bg-base/90 transition-colors"
          >
            Get In Touch
          </Link>
        </div>
      </section>
    </div>
  );
}
