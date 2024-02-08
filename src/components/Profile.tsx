import React, { useState } from "react";
import Image from "next/image";
import { Contact } from "./Contact";
import Link from "next/link";
import {
  PhoneIcon,
  EnvelopeIcon,
  DocumentTextIcon,
} from "@heroicons/react/24/outline";

interface ProfileProps {
  name: string;
  position: string;
  image: string;
  className?: string;
}

export const Profile: React.FC<ProfileProps> = ({
  image,
  name,
  position,
  className,
}) => {
  const [isLoading, setIsLoading] = useState(true);
  const handleClickEmail = () => {
    window.open("mailto:samnanglorn.it@gmail.com");
  };

  return (
    <>
      <div className={`flex flex-col gap-3 ${className}`}>
        <div className="relative h-44 w-44 md:h-44 md:w-44 lg:h-52 lg:w-52 ">
          <Image
            sizes="100%"
            loading={"lazy"}
            onLoad={() => {
              setIsLoading(false);
            }}
            src={image}
            alt="profile"
            className="rounded-full object-cover"
            fill
          />
        </div>
        <p className="text-3xl  font-semibold mt-4">{name}</p>
        {/* <p>&ldquo;Why nice girls hate me?&rdquo;</p> */}
        <p className="text-lg">{position}</p>

        <div className="flex flex-row gap-5 flex-wrap">
          <Link href="https://github.com/itsnang" target="_blank">
            <GithubLogo />
          </Link>
          <Link href="https://www.linkedin.com/in/itsnang/" target="_blank">
            <LinkdinLogo />
          </Link>
          <button onClick={handleClickEmail}>
            <EnvelopeIcon className="w-8 hover:text-blue-600" />
          </button>
          <Link
            href="https://drive.google.com/file/d/1_GlhsGO_LAT_ymzTIZwAJ5VRTgBVnfKi/view?usp=sharing"
            target="_blank"
          >
            <DocumentTextIcon className="w-7 hover:text-blue-500" />
          </Link>
        </div>
      </div>
    </>
  );
};

const GithubLogo = () => {
  return (
    <>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        x="0px"
        y="0px"
        width="32"
        height="32"
        viewBox="0 0 48 48"
        className="hover:fill-gray-600"
      >
        <path d="M44,24c0,8.96-5.88,16.54-14,19.08V38c0-1.71-0.72-3.24-1.86-4.34c5.24-0.95,7.86-4,7.86-9.66c0-2.45-0.5-4.39-1.48-5.9 c0.44-1.71,0.7-4.14-0.52-6.1c-2.36,0-4.01,1.39-4.98,2.53C27.57,14.18,25.9,14,24,14c-1.8,0-3.46,0.2-4.94,0.61 C18.1,13.46,16.42,12,14,12c-1.42,2.28-0.84,4.74-0.3,6.12C12.62,19.63,12,21.57,12,24c0,5.66,2.62,8.71,7.86,9.66 c-0.67,0.65-1.19,1.44-1.51,2.34H16c-1.44,0-2-0.64-2.77-1.68c-0.77-1.04-1.6-1.74-2.59-2.03c-0.53-0.06-0.89,0.37-0.42,0.75 c1.57,1.13,1.68,2.98,2.31,4.19C13.1,38.32,14.28,39,15.61,39H18v4.08C9.88,40.54,4,32.96,4,24C4,12.95,12.95,4,24,4 S44,12.95,44,24z"></path>
      </svg>
    </>
  );
};

const LinkdinLogo = () => {
  return (
    <>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        x="0px"
        y="0px"
        width="32"
        height="32"
        viewBox="0 0 50 50"
        className="hover:fill-blue-500 fill-blue-600"
      >
        <path d="M41,4H9C6.24,4,4,6.24,4,9v32c0,2.76,2.24,5,5,5h32c2.76,0,5-2.24,5-5V9C46,6.24,43.76,4,41,4z M17,20v19h-6V20H17z M11,14.47c0-1.4,1.2-2.47,3-2.47s2.93,1.07,3,2.47c0,1.4-1.12,2.53-3,2.53C12.2,17,11,15.87,11,14.47z M39,39h-6c0,0,0-9.26,0-10 c0-2-1-4-3.5-4.04h-0.08C27,24.96,26,27.02,26,29c0,0.91,0,10,0,10h-6V20h6v2.56c0,0,1.93-2.56,5.81-2.56 c3.97,0,7.19,2.73,7.19,8.26V39z"></path>
      </svg>
    </>
  );
};
