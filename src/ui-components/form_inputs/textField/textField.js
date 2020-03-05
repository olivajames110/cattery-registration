import React from 'react';
import './textField.css';
import '../sharedInputsCss/sharedInputs.css';

const TextFieldInput = ({ label, id, style, onChange, className, value }) => {
	return (
		<div className="input-container">
			<input onChange={onChange} style={style} id={id} placeholder={label} className={className} autocomplete="off" type="text" value={value} />
			<label className='input-label' htmlFor={id}>{label}</label>
		</div>
	);
};

export default TextFieldInput;
