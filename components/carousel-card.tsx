import { useState } from "react";
import Image from "next/image";
import { Button } from "./ui/button";

interface ImageCardProps {
  src: string;
  alt: string;
  width: number;
  height: number;
}

const CarouselCard: React.FC<ImageCardProps> = ({
  src,
  alt,
  width,
  height,
}) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className="w-fit h-fit relative overflow-hidden rounded-lg  transition-transform transform"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <Image
        src={src}
        alt={alt}
        width={width}
        height={height}
        className="object-cover w-full h-full"
        style={{
          transform: isHovered ? "scale(1.05)" : "scale(1)",
          transitionDuration: "0.3s",
        }}
      />
      {isHovered && (
        <div
          className="absolute inset-0 flex items-center justify-center  text-white rounded-md"
          style={{ transition: "opacity 0.3s" }}
        >
          <Button
            className=" text-white bg-[#3772ff] hover:bg-[#0d51b7] font-bold  text-sm md:text-base rounded-full"
            asChild
          >
            <a
              target="_blank"
              href="https://app.zabira.com/"
              rel="noopener noreferrer"
            >
              Trade GiftCard
            </a>
          </Button>
        </div>
      )}
    </div>
  );
};

export default CarouselCard;
