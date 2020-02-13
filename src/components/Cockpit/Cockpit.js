import React, { Component } from 'react';
import styled from 'styled-components';

const StyledButton = styled.button`
					background-color: ${props => props.alt ? 'red' : 'green'};
					color: white;
					font: inherit;
					border: 1px solid blue;
					padding: 8px;
					cursor: pointer;
					
					&:hover {
						background-color: ${props => props.alt ? 'salmon' : 'lightgreen'};
						color: black;
					}`

const cockpit = (props) => {
	const subtextClass = [];
	if(props.persons.length <= 2){
		subtextClass.push('subtext_red'); //subtextClass = ['red']
	}
	if(props.persons.length <= 1){
		subtextClass.push('bold'); //subtextClass = ['red', 'bold']
	}

	return (
		<div>
			<h1>Hello from App, this is a component</h1>
			<p className={subtextClass.join(' ')}>Here is some subtext </p>
			<StyledButton alt={props.show ? 1 : 0} onClick={props.toggle}>Toggle Persons</StyledButton>
		</div>
	)
}

export default cockpit;