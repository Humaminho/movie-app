import React, { useState, useRef, useEffect } from 'react';
import './styles/App.css';
import Navbar from './navbar';
import MainContent from './mainContent';
import Footer from './footer';

export default function App() {
	return (
		<div className="app">
			<Navbar></Navbar>
			<MainContent></MainContent>
			<Footer></Footer>
		</div>
	);
}
