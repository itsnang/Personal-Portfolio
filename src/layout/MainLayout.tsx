"use client";

import Breadcrumbs from "@/components/Breadcrumbs";
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
			className={`max-w-laptop mx-auto mb-8 min-h-screen lg:px-10 md:px-8 px-4 ${className} `}
		>
			{children}
		</main>
	);
};
