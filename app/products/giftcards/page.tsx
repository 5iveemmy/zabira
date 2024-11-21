import Image from "next/image";
import React from "react";

const giftCardsOptions = [
  {
    title: "Buy GiftCards",
    description: "Enjoy a wide variety of cards at your fingertips",
    image: "/gc-side-a.svg",
    subHeader: "Buying best practices",
    practices: [
      "Buy GiftCards on Zabira at the best rates",
      "Select the right gifts cards that fits your criteria",
      "Ensure the gift card has a long validity period",
    ],
  },
  {
    title: "Sell GiftCards",
    description: "Sell your giftcards at the best rates in the market",
    image: "/gc-side-b.svg",
    subHeader: "Selling best practices",
    practices: [
      "Confirm the best rates on trusted platforms like Zabira",
      "Highlight the right giftcard and their types",
      "Familarize yourself wtith the selling guidelines",
    ],
  },
];

const GiftCards = () => {
  return (
    <>
      <section>
        <div className="custom-container">
          <div className="flex justify-center items-center flex-col text-center">
            <h2 className="text-[64px] font-bold max-w-[60%] ">
              One App. Unlimited Possibilities
            </h2>
            <p className="text-[#7e7e7e]">
              You can view all offers where you can sell your gift cards for
              Crypto
            </p>
          </div>
          <div className="flex gap-28  flex-col py-[120px]">
            {giftCardsOptions.map((option, index) => (
              <div
                key={option.title}
                className={`flex ${
                  index == 1 ? "flex-row-reverse" : ""
                }  justify-between`}
              >
                <Image
                  priority
                  width="703"
                  height="792"
                  src={option.image}
                  alt={option.title}
                />
                <div className="pt-24">
                  <p className="font-bold text-5xl mb-4">{option.title}</p>
                  <p className="text-[#7e7e7e] text-xl">{option.description}</p>
                  <div className="mt-10">
                    <p className="text-2xl font-bold pb-3">
                      {option.subHeader}
                    </p>
                    <div className="flex flex-col gap-7">
                      {option.practices.map((practice) => (
                        <div key={practice} className="flex gap-4">
                          <div>
                            <Image
                              priority
                              width="24"
                              height="24"
                              src="/checkmark.svg"
                              alt="checkmark"
                            />
                          </div>
                          <p className="text-[#51596c]">{practice}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default GiftCards;
