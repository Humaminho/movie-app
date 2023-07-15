import React from 'react';
import LogoutBtn from './auth/logout-btn';

const Profile = () => {
	return (
		<>
			<nav>
				<p>Welcome To your Profile page</p>

				<div>
					<LogoutBtn />
				</div>
			</nav>
		</>
	);
};

export default Profile;
