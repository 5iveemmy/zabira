"use client";

import dynamic from "next/dynamic";

const Navbar = dynamic(() => import("@/components/navbar"), { ssr: false });
const HomePage = dynamic(() => import("./containers/home-page"), {
  ssr: false,
});

export default function Home() {
  return (
    <>
      <Navbar />
      <HomePage />
    </>
  );
}
