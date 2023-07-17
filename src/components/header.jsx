import { useContext } from 'react';
import { Link } from 'react-router-dom';
import ProfileBtn from './profile-btn';
import '../styles/header.css';
import LogoutBtn from './auth/logout-btn';
import { userContext } from '../utils/contexts';

export default function Navbar() {
	const [user, setUser] = useContext(userContext);

	return (
		<nav className="navbar">
			<Link to="/" className="logo">
				BLUEVIES
			</Link>
			{user ? (
				<div className="auth-links">
					<LogoutBtn />
					<ProfileBtn />
				</div>
			) : (
				<div className="auth-links">
					<Link to="/sign-in" className="btn">
						Sign in
					</Link>
					<Link to="/sign-up" className="no-fill-btn">
						Register
					</Link>
				</div>
			)}
		</nav>
	);
}
