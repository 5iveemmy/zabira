"use client";

import { Button } from "@/components/ui/button";
import ZabiraFootprint from "@/components/zabira-footprint";
import Image from "next/image";
import React from "react";
import { motion } from "framer-motion";

const paymentOptions = [
  {
    title: "Airtime",
    description: "Quick & easy mobile reloads on the go, wherever you go",
    image: "/img-sub.png",
  },
  {
    title: "Cable-Tv Subscription",
    description: "Pay for your GoTV, Dstv or Startimes subscriptions with ease",
    image: "/img-cable.png",
  },
  {
    title: "Utilities",
    description: "Keep the lights on by paying for your power bills on Zabira",
    image: "/utilities.png",
  },
  {
    title: "Sports-betting",
    description:
      "Top up your bet wallet at your own convenience using our platform",
    image: "/betting.png",
  },
];

const Utilities = () => {
  return (
    <>
      <ZabiraFootprint
        title="Innovate with payments"
        description="Step into the future and simplify your life"
        className="gap-20"
        button={
          <Button
            asChild
            className="h-12 mt-12 rounded-full text-white bg-[#3772ff] font-bold px-8 text-base"
          >
            <a
              target="_blank"
              href="https://app.zabira.com/bill-payment"
              rel="noopener noreferrer"
            >
              Pay Now
            </a>
          </Button>
        }
        rightElemet={
          <div className="flex lg:block justify-center lg:justify-normal w-full lg:w-auto">
            <Image
              src="/payments-hero.svg"
              width="520"
              height="550"
              alt="plane icon"
            />
          </div>
        }
      />
      <section>
        <div className="custom-container pt-10 pb-28">
          <div className="flex justify-center items-center flex-col text-center pb-5">
            <h2 className="text-4xl lg:text-5xl font-bold mb-3">
              Bill Payments
            </h2>
            <p className="text-[#7e7e7e]">
              We are extending the capabilites of your wallet
            </p>
          </div>
          <div className="flex flex-col gap-16">
            {paymentOptions.map(({ description, title, image }, index) => (
              <div
                key={title}
                className={`flex gap-8 md:gap-auto flex-col md:flex-row md:items-center  ${
                  index % 2 !== 0
                    ? "justify-between md:pr-10 flex-row-reverse"
                    : "gap-8"
                }`}
              >
                <div className="relative">
                  <motion.div
                    animate={["initial"]}
                    whileHover={["grow"]}
                    variants={{
                      grow: {
                        scale: 1.1,
                      },
                      rotate: {
                        rotate: [null, -5, 5, 0],
                        transition: {
                          duration: 10,
                        },
                      },
                      initial: {
                        y: [-10, 10],
                        rotate: 0,
                        transition: {
                          duration: 2,
                          repeat: Infinity,
                          repeatType: "reverse",
                        },
                      },
                    }}
                    className="absolute top-2 -right-2 md:-right-8"
                  >
                    <Image
                      priority
                      width="64"
                      height="71"
                      src="/pointer-up.svg"
                      alt="line"
                    />
                  </motion.div>

                  <motion.div
                    animate={["initial"]}
                    whileHover={["grow"]}
                    variants={{
                      grow: {
                        scale: 1.1,
                      },
                      rotate: {
                        rotate: [null, -5, 5, 0],
                        transition: {
                          duration: 10,
                        },
                      },
                      initial: {
                        x: [-10, 10],
                        rotate: 0,
                        transition: {
                          duration: 2,
                          repeat: Infinity,
                          repeatType: "reverse",
                        },
                      },
                    }}
                    className="absolute -bottom-12 -left-16"
                  >
                    <Image
                      priority
                      width="192"
                      height="104"
                      src="/curved-shape.svg"
                      alt="line"
                    />
                  </motion.div>

                  <Image
                    priority
                    width="539"
                    height="539"
                    className="min-w-full md:min-w-auto"
                    src={image}
                    alt={title}
                  />
                </div>
                <div>
                  <div>
                    <h1 className="text-3xl sm:text-[40px] font-bold pb-2 md:pb-4">
                      {title}
                    </h1>
                    <p className=" text-[#7e7e7e] pb-3">{description}</p>
                    <Button
                      asChild
                      className="rounded-full text-white bg-[#0083F8] font-bold px-8 "
                    >
                      <a
                        target="_blank"
                        href="https://app.zabira.com/bill-payment"
                        rel="noopener noreferrer"
                      >
                        Pay Now
                      </a>
                    </Button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Utilities;
