import { cn } from "@/lib/utils";
import Image from "next/image";
import { usePathname } from "next/navigation";
import React from "react";
import { BsPlayCircle } from "react-icons/bs";
import { motion } from "framer-motion";

interface Props {
  className?: string;
  onClick?: () => void;
}
const ZabiraWork = ({ className, onClick }: Props) => {
  const pathname = usePathname();

  return (
    <div
      className={cn(
        "relative p-4  w-fit h-fit md:p-8 md:w-[352px] bg-white rounded-3xl flex flex-col justify-between ",
        className
      )}
    >
      <div className="hidden md:block pb-16">
        <h2 className="text-5xl font-bold leading-tight pb-3">
          How does Zabira work?
        </h2>
        <p className="text-[#7e7e7e]">Learn more about Zabira</p>
      </div>
      <a
        href={
          !onClick
            ? "https://www.youtube.com/embed/LyNADeA9dl8&rel=0showinfo=0"
            : undefined
        }
        target={"_blank"}
        onClick={onClick}
        className="cursor-pointer flex items-end md:items-center text-sm gap-1.5 font-bold hover:opacity-50"
      >
        <BsPlayCircle className="text-base" />
        <span>Watch our story</span>
      </a>

      {pathname !== "/" && (
        <>
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
                x: [-20, 20],
                rotate: 0,
                transition: {
                  duration: 2,
                  repeat: Infinity,
                  repeatType: "reverse",
                },
              },
            }}
            className="hidden md:block absolute top-[1.5rem] -right-[11.5rem]"
          >
            <Image
              priority
              width="192"
              height="109"
              src="/three-arrows.svg"
              alt="arrows"
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
                x: [-20, 20],
                rotate: 0,
                transition: {
                  duration: 2,
                  repeat: Infinity,
                  repeatType: "reverse",
                },
              },
            }}
            className="hidden md:block absolute -bottom-[3.5rem] -right-[3.5rem]"
          >
            <Image src="/plane.svg" width="160" height="86" alt="plane icon" />
          </motion.div>
        </>
      )}
    </div>
  );
};

export default ZabiraWork;
