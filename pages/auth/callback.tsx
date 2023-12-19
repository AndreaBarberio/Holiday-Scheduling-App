import { useEffect } from 'react';
import { getAccessToken } from '../auth/auth';
import dotenv from 'dotenv';
dotenv.config();
const Callback = () => {
	useEffect(() => {
		const code = new URLSearchParams(window.location.search).get('code');
		if (code) {
			getAccessToken(code);
			// Dopo il completamento, reindirizza l'utente alla pagina principale o a un'altra pagina di successo
			window.location.href = '/';
		} else {
			// C'è da gestire il caso di errore
		}
	}, []);

	return <div>Processing...</div>;
};

export default Callback;
