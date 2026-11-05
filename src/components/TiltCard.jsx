import React, { useRef, useState } from "react";
import { motion } from "framer-motion";

export const TiltCard = ({
  children,
  className = "",
  glare = true,
  maxTilt = 8,
  scale = 1.02,
  ...props
}) => {
  const cardRef = useRef(null);
  const [tilt, setTilt] = useState({ x: 0, y: 0 });
  const [glarePos, setGlarePos] = useState({ x: 50, y: 50, opacity: 0 });

  const handleMouseMove = (e) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    const centerX = rect.width / 2;
    const centerY = rect.height / 2;

    const rotateX = ((y - centerY) / centerY) * -maxTilt;
    const rotateY = ((x - centerX) / centerX) * maxTilt;

    setTilt({ x: rotateX, y: rotateY });

    if (glare) {
      setGlarePos({
        x: (x / rect.width) * 100,
        y: (y / rect.height) * 100,
        opacity: 0.18,
      });
    }
  };

  const handleMouseLeave = () => {
    setTilt({ x: 0, y: 0 });
    if (glare) {
      setGlarePos((prev) => ({ ...prev, opacity: 0 }));
    }
  };

  return (
    <motion.div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      animate={{
        rotateX: tilt.x,
        rotateY: tilt.y,
        transformPerspective: 1000,
      }}
      whileHover={{ scale }}
      transition={{ type: "spring", stiffness: 350, damping: 25 }}
      className={`relative transform-gpu will-change-transform ${className}`}
      {...props}
    >
      {children}

      {glare && (
        <div
          className="absolute inset-0 pointer-events-none rounded-[inherit] transition-opacity duration-300 overflow-hidden"
          style={{
            opacity: glarePos.opacity,
            background: `radial-gradient(circle 220px at ${glarePos.x}% ${glarePos.y}%, rgba(255, 255, 255, 0.8), transparent 70%)`,
          }}
        />
      )}
    </motion.div>
  );
};
