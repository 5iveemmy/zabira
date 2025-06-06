import { ArrowRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
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
    <Link
      href={link as string}
      prefetch={true}
      className={`p-4 md:p-6 rounded-xl flex gap-8 ${
        isActive
          ? "bg-white shadow-card-custom"
          : "hover:bg-white hover:shadow-card-custom"
      } transition-all duration-300 ease-in-out`}
    >
      <div
        className="min-w-[88px] h-[84px] rounded-xl flex items-center justify-center"
        style={{ backgroundColor: iconBg }}
      >
        <Image
          src={icon}
          width="100"
          height="100"
          alt="icon"
          className="min-w-fit"
        />
      </div>

      <div>
        <h1 className="text-xl md:text-2xl font-bold pb-3">{title}</h1>
        <p className="text-sm md:text-base text-[#7e7e7e] pb-2">
          {description}
        </p>
        <Link
          href={link as string}
          prefetch={true}
          className="text-sm md:text-base flex items-center justify-center gap-2 group cursor-pointer"
        >
          <p className="text-brand text-[15px] font-medium">See more</p>
          <ArrowRight className="mt-1 w-3 h-3 text-brand transition-transform group-hover:translate-x-1 duration-200 ease-in-out" />
        </Link>
      </div>
    </Link>
  );
};

export default ProductCard;
