import React, { Fragment, useState, useEffect } from 'react';
import axios from 'axios';
// import TextFieldInput from '../../../../ui-components/form_inputs/textField/textField';
// import DropDownInput from '../../../../ui-components/form_inputs/dropDown/dropDown';
// import TextAreaInput from '../../../../ui-components/form_inputs/textArea/textArea';
// import CheckboxInput from '../../../../ui-components/form_inputs/checkbox/checkbox';
// import "./form.css";

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
				<label>
					Frirst Name:
					<input type="text" value="{name}" />
				</label>
				<input type="submit" value="Submit" />
			</form>
		</div>
	);
};

export default AddUserscreen;

// <TextFieldInput className="input-container" id="name" label="Party Name:" type="text" />
// <DropDownInput className="input-container" id="name" label="Party Name:" type="text" />
// <TextAreaInput className="input-container" id="name" label="Party Name:" type="text" />
// <CheckboxInput className="input-container" id="name" label="Party Name:" type="text" />
