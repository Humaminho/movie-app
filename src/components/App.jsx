import React, { useState, useEffect } from 'react';
import './styles/App.css';
import { app, auth } from './firebase-config.jsx';
import { onAuthStateChanged } from 'firebase/auth';
import Navbar from './navbar';
import MainContent from './mainContent';
import Signup from './Signup';
import Login from './Login';

export default function App() {
	const [background, setBackground] = useState(
		'https://image.tmdb.org/t/p/w1280/l8ubUlfzlB5R2j9cJ3CN7tj0gmd.jpg'
	);

	const [layer, setLayer] = useState('layer');
	const [logState, setLogState] = useState(false);
	const [user, setUser] = useState(null);

	const [popUpSignupState, setPopUpSignupState] = useState(false);
	const [popUpLoginState, setPopUpLoginState] = useState(false);

	useEffect(() => {
		const unsubscribe = onAuthStateChanged(auth, (user) => {
			if (user) {
				setUser(user);
				console.log('Logged: ' + user.email);
			} else {
				setUser(null);
				console.log('Not logged: ' + user);
			}
		});
		return unsubscribe;
	}, []);

	useEffect(() => {
		if (user) {
			setLogState(true);
		} else {
			setLogState(false);
		}
	}, [user]);

	return (
		<div className="app">
			<div
				className="bg"
				style={{
					backgroundImage: `url(${background})`,
				}}
			></div>
			<div className={layer}></div>
			<Navbar
				logState={logState}
				setLogState={setLogState}
				setSignupPopUpState={setPopUpSignupState}
				setLoginPopUpState={setPopUpLoginState}
			></Navbar>
			<MainContent
				setBackground={setBackground}
				background={background}
				setLayer={setLayer}
			/>
			{popUpSignupState && (
				<Signup
					setPopUpSignupState={setPopUpSignupState}
					setPopUpLoginState={setPopUpLoginState}
					setLogState={setLogState}
				/>
			)}
			{popUpLoginState && (
				<Login
					setPopUpSignupState={setPopUpSignupState}
					setPopUpLoginState={setPopUpLoginState}
					setLogState={setLogState}
				/>
			)}
		</div>
	);
}
