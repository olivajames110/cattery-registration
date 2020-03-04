import React, { Fragment, useState, useEffect } from 'react';
import axios from 'axios';
import Table from './table/table';
import './allUsers.css'

const AllUsersScreen = (props) => {
	let [ users, setUsers ] = useState([]);
	let [ isLoading, setIsLoading ] = useState(false);
	let ENDPOINT = 'http://localhost:5000/delete-user';
	const getUsers = async () => {
		// e.preventDefault();
		const res = await axios.get('http://localhost:5000/all-users');
		console.dir(res.data);
		setUsers(res.data);
	};

	const deleteUser = async (id) => {
		// e.preventDefault();
		console.dir(id);
		setIsLoading(true)
		axios.post(ENDPOINT, {
			params: id
		}).then((res) => {
			const newPerson = res.data;
			console.log(newPerson);
			setUsers(res.data);
			setIsLoading(false)
		});;
	};

	useEffect(() => {
		getUsers();
	}, []);

	const loader = (
<div className="loader-container">Loading</div>
	)

	return (
		<div className="all-users-container">
			{isLoading ? loader : ''}
			<h1>All Users</h1>
			<Table deleteUser={deleteUser} users={users} />
		</div>
	);
};

export default AllUsersScreen;
