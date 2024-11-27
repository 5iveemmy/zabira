"use client";
import React from "react";
import { BiUpArrowAlt } from "react-icons/bi";
import CountUp from "react-countup";
import { useMediaQuery } from "@/hooks/use-media-query";
import { motion, useAnimation, useInView } from "framer-motion";

const reachData = [
  {
    title: "Quaterly volume traded",
    value: 5620000000,
    prefix: "$",
    suffix: "+",
  },
  {
    title: "Fiat currencies supported - USD, NGN, GHC & KES",
    value: 4,
  },
  {
    title: "Crypto Assets supported - BTC, ETH. BNB...",
    value: 20,
    suffix: "+",
  },
  {
    title: "Global Trusted Users",
    value: 200000,
    suffix: "+",
  },
];

const OurReach = () => {
  const ourReachRef = React.useRef(null);
  const isInView = useInView(ourReachRef);

  const mainControls = useAnimation();

  React.useEffect(() => {
    if (isInView) {
      mainControls.start("visible");
    } else {
      mainControls.start("hidden");
    }
  }, [isInView, mainControls]);

  const textVariant = {
    hidden: { opacity: 0, y: 20 },
    visible: (index: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.4,
        delay: index * 0.05,
      },
    }),
  };

  const formatNumber = (value: number): string => {
    if (value >= 1000000000) {
      return (value / 1000000000).toFixed(2) + "B";
    } else if (value >= 1000000) {
      return (value / 1000000).toFixed(1) + "M";
    } else if (value >= 1000) {
      const formatted = value / 1000;
      return (formatted % 1 === 0 ? formatted : formatted.toFixed(0)) + "K";
    } else {
      return value.toString();
    }
  };

  const text = "Don't take our word for it, better experienced than being told";

  const isDesktop = useMediaQuery("(min-width: 640px)");

  const characters = text.split(" ");

  return (
    <section className="bg-[url('/sm-map.png')]">
      <div className="custom-container py-16 md:py-20 lg:py-32 px-3 gap-16 lg:gap-0 flex-col lg:flex-row flex items-start lg:items-center justify-between text-white">
        <div className="lg:w-2/5">
          <h1 className="text-4xl md:text-5xl lg:text-[64px] leading-tight  font-bold mb-4">
            Our reach globally
          </h1>

          <div ref={ourReachRef}>
            {characters.map((char, index) => (
              <motion.p
                key={index}
                className="inline-block"
                variants={textVariant}
                custom={index}
                initial="hidden"
                animate={mainControls}
              >
                {char}&nbsp;
              </motion.p>
            ))}
          </div>
        </div>

        <div className="grid sm:grid-cols-[50%_50%] gap-4 sm:gap-0 lg:w-6/12">
          {reachData.map((reach, index) => (
            <div
              key={reach.title}
              className="p-8 flex flex-col"
              style={{
                borderBottom: isDesktop
                  ? index < 2
                    ? "0.5px solid #334ac0"
                    : ""
                  : index !== reachData?.length - 1
                  ? "0.5px solid #334ac0"
                  : "",
                borderLeft: isDesktop
                  ? "4px dashed #dce0e5"
                  : "2px dashed #dce0e5",
              }}
            >
              <div className="flex items-center">
                {(index === 1 || index === 2) && (
                  <BiUpArrowAlt className="text-4xl mt-2 text-[#0083f8]" />
                )}
                <h2 className="text-4xl md:text-5xl font-bold pb-4">
                  {reach.prefix}
                  <CountUp
                    duration={10}
                    end={reach.value}
                    formattingFn={formatNumber}
                  />
                  {reach.suffix}
                </h2>
              </div>
              <p>{reach.title}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default OurReach;
