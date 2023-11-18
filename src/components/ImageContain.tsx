import React from "react";
import Image from "next/image";

type ImageContainProps = {
  src: string;
  alt: string;
  className?: string;
  rounded?: boolean;
};

export const ImageContain: React.FC<ImageContainProps> = ({
  src,
  alt,
  className,
  rounded,
}) => {
  return (
    <>
      <div
        className={`w-full flex lg:h-full md:h-full h-[400px] relative ${className}`}
      >
        <Image
          src={src}
          alt={alt}
          className={`object-cover ${rounded && "rounded-2xl"}`}
          fill
        />
      </div>
    </>
  );
};
