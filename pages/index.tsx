import { Inter } from 'next/font/google';
const inter = Inter({ subsets: ['greek'] });
import Navbar from '../components/Navbar/Navbar';

export default function Home() {
	return (
		<>
			<Navbar title="Calendar" />
			<main
				className={`flex min-h-screen flex-col items-center justify-between p-24 ${inter.className} `}
			></main>
		</>
	);
}
