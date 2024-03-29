"use client";
import { Tab } from "@headlessui/react";
import { ImageContain } from "./ImageContain";
import { Typography } from "./Typography";
import Link from "next/link";
import Image from "next/image";

import React from "react";
function classNames(...classes: any[]) {
  return classes.filter(Boolean).join(" ");
}

export const ExperienceTabs = () => {
  return (
    <>
      <div className=" w-full px-2 py-8 sm:px-0">
        <Tab.Group>
          <Tab.List
            className={`flex space-x-1 rounded-xl border-[2px]  border-blue-500 p-1`}
          >
            <Tab
              className={({ selected }) =>
                classNames(
                  "w-full rounded-lg py-2.5  text-xl font-medium leading-5  text-gray-500",
                  "ring-white/60 ring-offset-2 ring-offset-blue-400 focus:outline-none focus:ring-2",
                  selected ? "bg-blue-400 text-white shadow" : "text-blue-100 "
                )
              }
            >
              Cellcard
            </Tab>
            <Tab
              className={({ selected }) =>
                classNames(
                  "w-full rounded-lg py-2.5  text-xl font-medium leading-5  text-gray-500",
                  "ring-white/60 ring-offset-2 ring-offset-blue-400 focus:outline-none focus:ring-2",
                  selected ? "bg-blue-400 text-white shadow" : "text-blue-100 "
                )
              }
            >
              Sabaicode
            </Tab>
          </Tab.List>
          <Tab.Panels>
            <Tab.Panel>
              <div className="grid grid-cols-1 items-center pt-8 md:grid-cols-1 lg:grid-cols-2 box-content gap-2">
                <div className="relative aspect-[4/3] w-full overflow-hidden rounded-xl">
                  <Image
                    alt="habbit"
                    src="/assets/cellcard.jpg"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="flex gap-6 flex-col p-4">
                  <div>
                    <Typography variant="h6">
                      Mobile App Developer
                      <Link
                        className="pl-2 text-sky-400 hover:text-sky-500"
                        href="https://www.cellcard.com.kh/"
                      >
                        @ Cellcard
                      </Link>
                    </Typography>
                    <ul className="list-disc list-outside lg:pl-8 md:pl-8 pl-4 text-base lg:text-lg md:text-lg">
                      <li>
                        Developed the Cellcard Sales Force Application:
                        Development of the Cellcard Sales Force App from
                        scratch, designing and implementing core functionalities
                        to enhance sales operations.
                      </li>

                      <li>
                        Implemented Speed Test Feature: Integrated a speed test
                        feature into the Dealer App, enabling real-time internet
                        speed analysis
                      </li>
                      <li>Build rush project Cellcard Marketplace</li>
                      <li>
                        Integrated Cellcard Payment Gateway (CCPG) and
                        Analytics: Successfully implemented the Cellcard Payment
                        Gateway (CCPG) in the Cellcard Marketplace, alongside
                        Google Analytics and MoEngage.
                      </li>
                    </ul>
                  </div>

                  <div>
                    <Typography variant="h6">
                      Mobile App Developer Trainee
                      <Link
                        target="_blank"
                        className="pl-2 text-sky-400 hover:text-sky-500"
                        href="https://www.cellcard.com.kh/"
                      >
                        @ Cellcard
                      </Link>
                    </Typography>
                    <ul className="list-disc list-outside lg:pl-8 md:pl-8 pl-4 text-base md:text-lg lg:text-lg">
                      <li>Moved Dealer from Native Code to Flutter</li>
                      <li>
                        Refactor and improve UI in Dealer App and Implement
                        Google Analytics and Mixpanel
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </Tab.Panel>
            <Tab.Panel>
              <div className="grid grid-cols-1 pt-8 md:grid-cols-1 lg:grid-cols-2 box-content gap-2">
                <div className="relative aspect-[2/1] w-full overflow-hidden rounded-xl">
                  <Image
                    src="/assets/sabaicode.jpg"
                    alt=""
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="flex gap-6 flex-col p-4">
                  <Typography variant="h6">
                    Self Employed
                    <Link
                      target="_blank"
                      className="pl-2 text-sky-400 hover:text-sky-500"
                      href="https://www.facebook.com/100037145085529/videos/352897650501052/?__so__=permalink&locale=hi_IN&paipv=0&eav=AfbSJxbDKmudEZReWp48mop51rzVY15AJgxGGaGXU2cD-3K3P0VPhHX6FGcJ464gvwA&_rdr"
                    >
                      @ Prutteka
                    </Link>
                  </Typography>
                  <p className="text-base lg:text-lg md:text-lg whitespace-pre-line lg:pl-4 md:pl-4">
                    Co-founded a website that helps the people find events and
                    allows users to browse, create, and promote local events.
                    Those include education event, exhibition event, sport
                    event, charity events and more.
                  </p>
                  <p className="text-base lg:text-lg md:text-lg pt-2  whitespace-pre-line lg:pl-4 md:pl-4">
                    <span className="font-medium">Skills:</span> React.js ·
                    Next.js · MongoDB · Express.js · Docker · AWS · Tailwind CSS
                    · TypeScript· Figma (Software)
                  </p>
                </div>
              </div>
            </Tab.Panel>
          </Tab.Panels>
        </Tab.Group>
      </div>
    </>
  );
};
