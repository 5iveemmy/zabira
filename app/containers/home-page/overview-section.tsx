"use client";

import ProductCard from "@/components/productCard";
import React from "react";

const ourProducts = [
  {
    title: "Cryptocurrency",
    description: "Buy, sell, and swap a variety of cryptocurrencies with ease",
    icon: "/cryptocurrency.svg",
    link: "/",
    iconBg: "#f0f8ff",
  },
  {
    title: "Giftcards",
    description: "Smooth trade gift cards from leading brands",
    icon: "/giftcards.svg",
    link: "/gift-cards",
    iconBg: "#fffbf4",
  },

  {
    title: "Utility Bills",
    description:
      "Recharge in seconds, Stay conected, entertained, powered and in the game",
    icon: "/utility-bills.svg",
    link: "/",
    iconBg: "#fdf9ff",
  },
  {
    title: "Payments",
    description: "Fund wallet and make payments beyond borders",
    icon: "/payment-integrity.svg",
    link: "/",
    iconBg: "#f0f8ff",
  },
];

const reach = [
  {
    title: "Quaterly volume traded",
    value: "$ 5.62B+",
  },
  {
    title: "Fiat currencies supported - USD, NGN, GHC & KES",
    value: "4",
  },
  {
    title: "Crypto Assets supported - BTC, ETH. BNB...",
    value: "20+",
  },
  {
    title: "Global Trusted Users",
    value: "200k+",
  },
];

const OverviewSection = () => {
  return (
    <>
      {/*Our Products Section */}
      <section className="bg-[#f7f7f7]">
        <div className="custom-container py-24">
          <div className="max-w-[538px] ">
            <h1 className="text-5xl leading-tight text-dark font-bold mb-4">
              Our Products
            </h1>
            <p className="text-[#7e7e7e] text-xl max-w-[368px]">
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
        </div>
      </section>

      {/*Our reach globally Section */}
      <section className="bg-[url('/sm-map.png')]">
        <div className="custom-container py-32 px-3 flex items-center justify-between text-white">
          <div className="w-2/5">
            <h1 className="text-[64px] leading-tight  font-bold mb-4">
              Our reach globally
            </h1>
            <p className="">
              Don&apos;t take our word for it, better experienced than being
              told
            </p>
          </div>

          <div className="grid grid-cols-[50%_50%] w-6/12">
            {reach.map((reach, index) => (
              <div
                key={reach.title}
                className="p-8 flex flex-col"
                style={{
                  borderBottom: index < 2 ? "0.5px solid #334ac0" : "",
                  borderLeft: "4px dashed #dce0e5",
                }}
              >
                <h2 className="text-5xl font-bold pb-4">{reach.value}</h2>
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
