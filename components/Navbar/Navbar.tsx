import { Inter } from 'next/font/google';
const inter = Inter({ subsets: ['greek'] });
import { INavProps } from '@/utilities/Navbar/navTypes';

const Navbar = ({ title }: INavProps) => {
	return (
		<nav className="w-full h-12 bg-slate-400 flex items-start">
			{title && (
				<h1
					className={`text-gray-700 self-center text-lg overflow-hidden pl-2 ${inter.className}`}
				>
					{title}
				</h1>
			)}
		</nav>
	);
};

export default Navbar;
