"use client";

import DownloadBadges from "@/components/download-badges";
import { Reveal } from "@/components/reveal";
import Image from "next/image";
import React from "react";
import { motion } from "framer-motion";

const DownloadSection = () => {
  return (
    <section className="bg-brand pt-14 zabira-download relative">
      <div className="pt-24 custom-container flex-col lg:flex-row flex items-center gap-36 lg:gap-96">
        <div className="lg:w-[35%] flex flex-col gap-1 text-white">
          <Reveal>
            <h1 className="pb-2 text-4xl md:text-5xl leading-tight  font-bold">
              Download the Zabira App Today!
            </h1>
          </Reveal>

          <Reveal>
            <p className="text-lg">
              We&lsquo;ve done it carefully and simply. Combined with the
              ingredients makes for beautiful landings
            </p>
          </Reveal>

          <DownloadBadges />
        </div>
        <div className="relative">
          <motion.div
            animate={["initial"]}
            whileHover={["grow"]}
            variants={{
              grow: {
                scale: 1.1,
              },
              rotate: {
                rotate: [null, -5, 5, 0],
                transition: {
                  duration: 10,
                },
              },
              initial: {
                y: [-10, 10],
                rotate: 0,
                transition: {
                  duration: 2,
                  repeat: Infinity,
                  repeatType: "reverse",
                },
              },
            }}
          >
            <Image
              priority
              width="317"
              height="572"
              src="/phone.svg"
              alt="phone"
              className="-mb-8"
            />
          </motion.div>

          <motion.div
            animate={["initial"]}
            whileHover={["grow"]}
            variants={{
              grow: {
                scale: 1.1,
              },
              rotate: {
                rotate: [null, -5, 5, 0],
                transition: {
                  duration: 10,
                },
              },
              initial: {
                x: [-10, 10],
                rotate: 0,
                transition: {
                  duration: 2,
                  repeat: Infinity,
                  repeatType: "reverse",
                },
              },
            }}
            className="hidden lg:block absolute -top-[5rem] -right-[20rem]"
          >
            <Image
              priority
              width="192"
              height="109"
              src="/three-arrows.svg"
              alt="arrows"
            />
          </motion.div>

          <motion.div
            animate={["initial"]}
            whileHover={["grow"]}
            variants={{
              grow: {
                scale: 1.1,
              },
              rotate: {
                rotate: [null, -5, 5, 0],
                transition: {
                  duration: 10,
                },
              },
              initial: {
                x: [-10, 10],
                rotate: 0,
                transition: {
                  duration: 2,
                  repeat: Infinity,
                  repeatType: "reverse",
                },
              },
            }}
            className="hidden lg:block absolute bottom-[5.5rem] -right-[15.5rem]"
          >
            <Image src="/plane.svg" width="160" height="86" alt="plane icon" />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default DownloadSection;
