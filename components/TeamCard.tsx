"use client";
import { motion } from "framer-motion";
import { type TeamMember } from "@/lib/data";

interface TeamCardProps {
  member: TeamMember;
}

export default function TeamCard({ member }: TeamCardProps) {
  return (
    <motion.div
      className="group relative bg-card border border-white/5 rounded-sm p-8 overflow-hidden"
      whileHover={{ boxShadow: "0 0 60px rgba(141,255,90,0.08)" }}
      transition={{ duration: 0.3 }}
    >
      {/* Lime glow bg */}
      <div className="absolute inset-0 bg-lime/[0.03] opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

      <div className="relative z-10">
        {/* Avatar */}
        <div className="w-16 h-16 rounded-full bg-lime flex items-center justify-center mb-6">
          <span className="font-black text-lg text-base">{member.initials}</span>
        </div>

        {/* Role */}
        <p className="text-lime text-xs font-bold tracking-widest uppercase mb-2">
          {member.role}
        </p>

        {/* Name */}
        <h3 className="font-bold text-2xl text-white mb-4">{member.name}</h3>

        {/* Education */}
        <div className="inline-flex items-center gap-2 bg-white/5 px-3 py-1.5 rounded-sm mb-4">
          <span className="text-xs text-offwhite/60 font-mono">
            {member.education} · {member.institution}, {member.year}
          </span>
        </div>

        {/* Experience */}
        <p className="text-offwhite/50 text-sm leading-relaxed">{member.experience}</p>

        {/* Years */}
        <div className="mt-6 pt-6 border-t border-white/5 flex items-center gap-2">
          <span className="text-lime font-black text-2xl">{member.yearsExp}+</span>
          <span className="text-offwhite/40 text-xs uppercase tracking-widest font-semibold">
            Years Experience
          </span>
        </div>
      </div>
    </motion.div>
  );
}
