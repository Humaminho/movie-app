import React, { useState } from 'react';
import './styles/Forms.css';
import SignInWithGoogle from './SignInWithGoogle';
import { auth } from './firebase-config.jsx';
import {
	createUserWithEmailAndPassword as createUser,
	setPersistence,
	browserLocalPersistence,
} from 'firebase/auth';

export default function Signup({
	setPopUpSignupState,
	setPopUpLoginState,
	setLogState,
}) {
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');
	const [passConfirm, setPassConfirm] = useState('');

	function handleSignup(e) {
		e.preventDefault();
		setPersistence(auth, browserLocalPersistence)
			.then(() => {
				if (password === passConfirm) {
					createUser(auth, email, password)
						.then((cred) => {
							console.log('User created', cred.user.email);
							setEmail('');
							setPassword('');
							setPassConfirm('');
							closePopUp();
							setLogState(true);
						})
						.catch((err) => {
							console.info(err);
						});
				} else {
					alert("Passwords don't match");
				}
				console.log('Setting persistence succeded');
			})
			.catch((err) => {
				console.info(`Setting persistence failed: ${err}`);
			});
	}
	function swap(e) {
		e.preventDefault();
		setPopUpSignupState(false);
		setPopUpLoginState(true);
	}
	function closePopUp() {
		setPopUpSignupState(false);
	}

	return (
		<form className="login-form" onSubmit={(e) => e.preventDefault()}>
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
					onChange={(e) => setEmail(e.target.value)}
					value={email}
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
					onChange={(e) => setPassword(e.target.value)}
					value={password}
					placeholder="missi2023"
				/>
			</label>
			<label htmlFor="confirm-password">
				<p className="label">Confirm:</p>
				<input
					className="login-input"
					type="password"
					name="confirm-password"
					id="confirm-password"
					onChange={(e) => setPassConfirm(e.target.value)}
					value={passConfirm}
					placeholder="missi2023"
				/>
			</label>
			<button onClick={handleSignup} className="Sign-up" type="submit">
				Sign-up
			</button>
			<button className="no-border-button" onClick={swap}>
				Have an account already? Login
			</button>
			<SignInWithGoogle />
		</form>
	);
}
