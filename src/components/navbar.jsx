import React from 'react';
import './styles/navbar.css';
import Log from './LogButtons';
import Profil from './Profil';

export default function Navbar({ logState, setLogState, setSignupPopUpState, setLoginPopUpState }) {

	return (
		<nav className="navbar">
			<a href="https://chillandnetflix.netlify.app/" className="logo">
				Netflix zr9a
			</a>
			{logState ? (
				<Profil setLogState={setLogState}/>
			) : (
				<Log
					setLoginPopUpState={setLoginPopUpState}
					setSignupPopUpState={setSignupPopUpState}
				/>
			)}
		</nav>
	);
}
