import React from 'react';
import './checkbox.css';
import '../sharedInputsCss/sharedInputs.css';

const CheckboxInput = ({ id, label, text, isChecked }) => {
	return (
		<div className="input-container checkbox-container">
			<input className="checkbox-input" type="checkbox" id={id} name={id} />
			<label className="checkbox-label" htmlFor={id}>
				{label}
			</label>
		</div>
	);
};

export default CheckboxInput;
