"use client";

import dynamic from "next/dynamic";

const Navbar = dynamic(() => import("@/components/navbar"), { ssr: false });
const Header = dynamic(() => import("@/components/header"), { ssr: false });

export default function Home() {
  return (
    <div className="custom-container">
      <Navbar />
      <Header />
    </div>
  );
}
