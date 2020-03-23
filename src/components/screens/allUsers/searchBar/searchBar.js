import React, { Fragment, useState, useEffect, useRef } from 'react';
import './searchBar.css';

const SearchBar = (props) => {
	// const [ isViewingUser, setIsViewingUser ] = useState(false);
	const inputContainer = useRef(null);
	const handleSubmit = (e) => {
		console.log('HANDLE SUBMIT', inputContainer.current.value);
		props.searchUser(inputContainer.current.value);
	};
	return (
		<div className="search-bar-container">
			<span>search bar</span>

			<input ref={inputContainer} type="text" />
			<span onClick={() => handleSubmit()} className="search-btn">
				Search
			</span>
		</div>
	);
};

export default SearchBar;
