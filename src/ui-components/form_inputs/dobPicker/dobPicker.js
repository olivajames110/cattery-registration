import React, { div, useState, useEffect } from 'react';
import DropDownInput from '../dropDown/dropDown';
import './dobPicker.css';

const DobPicker = (props) => {
	const [ labelIsActive, setLabelIsActive ] = useState(false);
	const activeLabel = {
		bottom: '30px',
		color: '#1A62D5',
		fontWeight: 900
	};

	let months = [
		'January',
		'February',
		'March',
		'April',
		'May',
		'June',
		'July',
		'August',
		'September',
		'October',
		'November',
		'December'
	];

	const nonActiveLabel = {
		bottom: '13px'
		// left   : '5px'
	};
	return (
		<div className="grid__3-col">
			<DropDownInput
				onChange={props.updateUser}
				id="dob_month"
				label="Month"
				defaultValue="- Month -"
				nameList={months}
			/>
			<DropDownInput
				onChange={props.updateUser}
				id="dob_day"
				label="Day"
				defaultValue="- Day -"
				startValue="1"
				endValue="31"
			/>
			<DropDownInput
				onChange={props.updateUser}
				id="dob_year"
				label="Year"
				defaultValue="- Year -"
				startValue="1920"
				endValue="2020"
				reverseOrder={true}
				size="10"
			/>
		</div>
	);
};

export default DobPicker;
