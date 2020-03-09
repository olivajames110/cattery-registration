import React from 'react';
import './minor.css';

import TextFieldInput from '../../../../../ui-components/form_inputs/textField/textField';
import DobPicker from '../../../../../ui-components/form_inputs/dobPicker/dobPicker';

const Minor = ({ onChange, circleNum }) => {
	return (
		<div className="minor-wrapper">
			<div className="num-circle">{circleNum}</div>
			<div className="sub-section_minor-row">
				<div className="sub-section_name-container ">
					<h4 className="sub-section_header">Minor's Information</h4>
					<div className="grid__2-col">
						<TextFieldInput
							onChange={(e) => onChange('firstName', e.target.value)}
							id="first-name"
							label="First Name"
							name="first-name"
							// value="{user.firstName}"
						/>
						<TextFieldInput
							onChange={(e) => onChange('lastName', e.target.value)}
							id="last-name"
							label="Last Name"
							name="last-name"
							// value="{user.lastName}"
						/>
					</div>
				</div>

				<div className="sub-section_birthday-container">
					<h4 className="sub-section_header">Birthday</h4>
					<DobPicker
						setYear={(e) => onChange('dob_year', e.target.value)}
						setMonth={(e) => onChange('dob_month', e.target.value)}
						setDay={(e) => onChange('dob_day', e.target.value)}
					/>
				</div>
			</div>
		</div>
	);
};

export default Minor;
