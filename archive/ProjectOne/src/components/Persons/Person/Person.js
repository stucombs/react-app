import React, { Component } from 'react';
import PropTypes from 'prop-types';

import Aux from '../../../hoc/Auxiliary';
import withClass from '../../../hoc/WithClass';
import AuthContext from '../../../context/auth-context';
import styled from 'styled-components';
// import './Person.css';

const StyledDiv = styled.div`width: 60%;
				margin: 16px auto;
				border: 1px solid #eee;
				box-shadow: 0 2px 3px #ccc;
				padding: 16px;
				text-align: center;
				background-color: #ffffff;
				color: black;
				
				@media (min-width: 500px): {
					width: '450px'
			}`;

class Person extends Component{
	constructor(props){
		super(props);
		this.inputElementRef = React.createRef();
	}

	static contextType = AuthContext;

	componentDidMount() {
		// this.inputElement.focus();
		this.inputElementRef.current.focus();
	}

	render(){
		return (
			<Aux>
				<StyledDiv>
					{this.context.authenticated ? <p>Authenticated</p> : <p>Please log in</p>}	
					<p onClick={this.props.click}>I'm {this.props.name} and I am {this.props.age} years old.</p>
					<p>{this.props.children}</p>
					<input ref={this.inputElementRef} type='text' onChange={this.props.changed} />
				</StyledDiv>
			</Aux>
		)
	}
}


Person.propTypes = {
	click: PropTypes.func,
	name: PropTypes.string,
	age: PropTypes.number,
	changed: PropTypes.func
};

export default withClass(Person, null);