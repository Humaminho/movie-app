import React, { useContext } from 'react';
import { favoritesContext } from '../utils/contexts';

export default function InfoSection({ movie }) {
	function formatDate(date) {
		const formated = date.split('-').reverse().join('/');
		return formated;
	}

	const [favorites, setFavorites] = useContext(favoritesContext);

	function checkIfFavorite(movie) {
		let isFavorite = false;
		favorites.forEach((favorite) => {
			if (favorite.id === movie.id) {
				isFavorite = true;
			}
		});
		return isFavorite;
	}

	function addToFavorites(movie) {
		if (favorites.length == 0) {
			setFavorites([...favorites, movie]);
		} else {
			let isFavorite = checkIfFavorite(movie);
			if (isFavorite === false) {
				setFavorites([...favorites, movie]);
			}
		}
	}

	function removeFromFavorites(movie) {
		setFavorites(favorites.filter((favorite) => favorite.id !== movie.id));
	}

	return (
		<div className="info-section">
			<img
				className="movie-photo"
				src={
					movie.poster_path
						? 'https://image.tmdb.org/t/p/w500' + movie.poster_path
						: './src/assets/img/notfound.png'
				}
				alt={movie && movie.title + ' poster picture'}
			/>
			<div className="movie-info">
				<p className="movie-title">
					{movie && movie.title.toUpperCase()}
				</p>

				{checkIfFavorite(movie) ? (
					<svg
						xmlns="http://www.w3.org/2000/svg"
						width="25"
						height="25"
						fill="#FFA41B"
						className="bi bi-star-fill star"
						viewBox="0 0 16 16"
						onClick={() => removeFromFavorites(movie)}
					>
						<path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
					</svg>
				) : (
					<svg
						xmlns="http://www.w3.org/2000/svg"
						width="25"
						height="25"
						fill="currentColor"
						viewBox="0 0 16 16"
						className="bi bi-star star empty"
						onClick={() => addToFavorites(movie)}
					>
						<path d="M2.866 14.85c-.078.444.36.791.746.593l4.39-2.256 4.389 2.256c.386.198.824-.149.746-.592l-.83-4.73 3.522-3.356c.33-.314.16-.888-.282-.95l-4.898-.696L8.465.792a.513.513 0 0 0-.927 0L5.354 5.12l-4.898.696c-.441.062-.612.636-.283.95l3.523 3.356-.83 4.73zm4.905-2.767-3.686 1.894.694-3.957a.565.565 0 0 0-.163-.505L1.71 6.745l4.052-.576a.525.525 0 0 0 .393-.288L8 2.223l1.847 3.658a.525.525 0 0 0 .393.288l4.052.575-2.906 2.77a.565.565 0 0 0-.163.506l.694 3.957-3.686-1.894a.503.503 0 0 0-.461 0z" />
					</svg>
				)}
				<div className="text-section">
					<p className="info-title">Release date:</p>
					<p className="info-text">
						{movie
							? formatDate(movie.release_date)
							: 'Not available'}
					</p>
				</div>
				<div className="text-section">
					<p className="info-title">Genres:</p>
					<p className="info-text">
						{movie && movie.genres
							? movie.genres.join(', ')
							: 'Not available'}
					</p>
				</div>
				<div className="text-section description-section">
					<p className="info-title">Description:</p>
					<p className="description">
						{movie ? movie.overview : 'Not available'}
					</p>
				</div>
				<div className="text-section popularity">
					<p className="info-title">Popularity:</p>
					<p className="info-text">
						{movie
							? Math.floor(movie.popularity) + ' %'
							: 'Not available'}
					</p>
				</div>
			</div>
		</div>
	);
}
