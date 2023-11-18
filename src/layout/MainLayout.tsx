"use client";

import React from "react";

type MainLayoutProps = {
  children: JSX.Element | JSX.Element[];
  backUrl?: string;
  className?: string;
};

export const MainLayout: React.FC<MainLayoutProps> = ({
  children,
  backUrl,
  className,
}) => {
  return (
    <main
      className={`max-w-laptop mx-auto mb-8 min-h-screen px-10 ${className} `}
    >
      {children}
    </main>
  );
};
