"use client";
import { motion, useAnimation, useInView } from "framer-motion";
import React from "react";

interface Props {
  children: JSX.Element;
  width?: "fit-content" | "100%";
}
export const Reveal = ({ children, width = "fit-content" }: Props) => {
  const ref = React.useRef(null);
  const isInView = useInView(ref);

  const mainControls = useAnimation();

  React.useEffect(() => {
    if (isInView) {
      mainControls.start("visible");
    } else {
      mainControls.start("hidden"); // Reset to hidden when out of view
    }
  }, [isInView, mainControls]);

  return (
    <div
      ref={ref}
      style={{
        position: "relative",
        width,
        overflow: "hidden",
      }}
    >
      <motion.div
        variants={{
          hidden: { opacity: 0, y: 75 },
          visible: { opacity: 1, y: 0 },
        }}
        initial="hidden"
        animate={mainControls}
        transition={{ duration: 0.5, delay: 0.25 }}
      >
        {children}
      </motion.div>
    </div>
  );
};
