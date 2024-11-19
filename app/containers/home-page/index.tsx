"use client";

import React from "react";
import dynamic from "next/dynamic";

const HeroSection = dynamic(() => import("./hero-section"), {
  ssr: false,
});
const Products = dynamic(() => import("./products"), {
  ssr: false,
});

const HomePage = () => {
  return (
    <>
      <HeroSection />
      <Products />
    </>
  );
};

export default HomePage;
