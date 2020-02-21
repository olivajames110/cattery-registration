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
	let [ firstName, setFirstName ] = useState('');
	let [ lastName, setLastName ] = useState('');
	const [ dataUrl, setDataUrl ] = useState('');
	const user = {
		firstName : firstName,
		lastName  : lastName,
		dataUrl   : dataUrl
	};
	let ENDPOINT = 'http://localhost:5000/add-user';
	// const ENDPOINT = 'localhost:5000/add-user';

	const handleSubmit = async (e) => {
		e.preventDefault();
		console.log(user);
		axios.post(ENDPOINT, user).then((res) => {
			const newPerson = res.data;
			console.log(newPerson);
		});
		// const res = await axios.get('https://jsonplaceholder.typicode.com/users');
		// console.log(res);
	};

	// let onInputChange = e => {
	//     setUser();
	// };
	let updateUrl = (url) => {
		// e.preventDefault();
		setDataUrl(url);
		console.log('update url');
	};

	// useEffect(() => {
	// 	handleSubmit();
	// }, []);

	return (
		<div className="add-user-container">
			<form>
				<div className="name-container">
					<TextFieldInput
						onChange={(e) => setFirstName(e.target.value)}
						id="first-name"
						label="First Name"
						name="first-name"
					/>
					<TextFieldInput
						onChange={(e) => setLastName(e.target.value)}
						id="last-name"
						label="Last Name"
						name="last-name"
					/>
				</div>
				<DobPicker />
				<TextFieldInput id="email-address" label="Email Address" name="email-address" />
				<CheckboxInput
					id="email-consent"
					label="Check to receive information, news, and discounts by e-mail."
					value="valueName"
					text="Check to receive information, news, and discounts by e-mail."
				/>
				<ElectronicSignature updateUrl={updateUrl} />
			</form>
			<button onClick={handleSubmit} className="submit-btn">
				Submit
			</button>
		</div>
	);
};

export default AddUserscreen;
