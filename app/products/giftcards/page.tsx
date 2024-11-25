"use client";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";
import AutoScroll from "embla-carousel-auto-scroll";
import Image from "next/image";
import React from "react";

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
        <div className="custom-container relative pt-20 pb-32">
          <Image
            priority
            width="224"
            height="204"
            src="/three-arrows-2.svg"
            alt="arrows"
            className="hidden md:block absolute top-0 -left-[10rem]"
          />
          <div className="flex justify-center items-center">
            <div className="text-center max-w-[80%]">
              <p className="text-xs font-bold mb-4">
                FOR ALL RETAIL AND GAMING NEEDS
              </p>
              <h1 className="font-bold text-5xl leading-none">
                Safely buy & sell popular{" "}
                <span className="text-[#0083f8]">Gift Cards</span> in seconds
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
        <Carousel
          opts={{
            align: "start",
            loop: true,
          }}
          plugins={[AutoScroll({ playOnInit: true, stopOnInteraction: false })]}
        >
          <CarouselContent>
            <CarouselItem>
              <div className="flex flex-col gap-6">
                <div className="flex justify-center gap-4">
                  {carouselTopImages.map((image, index) => (
                    <Image
                      key={`top-${index}`}
                      priority
                      width="292"
                      height="170"
                      src={image}
                      alt={`Top image ${index}`}
                    />
                  ))}
                </div>
                {/* Bottom Images */}
                <div className="flex justify-center gap-4">
                  {carouselBottomImages.map((image, index) => (
                    <Image
                      key={`bottom-${index}`}
                      priority
                      width="292"
                      height="170"
                      src={image}
                      alt={`Bottom image ${index}`}
                    />
                  ))}
                </div>
              </div>
            </CarouselItem>
          </CarouselContent>
        </Carousel>
      </section>

      <section>
        <div className="custom-container py-32">
          <div className="flex justify-center items-center flex-col text-center">
            <h2 className="text-4xl md:text-[64px] font-bold lg:max-w-[60%] ">
              One App. Unlimited Possibilities
            </h2>
            <p className="text-[#7e7e7e]">
              You can view all offers where you can sell your gift cards for
              Crypto
            </p>
          </div>
          <div className="flex gap-28  flex-col py-[120px]">
            {giftCardsOptions.map((option, index) => (
              <div
                key={option.title}
                className={`flex flex-col lg:flex-row ${
                  index == 1 ? "flex-row-reverse" : ""
                }  justify-between`}
              >
                <Image
                  priority
                  width="703"
                  height="792"
                  src={option.image}
                  alt={option.title}
                />
                <div className="pt-24">
                  <p className="font-bold text-4xl md:text-5xl mb-4">
                    {option.title}
                  </p>
                  <p className="text-[#7e7e7e] text-xl">{option.description}</p>
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
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default GiftCards;
