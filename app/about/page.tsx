"use client";
import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import TeamCard from "@/components/TeamCard";
import Marquee from "@/components/ui/Marquee";
import { team, values, goals, philosophy } from "@/lib/data";
import Link from "next/link";

function Section({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 40 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.7 }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-base">
      {/* Hero */}
      <section className="relative bg-forest pt-40 pb-24 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_60%_50%_at_70%_40%,rgba(141,255,90,0.05),transparent)] pointer-events-none" />
        <div className="max-w-7xl mx-auto px-6 md:px-10">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <span className="text-lime text-xs font-bold tracking-widest uppercase block mb-4">
              Who We Are
            </span>
            <h1 className="font-black text-6xl md:text-8xl lg:text-[9rem] text-white leading-[0.9] tracking-tight">
              ABOUT
              <br />
              YALATHE
            </h1>
          </motion.div>
        </div>
      </section>

      {/* Company Story */}
      <section className="py-28 md:py-36 max-w-7xl mx-auto px-6 md:px-10">
        <div className="grid md:grid-cols-2 gap-16 md:gap-24 items-start">
          <Section>
            <span className="text-lime text-xs font-bold tracking-widest uppercase block mb-4">
              Our Story
            </span>
            <h2 className="font-black text-4xl md:text-5xl text-white leading-tight mb-8">
              Born from a vision for a greener Africa
            </h2>
            <div className="space-y-5 text-offwhite/60 text-base leading-relaxed">
              <p>
                Yalathe Environmental was established in 2020 by Mkhuseli Nxusani with a clear
                vision: to build a world-class environmental consultancy from the ground up in
                East London, Eastern Cape — one that reflects the communities it serves.
              </p>
              <p>
                As a 100% Black-owned, 30% women-owned enterprise, Yalathe Environmental stands
                at the intersection of technical excellence, social responsibility, and digital
                innovation. We believe that transformative environmental change requires deep
                partnerships — with clients, regulators, communities, and the natural world.
              </p>
              <p>
                From air quality consulting to GIS-enabled spatial intelligence, our team brings
                diverse qualifications and hands-on experience to every project. We operate with
                integrity, deliver with precision, and measure our success by the positive
                outcomes we create on the ground.
              </p>
            </div>
          </Section>

          <Section className="space-y-6">
            <div className="bg-card border border-white/5 rounded-sm p-8">
              <span className="text-lime text-xs font-bold tracking-widest uppercase block mb-3">
                Registration
              </span>
              <p className="font-black text-2xl text-white">2020/208594/07</p>
            </div>
            <div className="bg-card border border-white/5 rounded-sm p-8">
              <span className="text-lime text-xs font-bold tracking-widest uppercase block mb-3">
                Ownership
              </span>
              <p className="text-offwhite/70 leading-relaxed">
                100% Black-owned · 30% Women-owned
              </p>
            </div>
            <div className="bg-card border border-white/5 rounded-sm p-8">
              <span className="text-lime text-xs font-bold tracking-widest uppercase block mb-3">
                Headquarters
              </span>
              <p className="text-offwhite/70 leading-relaxed">
                151 Amalinda Road, Amalinda<br />East London, Eastern Cape, 5247
              </p>
            </div>
            <div className="bg-card border border-white/5 rounded-sm p-8">
              <span className="text-lime text-xs font-bold tracking-widest uppercase block mb-3">
                Established
              </span>
              <p className="font-black text-2xl text-white">2020</p>
            </div>
          </Section>
        </div>
      </section>

      {/* Values marquee */}
      <div className="border-y border-white/5 py-6 overflow-hidden">
        <Marquee
          text="INTEGRITY · SUSTAINABILITY · EXCELLENCE · DIVERSITY · COLLABORATION · IMPACT · "
          speed="slow"
          textClassName="font-black text-4xl md:text-6xl text-lime/30 tracking-tight"
        />
      </div>

      {/* Values grid */}
      <section className="py-28 md:py-36 max-w-7xl mx-auto px-6 md:px-10">
        <Section className="mb-16">
          <span className="text-lime text-xs font-bold tracking-widest uppercase block mb-4">
            What Drives Us
          </span>
          <h2 className="font-black text-5xl md:text-6xl text-white leading-tight">
            OUR VALUES
          </h2>
        </Section>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {values.map((val) => (
            <div
              key={val.id}
              className="bg-card border border-white/5 rounded-sm p-8 hover:border-lime/20 transition-colors"
            >
              <span className="font-black text-4xl text-lime/20 block mb-4">0{val.id}</span>
              <h3 className="font-bold text-xl text-white mb-3">{val.title}</h3>
              <p className="text-offwhite/50 text-sm leading-relaxed">{val.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Goals */}
      <section className="bg-forest py-28 md:py-36">
        <div className="max-w-7xl mx-auto px-6 md:px-10">
          <Section className="mb-16">
            <span className="text-lime text-xs font-bold tracking-widest uppercase block mb-4">
              Where We&apos;re Headed
            </span>
            <h2 className="font-black text-5xl md:text-6xl text-white leading-tight">
              STRATEGIC GOALS
            </h2>
          </Section>
          <div className="space-y-0 divide-y divide-white/5">
            {goals.map((goal) => (
              <div key={goal.id} className="flex gap-8 md:gap-16 py-8 group">
                <span className="font-black text-4xl md:text-5xl text-white/10 leading-none shrink-0 group-hover:text-lime/30 transition-colors">
                  {goal.number}
                </span>
                <p className="text-offwhite/70 text-lg leading-relaxed self-center">
                  {goal.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Philosophy */}
      <section className="py-28 md:py-36 max-w-7xl mx-auto px-6 md:px-10">
        <Section className="mb-16">
          <span className="text-lime text-xs font-bold tracking-widest uppercase block mb-4">
            How We Work
          </span>
          <h2 className="font-black text-5xl md:text-6xl text-white leading-tight">
            BUSINESS PHILOSOPHY
          </h2>
        </Section>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {philosophy.map((card, i) => {
            const Icon = card.icon;
            const offset = i === 1 ? "md:mt-10" : i === 3 ? "md:-mt-10" : "";
            return (
              <div
                key={card.id}
                className={`bg-card border border-white/5 rounded-sm p-10 ${offset}`}
              >
                <div className="w-12 h-12 rounded-sm bg-lime/10 flex items-center justify-center mb-6">
                  <Icon size={24} className="text-lime" />
                </div>
                <h3 className="font-bold text-2xl text-white mb-4">{card.title}</h3>
                <p className="text-offwhite/50 text-base leading-relaxed">{card.description}</p>
              </div>
            );
          })}
        </div>
      </section>

      {/* Team */}
      <section className="bg-forest py-28 md:py-36">
        <div className="max-w-7xl mx-auto px-6 md:px-10">
          <Section className="mb-16">
            <span className="text-lime text-xs font-bold tracking-widest uppercase block mb-4">
              The People Behind The Work
            </span>
            <h2 className="font-black text-5xl md:text-6xl text-white leading-tight">
              OUR TEAM
            </h2>
          </Section>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {team.map((member) => (
              <TeamCard key={member.id} member={member} />
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-lime py-16">
        <div className="max-w-7xl mx-auto px-6 md:px-10 flex flex-col md:flex-row items-center justify-between gap-6">
          <h2 className="font-black text-3xl md:text-4xl text-base leading-tight">
            Ready to work with us?
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
