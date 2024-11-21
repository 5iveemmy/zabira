"use client";

import dynamic from "next/dynamic";
import Image from "next/image";
import React from "react";

const Header = dynamic(() => import("@/components/zabira-footprint"), {
  ssr: false,
});

const About = () => {
  return (
    <>
      <Header
        title="About"
        blueText
        description="The grand masters of instant payments"
      />

      <section>
        <div className="custom-container py-5 flex justify-between">
          <Image
            priority
            width="558"
            className="px-4"
            height="528"
            src="/about.png"
            alt="about"
          />

          <div className="pl-4  pr-44">
            <h3 className="mb-3 text-5xl font-bold">Who We Are</h3>
            <div>
              <p className="mb-3 text-xl  text-[#7e7e7e]">
                The Grand Masters of Instant Payments. Zabira is your trusted
                Partner in digital finance, specializing in instant payments. We
                offer a state-of-the-art pro platform for cryptocurrency
                trading, gift card exchanges, utility bill payments, and fiat
                transactions. Our innovative solutions simplify the way you
                manage your money, empowering you to manage the digital economy
                with ease.
              </p>
              <p className="text-xl  text-[#7e7e7e] ">
                The Zabira Wallet is a secure and convenient way to manage your
                money.
              </p>
            </div>
            <div className="flex flex-col gap-7 mt-11 pr-24">
              <div className="flex gap-8 items-center">
                <div>
                  <div className="bg-[#3772ff1a] rounded-full  w-[88px] h-[88px] flex items-center justify-center">
                    <Image
                      priority
                      width="100"
                      height="100"
                      src="/about-mission.svg"
                      alt="mission"
                    />
                  </div>
                </div>
                <div>
                  <p className="mb-3 text-2xl font-bold">Mission</p>
                  <p className="text-[#7e7e7e]">
                    To promote payment solutions at the most competitive rates
                    and facilitate quick settlement of money transfer.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-5">
        <div className="custom-container py-5 flex justify-between">
          <p className="px-4 lg:w-2/5 text-5xl font-bold">
            Frequently Asked Questions
          </p>
        </div>
      </section>
    </>
  );
};

export default About;
