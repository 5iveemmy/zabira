"use client";

import React, { ReactNode, useState } from "react";
import ZabiraWork from "./zabira-work";
import { cn } from "@/lib/utils";
import FsLightbox from "fslightbox-react";

interface Props {
  title: string;
  description: string;
  blueText?: boolean;
  button?: ReactNode;
  rightElemet?: ReactNode;
  className?: string;
}

const ZabiraFootprint = ({
  title,
  description,
  button,
  blueText,
  rightElemet,
  className,
}: Props) => {
  const [toggler, setToggler] = useState<boolean>(false);
  return (
    <section className="zabira-footprint">
      <div
        className={cn(
          "custom-container pb-[9rem] pt-32 md:pt-16 flex flex-col lg:flex-row justify-between gap-48 md:gap-10  lg:items-center",
          className
        )}
      >
        <div className="lg:w-2/5">
          <h1 className="text-[40px] leading-tight font-bold pb-5">
            {title}{" "}
            {blueText && (
              <span className={`${blueText ? "text-brand" : ""}`}>Zabira</span>
            )}
          </h1>
          <p className="text-lg text-[#7e7e7e]">{description}</p>
          {button && button}
        </div>

        {rightElemet ? (
          <>{rightElemet}</>
        ) : (
          <div className="flex justify-center md:justify-end  lg:justify-end mr-3 lg:mr-0">
            <ZabiraWork onClick={() => setToggler(!toggler)} />
            <FsLightbox
              toggler={toggler}
              sources={[
                "https://www.youtube.com/embed/LyNADeA9dl8&rel=0showinfo=0",
              ]}
            />
          </div>
        )}
      </div>
    </section>
  );
};

export default ZabiraFootprint;
