import React from 'react';

const validation = (props) => {
	let output = '';
	if(props.textlength > 6){
		output = 'Text long enough';
	}else{
		output = 'Text too short';
	}

	return (
		<div>
			<p>{output}</p>
		</div>
	);
}

export default validation;