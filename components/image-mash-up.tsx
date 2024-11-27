import { cn } from "@/lib/utils";
import Image from "next/image";
import React from "react";
import { motion } from "framer-motion";

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
        <motion.div
          animate={["initial"]}
          variants={{
            initial: {
              y: [-10, 10],
              rotate: 0,
              transition: {
                duration: 2,
                repeat: Infinity,
                repeatType: "reverse",
              },
            },
          }}
        >
          <Image
            src="/dots-warning.svg"
            width={topLeftImage.width}
            height={topLeftImage.height}
            alt="dot"
          />
        </motion.div>

        <motion.div
          animate={["initial"]}
          variants={{
            initial: {
              y: [-10, 10],
              rotate: 0,
              transition: {
                duration: 3,
                repeat: Infinity,
                repeatType: "reverse",
              },
            },
          }}
        >
          <Image
            src={topRightImage.src as string}
            width={topRightImage.width}
            height={topRightImage.height}
            alt={topRightImage.alt as string}
            className="rounded-3xl "
          />
        </motion.div>
      </div>

      <div className="flex gap-8 items-start">
        <motion.div
          animate={["initial"]}
          variants={{
            initial: {
              x: [-10, 10],
              rotate: 0,
              transition: {
                duration: 2,
                repeat: Infinity,
                repeatType: "reverse",
              },
            },
          }}
        >
          <Image
            src={bottomLeftImage.src as string}
            width={bottomLeftImage.width}
            height={bottomLeftImage.height}
            alt={bottomLeftImage.alt as string}
            className="rounded-3xl"
          />
        </motion.div>

        <motion.div
          animate={["initial"]}
          variants={{
            initial: {
              x: [10, -10],
              rotate: 0,
              transition: {
                duration: 2,
                repeat: Infinity,
                repeatType: "reverse",
              },
            },
          }}
        >
          <Image
            src="/card-11.svg"
            width={bottomRightImage.width}
            height={bottomRightImage.height}
            alt="visual mashup"
          />
        </motion.div>
      </div>
    </div>
  );
};

export default ImageMashUp;
