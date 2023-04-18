import React, { useEffect, useState } from 'react'
import './styles/mainContent.css'

export default function MainContent() {

  const [searchInput, setSearchInput] = useState('');
  const [request, setRequest] = useState('Iron man 3')
  const [movie, setMovie] = useState('');

  useEffect(() => {
    const apiKey = '67e2da4e137cc7ee4732edd315ed8cab';

	  fetch(`https://api.themoviedb.org/3/search/movie?api_key=${apiKey}&query='Iron man 3'`)
		.then((response) => response.json())
		.then((data) => {
			setMovie(data.results[0]);
			console.log(data.results[0]);
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
      setMovie(data.results[0]);
      console.log(data.results[0]);
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
					Look
				</button>
			</form>
			<div className="info-section">
				<img
					className="movie-photo"
					src={"https://image.tmdb.org/t/p/w500"+movie.poster_path}
					alt="dragon"
					height="400px"
					width="250px"
				/>
				<div className="movie-info">
					<p>{movie.original_title}</p>
					<p>{movie.overview}</p>
					<p>{movie.original_title}</p>
					<p>{movie.original_title}</p>
					<p>{movie.original_title}</p>
					<p>{movie.original_title}</p>
				</div>
			</div>
		</div>
  );
}
