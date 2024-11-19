"use client";

import React from "react";
import dynamic from "next/dynamic";

const HeroSection = dynamic(() => import("./hero-section"), {
  ssr: false,
});

const OverviewSection = dynamic(() => import("./overview-section"), {
  ssr: false,
});

const WhatWeDo = dynamic(() => import("./what-we-do"), {
  ssr: false,
});

const HomePage = () => {
  return (
    <>
      <HeroSection />
      <OverviewSection />
      <WhatWeDo />
    </>
  );
};

export default HomePage;
