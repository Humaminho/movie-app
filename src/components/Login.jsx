import React, { useState } from 'react';
import './styles/Log.css';
import { app, auth } from './firebase-config.jsx';
import { createUserWithEmailAndPassword as createUser } from 'firebase/auth';

export default function Login({ setPopUpSignupState, setPopUpLoginState }) {
	const [loginEmail, setLoginEmail] = useState('');
	const [loginPassword, setLoginPassword] = useState('');

	function handleLogin(e) {
		e.preventDefault();
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
