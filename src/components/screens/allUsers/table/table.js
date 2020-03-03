import React, { Fragment, useState, useEffect } from 'react';
import './table.css';

const Table = (props) => {
	let date = new Date().getDay();
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

	let tableRow = (user) => {
		return (
			<div key={user.name} className="table-row-wrapper">
				<span class="table-item-cell" id="name">
					<span id="first-name"> {user.firstName}</span>
					<span id="first-name"> {user._id}</span>
				</span>
				<span class="table-item-cell" id="number-of-minors">
				  <img src={user.dataUrl} width='80px' height='30'/>
				</span>
				<span class="table-item-cell" id="date-signed">
					{date}
				</span>
				<span class="table-item-cell" id="waiver-type">
					Cattery
				</span>
				<span onClick={()=>props.deleteUser(user._id)} class="table-item-cell" id="pdf">
					Delete
				</span>
			</div>
		);
	};
	return (
		<div className="table-container">
			{tableHeader}
			{props.users.map((user) => tableRow(user))}
		</div>
	);
};

export default Table;
