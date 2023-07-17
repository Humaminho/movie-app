import { React, useContext, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { userContext, favoritesContext, movieContext } from '../utils/contexts';
import '../styles/profile.css';
import { Link } from 'react-router-dom';

const Profile = ({setBackground}) => {
	const [user, setUser] = useContext(userContext);
	const [favorites, setFavorites] = useContext(favoritesContext);
	const [movie, setMovie] = useContext(movieContext);

	function handleClick(movie) {
    window.scrollTo(0, 0);
		setTimeout(() => {
			setMovie(movie);
      setBackground(`https://image.tmdb.org/t/p/w1280${movie.backdrop_path}`);
		}, 500);
	}

	const navigate = useNavigate();

	useEffect(() => {
		if (!user) {
			navigate('/sign-in');
		}
	}, []);

	{
		return (
			user && (
				<div className="profil-page">
					<h1>Welcome {user.email}</h1>
					<h2>Favorite Movies:</h2>
					<ul className="movie-posters">
						{favorites.map((movie) => (
							<Link
								key={movie.id}
								to="/"
								className="movie-poster-container"
								onClick={() => {
									handleClick(movie);
								}}
							>
								<div className="movie-poster-container">
									<img
										className="movie-poster"
										src={
											movie.poster_path
												? 'https://image.tmdb.org/t/p/w500' +
												  movie.poster_path
												: './src/assets/img/notfound.png'
										}
										alt={
											movie &&
											movie.title + ' poster picture'
										}
									/>
								</div>
								<p className="movie-poster-title">
									{movie.title}
								</p>
							</Link>
						))}
					</ul>
				</div>
			)
		);
	}
};

export default Profile;
