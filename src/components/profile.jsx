'use client';
import {React, useContext, useEffect} from 'react';
import userContext from '../contexts/user-context';
import favoritesContext from '../contexts/favorites-context';

const Profile = () => {

  const [user, setUser] = useContext(userContext);
  const [favorites, setFavorites] = useContext(favoritesContext);

  console.log(user.uid);

	return (
		<>
			<nav>
				<p>Welcome </p>

				<div>

				</div>
			</nav>
		</>
	);
};

export default Profile;
