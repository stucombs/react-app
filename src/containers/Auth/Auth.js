import React, { Component } from 'react';
import {connect} from 'react-redux';
import {Redirect} from 'react-router-dom';

import classes from './Auth.css';
import Input from '../../UI/Input/Input';
import Button from '../../UI/Button/Button';
import Spinner from '../../UI/Spinner/Spinner';
import * as actions from '../../store/actions/index';
import {updateObject, checkValidity} from '../../shared/utility';

class Auth extends Component {
	state = {
		controls: {
			email: {
				elementType: 'input',
				elementConfig: {
					type: 'email',
					placeholder: 'Email'
				},
				value: '',
				validation: {
					required: true,
					isEmail: true
				},
				valid: false,
				touched: false
			},
			password: {
				elementType: 'input',
				elementConfig: {
					type: 'password',
					placeholder: 'Password'
				},
				value: '',
				validation: {
					required: true,
					minLength: 6
				},
				valid: false,
				touched: false
			}
		},
		isSignup: true
	}

	componentDidMount(){
		if(!this.props.buildingBurger && (this.props.authRedirectPath !== '/order' || this.props.authRedirectPath !== '/')){
			this.props.onSetAuthRedirectPath();
		}
	}

	inputChangedHandler = (event, controlName) => {
        const updatedControls = updateObject(this.state.controls, {
        	[controlName]: updateObject(this.state.controls[controlName], {
        		value: event.target.value,
        		valid: checkValidity(event.target.value, this.state.controls[controlName].validation),
        		touched: true
        	})
        });
        this.setState({controls: updatedControls});
    }

    onSubmitHandler = (event) => {
    	event.preventDefault();
    	this.props.onAuth(this.state.controls.email.value, this.state.controls.password.value, this.state.isSignup);
    }

    switchAuthModeHandler = () => {
    	this.setState(prevState => {
    		return {isSignup: !prevState.isSignup}
    	});
    }

	render(){
		const formElementArray = [];
		for(let key in this.state.controls){
			formElementArray.push({id: key, config: this.state.controls[key]});
		}

		let form = formElementArray.map(formElement => (
			<Input 
				key={formElement.id}
				elementType={formElement.elementType}
				elementConfig={formElement.config.elementConfig}
				value={formElement.value}
				invalid={!formElement.config.valid}
				shouldValidate={formElement.config.validation}
				touched={formElement.config.touched}
				changed={(event) => this.inputChangedHandler(event, formElement.id)}
			/>
		));

		if(this.props.loading){
			form = <Spinner />;
		}

		let errorMessage = null;
		if(this.props.error){
			errorMessage = (
				<p style={{color: 'red'}}>Error: {this.props.error.message}</p>
			);
		}	

		let authRedirect = null;
		if(this.props.isAuthenticated){
			authRedirect = <Redirect to={this.props.authRedirect} />;
		}

		return (
			<div className={classes.auth}>
				{authRedirect}
				<form onSubmit={this.onSubmitHandler}>
					{form}
					{errorMessage}
					<Button btnType="Success">Submit</Button><br />
				</form>
				<Button btnType="Danger" clicked={this.switchAuthModeHandler}>Switch to {this.state.isSignup ? 'Sign In' : 'Sign Up'}</Button>
			</div>
		);
	}
}

const mapStateToProps = state => {
	return {
		loading: state.auth.loading,
		error: state.auth.error,
		isAuthenticated: state.auth.token !== null,
		buildingBurger: state.burgerBuilder.building,
		authRedirect: state.auth.authRedirectPath 
	}	
}

const mapDispatchToProps = dispatch => {
	return {
		onAuth: (email, password, isSignup) => dispatch(actions.auth(email, password, isSignup)),
		onSetAuthRedirectPath: () => dispatch(actions.setAuthRedirectPath('/'))
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(Auth);