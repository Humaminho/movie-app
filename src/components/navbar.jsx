import React from 'react';
import './styles/navbar.css';

export default function Navbar() {
  return (
		<nav className="navbar">
			<a className="logo">Netflix</a>
			<button className="login">Login</button>
		</nav>
  );
}
