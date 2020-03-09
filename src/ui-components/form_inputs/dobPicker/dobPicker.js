import React, { div, useState, useEffect } from 'react';
import DropDownInput from '../dropDown/dropDown';
import './dobPicker.css';

const DobPicker = (props) => {
	const [ labelIsActive, setLabelIsActive ] = useState(false);
	const activeLabel = {
		bottom     : '30px',
		color      : '#1A62D5',
		fontWeight : 900
	};

	const nonActiveLabel = {
		bottom : '13px'
		// left   : '5px'
	};
	return (
		<div className="grid__3-col">
			<div className="input-container dropdown-input">
				<select
					onChange={(e) => {
						props.updateUser('dob_month', e.target.value);
						setLabelIsActive(true);
					}}
					id="dob-month"
					name="dob-month"
				>
					<option style={{ display: 'none' }} disabled selected />
					<option value="January"> January </option>
					<option value="February"> February </option>
					<option value="March"> March </option>
					<option value="April"> April </option>
					<option value="May"> May </option>
					<option value="June"> June </option>
					<option value="July"> July </option>
					<option value="August"> August </option>
					<option value="September"> September </option>
					<option value="October"> October </option>
					<option value="November"> November </option>
					<option value="December"> December </option>
				</select>
				<span style={labelIsActive ? activeLabel : nonActiveLabel} className="dropdown-label">
					{' '}
					Month
				</span>
			</div>
			<DropDownInput
				onChange={(e) => props.updateUser('dob_day', e.target.value)}
				id="dob-day"
				label="Day"
				defaultValue="- Day -"
				startValue="1"
				endValue="31"
			/>
			<DropDownInput
				onChange={(e) => props.updateUser('dob_year', e.target.value)}
				id="dob-year"
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
