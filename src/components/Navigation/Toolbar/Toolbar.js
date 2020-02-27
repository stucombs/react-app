import React from 'react';

import classes from './Toolbar.css';
import Logo from '../../Logo/Logo'
import NavigationItems from '../NavigationItems/NavigationItems';
import NavigationIcon from '../NavigationItems/NavigationIcon/NavigationIcon';

const toolbar = (props) => (
	<header className={classes.Toolbar}>
		<NavigationIcon toggle={props.click} />
		<Logo height="85%" />
		<nav className={classes.DesktopOnly}>
			<NavigationItems />
		</nav>
	</header>
);

export default toolbar;