import React from 'react';
import './textField.css';
import '../sharedInputsCss/sharedInputs.css';

const TextFieldInput = ({ label, id, style, onChange, className, value }) => {
	return (
		<div className="input-container">
			<label htmlFor={id}>{label}</label>
			<input onChange={onChange} style={style} id={id} className={className} type="text" value={value} />
		</div>
	);
};

export default TextFieldInput;
