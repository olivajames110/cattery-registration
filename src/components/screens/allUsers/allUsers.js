import React, { Fragment, useState, useEffect } from 'react';
import axios from 'axios';
import Table from './table/table';

const AllUsersScreen = (props) => {
	let [ users, setUsers ] = useState([]);

	const getUsers = async () => {
		// e.preventDefault();
		const res = await axios.get('https://jsonplaceholder.typicode.com/users');
		console.dir(res.data);
		setUsers(res.data);
	};

	useEffect(() => {
		getUsers();
	}, []);

	return (
		<div className="all-users-container">
			<h1>All Users</h1>
			<Table users={users} />
		</div>
	);
};

export default AllUsersScreen;
