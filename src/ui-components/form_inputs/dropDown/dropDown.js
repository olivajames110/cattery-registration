import React from 'react';
// import "./radio.css";
import '../sharedInputsCss/sharedInputs.css';

const DropDownInput = ({ id, label, className, startValue, endValue, defaultValue, reverseOrder, size, onChange }) => {
	let numOfIterations = Math.abs(startValue - endValue);
	let options = Array.from(Array(numOfIterations)).map((x, i) => (
		<option value={i}> {reverseOrder === true ? Number(endValue) - i : Number(startValue) + i} </option>
	));

	return (
		<div className={`input-container ${className}`}>
			
			<select onChange={onChange} id={`${id}`} name={`${id}`}>
				<option value="default-value" disabled selected>
					{defaultValue}
				</option>
				{options}
			</select>
			<label htmlFor={`${id}`} className={`input-label ${className}`}>
				{`${label}`}
			</label>
		</div>
	);
};

export default DropDownInput;
