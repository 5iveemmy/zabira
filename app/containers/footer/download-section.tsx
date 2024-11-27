"use client";

import DownloadBadges from "@/components/download-badges";
import { Reveal } from "@/components/reveal";
import Image from "next/image";
import React from "react";

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
        <div>
          <Image
            priority
            width="317"
            height="572"
            src="/phone.svg"
            alt="phone"
          />
        </div>
      </div>
      <Image
        priority
        width="192"
        height="109"
        src="/three-arrows.svg"
        alt="arrows"
        className="hidden lg:block absolute top-[5rem] right-[8rem]"
      />

      <Image
        src="/plane.svg"
        width="160"
        height="86"
        alt="plane icon"
        className="hidden lg:block absolute bottom-[5.5rem] right-[15.5rem]"
      />
    </section>
  );
};

export default DownloadSection;
