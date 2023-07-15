import { useContext } from 'react';
import '../styles/header.css';
import { Link } from 'react-router-dom';
import LogoutBtn from './auth/logout-btn';
import userContext from '../contexts/user-context';

export default function Navbar() {
	const [user, setUser] = useContext(userContext);

	return (
		<nav className="navbar">
			<Link to="/" className="logo">
				BLUEVIES
			</Link>
			{user ? (
				<LogoutBtn />
			) : (
				<div className="auth-links">
					<Link to="/sign-in" className="btn">
						Sign in
					</Link>
					<Link to="/sign-up" className="btn">
						Sign up
					</Link>
				</div>
			)}
		</nav>
	);
}
