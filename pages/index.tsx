import { Inter } from 'next/font/google';
const inter = Inter({ subsets: ['greek'] });
import Navbar from '../components/Navbar/Navbar';
import Footer from '@/components/Footer/Footer';

export default function Home() {
	return (
		<>
			<Navbar title="Calendar" />
			<main
				className={`flex flex-col items-center h-[60vh] justify-between overflow-hidden ${inter.className} `}
			></main>
			<Footer />
		</>
	);
}
