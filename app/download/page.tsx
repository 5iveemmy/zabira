"use client";

import React from "react";
import dynamic from "next/dynamic";
import Image from "next/image";
import DownloadBadges from "@/components/download-badges";
import { Avatar, AvatarImage } from "@/components/ui/avatar";
import { motion } from "framer-motion";

const DownloadSection = dynamic(
  () => import("../containers/footer/download-section"),
  {
    ssr: false,
  }
);

const steps = [
  {
    num: 1,
    title: "Download Zabira",
    story:
      "With a team of highly experienced designers, we have done it carefully and simply. The components work together to create a beautiful landing. It is essential template for designers.",
  },
  {
    num: 2,
    title: "Create an Account",
    story:
      "We have done it carefully and simply. Our models take a long time to research and work on, so you can easily and simply use the ingredients to make the landing.",
  },
  {
    num: 3,
    title: "Start Trading!",
    story:
      "Components are designed to match perfectly in a variety of situations, helping you create multiple target spills quickly.",
  },
];

const Download = () => {
  const quote =
    "Zabira serves as the main hub for designs of 3 teams at our company. When anyone needs to access a design - it’s in CaLan.";

  const words = quote.split(" ");

  return (
    <>
      <DownloadSection />

      <section>
        <div className="get-started-blue p-8 md:p-16 relative">
          <h1 className="text-3xl md:text-4xl lg:text-5xl text-center font-bold pb-5 md:pb-3">
            Get Started in 3 Easy Steps
          </h1>

          <Image
            src="/happy-customer.svg"
            width="472"
            height="541"
            alt="happy customer"
            className="absolute bottom-0 left-16 hidden lg:block"
          />
          <div className="flex flex-col items-center lg:items-start lg:flex-row justify-between">
            <Image
              src="/happy-customer.svg"
              width="472"
              height="541"
              alt="happy customer"
              className="visible lg:invisible"
            />
            <div className="flex flex-col gap-8 mt-8 lg:w-[50%] items-center xl:items-start">
              {steps.map(({ num, story, title }) => (
                <div key={num} className="flex gap-4 xl:pr-48">
                  <div>
                    <div className="rounded-full h-[40px] w-[40px] md:w-[50px] md:h-[50px] bg-white flex justify-center items-center">
                      <p className="font-bold text-[#7e7e7e]">{num}</p>
                    </div>
                  </div>

                  <div>
                    <h3 className="font-bold text-lg mb-3">{title}</h3>
                    <p className="text-[#757575]">{story}</p>
                  </div>
                </div>
              ))}
              <DownloadBadges className="items-center justify-center py-1 " />
            </div>
          </div>
        </div>
      </section>

      <section className=" flex justify-center flex-col items-center py-16">
        <h3 className="text-2xl md:text-3xl lg:text-4xl text-center lg:max-w-[50%] font-bold leading-normal tracking-normal pb-12">
          &quot;
          {words.map((word, index) => (
            <motion.span
              key={index}
              className="inline-block"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.4,
                delay: index * 0.1,
              }}
            >
              {word}&nbsp;
            </motion.span>
          ))}
          &quot;
        </h3>
        <Avatar className=" w-16 h-15 border">
          <AvatarImage src="/ceo.png" className="object-cover" />
        </Avatar>
        <h4 className="text-xl md:text-2xl font-bold pt-1 md:pt-3 md:pb-1">
          Isaac John
        </h4>
        <p className="text-sm text-[#7e7e7e]">Founder at Zabira Technologies</p>
      </section>
    </>
  );
};

export default Download;
