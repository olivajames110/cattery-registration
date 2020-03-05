import React from 'react';
import './textArea.css';
import '../sharedInputsCss/sharedInputs.css';

const TextAreaInput = ({ className, label, id }) => {
	return (
		<div className={`input-container ${className}`}>
			<label className="input-label" htmlFor={`${label}`}>
				{`${label}`}
				<textarea id={`${id}`} />
			</label>
			<div className="input-fill"></div>
		</div>
	);
};

export default TextAreaInput;
