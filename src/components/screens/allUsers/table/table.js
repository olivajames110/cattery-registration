import React, { Fragment, useState, useEffect } from 'react';
import './table.css';
import TableRow from './tableRow/tableRow';

const Table = (props) => {
	let tableHeader = (
		<div className="table-row-header">
			<span class="table-item-cell" id="name">
				Name
			</span>
			<span class="table-item-cell" id="number-of-minors">
				Minors
			</span>
			<span class="table-item-cell" id="date-signed">
				Date Signed
			</span>
			<span class="table-item-cell" id="waiver-type">
				Waiver Type
			</span>
			<span class="table-item-cell" id="pdf">
				PDF
			</span>
		</div>
	);

	let recentUser = () => {
		let user = props.users[props.users.length - 1];
		console.log('users: ', user);
		return (
			<div className="recent-user">
				<span>First Name: </span>
			</div>
		);
	};

	return (
		<div className="table-container">
			{recentUser()}
			{tableHeader}
			{props.users.map((user) => (
				<TableRow viewUser={props.viewUser} deleteUser={props.deleteUser} user={user} />
			))}
		</div>
	);
};

export default Table;
