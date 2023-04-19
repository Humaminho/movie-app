import React from 'react'
import './styles/dropdown.css'

export default function DropDown({list, input, setInput, setRequest, handleRequest, setList}) {

  return (
		<div className="dropdown">
			{list !== [] &&
				list
					.filter((item) => {
						const searchTerm = input.toLowerCase();
						const req = item.title.toLowerCase();
						return (
							req.startsWith(searchTerm) &&
							input !== '' &&
							searchTerm !== req
						);
					})
					.map((item) => {
						return (
							<li
								key={crypto.randomUUID()}
                className='drop-down-item'
								onClick={() => {
									setRequest(item.title);
									setInput(item.title);
									handleRequest();
                  setList([]);
								}}
							>
								{item.title}
							</li>
						);
					})}
		</div>
  );
}
