import React, { useEffect, useState } from 'react'
import './styles/mainContent.css'
import InfoSection from './infoSection';
import DropDown from './dropdown';
const log = console.log;

export default function MainContent() {

  const [request, setRequest] = useState('');
  const [searchInput, setSearchInput] = useState('Iron man 3')
  const [movie, setMovie] = useState('');
  const [dropDownList, setDropDownList] = useState([]);

  useEffect(() => {
    const apiKey = '67e2da4e137cc7ee4732edd315ed8cab';

	  fetch(`https://api.themoviedb.org/3/search/movie?api_key=${apiKey}&query='transcendance'`)
		.then((response) => response.json())
		.then((data) => {
			setMovie(data.results[0]);
		})
		.catch((error) => console.log(error));
  }, []);

  function handleSubmit(e) {
    e.preventDefault();
    fetchData();
  }

  async function fetchData(req) {
    const apiKey = '67e2da4e137cc7ee4732edd315ed8cab';
    try {
      const response = await fetch(`https://api.themoviedb.org/3/search/movie?api_key=${apiKey}&query=${req}`);
      const data = await response.json();
      return data;
    } catch {
      console.log(error);
    }
  }

  async function handleRequest() {
    try {
      const data = await fetchData(request);
      data.results[0] ? setMovie(data.results[0]) : console.log('Not found.');
    } catch {
      console.log(error);
    }
  }

  async function handleChange(e) {
    setRequest(e.target.value);
    setSearchInput(e.target.value);

    try {
      const response = await fetchData(searchInput);
      setDropDownList(response.results);
      log(dropDownList)
    } catch {
      console.log('list not retreived');
    }

  }



  return (
		<div className="main">
			<form className="search-section" onSubmit={handleSubmit}>
				<input
					type="search"
					className="search"
					value={request}
					onChange={handleChange}
					placeholder="Name of the movie..."
				/>
        <div className="dropdown">
          {dropDownList !== [] && dropDownList.filter((item) => {
            const searchTerm = searchInput.toLowerCase();
            const req = item.title.toLowerCase();
            return req.startsWith(searchTerm) && searchInput !== "" && searchTerm !== req;
          }).map((item) => {
            return (
              <li key={crypto.randomUUID()} onClick={() => {
                setRequest(item.title);
                setSearchInput(item.title);
					      handleRequest();
              }}>{item.title}</li>
            )
          })}
        </div>
				<button
					type="submit"
					className="submit-search"
					onClick={handleRequest}
				>
					<svg
						xmlns="http://www.w3.org/2000/svg"
						width="20"
						height="20"
						fill="currentColor"
						className="bi bi-search"
						viewBox="0 0 16 16"
					>
						<path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z" />
					</svg>
				</button>
			</form>
			<InfoSection movie = {movie}></InfoSection>
		</div>
  );
}
