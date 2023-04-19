import React from 'react'

export default function InfoSection({movie}) {

  function formatDate(date) {
    const formated = date.split('-').reverse().join('/')
    return formated;
  }

  return (
		<div className="info-section">
			<img
				className="movie-photo"
				src={
					movie.poster_path
						? 'https://image.tmdb.org/t/p/w500' + movie.poster_path
						: './src/assets/notfound.png'
				}
				alt={movie && movie.title + ' poster picture'}
				height="480px"
				width="300px"
			/>
			<div className="movie-info">
				<p className="movie-title">
					{movie && movie.title && movie.title.toUpperCase()}
				</p>
				<div className="text-section">
					<p className="blue">Release date:</p>
					<p className="big white">
						{movie && movie.release_date ? formatDate(movie.release_date) : 'Ask chatGPT :('}
					</p>
				</div>
				<div className="text-section">
					<p className="blue">Description:</p>
					<p className="description big white">
						{movie && movie.overview}
					</p>
				</div>
				<div className="text-section">
					<p className="blue">Popularity:</p>
					<p className="big white">
						{movie && Math.floor(movie.popularity) + ' %'}
					</p>
				</div>
			</div>
		</div>
  );
}
