import React, { useEffect, useState } from 'react'
import './styles/mainContent.css'

export default function MainContent() {

  const [searchInput, setSearchInput] = useState('');
  const [request, setRequest] = useState('Iron man 3')
  const [movie, setMovie] = useState('');

  useEffect(() => {
    const apiKey = '67e2da4e137cc7ee4732edd315ed8cab';

	  fetch(`https://api.themoviedb.org/3/search/movie?api_key=${apiKey}&query='transcendance'`)
		.then((response) => response.json())
		.then((data) => {
			setMovie(data.results[0]);
		})
		.catch((error) => console.log(error));
  }, []);

  function handleSubmit(e) {
    e.preventDefault();
    fetchData();
  }

  function fetchData() {
    const apiKey = '67e2da4e137cc7ee4732edd315ed8cab';

	  fetch(`https://api.themoviedb.org/3/search/movie?api_key=${apiKey}&query=${searchInput}`)
		.then((response) => response.json())
		.then((data) => {
      data.results[0] ? setMovie(data.results[0]) : console.log('Not found.')
    })
		.catch((error) => console.log(error));
  }



  return (
		<div className="main">
			<form className="search-section" onSubmit={handleSubmit}>
				<input
					type="search"
					className="search"
					value={searchInput}
					onChange={(e) => setSearchInput(e.target.value)}
					placeholder="Name of the movie..."
				/>
				<button
					type="submit"
					className="submit-search"
					onClick={fetchData}
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
			<div className="info-section">
				<img
					className="movie-photo"
					src={
						movie.poster_path ? 'https://image.tmdb.org/t/p/w500' + movie.poster_path : './src/assets/notfound.png'
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
							{movie && movie.release_date
								? movie.release_date.replace(/-/g, '/')
								: 'Not found :('}
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
		</div>
  );
}
