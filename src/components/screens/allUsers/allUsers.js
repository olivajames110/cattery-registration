import React, { Fragment, useState, useEffect } from 'react';
import axios from 'axios';
import Table from './table/table';

const AllUsersScreen = (props) => {
	let [ users, setUsers ] = useState([]);

	const getUsers = async () => {
		// e.preventDefault();
		const res = await axios.get('http://localhost:5000/all-users');
		console.dir(res.data);
		setUsers(res.data);
	};

	const deleteUser = async (id) => {
		// e.preventDefault();
		console.dir(id);
		// axios.delete(`http://localhost:5000/delete-user`, { id });
		// setUsers(res.data);
	};

	useEffect(() => {
		getUsers();
	}, []);

	return (
		<div className="all-users-container">
			<h1>All Users</h1>
			<Table deleteUser={deleteUser} users={users} />
		</div>
	);
};

export default AllUsersScreen;
