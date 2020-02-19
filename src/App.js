import React from 'react';
import TextFieldInput from './ui-components/form_inputs/textField/textField';
import AddGuestScreen from './components/screens/addGuest/addGuest';
import './App.css';

function App() {
	return (
		<div className="App">
			<header className="app-header" />
			<div className="form">Form From Work</div>
			<AddGuestScreen />
		</div>
	);
}

export default App;
