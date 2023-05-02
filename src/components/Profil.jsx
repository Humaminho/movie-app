import React from 'react';
import { signOut } from 'firebase/auth';
import { auth } from './firebase-config.jsx';
import { Link } from 'react-router-dom';

export default function Profil({ setLogState }) {
	function handleLogOutClick() {
		signOut(auth)
			.then(() => {
				setLogState(false);
			})
			.catch((err) => {
				console.info('Error: ' + err);
			});
	}

	return (
		<div>
			<Link to="/">
				<button className="watch-list no-border-button">
					Home
				</button>
			</Link>
			<Link to="/watchlist">
				<button className="watch-list no-border-button">
					Watch list
				</button>
			</Link>
			<button
				onClick={handleLogOutClick}
			>
				Log-out
			</button>
		</div>
	);
}
