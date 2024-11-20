import React from "react";
import dynamic from "next/dynamic";
import Image from "next/image";
import DownloadBadges from "@/components/download-badges";
import { Avatar, AvatarImage } from "@/components/ui/avatar";

export const metadata = {
  title: "Zabira - Donload",
};

const DownloadSection = dynamic(
  () => import("../containers/footer/download-section"),
  {
    ssr: false,
  }
);

const steps = [
  {
    num: 1,
    title: "Download Zabira",
    story:
      "With a team of highly experienced designers, we have done it carefully and simply. The components work together to create a beautiful landing. It is essential template for designers.",
  },
  {
    num: 2,
    title: "Create an Account",
    story:
      "We have done it carefully and simply. Our models take a long time to research and work on, so you can easily and simply use the ingredients to make the landing.",
  },
  {
    num: 3,
    title: "Start Trading!",
    story:
      "Components are designed to match perfectly in a variety of situations, helping you create multiple target spills quickly.",
  },
];

const Download = () => {
  return (
    <>
      <DownloadSection />

      <section className="relative h-screen">
        <div className="get-started-blue">
          <h1 className="text-5xl text-center font-bold pb-3">
            Get Started in 3 Easy Steps
          </h1>

          <div className="flex justify-between">
            <Image
              src="/happy-customer.svg"
              width="472"
              height="541"
              alt="happy customer"
            />
            <div className="flex flex-col gap-8 mt-8 w-[50%] ">
              {steps.map(({ num, story, title }) => (
                <div key={num} className="flex gap-4 pr-48">
                  <div>
                    <div className="rounded-full w-[50px] h-[50px] bg-white flex justify-center items-center">
                      <p className="font-bold text-[#7e7e7e]">{num}</p>
                    </div>
                  </div>

                  <div>
                    <h3 className="font-bold text-lg mb-3">{title}</h3>
                    <p className="text-[#757575]">{story}</p>
                  </div>
                </div>
              ))}
              <DownloadBadges className="items-center justify-center py-1 " />
            </div>
          </div>
        </div>
      </section>
      <section className="flex justify-center flex-col items-center pb-10">
        <h3 className="text-4xl text-center max-w-[50%] font-bold leading-normal tracking-normal pb-12">
          “Zabira serves as the main hub for designs of 3 teams at our company.
          When anyone needs to access a design - it’s in CaLan.”
        </h3>
        <Avatar className=" w-16 h-15 border">
          <AvatarImage src="/ceo.png" className="object-cover" />
        </Avatar>
        <h4 className="text-2xl font-bold pt-3 pb-1">Isaac John</h4>
        <p className="text-sm text-[#7e7e7e]">Founder at Zabira Technologies</p>
      </section>
    </>
  );
};

export default Download;
