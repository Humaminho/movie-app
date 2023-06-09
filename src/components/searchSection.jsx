import React from 'react';
import DropDown from './dropdown';

export default function SearchSection({
	dropDownList,
	setDropDownList,
	searchInput,
	setSearchInput,
	setRequest,
	handleRequest,
	handleChange,
	request,
}) {
  
	function handleSubmit(e) {
		e.preventDefault();
		setRequest(searchInput);
		handleRequest();
		setDropDownList([]);
	}

	return (
		<form className="search-section" onSubmit={handleSubmit}>
			<input
				type="search"
				className="search"
				value={request}
				onClick={handleChange}
				onChange={handleChange}
				onBlur={() => setTimeout(() => setDropDownList([]), 100)}
				placeholder="Name of the movie..."
			/>

			<DropDown
				dropDownList={dropDownList}
				setDropDownList={setDropDownList}
				searchInput={searchInput}
				setSearchInput={setSearchInput}
				setRequest={setRequest}
				handleRequest={handleRequest}
        handleSubmit={handleSubmit}
			/>

			<button type="submit" className="submit" onClick={handleRequest}>
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
	);
}
