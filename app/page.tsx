"use client";

import HeroSection from "./containers/home-page/hero-section";
import OverviewSection from "./containers/home-page/overview-section";
import WhatWeDo from "./containers/home-page/what-we-do";

export default function Home() {
  return (
    <>
      <HeroSection />
      <OverviewSection />
      <WhatWeDo />
    </>
  );
}
