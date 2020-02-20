import React, { Fragment, useState, useEffect } from 'react';
import './table.css';

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

	let tableRow = (user) => {
		return (
			<div key={user.name} className="table-row-wrapper">
				<span class="table-item-cell" id="name">
					{user.name}
				</span>
				<span class="table-item-cell" id="number-of-minors">
					3
				</span>
				<span class="table-item-cell" id="date-signed">
					12/20/20
				</span>
				<span class="table-item-cell" id="waiver-type">
					Cattery
				</span>
				<span class="table-item-cell" id="pdf">
					View PDF
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
