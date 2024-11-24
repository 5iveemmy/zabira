import Image from "next/image";
import React from "react";

const ImageMashUp = () => {
  return (
    <div className="flex flex-col gap-4">
      <div className="flex justify-end gap-8 items-end">
        <Image src="/dots-warning.svg" width="132" height="124" alt="dots" />
        <Image
          src="/sittingMan.jpg"
          width="348"
          height="232"
          alt="siting man"
          className="rounded-3xl"
        />
      </div>
      <div className="flex gap-8 items-start">
        <Image
          src="/goupPhoto.jpg"
          width="292"
          height="292"
          alt="group photo"
          className="rounded-3xl"
        />
        <Image src="/card-11.svg" width="240" height="333" alt="siting man" />
      </div>
    </div>
  );
};

export default ImageMashUp;
