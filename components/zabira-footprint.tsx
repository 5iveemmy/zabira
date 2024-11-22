"use client";

import React, { ReactNode } from "react";
import ZabiraWork from "./zabira-work";

interface Props {
  title: string;
  description: string;
  blueText?: boolean;
  button?: ReactNode;
  rightElemet?: ReactNode;
}

const ZabiraFootprint = ({
  title,
  description,
  button,
  blueText,
  rightElemet,
}: Props) => {
  return (
    <section className="zabira-footprint">
      <div className="custom-container lg:pb-[9rem] lg:pt-16 flex justify-between items-center">
        <div className="lg:w-2/5">
          <h1 className="text-[40px] font-bold pb-2">
            {title}{" "}
            {blueText && (
              <span className={`${blueText ? "text-brand" : ""}`}>Zabira</span>
            )}
          </h1>
          <p className="text-lg text-[#7e7e7e]">{description}</p>
          {button && button}
        </div>

        {rightElemet ? <>{rightElemet}</> : <ZabiraWork />}
      </div>
    </section>
  );
};

export default ZabiraFootprint;
