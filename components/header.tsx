"use client";
import Image from "next/image";
import React from "react";
import { Avatar, AvatarImage } from "./ui/avatar";
import { Separator } from "./ui/separator";

const flags = ["/ngr.jpg", "/usa.jpg", "/ke.jpg", "/za.jpg", "/gh.jpg"];

const Header = () => {
  return (
    <div className="flex justify-between pt-20">
      <div className="lg:w-2/5 flex flex-col gap-1">
        <h1 className="text-5xl leading-tight text-dark font-bold">
          Energize your Future with{" "}
          <span className="text-brand">Giftcards</span>
        </h1>
        <p className="text-gray-500 text-xl">
          Experience seamless transactions, effortless swaps , and instant
          payments. Your Journey into the future of finance starts now
        </p>

        <div className="gap-4 flex py-4">
          <Image
            src="/app-store-badge.svg"
            width="151"
            height="41"
            className="rounded-2xl"
            alt="app store badge"
          />
          <Image
            src="/google-play-badge.svg"
            width="151"
            className="rounded-2xl"
            height="41"
            alt="google play badge"
          />
        </div>

        <div className="flex justify-center items-center gap-4">
          <div className="flex relative -space-x-4">
            {flags.map((item, index) => (
              <Avatar
                key={index}
                className="relative transition-transform hover:translate-x-0 hover:z-10 w-9 h-9"
              >
                <AvatarImage src={item} />
              </Avatar>
            ))}
          </div>

          <Separator orientation="vertical" />

          <div className="">
            <p className="text-4xl text-dark font-bold">Transfer funds</p>
            <p className="text-sm text-gray-500">Move your money, your way</p>
          </div>
        </div>
      </div>

      <div>
        <h1 className="text-3xl font-bold">Zabira</h1>
        <p className="text-gray-500">The ultimate design resource</p>
      </div>
    </div>
  );
};

export default Header;
