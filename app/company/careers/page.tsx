import ImageMashUp from "@/components/image-mash-up";
import ZabiraFootprint from "@/components/zabira-footprint";
import React from "react";

const Careers = () => {
  return (
    <>
      <ZabiraFootprint
        blueText
        title="Explore career opportunities with"
        description="Help us make a real difference on a global scale, start your career journey with Zabira if you've got what it takes."
        className="items-center "
        rightElemet={
          <ImageMashUp
            topLeftImage={{ width: 96, height: 90 }}
            topRightImage={{
              src: "/img10.jpg",
              width: 180,
              height: 180,
              alt: "sittig man",
            }}
            bottomLeftImage={{
              width: 222,
              height: 222,
              src: "/goupPhoto.jpg",
              alt: "group photo",
            }}
            bottomRightImage={{ width: 180, height: 250 }}
            className="justify-center"
          />
        }
      />

      <section>
        <div></div>
      </section>
    </>
  );
};

export default Careers;
