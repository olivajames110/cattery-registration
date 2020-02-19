import React, { Fragment, useState, useEffect } from 'react';
import './appSwitcher.css';

const AppSwitcher = (props) => {
	return (
		<div className="app-switcher-container">
			<div id="app-switcher_form" className="app-switcher-wrapper">
				Form
			</div>
			<div id="app-switcher_all-users" className="app-switcher-wrapper">
				View All Users
			</div>
		</div>
	);
};

export default AppSwitcher;
