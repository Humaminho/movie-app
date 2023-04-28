import React from 'react';
import { signOut } from 'firebase/auth';
import { auth } from './firebase-config.jsx';
import { Link } from 'react-router-dom';

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
			<Link to="/watchlist">
				<button className="watch-list no-border-button">
					Watch list
				</button>
			</Link>
			<button
				className="profil no-border-button"
				onClick={handleProfilClick}
			>
				Log-out
			</button>
		</div>
	);
}
