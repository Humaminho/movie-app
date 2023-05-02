import React from 'react';
import './styles/dropdown.css';

export default function DropDown({
	dropDownList,
	setDropDownList,
	searchInput,
	setSearchInput,
	setRequest,
	handleRequest,
}) {
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
									setRequest(item.title);
									setSearchInput(item.title);
									handleRequest();
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
