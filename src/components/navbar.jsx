import React from 'react';
import './styles/navbar.css';

export default function Navbar({ logState, setSignupPopUpState, setLoginPopUpState }) {
	function Profil() {
		return <div>Profil</div>;
	}



	function Log() {
		return (
			<div className="log">
				<button
					className="login"
					onClick={() => {
						setLoginPopUpState(true);
						setSignupPopUpState(false);
					}}
				>
					Login
				</button>
				<button
					className="no-border-button"
					onClick={() => {
						setLoginPopUpState(false);
						setSignupPopUpState(true);
					}}
				>
					Sign-up
				</button>
			</div>
		);
	}
	return (
		<nav className="navbar">
			<a href="https://chillandnetflix.netlify.app/" className="logo">
				Netflix zr9a
			</a>
			{logState ? <Profil /> : <Log />}
		</nav>
	);
}
