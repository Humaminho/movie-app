import '../styles/dropdown.css';

export default function DropDown({
	dropDownList,
	setDropDownList,
	searchInput,
	setSearchInput,
	fetchMovieResults,
	setMovie,
	setBackground,
}) {
	async function handleDropDownClickRequest(req) {
		try {
			const data = await fetchMovieResults(req);
			data[0] ? setMovie(data[0]) : console.warn('Not found.');
			const path = data[0].backdrop_path;
			// setLayer('layer on');
			setTimeout(() => {
				setBackground(`https://image.tmdb.org/t/p/w1280${path}`);
				// setLayer('layer');
			}, 500);
		} catch (error) {
			console.warn('Error: ' + error);
		}
	}

	return (
		<div className="dropdown">
			{dropDownList.length > 0 &&
				dropDownList
					.filter((item) => {
						const searchTerm = searchInput.toLowerCase();
						const req = item.title.toLowerCase();
						return (
							req.startsWith(searchTerm) &&
							searchInput !== '' &&
							searchTerm !== req
						);
					})
					.map((item) => {
						return (
							<li
								key={crypto.randomUUID()}
								className="drop-down-item"
								onClick={() => {
									setSearchInput(item.title);
									handleDropDownClickRequest(item.title);
									setDropDownList([]);
								}}
							>
								{item.title}
							</li>
						);
					})}
		</div>
	);
}
