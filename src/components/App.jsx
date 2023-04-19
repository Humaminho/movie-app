import React, { useState, useRef, useEffect } from 'react';
import './styles/App.css';
import Navbar from './navbar';
import MainContent from './mainContent';

export default function App() {

  const [background, setBackground] = useState(
		'https://image.tmdb.org/t/p/w1280/l8ubUlfzlB5R2j9cJ3CN7tj0gmd.jpg'
  );

  const [layer, setLayer] = useState("layer");

	return (
		<div
			className="app"
			style={{
				backgroundImage: `url(${background})`,
			}}
		>
      <div className={layer}></div>
			<Navbar></Navbar>
			<MainContent
				setBackground={setBackground}
				background={background}
        setLayer={setLayer}
			></MainContent>
		</div>
	);
}
