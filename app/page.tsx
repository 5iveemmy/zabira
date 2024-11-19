"use client";

import dynamic from "next/dynamic";

const HeroSection = dynamic(
  () => import("./containers/home-page/hero-section"),
  {
    ssr: false,
  }
);
const OverviewSection = dynamic(
  () => import("./containers/home-page/overview-section"),
  {
    ssr: false,
  }
);
const WhatWeDo = dynamic(() => import("./containers/home-page/what-we-do"), {
  ssr: false,
});

export default function Home() {
  return (
    <>
      <HeroSection />
      <OverviewSection />
      <WhatWeDo />
    </>
  );
}
