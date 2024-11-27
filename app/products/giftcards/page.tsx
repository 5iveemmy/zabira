"use client";

import CarouselCard from "@/components/carousel-card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import AutoScroll from "embla-carousel-auto-scroll";
import Autoplay from "embla-carousel-autoplay";
import Image from "next/image";
import React from "react";
import { motion } from "framer-motion";
import Possibilities from "@/app/containers/giftcards/possibilities";

const carouselTopImages = [
  "/16.jpg",
  "/28.jpg",
  "/26.jpg",
  "/24.jpg",
  "/22.jpg",
  "/20.jpg",
  "/18.jpg",
  "/17.jpg",
  "/27.jpg",
  "/29.jpg",
  "/30.jpg",
];

const carouselBottomImages = [
  "/16.jpg",
  "/19.jpg",
  "/21.jpg",
  "/23.jpg",
  "/25.jpg",
  "/27.jpg",
  "/29.jpg",
  "/30.jpg",
];

const GiftCards = () => {
  return (
    <>
      <section className="zabira-footprint">
        <div className="custom-container relative pt-20 pb-28 md:pb-32">
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
            className="hidden md:block absolute top-0 -left-[10rem]"
          >
            <Image
              priority
              width="224"
              height="204"
              src="/three-arrows-2.svg"
              alt="arrows"
            />
          </motion.div>
          <div className="flex justify-center items-center">
            <div className="text-center md:max-w-[80%]">
              <p className="text-xs font-bold mb-4">
                FOR ALL RETAIL AND GAMING NEEDS
              </p>

              <h1 className="font-bold text-4xl md:text-5xl leading-tight">
                Safely buy & sell{" "}
                <span className="text-[#0083f8]">popular Gift Cards</span> in
                seconds
              </h1>
            </div>
          </div>
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
            className="hidden md:block absolute top-0 -right-[10rem]"
          >
            <Image
              priority
              width="272"
              height="155"
              src="/three-arrows.svg"
              alt="arrows"
            />
          </motion.div>
        </div>
      </section>

      <section>
        <div className="flex flex-col gap-4">
          <Carousel
            opts={{
              align: "start",
              loop: true,
            }}
            plugins={[
              Autoplay({ delay: 5000 }),
              AutoScroll({
                playOnInit: true,
                stopOnInteraction: false,
                speed: 0.5,
              }),
            ]}
          >
            <CarouselContent>
              {carouselTopImages.map((image, index) => (
                <CarouselItem
                  key={`top-${index}`}
                  className="pl-4 min-w-0"
                  style={{ flex: "0 0 240px", paddingLeft: "1rem" }}
                >
                  <CarouselCard
                    key={`top-${index}`}
                    width={240}
                    height={140}
                    src={image}
                    alt={`Top image ${index}`}
                  />
                </CarouselItem>
              ))}
            </CarouselContent>
          </Carousel>

          <Carousel
            opts={{
              align: "start",
              loop: true,
            }}
            plugins={[
              Autoplay({ delay: 5000 }),
              AutoScroll({
                playOnInit: true,
                stopOnInteraction: false,
                speed: 0.5,
              }),
            ]}
          >
            <CarouselContent>
              {carouselBottomImages.map((image, index) => (
                <CarouselItem
                  key={`top-${index}`}
                  className="min-w-0"
                  style={{ flex: "0 0 292px" }}
                >
                  <CarouselCard
                    key={`top-${index}`}
                    width={292}
                    height={170}
                    src={image}
                    alt={`Top image ${index}`}
                  />
                </CarouselItem>
              ))}
            </CarouselContent>
          </Carousel>
        </div>
      </section>

      <Possibilities />
    </>
  );
};

export default GiftCards;
