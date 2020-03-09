import React, { useState, useEffect } from 'react';
// import "./radio.css";
// import '../sharedInputsCss/sharedInputs.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown } from '@fortawesome/free-solid-svg-icons';
// import { KeyboardArrowDown } from '@material-ui/icons';

import './dropDown.css';

const DropDownInput = ({ id, label, className, startValue, endValue, defaultValue, reverseOrder, size, onChange }) => {
	const [ labelIsActive, setLabelIsActive ] = useState(false);

	let numOfIterations = Math.abs(startValue - endValue);
	let options = Array.from(Array(numOfIterations)).map((x, i) => (
		<option value={i + 1}> {reverseOrder === true ? Number(endValue) - i : Number(startValue) + i} </option>
	));

	const activeLabel = {
		bottom     : '30px',
		color      : '#1a62d5',
		fontWeight : 900
	};

	const nonActiveLabel = {
		bottom : '13px'
		// left   : '5px'
	};

	return (
		<div className={`input-container dropdown-input ${className}`}>
			<select
				onChange={(e) => {
					onChange(e);
					setLabelIsActive(true);
				}}
				id={`${id}`}
				name={`${id}`}
			>
				<option style={{ display: 'none' }} disabled selected />
				{options}
			</select>

			<span style={labelIsActive ? activeLabel : nonActiveLabel} className="dropdown-label">
				{' '}
				{`${label}`}
			</span>
			<div className="arrow-icon">
				<FontAwesomeIcon icon={faChevronDown} size="xs" />
			</div>
			<div className="input-fill" />
		</div>
	);
};

export default DropDownInput;

// <label htmlFor={`${id}`} className={`input-label ${className}`}>
// {`${label}`}
// </label>
