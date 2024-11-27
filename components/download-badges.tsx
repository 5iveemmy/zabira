"use client";

import { cn } from "@/lib/utils";
import Image from "next/image";
import { motion } from "framer-motion";

interface DownloadBadgesProps {
  className?: string;
}

const DownloadBadges = ({ className }: DownloadBadgesProps) => (
  <div className={cn("gap-4 flex py-4", className)}>
    <motion.a
      whileHover={{ scale: 1.2 }}
      whileTap={{ scale: 0.8 }}
      rel="noopener noreferrer"
      target="_blank"
      href="https://play.google.com/store/apps/details?id=dev.app.grizab.ng"
    >
      <Image
        src="/google-play-badge.svg"
        width="151"
        className="rounded-2xl"
        height="41"
        alt="google play badge"
      />
    </motion.a>

    <motion.a
      whileHover={{ scale: 1.2 }}
      whileTap={{ scale: 0.8 }}
      rel="noopener noreferrer"
      target="_blank"
      href="https://apps.apple.com/ng/app/zabira-pro/id6504557775"
    >
      <Image
        src="/app-store-badge.svg"
        width="151"
        height="41"
        className="rounded-2xl"
        alt="app store badge"
      />
    </motion.a>
  </div>
);

export default DownloadBadges;
