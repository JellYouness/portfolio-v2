"use client";
import React, { useEffect, useRef } from "react";
import { motion, useAnimation, useInView } from "framer-motion";

const SlideUp = ({ children, index, reverse }: any) => {
  const ref = useRef(null);
  const isInView = useInView(ref);
  const controls = useAnimation();
  const variants = {
    visible: {
      opacity: 1,
      y: 0,
      transition: index ? { duration: 0.5 * index } : { duration: 0.5 },
    },
    hidden: { opacity: 0, y: 75 },
  };

  const reverseVariants = {
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 * (5 - index) },
    },
    hidden: { opacity: 0, y: -75 },
  };

  useEffect(() => {
    if (isInView) {
      controls.start("visible");
    }
  }, [controls, isInView]);
  return (
    <motion.div
      key={index}
      ref={ref}
      animate={controls}
      initial="hidden"
      variants={reverse ? reverseVariants : variants}
    >
      {children}
    </motion.div>
  );
};

export default SlideUp;
