import { cn } from "@/lib/utils";
import Image from "next/image";
import React from "react";
import { Reveal } from "./reveal";
import { motion } from "framer-motion";

const tradersData = [
  {
    icon: "/global.svg",
    value: "3",
    title: "Countries",
    className: "left-0 top-0 md:top-14 md:left-[3.5rem]",
  },
  {
    icon: "/reload.svg",
    value: "$350k+",
    title: "Daily transactions",
    className: "top-[55%] right-2 transform  -translate-y-1/2",
  },
  {
    icon: "/avatarPlus.svg",
    value: "10K+",
    title: "Trades",
    className:
      "bottom-0 md:bottom-auto md:top-[73%] left-0 sm:left-12 md:transform  md:-translate-y-1/2 pr-6",
  },
];

interface Props {
  index: number;
  infoData: {
    title: string;
    description: string[];
    infoHighlight: {
      header: string;
      description: string;
      icon: string;
    }[];
  };
}

const StatsWithImage = ({ index, infoData }: Props) => {
  return (
    <div
      className={`${
        index % 2 !== 0
          ? "lg:flex-row-reverse flex-col"
          : "lg:flex-row flex-col"
      } py-5  w-full flex justify-between gap-20 lg:gap-44`}
    >
      <div className="relative h-fit">
        <Image
          priority
          height="558"
          width="528"
          src="/Illustration.png"
          alt="about"
          className="lg:max-w-fit min-w-full"
        />{" "}
        {tradersData.map(({ title, value, icon, className }, index) => (
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
                x: index === 0 || index === 2 ? [-20, 20] : 0,
                y: index === 1 ? [-30, 30] : 0,
                rotate: 0,
                transition: {
                  duration: tradersData.length + index,
                  repeat: Infinity,
                  repeatType: "reverse",
                },
              },
            }}
            key={title}
            style={{ boxShadow: "0px 14px 64px 0px rgba(15, 15, 15, 0.1)" }}
            className={cn(
              "bg-white py-5 w-fit px-16 absolute flex rounded-xl justify-between gap-16",
              className
            )}
          >
            <Image
              priority
              width="26"
              height="26"
              src={icon}
              alt="global icon"
            />
            <div>
              <p className="text-xl md:text-2xl font-bold">{value}</p>
              <p className="text-base md:text-lg text-[#7e7e7e] text-nowrap">
                {title}
              </p>
            </div>
          </motion.div>
        ))}
      </div>

      <Reveal>
        <div className="lg:pl-4">
          <h3 className="mb-3 text-3xl md:text-4xl lg:text-5xl font-bold capitalize">
            {infoData.title}
          </h3>
          <div className="flex flex-col gap-3">
            {infoData.description.map((desc) => (
              <p
                className="text-base md:text-lg lg:text-xl  text-[#7e7e7e]"
                key={desc}
              >
                {desc}
              </p>
            ))}
          </div>

          <div className="flex flex-col gap-7 mt-11 lg:pr-24">
            {infoData.infoHighlight.map(({ header, description, icon }) => (
              <div key={header} className="flex gap-5 md:gap-8 items-start">
                <div>
                  <div className="bg-[#3772ff1a] rounded-full w-[88px] h-[88px] flex items-center justify-center">
                    <Image
                      priority
                      width="100"
                      height="100"
                      src={icon}
                      className="max-w-fit"
                      alt={`${header} icon`}
                    />
                  </div>
                </div>

                <div>
                  <p className="mb-1 md:mb-3 text-xl md:text-2xl font-bold">
                    {header}
                  </p>
                  <p className="text-[#7e7e7e] text-sm md:text-base">
                    {description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </Reveal>
    </div>
  );
};

export default StatsWithImage;
