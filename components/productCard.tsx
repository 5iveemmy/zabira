import { ArrowRight } from "lucide-react";
import Image from "next/image";
import React from "react";
interface Props {
  title: string;
  description: string;
  icon: string;
  iconBg?: string;
  link?: string;
  isActive?: boolean;
}

const ProductCard = ({
  iconBg,
  title,
  description,
  icon,
  link,
  isActive,
}: Props) => {
  return (
    <div
      className={`p-6 rounded-xl flex gap-8 ${
        isActive
          ? "bg-white shadow-card-custom"
          : "hover:bg-white hover:shadow-card-custom"
      } transition-all duration-300 ease-in-ou`}
    >
      <div
        className="min-w-[88px] h-[84px] rounded-xl flex items-center justify-center"
        style={{ backgroundColor: iconBg }}
      >
        <Image src={icon} width="100" height="100" alt="icon" />
      </div>
      <div>
        <h1 className="text-2xl font-bold pb-3">{title}</h1>
        <p className="text-[#7e7e7e]">{description}</p>
        <a
          href={link}
          className="flex items-center justify-center gap-2 group cursor-pointer"
        >
          <p className="text-brand text-[15px] font-medium">See more</p>
          <ArrowRight className="w-3 h-3 text-brand transition-transform group-hover:translate-x-1 duration-200 ease-in-out" />
        </a>
      </div>
    </div>
  );
};

export default ProductCard;
