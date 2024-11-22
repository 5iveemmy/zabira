"use client";

import DownloadBadges from "@/components/download-badges";
import { Avatar, AvatarImage } from "@/components/ui/avatar";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import { Separator } from "@/components/ui/separator";
import Fade from "embla-carousel-fade";
import Image from "next/image";
import Autoplay from "embla-carousel-autoplay";

import React, { useEffect, useState } from "react";

const flags = ["/ngr.jpg", "/usa.jpg", "/ke.jpg", "/za.jpg", "/gh.jpg"];
const texts = [
  "Cryptocurrencies",
  "Giftcards",
  "Utilities Payment",
  "Digital Assets",
];

const carouselImages = ["/img1.jpg", "/map.gif", "/img3.png"];

const HeroSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % texts.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="custom-container flex justify-between pt-20 pb-10 items-center">
      <div className="lg:w-2/5 flex flex-col gap-1">
        <h1 className="text-5xl leading-tight text-dark font-bold">
          Energize your Future with{" "}
          <span className="transition-opacity duration-500 ease-in-out text-brand">
            {texts[currentIndex]}
          </span>
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

      <div className="w-[50%] relative">
        <div className="absolute top-3 -left-4 z-10">
          <p className="text-[#0083f8]">Scan Code</p>
          <a href="https://me-qr.com/Mr001Ej1" target="_blank">
            <Image
              priority
              width="150"
              height="150"
              src="/qrcode_2.png"
              alt="qr code"
            />
          </a>
        </div>
        <div className="w-64 items-center gap-2 absolute bottom-[4.5rem] -left-[4.5rem] z-10 h-fit flex bg-[#ffc107] p-2 shadow-sm rounded-full">
          <Avatar className="w-9 h-9">
            <AvatarImage src="/michael.jpg" className="object-cover" />
          </Avatar>
          <div>
            <p className="text-sm font-bold">Michael</p>
            <p className="text-sm">Trusted platform 🔥👋</p>
          </div>
        </div>

        <Carousel
          opts={{
            align: "start",
            loop: true,
          }}
          plugins={[Fade(), Autoplay({ delay: 5000 })]}
        >
          <CarouselContent>
            {carouselImages.map((image, index) => (
              <CarouselItem key={index}>
                <Image
                  priority
                  width="653"
                  unoptimized
                  height="653"
                  src={image}
                  alt={`image ${index}`}
                />{" "}
              </CarouselItem>
            ))}
          </CarouselContent>
        </Carousel>
      </div>
    </div>
  );
};

export default HeroSection;
