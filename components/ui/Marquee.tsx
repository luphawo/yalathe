"use client";

interface MarqueeProps {
  text: string;
  speed?: "normal" | "slow";
  className?: string;
  textClassName?: string;
}

export default function Marquee({
  text,
  speed = "normal",
  className = "",
  textClassName = "",
}: MarqueeProps) {
  const animClass = speed === "slow" ? "animate-marquee-slow" : "animate-marquee";

  return (
    <div className={`overflow-hidden whitespace-nowrap ${className}`}>
      <div className={`inline-flex ${animClass}`}>
        <span className={`${textClassName} pr-8`}>{text}</span>
        <span className={`${textClassName} pr-8`}>{text}</span>
      </div>
    </div>
  );
}
