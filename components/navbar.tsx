"use client";

import Image from "next/image";
import React from "react";
import Link from "next/link";

import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import { RxHamburgerMenu } from "react-icons/rx";
import {
  BsBriefcase,
  BsChatText,
  BsCurrencyBitcoin,
  BsFileEarmarkText,
  BsGift,
  BsLifePreserver,
  BsPeople,
  BsReceiptCutoff,
} from "react-icons/bs";
import { FaSteam } from "react-icons/fa";
import { IoArrowForward } from "react-icons/io5";
import { Separator } from "./ui/separator";
import { Button } from "./ui/button";

{
  /* <FaSteam /> */
}
{
  /* <BsReceiptCutoff /> */
}

const productsMenu = [
  {
    title: "Trade Crypto",
    description: "Buy, Sell & Swap",
    icon: <BsCurrencyBitcoin className="text-[#0083f8] text-3xl md:text-4xl" />,
    link: "/products/cryptocurrency",
    isNew: true,
  },
  {
    title: "Trade Giftcards",
    description: "Buy & Sell",
    icon: <FaSteam className="text-[#0083f8] text-3xl md:text-4xl" />,
    link: "/products/giftcards",
    isNew: true,
  },
  {
    title: "Utility Bills",
    description: "Electricity, CableTV, Sports Betting",
    icon: <BsReceiptCutoff className="text-[#0083f8] text-3xl md:text-4xl" />,
    link: "/products/utilities",
  },
];

interface Props {
  title: string;
  subHeader: string;
  icon: React.ReactNode;
  link: string;
  externalLink?: boolean;
  isLast?: boolean;
}
const ListItem = ({
  link,
  icon,
  title,
  subHeader,
  isLast,
  externalLink,
}: Props) => (
  <>
    <Link
      href={link}
      target={externalLink ? "_blank" : ""}
      className="flex items-center space-x-4 p-4 hover:bg-gray-100 rounded-lg transition"
    >
      {icon}
      <div>
        <p className=" text-[#51596c] font-semibold  leading-tight">{title}</p>

        <p className="text-sm text-[#51596c] font-semibold">{subHeader}</p>
      </div>
    </Link>
    {!isLast && <Separator className="my-2 bg-gray-300" />}
  </>
);

const companyLinks = [
  {
    title: "People-Powered Technology",
    subHeader: "About Us",
    link: "/company/about",
    icon: <BsPeople className="text-[#0083f8] w-7 h-7" />,
  },
  {
    title: "Join the family",
    subHeader: "Career Opportunities",
    link: "/company/careers",
    icon: <BsBriefcase className="text-[#0083f8] w-7 h-7" />,
  },
];

const resourcesLinks = [
  {
    title: "Latest news",
    subHeader: "Blog",
    link: "https://blog.zabira.com/",
    externalLink: true,
    icon: <BsFileEarmarkText className="text-[#0083f8] w-7 h-7" />,
  },
  {
    title: "Invite a friend",
    subHeader: "Referral Program",
    link: "https://blog.zabira.com/referrals",
    externalLink: true,
    icon: <BsGift className="text-[#0083f8] w-7 h-7" />,
  },
];

const suppportLinks = [
  {
    title: "Get in touch",
    subHeader: "Contact us",
    link: "/company/contact",
    icon: <BsChatText className="text-[#0083f8] w-7 h-7" />,
  },
  {
    title: "Frequently asked questions",
    subHeader: "Help ceneter",
    link: "/",
    icon: <BsLifePreserver className="text-[#0083f8] w-7 h-7" />,
  },
];

