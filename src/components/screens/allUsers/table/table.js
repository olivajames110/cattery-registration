import React, { Fragment, useState, useEffect } from 'react';
import './table.css';
import TableRow from './tableRow/tableRow';

const Table = (props) => {
	const [ isViewingUser, setIsViewingUser ] = useState(false);

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
		return (
			<div className="recent-user">
				<div className="row-container">
					<div className="user-row">
						<span className="primary">Name:</span> {props.currentUser.firstName}{' '}
						{props.currentUser.lastName}
					</div>
					<div className="user-row">
						<span className="primary">Visit Type:</span> {props.currentUser.visitType}
					</div>
					<div className="user-row">
						<span className="primary"> Date of Birth: </span>
						{props.currentUser.dob_month} / {props.currentUser.dob_day} / {props.currentUser.dob_year}
					</div>
					<div className="user-row">
						<span className="primary">Email Address:</span>
						{props.currentUser.email}
					</div>
				</div>
				<img src={props.currentUser.dataUrl} alt="" srcset="" />
			</div>
		);
	};

	return (
		<div className="table-container">
			{recentUser()}
			{tableHeader}
			{props.users.length > 1 ? (
				props.users.map((user) => (
					<TableRow viewUser={props.viewUser} deleteUser={props.deleteUser} user={user} />
				))
			) : (
				<TableRow viewUser={props.viewUser} deleteUser={props.deleteUser} user={props.users} />
			)}
		</div>
	);
};

export default Table;
