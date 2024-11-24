import StatsWithImage from "@/components/statsWithImage";
import { Button } from "@/components/ui/button";
import ZabiraFootprint from "@/components/zabira-footprint";
import { cn } from "@/lib/utils";
import Image from "next/image";
import React from "react";

const crptoOptions = [
  {
    title: "Buy Crypto",
    description:
      "Trade crypto or other digital assets in your native currencies, easily and securely",
    image: "/buy-crypto.svg",
  },
  {
    title: "Swap Crypto",
    description:
      "Exchange your cryptocurrencies seamlessly with variety of options",
    image: "/swap-crypto.svg",
    className: "md:hidden flex",
  },
  {
    title: "Sell Crypto",
    description:
      "Easily convert your cryptocurrencies into cash at the best rates on the market",
    image: "/sell-crypto.svg",
  },
];

const infoData = [
  {
    title: "The most trusted cryptocurrency platform.",
    description: [
      "The Zabira Wallet is a secure and convenient way to manage your money.",
    ],
    infoHighlight: [
      {
        header: "24hours support",
        description:
          "Our dedicated support team is available around the clock to assist you, ensuring you have the help you need whenever you need it.",
        icon: "/24hrs-support.svg",
      },
      {
        header: "Security",
        description:
          "Security is our priority. With advanced encryption and robust protocols, your funds are protected at every transaction.",
        icon: "/security.svg",
      },
      {
        header: "Freedom",
        description: `Experience financial freedom with Zabira. Trade, store, and manage your assets with confidence and ease, anytime and anywhere`,
        icon: "/payment-integrity.svg",
      },
    ],
  },
];

interface CryptoOptionBoxProps {
  title: string;
  description: string;
  image: string;
  className?: string;
}
const CryptoOptionBox = ({
  title,
  description,
  image,
  className,
}: CryptoOptionBoxProps) => (
  <div
    className={cn(
      "bg-[#f7f7f7] min-w-[312px] gap-4  rounded-xl p-8 h-fit  items-center flex flex-col",
      className
    )}
  >
    <Image src={image} width="100" height="100" alt={title} />
    <h2 className="font-bold text-2xl pt-4">{title}</h2>
    <p className="text-[#7e7e7e] text-center">{description}</p>
  </div>
);

interface Props {
  title: string;
  image: string;
}
const BuyingOptionCard = ({ image, title }: Props) => (
  <div className="flex items-center flex-col gap-4 w-fit group">
    <Image
      priority
      width="100"
      height="100"
      src={image}
      alt={`${title} 'icon'`}
      className="group-hover:[transform:rotateY(360deg)] transition-all duration-700 ease-in-out"
    />
    <a
      href="#"
      className="text-xl transition-all duration-300 ease-in-out font-bold hover:text-[#3772ff]"
    >
      {title}
    </a>
  </div>
);

const Cryptocurrency = () => {
  return (
    <>
      <ZabiraFootprint
        title="The Cryptocurrency wallet you can trust"
        description="Effortlessly buy, sell, and swap cryptocurrencies with seamless transactions and top-notch security for all your digital assets."
        button={
          <Button
            asChild
            className="h-12 mt-12 rounded-full text-white bg-[#3772ff] font-bold px-8 text-base"
          >
            <a
              target="_blank"
              href="https://app.zabira.com/wallet"
              rel="noopener noreferrer"
            >
              Trade Now
            </a>
          </Button>
        }
        rightElemet={
          <Image
            src="/crypto-hero.svg"
            width="624"
            height="624"
            alt="plane icon"
          />
        }
        className="items-center gap-16 md:gap-10"
      />

      <section>
        <div className="custom-container py-28 flex flex-col lg:flex-row gap-14 lg:gap-24 items-center">
          <div className="flex-col md:flex-row flex items-center gap-8">
            <div className="flex flex-col gap-8 ">
              {crptoOptions.map((option) => (
                <CryptoOptionBox key={option.title} {...option} />
              ))}
            </div>

            <div className="hidden md:flex">
              <CryptoOptionBox
                title="Swap Crypto"
                description="Exchange your cryptocurrencies seamlessly with variety of options"
                image="/swap-crypto.svg"
              />
            </div>
          </div>
          <div className="xl:w-[80%] lg:pr-10">
            <h1 className="text-4xl md:text-5xl leading-tight font-bold pb-6">
              Get Your Free, Secure Crypto Wallet
            </h1>
            <p className="text-lg text-[#7e7e7e] ">
              Experience seamless cryptocurrency transactions with Zabira. Enjoy
              competitive rates, secure transactions, and instant support
            </p>
            <Button
              asChild
              className="h-12 w-[242px] mt-8 lg:mt-12 rounded-full text-white bg-[#3772ff] font-bold px-8 text-base"
            >
              <a
                target="_blank"
                href="https://app.zabira.com/wallet"
                rel="noopener noreferrer"
              >
                Start Trading Now
              </a>
            </Button>
          </div>
        </div>
      </section>

      <section className="bg-[#f7f7f7] ">
        <div className="custom-container py-24 lg:py-28 text-center">
          <div className="flex justify-center items-center flex-col gap-4 mb-12">
            <h4 className="font-bold leading-tight text-4xl md:text-5xl">
              Buying your first crypto on Zabira?
            </h4>
            <p className="text-xl text-[#7e7e7e] lg:max-w-[30%]">
              Easy-peasy! Download Zabira app, get verified and start trading
              securely today
            </p>
          </div>
          <div className="flex flex-col md:flex-row items-center justify-center gap-8 md:gap-0 lg:gap-16">
            <BuyingOptionCard image="/download-app.svg" title="Download App" />

            <Image
              priority
              width="160"
              height="12"
              src="/connect-line.png"
              alt="Connect line"
              className="mb-10 hidden md:block"
            />

            <BuyingOptionCard image="/get-verified.svg" title="Get Verified" />

            <Image
              priority
              width="160"
              height="12"
              src="/connect-line.png"
              alt="Connect line"
              className="mb-10 hidden md:block"
            />

            <BuyingOptionCard
              image="/start-trading.svg"
              title="Start Trading"
            />
          </div>
        </div>
      </section>

      <section>
        <div className="custom-container py-24">
          {infoData.map((data, index) => (
            <StatsWithImage index={index} key={index} infoData={data} />
          ))}
        </div>
      </section>
    </>
  );
};

export default Cryptocurrency;
