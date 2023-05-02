import React, { useState, useEffect } from 'react';
import './styles/App.css';
import { auth } from './firebase-config.jsx';
import { onAuthStateChanged } from 'firebase/auth';
import Navbar from './navbar';
import MainContent from './mainContent';
import Signup from './Signup';
import Login from './Login';
import Watchlist from './Watchlist';
import { Route, Routes } from 'react-router-dom';
import { db } from './firebase-config';
import { doc, getDoc, setDoc } from 'firebase/firestore';

export default function App() {
	const [background, setBackground] = useState(
		'https://image.tmdb.org/t/p/w1280/l8ubUlfzlB5R2j9cJ3CN7tj0gmd.jpg'
	);

	const [layer, setLayer] = useState('layer');
	const [logState, setLogState] = useState(false);
	const [user, setUser] = useState(null);

	const [popUpSignupState, setPopUpSignupState] = useState(false);
	const [popUpLoginState, setPopUpLoginState] = useState(false);

	const [movieData, setMovieData] = useState([]);
	const [localSave, setlocalSave] = useState(false);

	async function getData(userId) {
		const dataRef = doc(db, 'watchlist', userId);
		getDoc(dataRef)
			.then((snapshot) => {
				if (snapshot.exists()) {
					setMovieData(snapshot.data().movie);
				} else console.info('snapshot not found');
			})
			.catch((err) => console.info(err));
	}

	async function saveData(userId) {
		try {
			const watchListRef = doc(db, 'watchlist', userId);
			await setDoc(watchListRef, { movie: movieData });
		} catch (err) {
			console.info('failed to save: ' + err);
		}
	}

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

	function addToWatchList(movie) {
    if (logState) {
      const newMovieData = [...movieData, movie];
      setMovieData(newMovieData);
    } else {
      setPopUpLoginState(true);
    }

	}

	function removeFromWatchList(movie) {
		const newMovieData = movieData.filter((item) => item.id !== movie.id);
		setMovieData(newMovieData);
	}

	function checkIfFavorite(movie) {
		for (let i = 0; i < movieData.length; i++) {
			if (movieData[i].id === movie.id) {
				return true;
			}
		}
	}

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
			<Routes>
				<Route
					path="/"
					element={
						<MainContent
							setBackground={setBackground}
							setLayer={setLayer}
							movieData={movieData}
							setMovieData={setMovieData}
							addToWatchList={addToWatchList}
							removeFromWatchList={removeFromWatchList}
							checkIfFavorite={checkIfFavorite}
							getData={getData}
							saveData={saveData}
							localSave={localSave}
							setlocalSave={setlocalSave}
						/>
					}
				/>
				<Route
					path="/watchlist"
					element={
						<Watchlist
							movieData={movieData}
							addToWatchList={addToWatchList}
							removeFromWatchList={removeFromWatchList}
							checkIfFavorite={checkIfFavorite}
							getData={getData}
							saveData={saveData}
							localSave={localSave}
							setlocalSave={setlocalSave}
						/>
					}
				/>
			</Routes>
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
