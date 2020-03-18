import React from 'react';

import classes from './CounterControl.css';

const counterControl = (props) => (
	<div className={classes['counter-control']} onClick={props.clicked}>
		{props.label}
	</div>
);

export default counterControl;