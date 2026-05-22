"use client";
import { useEffect } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

/* ── Luminance helpers ─────────────────────────────────────────────────────── */

/** Parse an rgb/rgba string → [r, g, b] 0-255, or null if transparent/invalid */
function parseRGB(color: string): [number, number, number] | null {
  if (!color || color === "transparent" || color === "rgba(0, 0, 0, 0)") return null;
  const m = color.match(/rgba?\((\d+),\s*(\d+),\s*(\d+)/);
  if (!m) return null;
  return [parseInt(m[1]), parseInt(m[2]), parseInt(m[3])];
}

/** Relative luminance (WCAG formula), 0 = black, 1 = white */
function luminance(r: number, g: number, b: number): number {
  const toLinear = (c: number) => {
    const s = c / 255;
    return s <= 0.03928 ? s / 12.92 : Math.pow((s + 0.055) / 1.055, 2.4);
  };
  return 0.2126 * toLinear(r) + 0.7152 * toLinear(g) + 0.0722 * toLinear(b);
}

/**
 * Walk the element stack at (x, y), find the first opaque background,
 * and return the luminance (0–1). Falls back to 0 (dark) if nothing found.
 */
function getLuminanceAt(x: number, y: number): number {
  try {
    const els = document.elementsFromPoint(x, y);
    for (const el of els) {
      // Skip the cursor elements themselves
      if ((el as HTMLElement).classList?.contains("cursor-dot") ||
          (el as HTMLElement).classList?.contains("cursor-ring")) continue;

      const bg = window.getComputedStyle(el as HTMLElement).backgroundColor;
      const rgb = parseRGB(bg);
      if (rgb) return luminance(...rgb);
    }
  } catch {
    // SSR / edge case — ignore
  }
  return 0; // default: dark background → use lime cursor
}

/* ── Component ─────────────────────────────────────────────────────────────── */

export default function CustomCursor() {
  // Position MotionValues — updated directly, no React re-renders
  const mouseX = useMotionValue(-100);
  const mouseY = useMotionValue(-100);

  // Dot: tight spring — closely follows pointer
  const dotX = useSpring(mouseX, { stiffness: 200, damping: 20, mass: 0.4 });
  const dotY = useSpring(mouseY, { stiffness: 200, damping: 20, mass: 0.4 });

  // Ring: looser spring — trails behind
  const ringX = useSpring(mouseX, { stiffness: 80, damping: 18, mass: 0.8 });
  const ringY = useSpring(mouseY, { stiffness: 80, damping: 18, mass: 0.8 });

  // Colour MotionValue — CSS transition on the element handles the smooth flip
  const cursorColor = useMotionValue("#8DFF5A");

  useEffect(() => {
    const move = (e: MouseEvent) => {
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);

      // Pick a colour that contrasts the surface under the cursor
      const lum = getLuminanceAt(e.clientX, e.clientY);
      // Threshold 0.35: anything brighter than mid-grey gets a dark cursor
      cursorColor.set(lum > 0.35 ? "#0A0F0A" : "#8DFF5A");
    };

    window.addEventListener("mousemove", move);
    return () => window.removeEventListener("mousemove", move);
  }, [mouseX, mouseY, cursorColor]);

  return (
    <>
      {/* Dot — backgroundColor controlled by MotionValue, colour flip by CSS transition */}
      <motion.div
        className="cursor-dot"
        style={{
          x: dotX,
          y: dotY,
          translateX: "-50%",
          translateY: "-50%",
          backgroundColor: cursorColor,
        }}
      />
      {/* Ring — borderColor controlled by MotionValue */}
      <motion.div
        className="cursor-ring"
        style={{
          x: ringX,
          y: ringY,
          translateX: "-50%",
          translateY: "-50%",
          borderColor: cursorColor,
        }}
      />
    </>
  );
}
