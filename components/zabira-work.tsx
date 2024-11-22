import { cn } from "@/lib/utils";
import Image from "next/image";
import { usePathname } from "next/navigation";
import React from "react";
import { BsPlayCircle } from "react-icons/bs";

interface Props {
  className?: string;
}
const ZabiraWork = ({ className }: Props) => {
  const pathname = usePathname();

  return (
    <div
      className={cn(
        "relative w-[352px] p-8 bg-white rounded-3xl flex flex-col justify-between",
        className
      )}
    >
      <div className="pb-16">
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
      {pathname !== "/" && (
        <>
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
        </>
      )}
    </div>
  );
};

export default ZabiraWork;
