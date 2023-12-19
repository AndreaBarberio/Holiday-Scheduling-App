import { useState } from 'react';
import { getAuthUrl } from '../pages/auth/auth';

const Login = () => {
	const [authUrl, setAuthUrl] = useState<string | null>(null);

	const handleLoginClick = async () => {
		const url = await getAuthUrl();
		setAuthUrl(url);
	};

	return (
		<form
			action={authUrl || ''}
			method="GET"
			target="_self"
			className="min-h-screen flex items-center justify-center"
		>
			<div className="bg-white p-8 rounded shadow-md">
				<h1 className="text-2xl font-bold mb-4">
					Benvenuto! Accedi con Google
				</h1>
				<button
					type="submit"
					className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 focus:outline-none focus:shadow-outline-blue"
					onClick={handleLoginClick}
				>
					Login con Google
				</button>
			</div>
		</form>
	);
};

export default Login;
