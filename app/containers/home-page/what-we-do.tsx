"use client";

import ZabiraWork from "@/components/zabira-work";
import { AlarmClock, Calculator, Headset, ShieldAlert } from "lucide-react";
import Image from "next/image";
import React, { useState } from "react";
import { BiPlayCircle } from "react-icons/bi";
import FsLightbox from "fslightbox-react";
import { useMediaQuery } from "@/hooks/use-media-query";

const features = [
  {
    title: "Instant Transactions",
    description:
      "Experience quick, hassle-free transactions, No need to fear delays",
    icon: <AlarmClock className="text-brand w-7 h-7 mb-4" />,
  },
  {
    title: "Best Rates",
    description:
      "Enjoy the best rates in the markey. Your wallet will thank you",
    icon: <Calculator className="text-brand w-7 h-7 mb-4" />,
  },
  {
    title: "Secure Transactions",
    description:
      "Rest easy knowing your teades are protected. Safety is our priority",
    icon: <ShieldAlert className="text-brand w-7 h-7 mb-4" />,
  },
  {
    title: "24/7 Customer Support",
    description: "Reliable 24/7 support for your trades. Trust us to be there",
    icon: <Headset className="text-brand w-7 h-7 mb-4" />,
  },
];

const WhatWeDo = () => {
  const isDesktop = useMediaQuery("(min-width: 640px)");
  const [lightboxController, setLightboxController] = useState({
    toggler: false,
    slide: 1,
  });

  const openLightboxOnSlide = (number: number) => {
    setLightboxController({
      toggler: !lightboxController.toggler,
      slide: number,
    });
  };

  return (
    <>
      <section className="flex flex-col justify-center custom-container px-3 py-10 md:py-32 ">
        <div className="text-center">
          <h1 className="font-bold text-4xl md:text-5xl lg:text-[64px] pb-3">
            Zabira in <span className="text-brand">60</span> seconds
          </h1>
          <p className="text-lg md:text-xl pb-1">
            Trade the world, pay the world: experience finance with Zabira
          </p>
        </div>

        <div className="block md:hidden  pt-2 pb-3">
          <p className="text-[#7e7e7e]">Learn more about Zabira:</p>
        </div>

        <div className="bg-cover relative youtube-bg w-full lg:w-[75%] p-6  min-h-[35vh] md:min-h-[75vh] rounded-3xl mx-auto">
          {/* Centered Play Icon */}
          <BiPlayCircle
            onClick={() => openLightboxOnSlide(1)}
            className="cursor-pointer absolute inset-0 m-auto text-[145px] text-white"
          />

          {/* ZabiraWork Card */}
          <ZabiraWork
            onClick={() => openLightboxOnSlide(2)}
            className={`${
              isDesktop ? "right-6" : "inset-0 mx-auto mt-auto"
            } " absolute  bottom-6  md:w-[272px]"`}
          />
          <FsLightbox
            toggler={lightboxController.toggler}
            sources={[
              "https://www.youtube.com/embed/LyNADeA9dl8?autoreplay=1&rel=0&showinfo=0",
              "https://www.youtube.com/embed/LyNADeA9dl8?autoreplay=1&rel=0&showinfo=0",
            ]}
            slide={lightboxController.slide}
          />
        </div>
      </section>

      <section className="custom-container pb-20 md:pb-32 relative mb-20 md:mb-32">
        <div className="absolute rounded-3xl w-[calc(100%-2rem)] top-0 h-full -z-10 left-0 lg:w-[63%] bg-[#e2f3ff]" />
        <div className="pt-16 md:pt-20 lg:pt-32 flex-col lg:flex-row  flex items-center lg:items-end w-full">
          <div className="lg:min-w-[569px] px-4">
            <h2 className="mb-12 lg:mb-3 text-4xl md:text-5xl lg:text-[64px] font-bold">
              All-in-One App Built for YOU
            </h2>
            <Image
              src="/plane.svg"
              width="240"
              height="130"
              alt="plane icon"
              className="hidden lg:block mt-7"
            />
          </div>

          <div className="flex gap-6  flex-wrap z-30">
            {features.map(({ title, icon, description }, index) => (
              <div
                key={index}
                className="shadow-feature-card w-full lg:w-[365px] bg-white p-6 h-fit md:h-[263px] rounded-xl "
              >
                {icon}
                <div>
                  <h2 className="text-3xl lg:text-[40px] leading-tight font-bold pb-3">
                    {title}
                  </h2>
                  <p className="text-[#7e7e7e]">{description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default WhatWeDo;
