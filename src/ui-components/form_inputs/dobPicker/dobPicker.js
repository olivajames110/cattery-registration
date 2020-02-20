import React, { div, useState, useEffect } from 'react';
import DropDownInput from '../dropDown/dropDown';
import './dobPicker.css';

const DobPicker = (props) => {
	return (
		<div className="dob-picker-container">
			<DropDownInput
				id="dob-year"
				label="Year"
				defaultValue="- Select Year -"
				startValue="1920"
				endValue="2020"
				reverseOrder={true}
				size="10"
			/>
			<DropDownInput id="dob-day" label="Day" defaultValue="- Select Day -" startValue="1" endValue="31" />
			<div className="input-container">
				<label htmlFor="dob-month">
					Month
					<select id="dob-month" name="dob-month">
						<option value="default-value" disabled selected>
							- Select Month -
						</option>
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
				</label>
			</div>
		</div>
	);
};

export default DobPicker;
