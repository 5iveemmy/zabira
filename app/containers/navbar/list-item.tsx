"use client";

import { Separator } from "@/components/ui/separator";
import Link from "next/link";
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

export const companyLinks = [
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

export const resourcesLinks = [
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

export const suppportLinks = [
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

export const productsMenu = [
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
export const ListItem = ({
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
      prefetch={true}
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
