import dynamic from "next/dynamic";
import React, { ReactNode } from "react";
import { IoPersonCircleOutline } from "react-icons/io5";
import { SlPhone } from "react-icons/sl";
import { IoMailOpenOutline } from "react-icons/io5";
import { Button } from "@/components/ui/button";
import { Headset } from "lucide-react";
import ImageMashUp from "@/components/image-mash-up";
import { GetInTouchForm } from "@/app/form/form";
import Image from "next/image";

const Header = dynamic(() => import("@/components/zabira-footprint"), {
  ssr: false,
});

interface Props {
  title: string;
  icon: ReactNode;
  day: string;
  time: string;
  mail: string;
  number: string;
}

const ContactMedium = ({ title, day, time, mail, number, icon }: Props) => (
  <div className="w-[425px] flex flex-col gap-2 items-center justify-center p-6">
    {icon}
    <h3 className="text-[40px] font-bold">{title}</h3>
    <div className="text-[#51596C] text-center">
      <p>{day}</p>
      <p>{time}</p>
    </div>
    <Button
      asChild
      className="border-[#dce0e599] shadow-none btn-white border-2 bg-transparent w-full rounded-full hover:bg-transparent text-dark"
    >
      <a href={`mailTo:${mail}`} className="flex items-end gap-1">
        <div className="mt-1">
          <IoMailOpenOutline />
        </div>
        {mail}
      </a>
    </Button>
    <div className="pt-4 pb-2 flex items-center gap-2 font-bold text-sm">
      <SlPhone />
      <p>{number}</p>
    </div>
  </div>
);

const contactMedimData = [
  {
    title: "Partners",
    icon: <IoPersonCircleOutline className="text-brand w-10 h-10" />,
    day: "Mon-Sun",
    time: "8:30 AM to 6:00 PM",
    mail: "partners@zabira.com",
    number: "(+234) 0808324923",
  },
  {
    title: "Support",
    icon: <Headset className="text-brand w-10 h-10" />,
    day: "Mon-Sun",
    time: "8:30 AM to 6:00 PM",
    mail: "support@zabira.com",
    number: "(+234) 0801099222",
  },
];

const Contact = () => {
  return (
    <>
      <Header
        blueText
        title="Contact"
        description="Your feedback matters to us. We would like to entertain questions on any relevant subject"
      />
      <section>
        <div className="custom-container  pt-28">
          <div className="flex gap-10 justify-center">
            {contactMedimData.map((contact) => (
              <ContactMedium key={contact.title} {...contact} />
            ))}
          </div>
          <div className="py-40 flex justify-between gap-10">
            <div className="min-w-fit">
              <ImageMashUp />
            </div>

            <div className="w-[540px] relative">
              <GetInTouchForm />
              <Image
                src="/plane.svg"
                width="160"
                height="86"
                alt="plane icon"
                className="absolute -bottom-8 -right-8"
              />
              <Image
                src="/grid-grey.svg"
                width="154"
                height="154"
                alt="grey grid"
                className="absolute -z-[1] -bottom-20 -right-12"
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Contact;
