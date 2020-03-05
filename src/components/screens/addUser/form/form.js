import React, { Fragment, useState, useEffect } from 'react';
import axios from 'axios';
import TextFieldInput from '../../../../ui-components/form_inputs/textField/textField';
import DropDownInput from '../../../../ui-components/form_inputs/dropDown/dropDown';
import TextAreaInput from '../../../../ui-components/form_inputs/textArea/textArea';
import CheckboxInput from '../../../../ui-components/form_inputs/checkbox/checkbox';
import DobPicker from '../../../../ui-components/form_inputs/dobPicker/dobPicker';
import ElectronicSignature from '../../../../ui-components/signature/signature';
import Minor from './minor/minor';
import Disclaimer from './disclaimer/disclaimer';
import './form.css';

const AddUserscreen = (props) => {
	let userD = {
		firstName : '',
		lastName  : '',
		dataUrl   : '',
		dob_year  : '',
		dob_month : '',
		dob_day   : '',
		email     : ''
	};
	let [ user, setUser ] = useState(userD);
	let [ hasMinors, setHasMinors ] = useState(false);
	// let [ lastName, setLastName ] = useState('');
	// const [ dob_year, setDob_year ] = useState('');
	// const [ dob_month, setDob_month ] = useState('');
	// const [ dob_day, setDob_day ] = useState('');
	// const [ email, setEmail ] = useState('');
	const [ dataUrl, setDataUrl ] = useState('');

	let ENDPOINT = 'http://localhost:5000/add-user';

	const handleSubmit = async (e) => {
		e.preventDefault();
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
	};

	let updateUser = (key, value) => {
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

	let addMinor = () => {};

	let minorContainer = (
		<div className="form-section">
			<h3 className="form-section-title">Minors</h3>
			<Minor onChange={updateUser} />

			<div className="add-minor-container">
				<div className="add-minor-btn">Add Additional Minor +</div>
			</div>
		</div>
	);

	return (
		<div className="add-user-container">
			<form>
				<div className="form-section">
					<h3 className="form-section-title">Visit Type</h3>
					<div className="row-space-between">
						<CheckboxInput
							onClick={(e) => setHasMinors(false)}
							id="email-consent"
							name="main-info"
							type="radio"
							label="Adult"
							value="valueName"
						/>{' '}
						<CheckboxInput
							onClick={(e) => setHasMinors(true)}
							id="email-consent2"
							name="main-info"
							type="radio"
							label="Adult With Minor"
							value="valueName"
						/>{' '}
						<CheckboxInput
							onClick={(e) => setHasMinors(false)}
							id="email-consent3"
							name="main-info"
							type="radio"
							label="Volunteer"
							value="valueName"
						/>
					</div>
				</div>
				{hasMinors ? minorContainer : ''}
				<div className="form-section">
					<h3 className="form-section-title">Your Information</h3>
					<div className="name-container">
						<TextFieldInput
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
				</div>
				<div className="form-section">
					<h3 className="form-section-title">Disclaimer</h3>
					<Disclaimer />
				</div>

				<div className="form-section">
					<h3 className="form-section-title">Electronic Signature</h3>
					<ElectronicSignature updateUrl={updateUrl} />
				</div>
			</form>
			<button onClick={handleSubmit} className="submit-btn">
				Submit
			</button>
		</div>
	);
};

export default AddUserscreen;
