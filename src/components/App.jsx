import React, { useState, useEffect } from 'react';
import './styles/App.css';
import Navbar from './navbar';
import MainContent from './mainContent';
import { Route, Routes } from 'react-router-dom';
import Footer from './footer.jsx';

export default function App() {
	const [background, setBackground] = useState(
		'https://image.tmdb.org/t/p/w1280/l8ubUlfzlB5R2j9cJ3CN7tj0gmd.jpg'
	);

	const [movieData, setMovieData] = useState([]);

	return (
		<div className="app">
			<div
				className="bg"
				style={{
					backgroundImage: `url(${background})`,
				}}
			></div>
			<Navbar />
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
			</Routes>
      <Footer />
		</div>
	);
}
