import React from 'react';

const charactercard = (props) => {
	const style  = {
		display: 'inline-block',
		margin: '16px',
		border: '1px solid blue',
		padding: '16px',
		cursor: 'pointer',
		textAlign: 'center'
	}

	return(
		<div style={style} onClick={props.click} >
			{props.character}
		</div>
	)
}

export default charactercard;