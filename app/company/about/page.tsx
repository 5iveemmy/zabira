"use client";

import StatsWithImage from "@/components/statsWithImage";
import ZabiraFootprint from "@/components/zabira-footprint";
import React from "react";

const infoData = [
  {
    title: "Who We Are",
    description: [
      "The Grand Masters of Instant Payments. Zabira is your trusted Partner in digital finance, specializing in instant payments. We offer a state-of-the-art pro platform for cryptocurrency trading, gift card exchanges, utility bill payments, and fiat transactions. Our innovative solutions simplify the way you manage your money, empowering you to manage the digital economy with ease.",
      "The Zabira Wallet is a secure and convenient way to manage your money.",
    ],
    infoHighlight: [
      {
        header: "Mission",
        description:
          "To promote payment solutions at the most competitive rates and facilitate quick settlement of money transfer.",
        icon: "/about-mission.svg",
      },
      {
        header: "Vision",
        description:
          "To be the customer’s first choice of crypto trading and fast payment solutions in Africa and beyond.",
        icon: "/about-vision.svg",
      },
      {
        header: "Core Values",
        description: `The Zabira brand values spans across team members and end-users, are strongly centered on people. This emphasis is reflected in our B.E.S.C.T.T acronym where we have  "Business Ethnics, Excellence, Social responsibility, Customer Service, Trustworthy, Team work`,
        icon: "/about-core-values.svg",
      },
    ],
  },
  {
    title: "Safe and secure way to finance",
    description: [
      "The Zabira wallet provides a secure and convenient money management solution.",
    ],
    infoHighlight: [
      {
        header: "24hours support",
        description:
          "Our support team are available around the clock to ensure your financial security by providing assistance whenever you need it.",
        icon: "/24hrs-support.svg",
      },
      {
        header: "Security",
        description:
          "At Zabira, we take the safety of your finance seriously by using industry-standard encryption, fraud prevention tools, and secure login processes.",
        icon: "/security.svg",
      },
      {
        header: "Payment integrity",
        description: `Secure payment gateway,protection of funds with rigorous security measures and safe transactions.`,
        icon: "/payment-integrity.svg",
      },
    ],
  },
];

const About = () => {
  return (
    <>
      <ZabiraFootprint
        title="About"
        blueText
        description="The grand masters of instant payments"
      />

      <section>
        <div className="custom-container flex flex-col gap-16">
          {infoData.map((data, index) => (
            <StatsWithImage index={index} key={index} infoData={data} />
          ))}
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
