"use client";

import React, { useState } from "react";
import Link, { LinkProps } from "next/link";
import { StaticImageData } from "next/image";
import Image from "next/image";
import { Button } from "./Button";
import { link } from "fs";
import { url } from "inspector";

type ProjectCardProps = {
  img: string | StaticImageData;
  title: string;
  href: LinkProps["href"];
};

export const ProjectCard: React.FC<ProjectCardProps> = ({
  href,
  img,
  title,
}) => {
  const [isLoading, setIsLoading] = useState(true);

  return (
    <>
      <div className="shadow-complete border-[2px] border-blue-100 border-dashed flex min-h-[22rem] w-full flex-col rounded-2xl bg-white p-1">
        <Link
          href={href}
          className="relative aspect-[2/1] w-full overflow-hidden rounded-xl"
        >
          <Image
            src={img}
            alt="title"
            sizes="100%"
            fill
            className="object-cover"
            onLoad={() => {
              setIsLoading(false);
            }}
          />
          {isLoading ? (
            <div className="absolute inset-0 z-10 animate-pulse bg-gray-100"></div>
          ) : null}
        </Link>
        <div className="flex flex-1 flex-col gap-4 p-[14px]">
          {isLoading ? (
            <>
              <div className="flex-1 space-y-1">
                <div className="h-4 w-1/2 rounded-xl bg-gray-100"></div>
                <div className="h-4 w-4/5 rounded-xl bg-gray-100"></div>
                <div className="h-4 w-1/3 rounded-xl bg-gray-100"></div>
              </div>
              <div className="h-8 rounded-xl bg-gray-100"></div>
            </>
          ) : (
            <>
              <div className="flex-1">
                <Link
                  className="line-clamp-2 text-xl font-medium text-gray-900"
                  href={href}
                >
                  {title}
                </Link>
              </div>
              <Button as="link" href={href}>
                View Detail
              </Button>
            </>
          )}
        </div>
      </div>
    </>
  );
};
