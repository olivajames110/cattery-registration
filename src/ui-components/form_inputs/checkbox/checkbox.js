import React from 'react';
import './checkbox.css';
import '../sharedInputsCss/sharedInputs.css';

const CheckboxInput = ({ id, label, type, text, name, isChecked, onClick }) => {
	return (
		<div onClick={onClick} className="input-container checkbox-container">
			<label className="checkbox-label" htmlFor={id}>
				<input className="checkbox-input" type={type} id={id} name={name} />
				<span className="checkmark" />
				{label}
			</label>
		</div>
	);
};

export default CheckboxInput;