const Navbar = () => {
  return (
    <div className=" bg-white  sticky top-0 left-0 right-0 z-[999]">
      <div className="custom-container py-4 flex items-center justify-between">
        <div className="flex items-center gap-5">
          <Link href="/">
            <Image
              priority
              width="144"
              height="40"
              src="/logo.svg"
              alt="zabira logo"
            />
          </Link>
          <NavigationMenu className="hidden lg:flex ">
            <NavigationMenuList>
              <NavigationMenu>
                <NavigationMenuItem>
                  <NavigationMenuTrigger className="text-base p-3 h-auto font-normal">
                    Products
                  </NavigationMenuTrigger>

                  <NavigationMenuContent
                    style={{
                      boxShadow: "0 .1875rem .375rem rgba(140, 152, 164, .25)",
                    }}
                    className="rounded-xl h-[350px] min-w-[25rem] max-w-[40rem] flex gap-8 p-2"
                  >
                    <div className="bg-[#e2f3ff] rounded-3xl p-6 flex justify-between flex-col w-[324px]">
                      <div>
                        <h2 className="font-bold text-xl">Explore</h2>
                        <p className="text-[#51596c]">
                          Discover Seamless trading experience with the all in
                          one App
                        </p>
                      </div>
                      <div>
                        <Link
                          href="/about"
                          className="hover:opacity-80 flex items-center gap-2 text-[#2d374b]"
                        >
                          <p className=" pb-1 text-sm">Learn More</p>
                          <IoArrowForward className="text-sm" />
                        </Link>
                        <Link
                          href="/about"
                          className="hover:opacity-80 flex items-center gap-2 text-[#2d374b]"
                        >
                          <p className="text-sm">Why Zabira</p>
                          <IoArrowForward className="text-sm" />
                        </Link>
                      </div>
                    </div>

                    <div className="w-[324px] p-3">
                      <p className="font-bold text-sm py-2 px-4">Menu</p>
                      <div className="flex flex-col gap-1">
                        {productsMenu.map(
                          ({ link, title, description, isNew, icon }) => (
                            <Link
                              href={link}
                              className=" p-4 hover:bg-[#bdc5d133] flex gap-4 items-center rounded-lg"
                            >
                              {icon}
                              <div>
                                <p className="text-sm text-[#51596c] font-semibold leading-tight">
                                  {title}
                                </p>
                                <div className="flex gap-2">
                                  <p>{description}</p>
                                  {isNew && (
                                    <span className=" text-xs text-white bg-[#0083f8] px-2 py-1 rounded-full h-fit flex items-center justify-center">
                                      New
                                    </span>
                                  )}
                                </div>
                              </div>
                            </Link>
                          )
                        )}
                      </div>
                    </div>
                  </NavigationMenuContent>
                </NavigationMenuItem>
              </NavigationMenu>
              <NavigationMenu>
                <NavigationMenuItem>
                  <NavigationMenuTrigger className="text-base p-3 h-auto font-normal">
                    Company
                  </NavigationMenuTrigger>
                  <NavigationMenuContent className="rounded-xl min-w-[20rem] max-w-[20rem] p-2">
                    {companyLinks.map((links, index) => (
                      <ListItem
                        key={links.title}
                        {...links}
                        isLast={index === companyLinks.length - 1}
                      />
                    ))}
                  </NavigationMenuContent>
                </NavigationMenuItem>
              </NavigationMenu>

              <NavigationMenu>
                <NavigationMenuItem>
                  <NavigationMenuTrigger className="text-base p-3 h-auto font-normal">
                    Resources
                  </NavigationMenuTrigger>
                  <NavigationMenuContent className="rounded-xl min-w-[20rem] max-w-[20rem] p-2">
                    {resourcesLinks?.map((links, index) => (
                      <ListItem
                        key={links.title}
                        {...links}
                        isLast={index === companyLinks.length - 1}
                      />
                    ))}
                  </NavigationMenuContent>
                </NavigationMenuItem>
              </NavigationMenu>

              <NavigationMenu>
                <NavigationMenuItem>
                  <NavigationMenuTrigger className="text-base p-3 h-auto font-normal">
                    Support
                  </NavigationMenuTrigger>
                  <NavigationMenuContent className="rounded-xl min-w-[20rem] max-w-[20rem] p-2">
                    {suppportLinks.map((links, index) => (
                      <ListItem
                        key={links.title}
                        {...links}
                        isLast={index === companyLinks.length - 1}
                      />
                    ))}
                  </NavigationMenuContent>
                </NavigationMenuItem>
              </NavigationMenu>
            </NavigationMenuList>
          </NavigationMenu>
        </div>
        <div className="block lg:hidden border border-[#dce0e599] p-2 cursor-pointer">
          <RxHamburgerMenu className="text-base text-[#51596c]" />
        </div>
        <div className="hidden lg:flex gap-3 items-center">
          <Link
            target="_blank"
            href="https://app.zabira.com/sign-in"
            className="rounded-full hover:bg-[#2d374b1a] py-2 px-5 font-bold "
          >
            Log in
          </Link>
          <Button
            asChild
            className="rounded-full py-6 px-7 text-base bg-[#0083f8] transition-transform duration-300 ease-in-out hover:bg-[#0083f8] hover:text-white hover:scale-105"
          >
            <a href="https://app.zabira.com/sign-up" target="_blank">
              Sign up
            </a>
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
