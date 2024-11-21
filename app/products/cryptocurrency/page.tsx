import { Button } from "@/components/ui/button";
import ZabiraFootprint from "@/components/zabira-footprint";
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
    title: "Sell Crypto",
    description:
      "Trade crypto or other digital assets in your native currencies, easily and securely",
    image: "/sell-crypto.svg",
  },
];

interface CryptoOptionBoxProps {
  title: string;
  description: string;
  image: string;
}
const CryptoOptionBox = ({
  title,
  description,
  image,
}: CryptoOptionBoxProps) => (
  <div className="bg-[#f7f7f7] min-w-[312px]  gap-4  rounded-xl p-8 h-fit  items-center flex flex-col">
    <Image src={image} width="100" height="100" alt={title} />
    <h2 className="font-bold text-2xl pt-4">Buy Crypto</h2>
    <p className="text-[#7e7e7e] text-center">{description}</p>
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
      />

      <section>
        <div className="custom-container py-28 flex gap-24 items-center">
          <div className="flex items-center gap-8">
            <div className="flex flex-col gap-8 ">
              {crptoOptions.map((option) => (
                <CryptoOptionBox key={option.title} {...option} />
              ))}
            </div>
            <div>
              <CryptoOptionBox
                title="Swap Crypto"
                description="Trade crypto or other digital assets in your native currencies, easily and securely"
                image="/swap-crypto.svg"
              />
            </div>
          </div>
          <div className="xl:w-[80%] pr-10">
            <h1 className="text-5xl leading-tight font-bold pb-2">
              Get Your Free, Secure Crypto Wallet
            </h1>
            <p className="text-lg text-[#7e7e7e] ">
              Experience seamless cryptocurrency transactions with Zabira. Enjoy
              competitive rates, secure transactions, and instant support
            </p>
            <Button
              asChild
              className="h-12 w-[242px] mt-12 rounded-full text-white bg-[#3772ff] font-bold px-8 text-base"
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
        <div className="custom-container py-28 text-center">
          <div className="flex justify-center items-center flex-col gap-4">
            <h4 className="font-bold leading-tight text-5xl">
              Buying your first crypto on Zabira?
            </h4>
            <p className="text-xl text-[#7e7e7e] max-w-[30%]">
              Easy-peasy! Download Zabira app, get verified and start trading
              securely today
            </p>
          </div>
        </div>
      </section>
    </>
  );
};

export default Cryptocurrency;
