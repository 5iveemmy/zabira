"use client";
import Image from "next/image";
import React from "react";
import { BsPlayCircle } from "react-icons/bs";

interface Props {
  title: string;
  description: string;
  career?: boolean;
}

const Header = ({ title, description, career }: Props) => {
  return (
    <section className="zabira-footprint">
      <div className="custom-container lg:pb-[9rem] lg:pt-16 flex justify-between">
        <div className="pt-20">
          <h1 className="text-[40px] font-bold pb-2">{title}</h1>
          <p className="text-lg">{description}</p>
        </div>
        {!career && (
          <div className="relative w-[352px] h-[370px] p-8 bg-white rounded-3xl flex flex-col justify-between">
            <div>
              <h2 className="text-5xl font-bold leading-tight pb-3">
                How does Zabira work?
              </h2>
              <p className="text-[#7e7e7e]">Learn more about Zabira</p>
            </div>
            <a
              href="https://www.youtube.com/embed/LyNADeA9dl8&rel=0showinfo=0"
              className="flex items-center text-sm gap-1.5 font-bold hover:opacity-50"
            >
              <BsPlayCircle className="text-base" />
              <span>Watch our story</span>
            </a>
            <Image
              priority
              width="192"
              height="109"
              src="/three-arrows.svg"
              alt="arrows"
              className="absolute top-[1.5rem] -right-[11.5rem]"
            />

            <Image
              src="/plane.svg"
              width="160"
              height="86"
              alt="plane icon"
              className="absolute -bottom-[3.5rem] -right-[3.5rem]"
            />
          </div>
        )}
      </div>
    </section>
  );
};

export default Header;
