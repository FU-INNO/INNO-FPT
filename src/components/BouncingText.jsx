// eslint-disable-next-line no-unused-vars
import React from "react";
import { motion } from "framer-motion";
import "tailwindcss/tailwind.css";

// eslint-disable-next-line react/prop-types
const BouncingText = ({ text }) => {
  // eslint-disable-next-line react/prop-types
  const words = text.split(" ");

  const container = {
    hidden: { opacity: 0 },
    visible: (i = 1) => ({
      opacity: 1,
      transition: { staggerChildren: 0.1, delayChildren: 0.04 * i },
    }),
  };

  const child = {
    visible: {
      y: [0, -30, 0],
      transition: {
        duration: 0.6,
        ease: "easeInOut",
      },
    },
    hidden: {
      y: 0,
    },
  };

  return (
    <motion.div
      variants={container}
      initial="hidden"
      animate="visible"
      className="inline-block"
    >
      {words.map((word, wordIndex) => (
        <span key={wordIndex} className="inline-block mr-2">
          {Array.from(word).map((letter, index) => (
            <motion.span key={index} variants={child} className="inline-block">
              {letter}
            </motion.span>
          ))}
        </span>
      ))}
    </motion.div>
  );
};

export default BouncingText;
