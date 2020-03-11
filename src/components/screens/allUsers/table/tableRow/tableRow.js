import React, { Fragment, useState, useEffect } from 'react';
// import './tableRow.css';

const TableRow = (props) => {
	return (
		<div key={props.user.name} className="table-row-wrapper">
			<span class="table-item-cell" id="name">
				<span id="first-name"> {props.user.firstName}</span>
				<span id="first-name"> {props.user._id}</span>
				<ul>
					<li>{props.user.visitType}</li>
				</ul>
			</span>
			<span class="table-item-cell" id="number-of-minors">
				<img src={props.user.dataUrl} width="80px" height="30" />
			</span>
			<span class="table-item-cell" id="date-signed">
				d
			</span>
			<span class="table-item-cell" id="waiver-type">
				Cattery
			</span>
			<div className="btns">
				<span
					style={{ margin: '0 10px' }}
					onClick={() => props.deleteUser(props.user._id)}
					class="table-item-cell"
					id="pdf"
				>
					Delete
				</span>
				<span onClick={() => props.viewUser(props.user._id)} class="table-item-cell" id="pdf">
					View
				</span>
			</div>
		</div>
	);
};

export default TableRow;
