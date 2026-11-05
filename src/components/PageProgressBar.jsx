import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { motion } from "framer-motion";

export const PageProgressBar = () => {
  const location = useLocation();
  const [transitionKey, setTransitionKey] = useState(0);

  useEffect(() => {
    setTransitionKey((prev) => prev + 1);
  }, [location.pathname, location.search]);

  return (
    <div className="fixed top-0 left-0 right-0 z-[100] h-[3px] pointer-events-none overflow-hidden">
      <motion.div
        key={transitionKey}
        initial={{ scaleX: 0, originX: 0, opacity: 1 }}
        animate={{
          scaleX: [0, 0.65, 1],
          opacity: [1, 1, 0],
        }}
        transition={{
          duration: 0.5,
          times: [0, 0.55, 1],
          ease: [0.22, 1, 0.36, 1],
        }}
        className="h-full w-full bg-gradient-to-r from-saffron-500 via-maroon-700 to-saffron-400 shadow-[0_0_10px_rgba(224,122,24,0.7)]"
      />
    </div>
  );
};
