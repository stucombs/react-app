import React from 'react';

import classes from './Input.css';

const input = (props) => {
	let inputElement = null;
	console.log(props.elementType);
	switch(props.elementType){
		case ('input'):
			inputElement = <input className={classes['input-element']} {...props.elementConfig} value={props.value} />;
		break;
		case ('textarea'):
			inputElement = <textarea className={classes['input-element']} {...props.elementConfig} value={props.value} />;
		break;
		case('select'):
			inputElement = (
				<select className={classes['input-element']} value={props.value}>
					{props.elementConfig.options.map(option => (
						<option key={option.value} value={option.value}>{option.display}</option>
					))}
				</select>
			);
		break;
		default:
			inputElement = <input className={classes['input-element']} {...props.elementConfig} value={props.value} />;
	}

	return(
		<div className={classes.input} >
			<label className={classes.label} >{props.label}</label>{inputElement}
		</div>
	);
};

export default input;