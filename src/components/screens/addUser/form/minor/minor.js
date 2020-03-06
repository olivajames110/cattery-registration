import React from 'react';
import './minor.css';

import TextFieldInput from '../../../../../ui-components/form_inputs/textField/textField';
import DobPicker from '../../../../../ui-components/form_inputs/dobPicker/dobPicker';

const Minor = ({ onChange }) => {
	return (
		<div className="minor-wrapper">
			<h4 className="sub-section_header">Minor's Information</h4>
			<div className="sub-section_minor-row grid__3-col">
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
				<DobPicker
					setYear={(e) => onChange('dob_year', e.target.value)}
					setMonth={(e) => onChange('dob_month', e.target.value)}
					setDay={(e) => onChange('dob_day', e.target.value)}
				/>
			</div>
		</div>
	);
};

export default Minor;
