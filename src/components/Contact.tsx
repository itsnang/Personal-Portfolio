import React from "react";
import Link, { LinkProps } from "next/link";

type ContactProps = {
  icon: string | React.ReactNode;
  title: string;
  href?: LinkProps["href"];
};

export const Contact: React.FC<ContactProps> = ({ icon, title, href = "" }) => {
  return (
    <>
      <Link href={href} target="_blank">
        <div
          className="flex flex-row gap-2 border-[3px] border-blue-500 hover:border-solid hover:bg-blue-400 hover:text-white 
       py-2 px-2 border-dashed rounded-xl"
        >
          {icon}
          <p>{title}</p>
        </div>
      </Link>
    </>
  );
};
