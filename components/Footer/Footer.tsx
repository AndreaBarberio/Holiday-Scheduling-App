import { footerData } from '@/utilities/Footer/footerData';
import Image from 'next/image';
import React from 'react';

interface Link {
	name: string;
	url: string;
	icon: string;
}

const Footer = () => (
	<footer className="flex h-12 bg-slate-900">
		<ul>
			{footerData.map((link: Link, i: number) => (
				<li key={i}>
					<a href={link.url} target="_blank" rel="noopener noreferrer">
						<Image
							src={`${link?.icon.toLowerCase()}.svg`}
							alt={link.name}
							width={24}
							height={24}
						/>
						{link.name}
					</a>
				</li>
			))}
		</ul>
	</footer>
);

export default Footer;
