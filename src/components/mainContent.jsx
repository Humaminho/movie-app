import React, { useContext, useEffect, useState } from 'react';
import '../styles/mainContent.css';
import InfoSection from './infoSection';
import SearchSection from './searchSection';
import { movieContext } from '../utils/contexts';

export default function MainContent({ setBackground }) {
	const [movie, setMovie] = useContext(movieContext);

	async function fetchMovieResults(req) {
		const apiKey = '67e2da4e137cc7ee4732edd315ed8cab';
		try {
			const response = await fetch(
				`https://api.themoviedb.org/3/search/movie?api_key=${apiKey}&query=${req}`
			);
			const data = await response.json();
			return data.results;
		} catch (error) {
			console.warn('Error: ' + error);
		}
	}

	return (
		<div className="main">
			<SearchSection
				setBackground={setBackground}
				movie={movie}
				setMovie={setMovie}
				fetchMovieResults={fetchMovieResults}
			/>
			<InfoSection movie={movie}></InfoSection>
		</div>
	);
}
