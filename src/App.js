import React, { Fragment, useState, useEffect } from 'react';
import TextFieldInput from './ui-components/form_inputs/textField/textField';
import AddUserScreen from './components/screens/addUser/addUser';
import AllUsersScreen from './components/screens/allUsers/allUsers';
import AppSwitcher from './components/appSwitcher/appSwitcher';
import './App.css';

function App() {
	let [ screen, setScreen ] = useState('for');

	return (
		<div className="App">
			<header className="app-header" />

			<div className="app-switcher-container">
				<div onClick={() => setScreen('form')} id="app-switcher_form" className="app-switcher-wrapper">
					Form
				</div>
				<div
					onClick={() => setScreen('all-users')}
					id="app-switcher_all-users"
					className="app-switcher-wrapper"
				>
					View All Users
				</div>
			</div>
			{screen === 'form' ? <AddUserScreen /> : <AllUsersScreen />}
		</div>
	);
}

export default App;
