"use client";

import Image from "next/image";
import React from "react";
import Link from "next/link";

import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import { RxHamburgerMenu } from "react-icons/rx";

import { IoArrowForward, IoCloseOutline } from "react-icons/io5";
import { Button } from "./ui/button";
import {
  companyLinks,
  ListItem,
  productsMenu,
  resourcesLinks,
  suppportLinks,
} from "@/app/containers/navbar/list-item";
import { Drawer, DrawerContent, DrawerTrigger } from "./ui/drawer";

const Navbar = () => {
  const [open, setOpen] = React.useState(false);

  return (
    <div className="shadow-sm  bg-white  sticky top-0 left-0 right-0 z-[999]">
      <div className="custom-container py-4 flex items-center justify-between">
        <div className="flex items-center gap-5">
          <Link prefetch={true} href="/">
            <Image
              priority
              width="144"
              height="40"
              src="/logo.svg"
              alt="zabira logo"
            />
          </Link>

          <NavigationMenu className="hidden lg:flex ">
            <NavigationMenuList>
              <NavigationMenu>
                <NavigationMenuItem>
                  <NavigationMenuTrigger className="text-base p-3 h-auto font-normal">
                    Products
                  </NavigationMenuTrigger>

                  <NavigationMenuContent
                    style={{
                      boxShadow: "0 .1875rem .375rem rgba(140, 152, 164, .25)",
                    }}
                    className="rounded-xl h-[350px] min-w-[25rem] max-w-[40rem] flex gap-8 p-2"
                  >
                    <div className="bg-[#e2f3ff] rounded-3xl p-6 flex justify-between flex-col w-[324px]">
                      <div>
                        <h2 className="font-bold text-xl">Explore</h2>
                        <p className="text-[#51596c]">
                          Discover Seamless trading experience with the all in
                          one App
                        </p>
                      </div>
                      <div>
                        <Link
                          href="/about"
                          className="hover:opacity-80 flex items-center gap-2 text-[#2d374b]"
                        >
                          <p className=" pb-1 text-sm">Learn More</p>
                          <IoArrowForward className="text-sm" />
                        </Link>
                        <Link
                          href="/about"
                          className="hover:opacity-80 flex items-center gap-2 text-[#2d374b]"
                        >
                          <p className="text-sm">Why Zabira</p>
                          <IoArrowForward className="text-sm" />
                        </Link>
                      </div>
                    </div>

                    <div className="w-[324px] p-3">
                      <p className="font-bold text-sm py-2 px-4">Menu</p>
                      <div className="flex flex-col gap-1">
                        {productsMenu.map(
                          ({ link, title, description, isNew, icon }) => (
                            <Link
                              key={title}
                              href={link}
                              className=" p-4 hover:bg-[#bdc5d133] flex gap-4 items-center rounded-lg"
                            >
                              {icon}
                              <div>
                                <p className="text-sm text-[#51596c] font-semibold leading-tight">
                                  {title}
                                </p>
                                <div className="flex gap-2">
                                  <p>{description}</p>
                                  {isNew && (
                                    <span className=" text-xs text-white bg-[#0083f8] px-2 py-1 rounded-full h-fit flex items-center justify-center">
                                      New
                                    </span>
                                  )}
                                </div>
                              </div>
                            </Link>
                          )
                        )}
                      </div>
                    </div>
                  </NavigationMenuContent>
                </NavigationMenuItem>
              </NavigationMenu>

              <NavigationMenu>
                <NavigationMenuItem>
                  <NavigationMenuTrigger className="text-base p-3 h-auto font-normal">
                    Company
                  </NavigationMenuTrigger>
                  <NavigationMenuContent className="rounded-xl min-w-[20rem] max-w-[20rem] p-2">
                    {companyLinks.map((links, index) => (
                      <ListItem
                        key={links.title}
                        {...links}
                        isLast={index === companyLinks.length - 1}
                      />
                    ))}
                  </NavigationMenuContent>
                </NavigationMenuItem>
              </NavigationMenu>

              <NavigationMenu>
                <NavigationMenuItem>
                  <NavigationMenuTrigger className="text-base p-3 h-auto font-normal">
                    Resources
                  </NavigationMenuTrigger>
                  <NavigationMenuContent className="rounded-xl min-w-[20rem] max-w-[20rem] p-2">
                    {resourcesLinks?.map((links, index) => (
                      <ListItem
                        key={links.title}
                        {...links}
                        isLast={index === companyLinks.length - 1}
                      />
                    ))}
                  </NavigationMenuContent>
                </NavigationMenuItem>
              </NavigationMenu>

              <NavigationMenu>
                <NavigationMenuItem>
                  <NavigationMenuTrigger className="text-base p-3 h-auto font-normal">
                    Support
                  </NavigationMenuTrigger>
                  <NavigationMenuContent className="rounded-xl min-w-[20rem] max-w-[20rem] p-2">
                    {suppportLinks.map((links, index) => (
                      <ListItem
                        key={links.title}
                        {...links}
                        isLast={index === companyLinks.length - 1}
                      />
                    ))}
                  </NavigationMenuContent>
                </NavigationMenuItem>
              </NavigationMenu>
            </NavigationMenuList>
          </NavigationMenu>
        </div>

        <Drawer direction="right" open={open} onOpenChange={setOpen}>
          <DrawerTrigger className="block lg:hidden border border-[#dce0e599] p-2 cursor-pointer">
            {open ? (
              <IoCloseOutline className="text-base text-[#51596c]" />
            ) : (
              <RxHamburgerMenu className="text-lg text-[#51596c]" />
            )}
          </DrawerTrigger>
          <DrawerContent className="top-[65px] p-6">
            <nav className="flex flex-col gap-4">
              <p className="text-lg font-semibold text-[#2d374b] hover:opacity-80">
                {" "}
                Products{" "}
              </p>
              {productsMenu.map(({ link, title }) => (
                <Link
                  key={title}
                  href={link}
                  className="text-sm text-[#51596c]"
                >
                  {" "}
                  {title}{" "}
                </Link>
              ))}
              <p className="text-lg font-semibold text-[#2d374b] hover:opacity-80">
                {" "}
                Company{" "}
              </p>
              {companyLinks.map(({ link, title }) => (
                <Link
                  key={title}
                  href={link}
                  className="text-sm text-[#51596c]"
                >
                  {" "}
                  {title}{" "}
                </Link>
              ))}
              <p className="text-lg font-semibold text-[#2d374b] hover:opacity-80">
                {" "}
                Resources{" "}
              </p>
              {resourcesLinks.map(({ link, title }) => (
                <Link
                  key={title}
                  href={link}
                  className="text-sm text-[#51596c]"
                >
                  {" "}
                  {title}{" "}
                </Link>
              ))}
              <p className="text-lg font-semibold text-[#2d374b] hover:opacity-80">
                {" "}
                Support{" "}
              </p>
              {suppportLinks.map(({ link, title }) => (
                <Link
                  key={title}
                  href={link}
                  className="text-sm text-[#51596c]"
                >
                  {" "}
                  {title}{" "}
                </Link>
              ))}
            </nav>
          </DrawerContent>
        </Drawer>

        <div className="hidden lg:flex gap-3 items-center">
          <Link
            prefetch={false}
            target="_blank"
            href="https://app.zabira.com/sign-in"
            className="rounded-full hover:bg-[#2d374b1a] py-2 px-5 font-bold "
          >
            Log in
          </Link>
          <Button
            asChild
            className="rounded-full py-6 px-7 text-base bg-[#0083f8] transition-transform duration-300 ease-in-out hover:bg-[#0083f8] hover:text-white hover:scale-105"
          >
            <a href="https://app.zabira.com/sign-up" target="_blank">
              Sign up
            </a>
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
