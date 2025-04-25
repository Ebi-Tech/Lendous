"use client";

import { motion } from "framer-motion";

const SlideInSection = ({ children, direction = "left", className }) => {
  const variants = {
    hidden: {
      opacity: 0,
      x: direction === "left" ? -150 : direction === "right" ? 150 : 0,
      y: direction === "up" ? 150 : direction === "down" ? -150 : 0,
      scale: 0.95,
    },
    visible: {
      opacity: 1,
      x: 0,
      y: 0,
      scale: 1,
      transition: {
        duration: 1,
        ease: "easeOut",
        staggerChildren: 0.2,
      },
    },
  };

  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-100px" }}
      variants={variants}
      className={className}
    >
      {children}
    </motion.div>
  );
};

export default SlideInSection;