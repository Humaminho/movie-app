import React from 'react';
import './styles/navbar.css';
import { Link } from 'react-router-dom';

export default function Navbar() {
	return (
		<nav className="navbar">
			<Link to="/" className="logo">
				BLUEVIES
			</Link>
		</nav>
	);
}
