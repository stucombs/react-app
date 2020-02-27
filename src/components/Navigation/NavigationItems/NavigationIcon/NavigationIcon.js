import React from 'react';

import classes from './NavigationIcon.css';
const navigationIcon = (props) => (
	<div onClick={props.toggle}>
		<div className={classes.NavigationIcon}></div>
		<div className={classes.NavigationIcon}></div>
		<div className={classes.NavigationIcon}></div>
	</div>
);

export default navigationIcon;