import React, { useEffect } from 'react';
import { getAuthUrl } from '../auth/auth';

const GoogleAuth = () => {
	useEffect(() => {
		const authenticate = async () => {
			const authUrl = await getAuthUrl();
			window.location.href = authUrl;
		};

		// Attendere l'interazione di un utente prima di chiamare la funzione di autenticazione
		const timeout = setTimeout(authenticate, 2000);

		// Pulire il timeout quando il componente si smonta o quando l'utente interagisce
		return () => clearTimeout(timeout);
	}, []);

	return <div>Redirecting to Google for authentication...</div>;
};

export default GoogleAuth;
