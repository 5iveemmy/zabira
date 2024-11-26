"use client";

import CarouselCard from "@/components/carousel-card";
import { Reveal } from "@/components/reveal";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import AutoScroll from "embla-carousel-auto-scroll";
import Autoplay from "embla-carousel-autoplay";
import Image from "next/image";
import React from "react";
import { BsCurrencyBitcoin, BsRouter, BsWallet2 } from "react-icons/bs";

const giftCardsOptions = [
  {
    title: "Buy GiftCards",
    description: "Enjoy a wide variety of cards at your fingertips",
    image: "/gc-side-a.svg",
    subHeader: "Buying best practices",
    practices: [
      "Buy GiftCards on Zabira at the best rates",
      "Select the right gifts cards that fits your criteria",
      "Ensure the gift card has a long validity period",
    ],
  },
  {
    title: "Sell GiftCards",
    description: "Sell your giftcards at the best rates in the market",
    image: "/gc-side-b.svg",
    subHeader: "Selling best practices",
    practices: [
      "Confirm the best rates on trusted platforms like Zabira",
      "Highlight the right giftcard and their types",
      "Familarize yourself wtith the selling guidelines",
    ],
  },
];

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

const spendGiftCardsOptions = [
  {
    title: "Make Payment",
    description:
      "Effortlessly use your gift cards to pay for services and products directly on Zabira.",
    icon: <BsWallet2 className="text-[#0083f8] text-3xl md:text-4xl" />,
  },
  {
    title: "Buy Cryptocurrency",
    description:
      "Turn your gift cards into crypto with just a few clicks on Zabira",
    icon: <BsCurrencyBitcoin className="text-[#0083f8] text-3xl md:text-4xl" />,
  },
  {
    title: "Settle Utilities",
    description:
      "With Zabira you can use your gift cards to pay for essential services like utilities, cable TV and more all hassle free",
    icon: <BsRouter className="text-[#0083f8] text-3xl md:text-4xl" />,
  },
];

const exploreOptionsImage = [
  "/make-payment.svg",
  "/crypto-mode.svg",
  "/airtime-mode.svg",
];
const GiftCards = () => {
  const [exploreOption, setExploreOption] = React.useState(0);

  return (
    <>
      <section className="zabira-footprint">
        <div className="custom-container relative pt-20 pb-28 md:pb-32">
          <Image
            priority
            width="224"
            height="204"
            src="/three-arrows-2.svg"
            alt="arrows"
            className="hidden md:block absolute top-0 -left-[10rem]"
          />
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

          <Image
            priority
            width="272"
            height="155"
            src="/three-arrows.svg"
            alt="arrows"
            className="hidden md:block absolute top-0 -right-[10rem]"
          />
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

      <section>
        <div className="custom-container py-28 md:py-32">
          <div className="flex justify-center items-center flex-col text-center">
            <h2 className="text-3xl md:text-[64px] pb-3 leading-tight font-bold lg:max-w-[60%] ">
              One App. Unlimited Possibilities
            </h2>
            <p className="text-[#7e7e7e]">
              You can view all offers where you can sell your gift cards for
              Crypto
            </p>
          </div>

          <div className="relative">
            <div className="absolute rounded-3xl top-0 right-0 w-full lg:w-[65%] h-[65%] md:h-full -z-[1] bg-[#e2f3ff] -mr-4 md:-mr-8" />
            <div className="py-20 flex-col-reverse md:flex-row lg:items-center flex justify-between gap-10">
              <div className="relative md:w-[595px] h-[400px] sm:h-[500px] md:h-[769px]">
                {exploreOptionsImage.map((image, index) => (
                  <Image
                    key={index}
                    src={image}
                    width="595"
                    height="769"
                    className={`min-h-full absolute top-0 left-0 transition-opacity duration-200 ease-linear rounded-2xl ${
                      exploreOption === index ? "opacity-100" : "opacity-0"
                    }`}
                    alt={`Option ${index}`}
                  />
                ))}
              </div>

              <div className="md:min-w-[40%] md:max-w-[40%] ">
                <p className="text-2xl md:text-[40px] leading-tight font-bold pb-[14px]">
                  Explore all the ways to spend your Gift cards on Zabira
                </p>
                <div className="flex flex-col gap-1">
                  {spendGiftCardsOptions.map(
                    ({ title, description, icon }, index) => (
                      <div
                        key={index}
                        className={`${
                          exploreOption === index ? "bg-white" : " "
                        }  cursor-pointer p-4 rounded-b-lg flex gap-6`}
                        style={{
                          boxShadow: `${
                            exploreOption === index
                              ? " 0 .1875rem .375rem rgba(140,152,164,.25)"
                              : ""
                          }`,
                        }}
                        onClick={() => setExploreOption(index)}
                      >
                        <div>{icon}</div>

                        <div>
                          <p className="text-[#0083f8] text-xl md:text-2xl mb-1 font-bold">
                            {title}
                          </p>
                          <p className="text-[#51596c] text-sm md:text-base">
                            {description}
                          </p>
                        </div>
                      </div>
                    )
                  )}
                </div>
              </div>
            </div>
          </div>

          <div className="flex gap-28  flex-col py-24 md:py-[120px]">
            {giftCardsOptions.map((option, index) => (
              <div
                key={option.title}
                className={`flex gap-14 lg:gap-0 flex-col lg:flex-row ${
                  index == 1 ? "flex-row-reverse" : ""
                }  justify-between lg:justify-normal`}
              >
                <Image
                  priority
                  width="703"
                  height="792"
                  src={option.image}
                  alt={option.title}
                />

                <Reveal>
                  <div className="md:pt-24">
                    <p className="font-bold text-4xl md:text-5xl mb-4">
                      {option.title}
                    </p>
                    <p className="text-[#7e7e7e] text-xl">
                      {option.description}
                    </p>
                    <div className="mt-10">
                      <p className="text-2xl font-bold pb-3">
                        {option.subHeader}
                      </p>
                      <div className="flex flex-col gap-7">
                        {option.practices.map((practice) => (
                          <div key={practice} className="flex gap-4">
                            <div>
                              <Image
                                priority
                                width="24"
                                height="24"
                                src="/checkmark.svg"
                                alt="checkmark"
                              />
                            </div>
                            <p className="text-[#51596c]">{practice}</p>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </Reveal>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default GiftCards;
