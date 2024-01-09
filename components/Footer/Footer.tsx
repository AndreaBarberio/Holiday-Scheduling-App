import { footerData } from '@/utilities/Footer/footerData';
import Image from 'next/image';
import React from 'react';

interface Link {
	name: string;
	url: string;
	icon: string;
}

const Footer = () => (
	<footer className="absolute bottom-0 w-full flex flex-col items-center justify-center bg-slate-900">
		<ul className="flex flex-wrap justify-around text-center w-full p-2 m-auto">
			{footerData.map((link: Link, i: number) => (
				<li key={i} className="flex flex-col items-center text-xs">
					<a href={link.url} target="_blank" rel="noopener noreferrer">
						<Image
							src={`${link?.icon.toLowerCase()}`}
							alt={link.name}
							width={48}
							height={48}
							className="self-center"
						/>
						{link.name}
					</a>
				</li>
			))}
		</ul>
	</footer>
);

export default Footer;
