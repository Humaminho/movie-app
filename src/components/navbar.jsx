import React from 'react';
import './styles/navbar.css';

export default function Navbar() {
  return (
		<nav className="navbar">
			<a href="https://chillandnetflix.netlify.app/" className="logo">
				Netflix zr9a
			</a>
			<div className='log'>
        <button className="login">Login</button>
        <button className="signup">Sign-up</button>
      </div>
		</nav>
  );
}
