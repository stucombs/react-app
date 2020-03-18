import React from 'react';

import classes from './CounterOutput.css';

const counterOutput = (props) => (
	<div className={classes["counter-output"]}>
		Current Counter: {props.value}
	</div>
);

export default counterOutput;