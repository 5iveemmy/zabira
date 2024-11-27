import Link from "next/link";
import React from "react";
import { motion } from "framer-motion";

interface Props {
  icon: React.ReactNode;
  link?: string;
  className?: string;
  floatSpeed?: number; // New prop to control floating speed
}

const Icon: React.FC<Props> = ({ icon, link, className, floatSpeed = 0 }) => {
  return (
    <motion.div
      animate={["initial"]}
      whileHover={["grow"]}
      variants={{
        grow: {
          scale: 1.1,
        },
        initial: {
          y: [-10, 10],
          rotate: 0,
          transition: {
            duration: floatSpeed, // Use floatSpeed to control the rate
            repeat: Infinity,
            repeatType: "reverse",
          },
        },
      }}
    >
      <Link href={link as string} target="_blank" rel="noopener noreferrer">
        <div className={`${className || ""}`}>{icon}</div>
      </Link>
    </motion.div>
  );
};

export default Icon;
