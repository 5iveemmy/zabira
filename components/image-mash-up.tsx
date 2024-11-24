import { cn } from "@/lib/utils";
import Image from "next/image";
import React from "react";

interface ImageProps {
  src?: string;
  width: number;
  height: number;
  alt?: string;
}
interface Props {
  className?: string;
  topLeftImage: ImageProps;
  topRightImage: ImageProps;
  bottomLeftImage: ImageProps;
  bottomRightImage: ImageProps;
}

const ImageMashUp = ({
  topLeftImage,
  topRightImage,
  bottomLeftImage,
  className,
  bottomRightImage,
}: Props) => {
  return (
    <div className="hidden md:flex flex-col gap-4">
      <div className={cn("flex justify-end gap-8 items-end w-fit", className)}>
        <Image
          src="/dots-warning.svg"
          width={topLeftImage.width}
          height={topLeftImage.height}
          alt="dot"
        />

        <Image
          src={topRightImage.src as string}
          width={topRightImage.width}
          height={topRightImage.height}
          alt={topRightImage.alt as string}
          className="rounded-3xl"
        />
      </div>

      <div className="flex gap-8 items-start">
        <Image
          src={bottomLeftImage.src as string}
          width={bottomLeftImage.width}
          height={bottomLeftImage.height}
          alt={bottomLeftImage.alt as string}
          className="rounded-3xl"
        />
        <Image
          src="/card-11.svg"
          width={bottomRightImage.width}
          height={bottomRightImage.height}
          alt="visual mashup"
        />
      </div>
    </div>
  );
};

export default ImageMashUp;
