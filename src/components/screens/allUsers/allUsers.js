import React, { Fragment, useState, useEffect } from 'react';
import axios from 'axios';
import Table from './table/table';
import SearchBar from './searchBar/searchBar';

import './allUsers.css';

const AllUsersScreen = (props) => {
	let [ users, setUsers ] = useState([]);
	let [ isLoading, setIsLoading ] = useState(false);
	let [ currentUser, setCurrentUser ] = useState({});
	let ENDPOINT = 'http://localhost:5000/delete-user';
	let ENDPOINT_GETUSER = 'http://localhost:5000/get-user?id=12345';

	const viewUser = async (id) => {
		// e.preventDefault();
		setIsLoading(true);
		console.log('iddddds: ', id);

		axios.get(`http://localhost:5000/get-user?id=${id}`).then((res) => {
			const newPerson = res.data;
			console.log('VIEW PERSON:', newPerson);
			setCurrentUser(newPerson);
			// setUsers(res.data);
			setIsLoading(false);
		});
	};

	const searchUser = (val) => {
		// e.preventDefault();
		// setIsLoading(true);
		console.log('SEARCH USER: ', val);

		axios.get(`http://localhost:5000/search-user?val=${val}`).then((res) => {
			const newPerson = res.data;
			console.log('SEARCH PERSON SUCESSSSSS:', newPerson);
			setUsers(newPerson);
			// setUsers(res.data);
			setIsLoading(false);
		});
	};

	const getUsers = async () => {
		console.log('11111');
		setIsLoading(true);
		const res = await axios.get('http://localhost:5000/all-users');
		console.dir(res.data);
		setUsers(res.data);
		setIsLoading(false);
	};

	const deleteUser = async (id) => {
		console.dir(id);
		setIsLoading(true);
		axios
			.post(ENDPOINT, {
				params: id
			})
			.then((res) => {
				const newPerson = res.data;
				console.log(newPerson);
				setUsers(res.data);
				setIsLoading(false);
			});
	};

	useEffect(() => {
		getUsers();
	}, []);

	const loader = <div className="loader-container">Loading</div>;

	return (
		<div className="all-users-container">
			{isLoading ? loader : ''}
			<SearchBar searchUser={searchUser} />
			<h1>All Users</h1>
			<Table currentUser={currentUser} viewUser={viewUser} deleteUser={deleteUser} users={users} />
		</div>
	);
};

export default AllUsersScreen;
