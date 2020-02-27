import React from 'react';
import './UserInput.css';

const userinput = (props) => {
	return(
		<div className="userinput">
			<input type='text' placeholder='jsmith' className="uinput" value={props.currentName} onChange={props.changed} />
		</div>
	)
}

export default userinput;