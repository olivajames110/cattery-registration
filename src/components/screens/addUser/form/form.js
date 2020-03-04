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
	let userD = {
		firstName : 't',
		lastName  : 't',
		dataUrl   : 'tr',
		dob_year  : 't',
		dob_month : 't',
		dob_day   : 't',
		email     : 't'
	};
	let [ user, setUser ] = useState(userD);
	// let [ firstName, setFirstName ] = useState('');
	// let [ lastName, setLastName ] = useState('');
	// const [ dob_year, setDob_year ] = useState('');
	// const [ dob_month, setDob_month ] = useState('');
	// const [ dob_day, setDob_day ] = useState('');
	// const [ email, setEmail ] = useState('');
	const [ dataUrl, setDataUrl ] = useState('');
	// const user = {
	// 	name : 'sample',
	// 	price  : 1
	// };

	let ENDPOINT = 'http://localhost:5000/add-user';
	// const ENDPOINT = 'localhost:5000/add-user';

	const handleSubmit = async (e) => {
		e.preventDefault();
		// let user = {
		// 	firstName : firstName,
		// 	lastName  : lastName,
		// 	dataUrl   : dataUrl,
		// 	dob_year  : dob_year,
		// 	dob_month : dob_month,
		// 	dob_day   : dob_day,
		// 	email     : email
		// };
		console.log(user);
		axios.post(ENDPOINT, user).then((res) => {
			const newPerson = res.data;
			console.log(newPerson);
		});

		setUser({
			firstName : '',
			lastName  : '',
			dataUrl   : '',
			dob_year  : '',
			dob_month : '',
			dob_day   : '',
			email     : ''
		});
		// const res = await axios.get('https://jsonplaceholder.typicode.com/users');
		// console.log(res);
	};

	let updateUser = (key, value) => {
		// let key = key;
		// let value = value;
		// setUser((prev) => ({
		// 	...prev,
		// 	[key] : value
		// }));
		let k = key;
		let v = value;
		let updatedUser = {
			...user,
			[k] : v
		};
		setUser(updatedUser);
	};

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
						// onChange={(e) =>
						// 	setUser((prev, e) => ({
						// 		...prev,
						// 		firstName : e.target.value
						// 	}))}
						// onChange={(e) => setFirstName(e.target.value)}
						onChange={(e) => updateUser('firstName', e.target.value)}
						id="first-name"
						label="First Name"
						name="first-name"
						value={user.firstName}
					/>
					<TextFieldInput
						onChange={(e) => updateUser('lastName', e.target.value)}
						id="last-name"
						label="Last Name"
						name="last-name"
						value={user.lastName}
					/>
				</div>
				<DobPicker
					setYear={(e) => updateUser('dob_year', e.target.value)}
					setMonth={(e) => updateUser('dob_month', e.target.value)}
					setDay={(e) => updateUser('dob_day', e.target.value)}
				/>
				<TextFieldInput
					onChange={(e) => updateUser('email', e.target.value)}
					id="email-address"
					label="Email Address"
					name="email-address"
					value={user.email}
				/>
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
