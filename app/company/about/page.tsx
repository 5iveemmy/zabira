"use client";

import StatsWithImage from "@/components/statsWithImage";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import { Separator } from "@/components/ui/separator";
import ZabiraFootprint from "@/components/zabira-footprint";
import Autoplay from "embla-carousel-autoplay";
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

const faqs = [
  {
    question: "What is Zabira",
    answer:
      "Zabira is an all-in-one digital asset platform that allows you to manage, trade, and earn from various digital assets including cryptocurrencies and gift cards, with the added functionality of a multi-currency wallet that lets you pay for anything.",
    value: "item-1",
  },
  {
    question: "How do I get started with Zabira?",
    answer:
      "To get started, click “Sign Up” on the website to get directed to the web app or download the Zabira app from the app store, create an account or log in with your existing credentials, and explore the various features and functionalities available to manage your digital assets.",
    value: "item-2",
  },
  {
    question: "How do I create an account on Zabira?",
    answer:
      "To create an account, sign up through the website to navigate to the web app or download the Zabira One app from the app store, open the app, and follow the on-screen instructions to sign up using your email address or phone number.",
    value: "item-3",
  },
  {
    question: "How do I securely manage my profile and account?",
    answer: `You can manage your profile and account settings by navigating to the "Profile" section in the app. Here, you can update your personal information, change your password, and enable two-factor authentication for enhanced security.`,
    value: "item-4",
  },
  {
    question: "What types of digital assets can I manage on Zabira?",
    answer: `Zabira allows you to manage a wide range of digital assets including cryptocurrencies (like Bitcoin, Ethereum, and more), gift cards, and fiat currencies.`,
    value: "item-5",
  },
  {
    question: "How do I switch between my crypto and fiat wallet?",
    answer: `You can switch between your crypto and fiat wallet by accessing the "Wallet" section in the app and selecting the desired wallet type.`,
    value: "item-6",
  },
  {
    question: "How do I fund my fiat wallet?",
    answer: `You can fund your fiat wallet by switching to "Fiat" in the "Wallet" section of the app, choosing your desired currency, and selecting an option like "Bank Transfer" to add funds.`,
    value: "item-7",
  },
];

interface TimelineCardProps {
  prevYear: string;
  laterYear: string;
  title: string;
  description: string;
}

const TimelineCard = ({
  prevYear,
  laterYear,
  title,
  description,
}: TimelineCardProps) => (
  <div>
    <p className="text-4xl text-[#51596c] leading-tight">{prevYear}</p>
    <p className="text-5xl text-[#0083f8] font-bold leading-tight">
      {laterYear}
    </p>
    <Separator
      orientation="horizontal"
      className="bg-[#0083f8] w-[calc(100%+2rem)] my-8 swiper-step-divider relative"
    />
    <div className="max-w-[400px] sm:max-w-full ">
      <p className="pb-3 font-bold text-2xl">{title}</p>
      <p className="text-[#7e7e7e]">{description}</p>
    </div>
  </div>
);

const timelines = [
  {
    prevYear: "2023",
    laterYear: "Present",
    title: "Official beta launch",
    description:
      "With the launch of Zabira Pro, we unified our services, enabling users to seamlessly buy gift cards and crypto in one place, combining the power of Zabira and Grip.",
  },
  {
    prevYear: "2022",
    laterYear: "2023",
    title: "Early adoption success",
    description:
      "Our platform expanded, delivering more robust services for all users and refining the experience across the board.",
  },
  {
    prevYear: "2021",
    laterYear: "2022",
    title: "Breaking ground",
    description:
      "We strengthened our team to offer superior services and support, ensuring an enhanced user experience.",
  },
  {
    prevYear: "2020",
    laterYear: "2021",
    title: "Rolling up our sleeves",
    description:
      " As we grew in sales, the pandemic heightened our drive to enhance payment systems. We rebranded to Zabira and introduced Grip, expanding our services to include gift card payments.",
  },
  {
    prevYear: "2019",
    laterYear: "2020",
    title: "Our vision of a better way in Crypto",
    description:
      "In August 2019, we launched as Izikjon with a vision to revolutionize fast payments and cryptocurrency exchange. Our CEO’s innovative approach to solving financial challenges laid the foundation for a world-class fintech company.",
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
        <div className="mx-auto w-full pl-4 pr-4 xl:pr-0  xl:pl-16 pt-16 pb-[120px]">
          <h2 className="text-[40px] font-bold text-[#51596c] mb-12">
            Our journey so far
          </h2>

          <div className="flex  overflow-hidden">
            <Carousel
              opts={{
                align: "start",
                loop: true,
              }}
              plugins={[
                Autoplay({
                  playOnInit: true,
                  delay: 3000,
                  stopOnInteraction: false,
                }),
              ]}
            >
              <CarouselContent>
                {timelines.map((timeline, index) => (
                  <CarouselItem
                    key={`top-${index}`}
                    className="min-w-0 flex-none basis-full sm:basis-2/4 md:basis-1/3 lg:basis-1/4"
                  >
                    <TimelineCard key={index} {...timeline} />
                  </CarouselItem>
                ))}
              </CarouselContent>
            </Carousel>
          </div>
        </div>
      </section>

      <section>
        <div className="custom-container flex flex-col gap-16">
          {infoData.map((data, index) => (
            <StatsWithImage index={index} key={index} infoData={data} />
          ))}
        </div>
      </section>

      <section className="py-16">
        <div className="custom-container py-5 flex flex-col lg:flex-row gap-6 md:gap-10 lg:gap-6">
          <p className="pt-8 lg:min-w-[30%] leading-tight text-3xl md:text-4xl lg:text-5xl font-bold">
            Frequently Asked Questions
          </p>

          <Accordion
            type="single"
            collapsible
            className="w-full border-[#dce0e599] border"
          >
            {faqs.map(({ value, question, answer }) => (
              <AccordionItem
                value={value}
                key={value}
                className="data-[state=open]:bg-[#e2f3ff] pl-3 pr-5  md:pl-6 md:pr-10 border-none"
              >
                <AccordionTrigger className="data-[state=open]:text-[#1066e7] md:text-lg">
                  {question}
                </AccordionTrigger>
                <AccordionContent className="text-sm md:text-base pl-11 text-[#51596C]">
                  {answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>
    </>
  );
};

export default About;
