import React, { useState, useRef, useEffect } from 'react';
import './styles/App.css';
import Navbar from './navbar';
import MainContent from './mainContent';
import Signup from './Signup';
import Login from './Login';

export default function App() {

  const [background, setBackground] = useState(
		'https://image.tmdb.org/t/p/w1280/l8ubUlfzlB5R2j9cJ3CN7tj0gmd.jpg'
  );

  const [layer, setLayer] = useState("layer");
  const [logState, setLogState] = useState(false);
  const [popUpSignupState, setPopUpSignupState] = useState(false);
  const [popUpLoginState, setPopUpLoginState] = useState(false);

  // function checkWindow() {
  //   if ( windowState === 'movie' ) {
  //     return <MainContent
	// 				setBackground={setBackground}
	// 				background={background}
	// 				setLayer={setLayer}
	// 			/>
  //   } else if ( windowState === 'login' ) {
  //     return <Login />
  //   } else if ( windowState === 'signup' ) {
  //     return <Signup/ >
  //   }
  // }

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
				/>
			)}
			{popUpLoginState && (
				<Login
					setPopUpSignupState={setPopUpSignupState}
					setPopUpLoginState={setPopUpLoginState}
				/>
			)}
		</div>
	);
}
