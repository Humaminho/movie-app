import React, { useState, useEffect } from 'react';
import userContext from '../contexts/user-context';
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
		'https://image.tmdb.org/t/p/w1280/l8ubUlfzlB5R2j9cJ3CN7tj0gmd.jpg'
	);

	const [user, setUser] = useState(null);
	const [movieData, setMovieData] = useState([]);

	return (
		<userContext.Provider value={[user, setUser]}>
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
					<Route path="/profile" element={<Profile />} />
				</Routes>
				<Footer />
			</div>
		</userContext.Provider>
	);
}
