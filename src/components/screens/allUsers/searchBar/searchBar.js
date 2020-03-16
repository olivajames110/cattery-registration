import React, { Fragment, useState, useEffect } from 'react';
import './searchBar.css';

const SearchBar = (props) => {
	// const [ isViewingUser, setIsViewingUser ] = useState(false);

	return (
		<div className="search-bar-container">
			<span>search bar</span>

			<input onChange={(e) => props.searchUser(e.target.value)} />
		</div>
	);
};

export default SearchBar;
