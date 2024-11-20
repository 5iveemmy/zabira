"use client";

import DownloadBadges from "@/components/download-badges";
import { Avatar, AvatarImage } from "@/components/ui/avatar";
import { Separator } from "@/components/ui/separator";

import React from "react";

const flags = ["/ngr.jpg", "/usa.jpg", "/ke.jpg", "/za.jpg", "/gh.jpg"];

const HeroSection = () => {
  return (
    <div className="custom-container flex justify-between pt-20 pb-10">
      <div className="lg:w-2/5 flex flex-col gap-1">
        <h1 className="text-5xl leading-tight text-dark font-bold">
          Energize your Future with{" "}
          <span className="text-brand">Giftcards</span>
        </h1>
        <p className="text-gray-500 text-xl">
          Experience seamless transactions, effortless swaps , and instant
          payments. Your Journey into the future of finance starts now
        </p>

        <DownloadBadges />

        <div className="flex justify-center items-center gap-4">
          <div className="flex relative -space-x-4">
            {flags.map((item, index) => (
              <Avatar
                key={index}
                className="relative transition-transform hover:translate-x-0 hover:z-10 w-9 h-9"
              >
                <AvatarImage src={item} />
              </Avatar>
            ))}
          </div>

          <Separator orientation="vertical" />

          <div className="">
            <p className="text-4xl text-dark font-bold">Transfer funds</p>
            <p className="text-sm text-[#7e7e7e]">Move your money, your way</p>
          </div>
        </div>
      </div>

      <div>
        <h1 className="text-3xl font-bold">Zabira</h1>
        <p className="text-gray-500">The ultimate design resource</p>
      </div>
    </div>
  );
};

export default HeroSection;
