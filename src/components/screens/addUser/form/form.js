import React, { Fragment, useState, useEffect } from 'react';
import axios from 'axios';
import uniqid from 'uniqid';
// let uniqid = require('uniqid');
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
	// let userD = {
	// 	id: uniqid(),
	// 	visitType: 'Adult',
	// 	minors: [
	// 		{
	// 			id: 1,
	// 			firstName: 'Ssssstring',
	// 			lastName: 'String',
	// 			dob_year: 'String',
	// 			dob_month: 'String',
	// 			dob_day: 'String'
	// 		}
	// 	],
	// 	firstName: 'String',
	// 	lastName: 'String',
	// 	dataUrl: 'String',
	// 	dob_year: 'String',
	// 	dob_month: 'String',
	// 	dob_day: 'String',
	// 	email: 'String'
	// };
	// let userD = {
	// 	firstName: '',
	// 	lastName: '',
	// 	dataUrl: '',
	// 	dob_year: '',
	// 	dob_month: '',
	// 	dob_day: '',
	// 	email: ''
	// };
	let [ user, setUser ] = useState({});

	let [ hasMinors, setHasMinors ] = useState(false);
	let [ numOfMinors, setNumOfMinors ] = useState(0);
	let [ minorList, setMinorList ] = useState(0);
	const [ dataUrl, setDataUrl ] = useState('');

	let ENDPOINT = 'http://localhost:5000/add-user';

	const handleSubmit = async (e) => {
		e.preventDefault();
		console.log('User being sent', user);
		axios.post(ENDPOINT, user).then((res) => {
			const newPerson = res.data;
			console.log(newPerson);
		});

		setUser({
			firstName: '',
			lastName: '',
			dataUrl: '',
			dob_year: '',
			dob_month: '',
			dob_day: '',
			email: ''
		});
	};

	let updateUser = (key, value) => {
		let k = key;
		let v = value;
		let updatedUser = {
			...user,
			[k]: v
		};
		setUser(updatedUser);
	};

	let updateUrl = (url) => {
		// e.preventDefault();
		setDataUrl(url);
		console.log('update url');
	};

	let updateNumOfMinors = () => {};

	useEffect(
		(updateUser) => {
			let num = Number(numOfMinors) < 1 ? 0 : Number(numOfMinors);
			let minors = Array.from(Array(num)).map((x, i) => {
				console.log(i, x);
				return <Minor circleNum={Number(i) + 1} updateUser={updateUser} />;
			});

			setMinorList(minors);
			// updateUser('visitType', 'cat visit');
		},
		[ numOfMinors ]
	);

	let updateVisitType = (bool, value) => {
		setHasMinors(bool);
		updateUser('visitType', value);
	};

	let minorContainer = (
		<div className="form-section">
			<h3 className="form-section-title">Minors</h3>

			{minorList}
		</div>
	);

	return (
		<div className="add-user-container">
			<form>
				<div className="form-section">
					<h3 className="form-section-title">Visit Type</h3>
					<div className="visit-type-input-container">
						<CheckboxInput
							onClick={(e) => updateVisitType(false, 'volunteer')}
							id="email-consent3"
							name="main-info"
							type="radio"
							label="Volunteer"
							value="valueName"
						/>
						<CheckboxInput
							onClick={(e) => updateVisitType(false, 'adult')}
							id="email-consent"
							name="main-info"
							type="radio"
							label="Cattery Entry"
							value="valueName"
						/>{' '}
						<CheckboxInput
							onClick={(e) => updateVisitType(true, 'adultWithMinors')}
							id="email-consent2"
							name="main-info"
							type="radio"
							label="Cattery Entry With Minor(s)"
							value="valueName"
						/>
						{hasMinors ? (
							<DropDownInput
								onChange={(e) => setNumOfMinors(e.target.value)}
								id="num-of-minors"
								label="Number of Minors"
								defaultValue="- Number of Minors -"
								startValue="1"
								endValue="14"
							/>
						) : (
							''
						)}
					</div>
				</div>
				{numOfMinors >= 1 && hasMinors ? minorContainer : ''}

				<div className="form-section">
					<h3 className="form-section-title">{!hasMinors ? 'Name' : 'Parent/Guardian'}</h3>
					<div className="grid__2-col">
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
					<TextFieldInput
						onChange={(e) => updateUser('email', e.target.value)}
						id="email-address"
						label="Email Address"
						name="email-address"
						value={user.email}
					/>
				</div>
				<div className="form-section">
					<h3 className="form-section-title">Birthday</h3>
					<DobPicker updateUser={updateUser} />
				</div>

				<div className="form-section">
					<h3 className="form-section-title">Waiver, Release, Hold Harmless And Indemnification Agreement</h3>
					<Disclaimer />
				</div>

				<div className="form-section">
					<h3 className="form-section-title">Electronic Signature</h3>
					<ElectronicSignature updateUser={updateUser} />
				</div>
			</form>
			<button onClick={handleSubmit} className="submit-btn">
				Submit
			</button>
		</div>
	);
};

export default AddUserscreen;

// const FormSection = (props) => {
// 	return (
// 		<div className="form-section">
// 			<h3 className="form-section-title">Name</h3>
// 		</div>
// 	);
// };
