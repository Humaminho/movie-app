import DropDown from './dropdown';
import { React, useState, useEffect } from 'react';

export default function SearchSection({
	fetchMovieResults,
	setMovie,
	setBackground,
}) {
	const [searchInput, setSearchInput] = useState('');
	const [dropDownList, setDropDownList] = useState([]);

	useEffect(() => {
		// Default movie
		handleRequest('Interstellar')
			.then(() => console.log('Movie set'))
			.catch((error) => console.info(error));
	}, []);

	async function handleRequest(req) {
		try {
			const data = await fetchMovieResults(req || searchInput);
			data[0] ? setMovie(data[0]) : console.warn('Not found.');
			const path = data[0].backdrop_path;
			const genreIds = data[0].genre_ids;
			fetchGenreNames(genreIds);
      
			setTimeout(() => {
				setBackground(`https://image.tmdb.org/t/p/w1280${path}`);
			}, 500);
		} catch (error) {
			console.warn('Error: ' + error);
		}
	}

	async function fetchGenreNames(genreIds) {
		const apiKey = '67e2da4e137cc7ee4732edd315ed8cab';
		const genreEndpoint = `https://api.themoviedb.org/3/genre/movie/list?api_key=${apiKey}`;

		try {
			const response = await fetch(genreEndpoint);
			const data = await response.json();
			const genreMap = new Map();
			data.genres.forEach((genre) => {
				genreMap.set(genre.id, genre.name);
			});

			const genreNames = genreIds.map((id) => genreMap.get(id));
			setMovie((prev) => ({ ...prev, genres: genreNames }));
			return genreNames;
		} catch (error) {
			console.error('Error fetching genre information:', error);
			return [];
		}
	}

	async function handleChange(e) {
		setSearchInput(e.target.value);

		try {
			const response = await fetchMovieResults(searchInput);
			setDropDownList(response);
		} catch (error) {
			console.warn('Error: list not retreived');
		}
	}

	function handleSubmit(e) {
		e.preventDefault();
		handleRequest();
		setDropDownList([]);
	}

	return (
		<form className="search-section" onSubmit={handleSubmit}>
			<input
				type="search"
				className="search"
				value={searchInput}
				onClick={handleChange}
				onChange={handleChange}
				onBlur={() => setTimeout(() => setDropDownList([]), 100)}
				placeholder="Name of the movie..."
			/>

			<DropDown
				dropDownList={dropDownList}
				setDropDownList={setDropDownList}
				searchInput={searchInput}
				setSearchInput={setSearchInput}
				fetchMovieResults={fetchMovieResults}
				setMovie={setMovie}
				setBackground={setBackground}
			/>

			<button
				type="submit"
				className="btn search-btn"
				onClick={handleRequest}
			>
				<svg
					xmlns="http://www.w3.org/2000/svg"
					width="20"
					height="20"
					fill="currentColor"
					className="bi bi-search"
					viewBox="0 0 16 16"
				>
					<path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z" />
				</svg>
			</button>
		</form>
	);
}
