import React, { Fragment, useState, useEffect } from 'react';
import axios from 'axios';
import TextFieldInput from '../../../../ui-components/form_inputs/textField/textField';
import DropDownInput from '../../../../ui-components/form_inputs/dropDown/dropDown';
import TextAreaInput from '../../../../ui-components/form_inputs/textArea/textArea';
import CheckboxInput from '../../../../ui-components/form_inputs/checkbox/checkbox';
import DobPicker from '../../../../ui-components/form_inputs/dobPicker/dobPicker';
import ElectronicSignature from '../../../../ui-components/signature/signature';
import './form.css';

const AddUserscreen = (props) => {
	let [ users, setUsers ] = useState([]);

	const handleSubmit = async (e) => {
		e.preventDefault();
		// console.log(e);
		const res = await axios.get('https://jsonplaceholder.typicode.com/users');
		// console.log(res);
	};
	// useEffect(() => {
	// 	handleSubmit();
	// }, []);

	return (
		<div className="add-user-container">
			<form onSubmit={handleSubmit}>
				<div className="name-container">
					<TextFieldInput id="first-name" label="First Name" name="first-name" />
					<TextFieldInput id="last-name" label="Last Name" name="last-name" />
				</div>
				<DobPicker />
				<TextFieldInput id="email-address" label="Email Address" name="email-address" />
				<CheckboxInput
					id="email-consent"
					label="Check to receive information, news, and discounts by e-mail."
					value="valueName"
					text="Check to receive information, news, and discounts by e-mail."
				/>
				<ElectronicSignature />
			</form>
		</div>
	);
};

export default AddUserscreen;
