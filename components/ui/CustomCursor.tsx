"use client";
import { motion, useSpring } from "framer-motion";
import { useMousePosition } from "@/hooks/useMousePosition";

export default function CustomCursor() {
  const { x, y } = useMousePosition();

  const springConfig = { stiffness: 150, damping: 18, mass: 0.5 };
  const cursorX = useSpring(x, springConfig);
  const cursorY = useSpring(y, springConfig);

  const ringSpring = { stiffness: 80, damping: 16, mass: 0.8 };
  const ringX = useSpring(x, ringSpring);
  const ringY = useSpring(y, ringSpring);

  return (
    <>
      {/* Dot */}
      <motion.div
        className="cursor-dot"
        style={{
          left: cursorX,
          top: cursorY,
          translateX: "-50%",
          translateY: "-50%",
        }}
      />
      {/* Ring */}
      <motion.div
        className="cursor-ring"
        style={{
          left: ringX,
          top: ringY,
          translateX: "-50%",
          translateY: "-50%",
        }}
      />
    </>
  );
}
