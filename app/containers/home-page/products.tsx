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

const Products = () => {
  return (
    <div className="bg-[#f7f7f7]">
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
    </div>
  );
};

export default Products;
