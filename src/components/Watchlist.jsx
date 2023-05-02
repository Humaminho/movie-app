import React, { useEffect } from 'react';
import './styles/Watchlist.css';
import { onAuthStateChanged } from 'firebase/auth';
import { auth } from './firebase-config';

export default function Watchlist({
	movieData,
	addToWatchList,
	removeFromWatchList,
	checkIfFavorite,
	saveData,
	getData,
	localSave,
	setlocalSave,
}) {
	function formatDate(date) {
		const formated = date.split('-').reverse().join('/');
		return formated;
	}

	useEffect(() => {
		onAuthStateChanged(auth, (user) => {
			if (user) {
				const userId = user.uid;
				getData(userId);
				setlocalSave(true);
			} else return;
		});
	}, []);

	useEffect(() => {
		onAuthStateChanged(auth, (user) => {
			if (user) {
				if (localSave) {
					const userId = user.uid;
					saveData(userId);
				} else return;
			} else return;
		});
	}, [movieData]);

	return (
		<div className="watchlist">
			<h1>Watch list</h1>
			<ul className="watchlist-movies">
				{ movieData.length > 0 ? (movieData.map((movie) => (
					<li key={movie.id} className="watchlist-movie">
						<img
							src={
								movie.poster_path
									? 'https://image.tmdb.org/t/p/w500' +
									  movie.poster_path
									: './src/assets/notfound.png'
							}
							alt={movie.title}
							height={'200px'}
						/>
						<div className="watchlist-movie-info">
							<p className="movie-title">
								{movie && movie.title.toUpperCase()}
							</p>
							<div className="text-section">
								<p className="blue">Release date:</p>
								<p className="big white">
									{movie && movie.release_date
										? formatDate(movie.release_date)
										: 'Ask chatGPT :('}
								</p>
							</div>
							<div className="text-section">
								<p className="blue">Popularity:</p>
								<p className="big white">
									{movie &&
										Math.floor(movie.popularity) + ' %'}
								</p>
							</div>
						</div>
						{checkIfFavorite(movie) ? (
							<svg
								xmlns="http://www.w3.org/2000/svg"
								width="25"
								height="25"
								fill="currentColor"
								viewBox="0 0 16 16"
								className="bi bi-star-fill star full"
								onClick={() => removeFromWatchList(movie)}
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
								onClick={() => addToWatchList(movie)}
							>
								<path d="M2.866 14.85c-.078.444.36.791.746.593l4.39-2.256 4.389 2.256c.386.198.824-.149.746-.592l-.83-4.73 3.522-3.356c.33-.314.16-.888-.282-.95l-4.898-.696L8.465.792a.513.513 0 0 0-.927 0L5.354 5.12l-4.898.696c-.441.062-.612.636-.283.95l3.523 3.356-.83 4.73zm4.905-2.767-3.686 1.894.694-3.957a.565.565 0 0 0-.163-.505L1.71 6.745l4.052-.576a.525.525 0 0 0 .393-.288L8 2.223l1.847 3.658a.525.525 0 0 0 .393.288l4.052.575-2.906 2.77a.565.565 0 0 0-.163.506l.694 3.957-3.686-1.894a.503.503 0 0 0-.461 0z" />
							</svg>
						)}
					</li>
				))) : (<p className='no-movies'> No movies to watch :/ </p>)}
			</ul>
		</div>
	);
}
