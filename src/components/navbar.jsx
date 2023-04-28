import React from 'react';
import './styles/navbar.css';
import Log from './LogButtons';
import Profil from './Profil';
import { Link } from 'react-router-dom';

export default function Navbar({
	logState,
	setLogState,
	setSignupPopUpState,
	setLoginPopUpState,
}) {
	return (
		<nav className="navbar">
			<Link to="/" className="logo">
				Netflix zr9a
			</Link>
			{logState ? (
				<Profil setLogState={setLogState} />
			) : (
				<Log
					setLoginPopUpState={setLoginPopUpState}
					setSignupPopUpState={setSignupPopUpState}
				/>
			)}
		</nav>
	);
}
