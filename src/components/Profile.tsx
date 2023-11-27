import React, { useState } from "react";
import Image from "next/image";
import { Contact } from "./Contact";
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

	return (
		<>
			<div className={`flex flex-col gap-4 ${className}`}>
				<div className='relative h-36 w-36 md:h-40 md:w-40 '>
					<Image
						loading={"lazy"}
						onLoad={() => {
							setIsLoading(false);
						}}
						src={image}
						alt='profile'
						className='rounded-full'
						fill
					/>
				</div>
				<p className='text-3xl  font-semibold mt-4'>{name}</p>
				<p>&ldquo;Why nice girls hate me?&rdquo;</p>

				<p className='text-lg'>{position}</p>
				<div className='flex flex-row gap-3 flex-wrap'>
					<Contact
						href={
							"https://drive.google.com/file/d/1GrhW8yEPNfJpNbcoxVcPkCtezV0pd95m/view?usp=sharing"
						}
						icon={<DocumentTextIcon className='w-6' />}
						title='Resume'
					/>
					<Contact
						href={"https://github.com/itsnang"}
						icon={<GithubLogo />}
						title='Github'
					/>
					<Contact
						href={"https://www.linkedin.com/in/itsnang/"}
						icon={<LinkdinLogo />}
						title='Linkdin'
					/>
					<Contact
						icon={<EnvelopeIcon className='w-6' />}
						title='huotchhayyy@gmail.com'
					/>
				</div>
			</div>
		</>
	);
};

const GithubLogo = () => {
	return (
		<>
			<svg
				xmlns='http://www.w3.org/2000/svg'
				x='0px'
				y='0px'
				width='24'
				height='24'
				viewBox='0 0 48 48'
			>
				<path d='M44,24c0,8.96-5.88,16.54-14,19.08V38c0-1.71-0.72-3.24-1.86-4.34c5.24-0.95,7.86-4,7.86-9.66c0-2.45-0.5-4.39-1.48-5.9 c0.44-1.71,0.7-4.14-0.52-6.1c-2.36,0-4.01,1.39-4.98,2.53C27.57,14.18,25.9,14,24,14c-1.8,0-3.46,0.2-4.94,0.61 C18.1,13.46,16.42,12,14,12c-1.42,2.28-0.84,4.74-0.3,6.12C12.62,19.63,12,21.57,12,24c0,5.66,2.62,8.71,7.86,9.66 c-0.67,0.65-1.19,1.44-1.51,2.34H16c-1.44,0-2-0.64-2.77-1.68c-0.77-1.04-1.6-1.74-2.59-2.03c-0.53-0.06-0.89,0.37-0.42,0.75 c1.57,1.13,1.68,2.98,2.31,4.19C13.1,38.32,14.28,39,15.61,39H18v4.08C9.88,40.54,4,32.96,4,24C4,12.95,12.95,4,24,4 S44,12.95,44,24z'></path>
			</svg>
		</>
	);
};

const LinkdinLogo = () => {
	return (
		<>
			<svg
				xmlns='http://www.w3.org/2000/svg'
				x='0px'
				y='0px'
				width='26'
				height='24'
				viewBox='0 0 48 48'
			>
				<path
					fill='#0288D1'
					d='M42,37c0,2.762-2.238,5-5,5H11c-2.761,0-5-2.238-5-5V11c0-2.762,2.239-5,5-5h26c2.762,0,5,2.238,5,5V37z'
				></path>
				<path
					fill='#FFF'
					d='M12 19H17V36H12zM14.485 17h-.028C12.965 17 12 15.888 12 14.499 12 13.08 12.995 12 14.514 12c1.521 0 2.458 1.08 2.486 2.499C17 15.887 16.035 17 14.485 17zM36 36h-5v-9.099c0-2.198-1.225-3.698-3.192-3.698-1.501 0-2.313 1.012-2.707 1.99C24.957 25.543 25 26.511 25 27v9h-5V19h5v2.616C25.721 20.5 26.85 19 29.738 19c3.578 0 6.261 2.25 6.261 7.274L36 36 36 36z'
				></path>
			</svg>
		</>
	);
};
