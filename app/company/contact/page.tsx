import dynamic from "next/dynamic";
import React, { ReactNode } from "react";
import { IoPersonCircleOutline } from "react-icons/io5";
import { SlPhone } from "react-icons/sl";
import { IoMailOpenOutline } from "react-icons/io5";
import { Button } from "@/components/ui/button";
import { Headset } from "lucide-react";

const Header = dynamic(() => import("@/app/containers/company/header"), {
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
        title="Contact Zabira"
        description="Your feedback matters to us. We would like to entertain questions on any relevant subject"
      />
      <section>
        <div className="custom-container gap-10 flex justify-center pt-14">
          {contactMedimData.map((contact) => (
            <ContactMedium key={contact.title} {...contact} />
          ))}
        </div>
      </section>
    </>
  );
};

export default Contact;
