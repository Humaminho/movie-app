import React, { useState } from 'react';
import './styles/Forms.css';
import {
	signInWithEmailAndPassword as signIn,
	setPersistence,
	browserLocalPersistence,
} from 'firebase/auth';
import { auth } from './firebase-config.jsx';

export default function Login({
	setLogState,
	setPopUpSignupState,
	setPopUpLoginState,
}) {
	const [loginEmail, setLoginEmail] = useState('');
	const [loginPassword, setLoginPassword] = useState('');

	function handleLogin(e) {
		e.preventDefault();
		setPersistence(auth, browserLocalPersistence)
			.then(() => {
				signIn(auth, loginEmail, loginPassword)
					.then((cred) => {
						setLogState(true);
						console.log(cred.user);
						console.log('logged in');
						setLoginEmail('');
						setLoginPassword('');
						closePopUp();
					})
					.catch((err) => {
						console.info(err);
					});
				console.log('Setting persistence succeded');
			})
			.catch((err) => {
				console.info(`Setting persistence failed: ${err}`);
			});
	}

	function swap() {
		setPopUpSignupState(true);
		setPopUpLoginState(false);
	}

	function closePopUp() {
		setPopUpLoginState(false);
	}

	return (
		<form className="login-form">
			<div className="close" onClick={closePopUp}>
				✖
			</div>
			<label htmlFor="email">
				<p className="label">Email:</p>
				<input
					className="login-input"
					type="email"
					name="email"
					id="email"
					onChange={(e) => setLoginEmail(e.target.value)}
					value={loginEmail}
					placeholder="example@gmail.com"
				/>
			</label>
			<label htmlFor="password">
				<p className="label">Password:</p>
				<input
					className="login-input"
					type="password"
					name="password"
					id="password"
					onChange={(e) => setLoginPassword(e.target.value)}
					value={loginPassword}
					placeholder="missi2023"
				/>
			</label>
			<button onClick={handleLogin} className="Sign-up">
				Login
			</button>
			<button className="no-border-button" onClick={swap}>
				Don't have an account? Sign-up!
			</button>
		</form>
	);
}
