import React, { useState } from "react";
import { motion, useAnimationControls } from "framer-motion";

const BouncingText = ({ children }) => {
  const controls = useAnimationControls();
  const [isBouncing, setIsBouncing] = useState(false);

  const bounce = () => {
    controls.start({
      transform: [
        "scale3d(1, 1, 1)",
        "scale3d(1.4, .55, 1)",
        "scale3d(.75, 1.25, 1)",
        "scale3d(1.25, .85, 1)",
        "scale3d(.9, 1.05, 1)",
        "scale3d(1, 1, 1)",
      ],
      transition: {
        times: [0, 0.1, 0.3, 0.6, 1.0],
        duration: 0.8,
      },
    });
    setIsBouncing(true);
  };

  return (
    <motion.span
      className="animated-text"
      animate={controls}
      onMouseOver={() => {
        if (!isBouncing) bounce();
      }}
      onAnimationComplete={() => setIsBouncing(false)}
    >
      {children}
    </motion.span>
  );
};

export default BouncingText;
