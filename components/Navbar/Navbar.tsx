import { Inter } from 'next/font/google';
import { FaCalendarAlt } from 'react-icons/fa';
const inter = Inter({ subsets: ['greek'] });
import { INavProps } from '@/utilities/Navbar/navTypes';

const Navbar = ({ title }: INavProps) => {
	return (
		<nav className="w-full h-12 bg-slate-400 flex items-start">
			{title && (
				<h1
					className={`text-gray-700 self-center hidden sm:flex text-lg pl-2 ${inter.className} sm:block md:hidden lg:block xl:block`}
				>
					{title}
				</h1>
			)}

			<FaCalendarAlt
				className={`text-gray-700 self-center text-lg pl-2  sm:hidden`}
				title="Calendar Icon"
			/>
		</nav>
	);
};

export default Navbar;
