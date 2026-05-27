import { useEffect, useState } from "react";
import { motion, useMotionValue, useSpring } from "motion/react";

export default function CustomCursor() {
  const [isMobile, setIsMobile] = useState(true);
  const [hoverState, setHoverState] = useState<
    "default" | "clickable" | "cta" | "text"
  >("default");

  const cursorX = useMotionValue(-100);
  const cursorY = useMotionValue(-100);

  const springConfig = { damping: 30, stiffness: 400, mass: 0.6 };
  const smoothX = useSpring(cursorX, springConfig);
  const smoothY = useSpring(cursorY, springConfig);

  useEffect(() => {
    // Detect touchscreen devices to disable custom cursor
    const checkTouch = () => {
      const hasTouch =
        "ontouchstart" in window ||
        navigator.maxTouchPoints > 0;
      setIsMobile(hasTouch);
    };

    checkTouch();
    window.addEventListener("resize", checkTouch);

    if (isMobile) return;

    const moveCursor = (e: MouseEvent) => {
      cursorX.set(e.clientX);
      cursorY.set(e.clientY);
    };

    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (!target) return;

      const closestClickable = target.closest("a, button, [role='button'], input[type='submit']");
      const closestInput = target.closest("input, textarea, select");
      const closestParagraph = target.closest("p, li, blockquote");

      if (closestClickable) {
        if (closestClickable.classList.contains("cta-primary") || closestClickable.classList.contains("btn-gold")) {
          setHoverState("cta");
        } else {
          setHoverState("clickable");
        }
      } else if (closestInput) {
        setHoverState("text");
      } else if (closestParagraph) {
        setHoverState("text");
      } else {
        setHoverState("default");
      }
    };

    window.addEventListener("mousemove", moveCursor);
    window.addEventListener("mouseover", handleMouseOver);

    return () => {
      window.removeEventListener("resize", checkTouch);
      window.removeEventListener("mousemove", moveCursor);
      window.removeEventListener("mouseover", handleMouseOver);
    };
  }, [isMobile, cursorX, cursorY]);

  if (isMobile) return null;

  // Custom configurations for the responsive cursor circle
  const variants = {
    default: {
      width: 10,
      height: 10,
      backgroundColor: "#ffffff",
      border: "0px solid transparent",
    },
    clickable: {
      width: 36,
      height: 36,
      backgroundColor: "rgba(226, 184, 87, 0.08)",
      border: "1.5px solid #e2b857",
    },
    cta: {
      width: 44,
      height: 44,
      backgroundColor: "#e2b857",
      border: "0px solid transparent",
      mixBlendMode: "difference" as const,
    },
    text: {
      width: 4,
      height: 4,
      backgroundColor: "rgba(255, 255, 255, 0.4)",
      border: "0px solid transparent",
    },
  };

  const currentVariant = variants[hoverState] || variants.default;

  return (
    <motion.div
      className="fixed top-0 left-0 rounded-full pointer-events-none z-50 -translate-x-1/2 -translate-y-1/2 flex items-center justify-center"
      style={{
        x: smoothX,
        y: smoothY,
        width: currentVariant.width,
        height: currentVariant.height,
        backgroundColor: currentVariant.backgroundColor,
        border: currentVariant.border,
        mixBlendMode: currentVariant.mixBlendMode || "normal",
      }}
      animate={{
        scale: 1,
      }}
      transition={{
        type: "spring",
        stiffness: 450,
        damping: 28,
      }}
    />
  );
}
