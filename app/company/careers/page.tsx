"use client";

import ImageMashUp from "@/components/image-mash-up";
import { InputWithIcon } from "@/components/input-with-icon";
import { Button } from "@/components/ui/button";
import { Form, FormControl, FormField, FormItem } from "@/components/ui/form";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import ZabiraFootprint from "@/components/zabira-footprint";
import { zodResolver } from "@hookform/resolvers/zod";
import Image from "next/image";
import React from "react";
import { useForm } from "react-hook-form";
import { IoIosSearch } from "react-icons/io";
import { PiBellThin } from "react-icons/pi";
import { z } from "zod";

// text-[calc(1.30625rem + .675vw)] sm:text-2xl lg:text-3xl

const contactFormSchema = z.object({
  search: z.string(),
  lastName: z.string(),
});

const locations = [
  "Abia",
  "Adamawa",
  "Lagos",
  "Abuja",
  "Nairobi",
  "Accra",
  "Ibadan",
];

const departments = [
  "Software Development",
  "UI/UX",
  "Data Analyst",
  "Machine Learning",
  "Sales",
  "Business Strategy",
  "Content Developer",
];

type ProfileFormValues = z.infer<typeof contactFormSchema>;

const defaultValues: Partial<ProfileFormValues> = {};

const Careers = () => {
  const form = useForm<ProfileFormValues>({
    resolver: zodResolver(contactFormSchema),
    defaultValues,
    mode: "onChange",
  });

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

      <section className="bg-soft-dark-to-start-75">
        <div className="custom-container gap-20 md:gap-5 lg:gap-20 w-full py-14 flex-col md:flex-row flex items-center justify-between">
          <div className="relative w-full md:w-auto">
            <Image
              src="/img2.jpg"
              width="539"
              height="958"
              className="rounded-lg  min-w-full md:min-w-auto"
              alt="app store badge"
            />
            <Image
              src="/blueDots.svg"
              width="160"
              height="150"
              className="absolute -left-10 -bottom-12 -z-[1]"
              alt="blue dots"
            />
          </div>
          <div className="md:w-[50%] relative">
            <p className="text-[#8997a4] font-bold text-xs uppercase mb-4">
              FEATURED EMPLOYEE
            </p>

            <Image
              src="data:image/svg+xml,%3csvg width='5' height='4' viewBox='0 0 5 4' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M2.244 2.84803C2.244 3.08003 2.168 3.26803 2.016 3.41203C1.864 3.54803 1.672 3.61603 1.44 3.61603C1.16 3.61603 0.927996 3.52403 0.743996 3.34003C0.567996 3.15603 0.479996 2.89203 0.479996 2.54803C0.479996 2.18003 0.583996 1.82003 0.791996 1.46803C1.008 1.10803 1.308 0.824028 1.692 0.616028L1.968 1.03603C1.76 1.18003 1.592 1.34003 1.464 1.51603C1.344 1.69203 1.264 1.89603 1.224 2.12803C1.296 2.09603 1.38 2.08003 1.476 2.08003C1.7 2.08003 1.884 2.15203 2.028 2.29603C2.172 2.44003 2.244 2.62403 2.244 2.84803ZM4.452 2.84803C4.452 3.08003 4.376 3.26803 4.224 3.41203C4.072 3.54803 3.88 3.61603 3.648 3.61603C3.368 3.61603 3.136 3.52403 2.952 3.34003C2.776 3.15603 2.688 2.89203 2.688 2.54803C2.688 2.18003 2.792 1.82003 3 1.46803C3.216 1.10803 3.516 0.824028 3.9 0.616028L4.176 1.03603C3.968 1.18003 3.8 1.34003 3.672 1.51603C3.552 1.69203 3.472 1.89603 3.432 2.12803C3.504 2.09603 3.588 2.08003 3.684 2.08003C3.908 2.08003 4.092 2.15203 4.236 2.29603C4.38 2.44003 4.452 2.62403 4.452 2.84803Z' fill='%232d374b' fill-opacity='.125'/%3e%3c/svg%3e"
              width="96"
              height="96"
              className="absolute -left-8 -top-1 "
              alt="blue dots"
            />
            <blockquote className="text-[calc(1.30625rem + .675vw)] sm:text-2xl lg:text-3xl font-medium text-[#2d374b]">
              <em className="leading-normal">
                Asides from being able to work with great talents, I
                particularly love the dynamic environment, collaboration amongst
                team, interacting with diverse customers, making tangible impact
                and contributing to their satisfaction. At Zabira , we value
                flexibility, and innovation, fostering a purpose-driven culture.
                Overall, leading and serving at Zabira is a fulfilling
                experience.
              </em>
            </blockquote>
            <div className="mt-6">
              <p className="font-bold ">Elizabeth Anyawu</p>
              <p className="text-[#677788] text-xs">
                Customer Support Manager | Support Department
              </p>
            </div>
          </div>
        </div>
      </section>

      <section>
        <div className="custom-container py-20 md:py-28">
          <div className="text-center">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#2d374b] mb-3">
              Explore career opportunities
            </h2>
            <p className="text-[#7e7e7e]">
              Find your perfect fit with MultiChoice careers. Browse our job
              categories for opportunities across functions
            </p>
          </div>

          <Form {...form}>
            <form className="flex flex-col md:flex-row gap-2 md:gap-6 w-full bg-white pt-8 mb-12">
              <InputWithIcon
                type="search"
                name="search"
                className="placeholder:text-sm text-sm w-full focus:border-none focus:shadow-none   focus-visible:shadow-none focus-visible:border-none"
                startIcon={<IoIosSearch className="w-5 h-5 " />}
                placeholder="Search Job"
              />
              <div className="w-full flex flex-col sm:flex-row gap-2 sm:gap-6">
                <FormField
                  name="locations"
                  render={({ field }) => (
                    <FormItem className="w-full">
                      <Select
                        onValueChange={field.onChange}
                        defaultValue={field.value}
                      >
                        <FormControl className="h-[52px] px-7">
                          <SelectTrigger className="focus:outline-none focus:ring-transparent">
                            <SelectValue placeholder="All locations" />
                          </SelectTrigger>
                        </FormControl>
                        <SelectContent>
                          {locations.map((value, i) => (
                            <SelectItem key={i} value={value}>
                              {value}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </FormItem>
                  )}
                />

                <FormField
                  name="departments"
                  render={({ field }) => (
                    <FormItem className="w-full">
                      <Select
                        onValueChange={field.onChange}
                        defaultValue={field.value}
                      >
                        <FormControl className="h-[52px] px-7">
                          <SelectTrigger className="focus:outline-none focus:ring-transparent">
                            <SelectValue placeholder="All departments" />
                          </SelectTrigger>
                        </FormControl>
                        <SelectContent>
                          {departments.map((value, i) => (
                            <SelectItem key={i} value={value}>
                              {value}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </FormItem>
                  )}
                />
              </div>
            </form>
          </Form>

          <div className="flex flex-col sm:flex-row justify-between gap-3  sm:items-center">
            <p className="text-[#0083f8] font-bold text-2xl">
              Current Openings
            </p>
            <Button className="w-fit border-[#dce0e599] shadow-none btn-white border-2 bg-transparent  rounded-full hover:bg-transparent text-dark">
              <PiBellThin />
              Create Alert
            </Button>
          </div>

          <p className="text-[#7e7e7e] text-center my-28">
            No opening currently, please check back later
          </p>

          <div className="text-center w-full flex items-center justify-center flex-col gap-3">
            <p className="text-[#51596c] md:w-[65%]">
              Don&apos;t worry if you don&apos;t see any roles you want to apply
              for now. Register your interest to be notified of any roles that
              come along that meet your criteria.
            </p>
            <Button className="text-sm md:text-base py-5 rounded-full bg-[#0083f8] text-white px-5 hover:bg-[#0083f8]">
              Register your interest
            </Button>
          </div>
        </div>
      </section>
    </>
  );
};

export default Careers;
