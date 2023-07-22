import React, { useState, useEffect } from 'react';
import { onAuthStateChanged } from 'firebase/auth';
import { auth } from '../utils/firebase.config';
import { getDocs, addDoc, doc, getDoc, updateDoc } from 'firebase/firestore';
import { collectionRef, db } from '../utils/firebase.config';
import {
	userContext,
	favoritesContext,
	userDocContext,
  movieContext,
} from '../utils/contexts';
import '../styles/App.css';
import Header from './header';
import MainContent from './mainContent';
import { Route, Routes } from 'react-router-dom';
import Footer from './footer.jsx';
import SignIn from './auth/sign-in';
import Signup from './auth/sign-up';
import Profile from './profile';

export default function App() {
	const [background, setBackground] = useState(
		'https://image.tmdb.org/t/p/w1280/rAiYTfKGqDCRIIqo664sY9XZIvQ.jpg'
	);

	const [user, setUser] = useState(null);
	const [movieData, setMovieData] = useState([]);
	const [favorites, setFavorites] = useState([]);
	const [userDoc, setUserDoc] = useState('');
  const [movie, setMovie] = useState('');

	useEffect(() => {
		const unsubAuth = onAuthStateChanged(auth, (user) => {
			setUser(user);
			if (user) {
				console.log(`User logged: ${user.email}`);
			} else {
				console.log(`User logged out: ${user}`);
			}
		});

		return () => {
			unsubAuth();
		};
	}, []);

	useEffect(() => {
		if (user && collectionRef) {
			getDocs(collectionRef)
				.then((snapshot) => {
					let hasDb = false;
					snapshot.forEach((doc) => {
						if (doc.data().id === user.uid) {
							hasDb = true;
							setUserDoc(doc.id);
							setFavorites(JSON.parse(doc.data().favorites));
						}
					});
					return hasDb;
				})
				.then((hasDb) => {
					if (hasDb) {
						console.log('User already in database');
					} else {
						createNewDb();
					}
				})
				.catch((error) => {
					console.info('Error getting documents: ', error);
				});
		}
	}, [user]);

	useEffect(() => {
		const unsubAuth = onAuthStateChanged(auth, (user) => {
			if (user && userDoc) {
				const docRef = doc(db, 'users', userDoc);
				updateDoc(docRef, {
					favorites: JSON.stringify(favorites),
				})
					.then(() => {
						console.log('changed favorites');
					})
					.catch((error) => {
						console.info(error);
					});
			}
		});

		return () => {
			unsubAuth();
		};
	}, [favorites]);

	function createNewDb() {
		addDoc(collectionRef, {
			id: user.uid,
			favorites: '[]',
		})
			.then(() => {
				console.log('Document successfully written!');
			})
			.catch((error) => {
				console.info('Error writing document: ', error);
			});
	}

	return (
		<userContext.Provider value={[user, setUser]}>
			<favoritesContext.Provider value={[favorites, setFavorites]}>
				<userDocContext.Provider value={[userDoc, setUserDoc]}>
          <movieContext.Provider value={[movie, setMovie]}>
					<div className="app">
						<div
							className="bg"
							style={{
								backgroundImage: `url(${background})`,
							}}
						></div>
						<Header />
						<Routes>
							<Route
								path="/"
								element={
									<MainContent
										setBackground={setBackground}
										movieData={movieData}
										setMovieData={setMovieData}
									/>
								}
							/>
							<Route path="/sign-up" element={<Signup />} />
							<Route path="/sign-in" element={<SignIn />} />
							<Route path="/profile" element={<Profile setBackground={setBackground}/>} />
						</Routes>
						<Footer />
					</div>
          </movieContext.Provider>
				</userDocContext.Provider>
			</favoritesContext.Provider>
		</userContext.Provider>
	);
}
