"use client";
import Link from "next/link";
import { motion } from "framer-motion";
import { type Service } from "@/lib/data";

const MotionLink = motion(Link);

interface ServiceCardProps {
  service: Service;
}

export default function ServiceCard({ service }: ServiceCardProps) {
  const Icon = service.icon;

  return (
    <MotionLink
      href={`/services#service-${service.number}`}
      className="group relative flex flex-col min-w-[320px] md:min-w-[380px] h-[480px] bg-card border border-white/5 rounded-sm p-8 overflow-hidden flex-shrink-0"
      whileHover={{ y: -8 }}
      transition={{ duration: 0.3, ease: "easeOut" }}
    >
      {/* Lime left border on hover */}
      <div className="absolute left-0 top-0 bottom-0 w-0.5 bg-lime scale-y-0 group-hover:scale-y-100 transition-transform duration-300 origin-top" />

      {/* Number */}
      <span className="font-black text-6xl text-lime/20 leading-none mb-auto">
        {service.number}
      </span>

      {/* Icon */}
      <div className="mb-4 mt-8">
        <Icon size={28} className="text-lime" />
      </div>

      {/* Title */}
      <h3 className="font-bold text-xl text-white leading-tight mb-3">
        {service.title}
      </h3>

      {/* Description */}
      <p className="text-offwhite/50 text-sm leading-relaxed line-clamp-3">
        {service.description}
      </p>

      {/* Arrow indicator */}
      <div className="mt-6 flex items-center gap-2 text-lime text-xs font-bold tracking-widest uppercase opacity-0 group-hover:opacity-100 transition-opacity duration-300">
        <span>Learn More</span>
        <span>→</span>
      </div>
    </MotionLink>
  );
}
