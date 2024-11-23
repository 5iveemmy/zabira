"use client";

import ProductCard from "@/components/productCard";
import { Avatar, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import React from "react";
import { BiUpArrowAlt } from "react-icons/bi";
import CountUp from "react-countup";

const emojis = [
  "/emoji-1.png",
  "/emoji-2.png",
  "/emoji-3.png",
  "/emoji-4.png",
  "/emoji-5.png",
];

const ourProducts = [
  {
    title: "Cryptocurrency",
    description: "Buy, sell, and swap a variety of cryptocurrencies with ease",
    icon: "/cryptocurrency.svg",
    link: "/products/cryptocurrency",
    iconBg: "#f0f8ff",
  },
  {
    title: "Giftcards",
    description: "Smooth trade gift cards from leading brands",
    icon: "/giftcards.svg",
    link: "/products/giftcards",
    iconBg: "#fffbf4",
  },

  {
    title: "Utility Bills",
    description:
      "Recharge in seconds, Stay conected, entertained, powered and in the game",
    icon: "/utility-bills.svg",
    link: "/products/utilities",
    iconBg: "#fdf9ff",
  },
  {
    title: "Payments",
    description: "Fund wallet and make payments beyond borders",
    icon: "/payment-integrity.svg",
    link: "/products/utilities",
    iconBg: "#f0f8ff",
  },
];

const reach = [
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

const changeOptions = [
  {
    title: "Change Giftcard",
    link: "https://app.zabira.com/giftcard/buy",
  },
  {
    title: "Change Crypto",
    link: "https://app.zabira.com/sign-in?redirectURL=%2Fwallet",
  },
];

const OverviewSection = () => {
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

  return (
    <>
      {/*Our Products Section */}
      <section className="bg-[#f7f7f7]">
        <div className="custom-container py-24 lg:flex-row flex-col flex justify-between">
          <div className="lg:max-w-[538px] ">
            <h1 className="text-5xl leading-tight text-dark font-bold mb-4">
              Our Products
            </h1>
            <p className="text-[#7e7e7e] text-xl lg:max-w-[368px]">
              From gift cards and crypto to utility payments, find all your
              financial solutions in one place
            </p>
            <div className="pt-11 flex flex-col gap-7">
              {ourProducts.map((product, index) => (
                <ProductCard
                  key={product.title}
                  {...product}
                  isActive={index === 0}
                />
              ))}
            </div>
          </div>

          <div className="relative">
            <div className="absolute z-0 top-[87px] right-2 w-[421px] h-[440px] rounded-3xl bg-[#3772ff1a]" />

            <div className="z-20 relative flex flex-col items-center lg:items-end gap-10">
              <div className="mr-20 bg-white p-11 w-[396px] h-fit shadow-card-custom-prducts rounded-xl">
                <p>How was your experience</p>
                <div className="flex justify-between">
                  {emojis.map((emoji) => (
                    <Image
                      key={emoji}
                      src={emoji}
                      width="44"
                      height="44"
                      alt="emoji"
                    />
                  ))}
                </div>
              </div>

              <div className="flex">
                <div className="relative h-fit">
                  <Image
                    src="/curvedArrow.png"
                    width="63"
                    height="87"
                    alt="arrow"
                    className="absolute left-[5.5rem] bottom-32"
                  />

                  <div className="-mr-1 flex mt-12 justify-between items-start bg-white p-6 w-[343px] h-fit shadow-card-custom-prducts rounded-xl">
                    <div className="flex gap-4 items-center">
                      <Image
                        src="/bitcoin.png"
                        width="64"
                        height="64"
                        alt="bitcoin"
                      />

                      <div>
                        <p className="font-bold text-2xl pb-1">BTC</p>
                        <p className="text-lg text-[#7e7e7e]">+1.46%</p>
                      </div>
                    </div>
                    <p className="font-bold text-xl">$56,623.54</p>
                  </div>
                </div>

                <div className="lg:-mr-16 bg-white gap-4 flex flex-col items-center justify-center p-6 w-[360px] h-fit shadow-card-custom-prducts rounded-xl">
                  <Avatar className="w-[100px] h-[100px]">
                    <AvatarImage src="/user.jpg" />
                  </Avatar>

                  <div className="text-center">
                    <p className="font-bold text-lg pb-1 ">Femi Badmus</p>
                    <p className="text-sm text-[#7e7e7e]">
                      femi.badmus@gmail.com
                    </p>
                  </div>

                  <div
                    className="pt-7 px-4 pb-6 rounded-2xl w-full text-white"
                    style={{
                      background:
                        "linear-gradient(216.56deg, #383fde 5.32%, #0083f8 94.32%)",
                    }}
                  >
                    <div className="flex justify-between items-center pb-4">
                      <p className="font-bold text-xl ">Wallet</p>
                      <Image
                        src="/fade-bitcoin.svg"
                        width="24"
                        height="24"
                        alt="bitcoin"
                        className="mr-16"
                      />
                    </div>

                    <div className="flex gap-4 items-end pb-3">
                      <div>
                        <p className="text-xs">Balance</p>
                        <p className="text-2xl font-bold">$2,509.75</p>
                      </div>
                      <p>+9.77%</p>
                    </div>

                    <div className="flex gap-2">
                      {changeOptions.map(({ title, link }) => (
                        <Button
                          asChild
                          key={title}
                          className="hover:bg-white hover:text-[#3772ff]  bg-transparent border-2 rounded-full border-white text-white text-xs font-bold"
                        >
                          <a href={link} target="_blank">
                            {title}
                          </a>
                        </Button>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/*Our reach globally Section */}
      <section className="bg-[url('/sm-map.png')]">
        <div className="custom-container py-20 lg:py-32 px-3 gap-16 lg:gap-0 flex-col lg:flex-row flex items-start lg:items-center justify-between text-white">
          <div className="lg:w-2/5">
            <h1 className="text-[64px] leading-tight  font-bold mb-4">
              Our reach globally
            </h1>
            <p className="">
              Don&apos;t take our word for it, better experienced than being
              told
            </p>
          </div>

          <div className="grid grid-cols-[50%_50%] lg:w-6/12">
            {reach.map((reach, index) => (
              <div
                key={reach.title}
                className="p-8 flex flex-col"
                style={{
                  borderBottom: index < 2 ? "0.5px solid #334ac0" : "",
                  borderLeft: "4px dashed #dce0e5",
                }}
              >
                <div className="flex items-center">
                  {(index === 1 || index === 2) && (
                    <BiUpArrowAlt className="text-4xl mt-2 text-[#0083f8]" />
                  )}
                  <h2 className="text-5xl font-bold pb-4">
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
    </>
  );
};

export default OverviewSection;
