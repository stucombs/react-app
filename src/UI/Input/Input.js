import React from 'react';

import classes from './Input.css';

const input = (props) => {
	let inputElement = null;

	const inputClasses = [classes['input-element']];

	if(props.invalid && props.shouldValidate && props.touched){
		inputClasses.push(classes.invalid)
	}

	switch(props.elementType){
		case ('input'):
			inputElement = <input className={inputClasses.join(' ')} {...props.elementConfig} value={props.value} onChange={props.changed} />;
		break;
		case ('textarea'):
			inputElement = <textarea className={inputClasses.join(' ')} {...props.elementConfig} value={props.value} />;
		break;
		case('select'):
			inputElement = (
				<select className={inputClasses.join(' ')} value={props.value} onChange={props.changed} >
					{props.elementConfig.options.map(option => (
						<option key={option.value} value={option.value}>{option.display}</option>
					))}
				</select>
			);
		break;
		default:
			inputElement = <input className={inputClasses.join(' ')} {...props.elementConfig} value={props.value} onChange={props.changed} />;
	}

	return(
		<div className={classes.input} >
			<label className={classes.label} >{props.label}</label>{inputElement}
		</div>
	);
};

export default input;