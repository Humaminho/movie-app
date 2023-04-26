import React from 'react';
import { signOut } from 'firebase/auth';
import { auth } from './firebase-config.jsx';

export default function Profil({ setLogState }) {
	function handleProfilClick() {
		signOut(auth)
			.then(() => {
				console.log('logged out');
				setLogState(false);
			})
			.catch((err) => {
				console.info(err);
			});
	}

	return (
		<div>
			<button className="watch-list no-border-button">Watch list</button>
			<button
				className="profil no-border-button"
				onClick={handleProfilClick}
			>
				Log-out
			</button>
		</div>
	);
}
