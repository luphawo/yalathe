"use client";
import { useRef } from "react";
import { useInView } from "framer-motion";
import { useCounterAnimation } from "@/hooks/useCounterAnimation";

interface StatCounterProps {
  value: number;
  suffix?: string;
  label: string;
}

export default function StatCounter({ value, suffix = "", label }: StatCounterProps) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-50px" });
  const count = useCounterAnimation(value, 2000, inView);

  return (
    <div ref={ref} className="flex flex-col">
      <span className="font-black text-6xl md:text-7xl text-white leading-none">
        {count}
        <span className="text-lime">{suffix}</span>
      </span>
      <span className="text-offwhite/50 text-sm tracking-widest uppercase mt-2 font-semibold">
        {label}
      </span>
    </div>
  );
}
