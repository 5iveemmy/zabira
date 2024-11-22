"use client";

import React, { useEffect, useState } from "react";
import { Separator } from "./ui/separator";
import Link from "next/link";
import Image from "next/image";
import {
  BiLogoFacebookCircle,
  BiLogoInstagram,
  BiLogoLinkedinSquare,
  BiLogoTwitter,
  BiLogoYoutube,
} from "react-icons/bi";
import Icon from "./Icon";
import { IoIosArrowUp } from "react-icons/io";
import { Button } from "./ui/button";

import dynamic from "next/dynamic";
import { usePathname } from "next/navigation";

const DownloadSection = dynamic(
  () => import("@/app/containers/footer/download-section"),
  {
    ssr: false,
  }
);

interface ListDisplayProps {
  title: string;
  items: { text: string; link?: string; externalLink?: string }[];
}

const ListDisplay = ({ title, items }: ListDisplayProps) => {
  return (
    <div className="flex items-center md:items-start gap-2 flex-col col-span-1">
      <h2 className="font-bold text-sm pb-2">{title}</h2>

      {items.map(({ text, link, externalLink }) => (
        <div key={text} className="flex text-center items-center gap-2">
          {externalLink ? (
            <a rel="noopener noreferrer" target="_blank" href={link}>
              {text}
            </a>
          ) : (
            <Link href={link as string} className="hover:text-brand text-lg ">
              {text}
            </Link>
          )}
        </div>
      ))}
    </div>
  );
};

const listData = [
  {
    title: "COMPANY",
    items: [
      { text: "About Us", link: "/company/about" },
      { text: "Contact Us", link: "/company/contact" },
      { text: "Career", link: "/company/careers" },
    ],
  },
  {
    title: "PRODUCTS",
    items: [
      { text: "Trade Crypto", link: "/products/cryptocurrency" },
      {
        text: "Trade Giftcards",
        link: "/products/giftcards",
      },
      { text: "Utility Bills", link: "/" },
    ],
  },
  {
    title: "SUPPORT",
    items: [
      { text: "Blog", externalLink: "https://blog.zabira.ng/" },
      { text: "Download", link: "/download" },
      { text: "Help Center", externalLink: "https://support.zabira.ng/" },
      {
        text: "Referral Program",
        externalLink: "https://blog.zabira.ng/referral",
      },
      {
        text: "ID Verification",
        externalLink: "https://blog.zabira.ng/verification",
      },
    ],
  },
  {
    title: "LEGAL",
    items: [
      { text: "Terms Of Use", link: "/" },
      { text: "Privacy Policy", link: "/" },
    ],
  },
];

const socialLinks = [
  {
    icon: <BiLogoFacebookCircle />,
    link: "https://web.facebook.com/thezabira/",
  },
  {
    icon: <BiLogoInstagram />,
    link: "https://www.instagram.com/thezabira/",
  },
  {
    icon: <BiLogoYoutube />,
    link: "https://www.youtube.com/embed/LyNADeA9dl8&rel=0showinfo=0",
  },
  {
    icon: <BiLogoTwitter />,
    link: "https://x.com/TheZabira",
  },
  {
    icon: <BiLogoLinkedinSquare />,
    link: "https://www.linkedin.com/company/thezabira/posts/",
  },
];

const Footer = () => {
  const [showScrollTop, setShowScrollTop] = useState<boolean>(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 300);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <>
      {pathname !== "/download" && <DownloadSection />}

      <section className="promo-section">
        <div className="py-8 flex justify-between custom-container items-center">
          <div className="text-white">
            <p className="font-bold text-[32px] pb-2">
              Get Up to $30 USDT Free!
            </p>
            <p>
              Monthly Top Trader Wins $30 USDT: Be the champion trader to claim
              your prize!
            </p>
          </div>

          <Button
            asChild
            className="bg-white h-12 text-dark rounded-full py-3 px-8 text-base font-bold transition-transform duration-300 ease-in-out hover:bg-dark hover:text-white hover:scale-105"
          >
            <a
              rel="noopener noreferrer"
              target="_blank"
              href="https://app.zabira.com/sign-up"
            >
              Get Started
            </a>
          </Button>
        </div>
      </section>
      <div className="custom-container">
        <div className="flex">
          <div className="border-r border-[#8c98a4] pr-32 pt-11 min-w-[400px]">
            <Link href="/">
              <Image
                priority
                width="189"
                height="52"
                src="/logo.svg"
                className="mb-6"
                alt="zabira logo"
              />
            </Link>
            <p className="text-[#7e7e7e]">+234 01 887 0002</p>
            <p className="text-[#7e7e7e]">support@zabira.com</p>
          </div>

          <div className="border-r pb-8 border-[#8c98a4] pl-20 pr-12 pt-11 flex flex-wrap max-w-[471px] justify-between gap-10">
            {listData.map(({ title, items }) => (
              <ListDisplay key={title} title={title} items={items} />
            ))}
          </div>

          <div className="flex flex-col items-center pt-[53px] pl-28 pb-16">
            <p className="text-3xl mb-3 font-bold">Download our app </p>
            <Image
              priority
              width="150"
              height="150"
              src="/qrcode_2.png"
              className="mb-6"
              alt="Qr Code"
            />
            <div className="flex gap-4 items-center ">
              {socialLinks.map(({ icon, link }, index) => (
                <Icon
                  key={index}
                  icon={icon}
                  link={link}
                  className="text-3xl hover:text-brand"
                />
              ))}
            </div>
          </div>
        </div>

        <Separator className="opacity-80 " />

        <p className="text-[#7e7e7e]  py-4 text-center">
          Copyright © 2024. All rights reserved.{" "}
          <a className="hover:text-brand font-bold text-dark cursor-pointer">
            Terms Of Service
          </a>{" "}
          |{" "}
          <a className="hover:text-brand font-bold text-dark cursor-pointer">
            Privacy Policy
          </a>
        </p>
      </div>
      <div className="fixed bottom-6 right-6">
        {showScrollTop && (
          <button
            onClick={scrollToTop}
            className="bg-[#53668b1a] flex items-center justify-center p-3 rounded-lg shadow-md hover:bg-brand/20 transition-all"
            aria-label="Scroll to top"
          >
            <IoIosArrowUp className="text-lg text-[#404e6b] opacity-50" />
          </button>
        )}
      </div>
    </>
  );
};

export default Footer;
