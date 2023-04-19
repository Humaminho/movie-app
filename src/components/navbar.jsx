import React from 'react';
import './styles/navbar.css';

export default function Navbar() {
  return (
		<nav className="navbar">
			<a href="https://chillandnetflix.netlify.app/" className="logo">
				Netflix zr9a
			</a>
			<button className="login">Login</button>
		</nav>
  );
}
