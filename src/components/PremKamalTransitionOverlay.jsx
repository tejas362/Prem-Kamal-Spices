import React, { useEffect, useState, useRef } from "react";
import { useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { KamalMotif } from "./KashmiriMotifs";
import { shopInfo } from "../data/shopInfo";

export const PremKamalTransitionOverlay = () => {
  const location = useLocation();
  const [isTransitioning, setIsTransitioning] = useState(false);
  const firstRender = useRef(true);

  useEffect(() => {
    // Skip on first initial load so user lands instantly
    if (firstRender.current) {
      firstRender.current = false;
      return;
    }

    setIsTransitioning(true);
    const timer = setTimeout(() => {
      setIsTransitioning(false);
    }, 650);

    return () => clearTimeout(timer);
  }, [location.pathname]);

  return (
    <AnimatePresence mode="wait">
      {isTransitioning && (
        <motion.div
          key="pk-curtain-transition"
          initial={{ y: "100%" }}
          animate={{ y: "0%" }}
          exit={{ y: "-100%" }}
          transition={{
            duration: 0.65,
            ease: [0.76, 0, 0.24, 1], // Smooth luxury curtain cubic-bezier
          }}
          className="fixed inset-0 z-[9999] bg-gradient-to-b from-maroon-950 via-maroon-900 to-maroon-950 flex flex-col items-center justify-center overflow-hidden border-t-2 border-b-2 border-saffron-500 shadow-2xl pointer-events-none"
        >
          {/* Saffron Ambient Glow & Halo */}
          <div className="absolute w-[420px] h-[420px] bg-saffron-500/15 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute -top-20 -left-20 w-72 h-72 bg-saffron-500/10 rounded-full blur-2xl pointer-events-none" />
          <div className="absolute -bottom-20 -right-20 w-72 h-72 bg-saffron-500/10 rounded-full blur-2xl pointer-events-none" />

          {/* Floating Spice Sparkle Particles */}
          <div className="absolute inset-0 pointer-events-none">
            {[...Array(8)].map((_, i) => (
              <motion.div
                key={i}
                initial={{
                  opacity: 0,
                  y: 40,
                  x: (i - 3.5) * 45,
                  scale: 0.5,
                }}
                animate={{
                  opacity: [0, 0.9, 0],
                  y: -50,
                  scale: [0.5, 1.2, 0.6],
                }}
                transition={{
                  duration: 0.6,
                  delay: 0.08 + i * 0.04,
                  ease: "easeOut",
                }}
                className="absolute top-1/2 left-1/2 w-2 h-2 rounded-full bg-saffron-400 shadow-[0_0_8px_#E07A18]"
              />
            ))}
          </div>

          {/* Center Brand Emblem & Blooming Kamal (Lotus) */}
          <div className="relative z-10 flex flex-col items-center text-center px-4">
            
            {/* Logo Circular Seal with Pulsing Saffron Aura */}
            <motion.div
              initial={{ scale: 0.7, opacity: 0, rotate: -8 }}
              animate={{ scale: 1, opacity: 1, rotate: 0 }}
              exit={{ scale: 0.85, opacity: 0, rotate: 8 }}
              transition={{ duration: 0.4, ease: "easeOut" }}
              className="relative mb-4"
            >
              {/* Pulsing Saffron Aura Behind Emblem */}
              <div className="absolute -inset-2.5 rounded-full bg-gradient-to-r from-saffron-500 via-saffron-400 to-saffron-500 opacity-60 blur-md animate-pulse" />

              <div className="relative w-20 h-20 sm:w-24 sm:h-24 rounded-full overflow-hidden bg-maroon-950 p-1 border-2 border-saffron-400 shadow-glow-gold flex items-center justify-center">
                <img
                  src="/assets/brand/logo.png"
                  alt="Prem Kamal Spices Circular Seal"
                  className="w-full h-full object-contain rounded-full drop-shadow-md"
                />
              </div>

              {/* Blooming Kamal Motif Badge */}
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ delay: 0.15, type: "spring", stiffness: 350 }}
                className="absolute -bottom-2 left-1/2 -translate-x-1/2 px-2.5 py-0.5 rounded-full bg-saffron-500 text-maroon-950 font-bold text-[9px] uppercase tracking-wider shadow-sm flex items-center gap-1 whitespace-nowrap"
              >
                <KamalMotif className="w-3 h-3 text-maroon-950" />
                <span>Kashmiri Bazar</span>
              </motion.div>
            </motion.div>

            {/* Brand Typography */}
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              transition={{ delay: 0.12, duration: 0.3 }}
              className="space-y-1"
            >
              <h2 className="font-serif text-2xl sm:text-3xl font-bold text-cream-50 tracking-tight leading-snug">
                Prem Kamal Spices
              </h2>
              
              <p className="font-serif italic text-xs sm:text-sm text-saffron-300">
                “{shopInfo.tagline}”
              </p>

              <span className="text-[10px] uppercase tracking-widest text-cream-300/80 block pt-0.5 font-medium">
                Dwarka Sector 7 • New Delhi
              </span>
            </motion.div>

          </div>

        </motion.div>
      )}
    </AnimatePresence>
  );
};
