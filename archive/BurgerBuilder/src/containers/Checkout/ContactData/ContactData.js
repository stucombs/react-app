import React, {Component} from 'react';
import {connect} from 'react-redux';

import Button from '../../../UI/Button/Button';
import Spinner from '../../../UI/Spinner/Spinner';
import classes from './ContactData.css';
import axios from '../../../axios-orders';
import Input from '../../../UI/Input/Input';
import withErrorHandler from '../../../hoc/withErrorHandler/withErrorHandler';
import * as actions from '../../../store/actions/index';

class ContactData extends Component {
	state = {
		orderForm: {
			name: {
				elementType: 'input',
				elementConfig: {
					type: 'text',
					placeholder: 'Name'
				},
				value: '',
				validation: {
					required: true,
					minLength: 2
				},
				valid: false,
				touched: false
			},
			street: {
				elementType: 'input',
				elementConfig: {
					type: 'text',
					placeholder: 'ex. Easy Street'
				},
				value: '',
				validation: {
					required: true,
					minLength: 8
				},
				valid: false,
				touched: false
			},
			postalCode: {
				elementType: 'input',
				elementConfig: {
					type: 'text',
					placeholder: 'ex. 123456'
				},
				value: '',
				validation: {
					required: true,
					minLength: 5
				},
				valid: false,
				touched: false		
			},
			country: {
				elementType: 'input',
				elementConfig: {
					type: 'text',
					placeholder: 'ex. USA'
				},
				value: '',
				validation: {
					required: true,
					minLength: 2
				},
				valid: false,
				touched: false
			},
			email: {
				elementType: 'input',
				elementConfig: {
					type: 'text',
					placeholder: 'email'
				},
				value: '',
				validation: {
					required: true,
					minLength: 5
				},
				valid: false,
				touched: false
			},
			deliveryMethod: {
				elementType: 'select',
				elementConfig: {
					options: [
						{value: 'to door', display: 'to door'},
						{value: 'pick up', display: 'pick up'}
					]
				},
				value: 'to door',
				valid: true
			},
		},
		formIsValid: false
	}

	orderHandler = (event) => {
		event.preventDefault();
		const formData = {};
		for(let formElementIdentifier in this.state.orderForm){
			formData[formElementIdentifier] = this.state.orderForm[formElementIdentifier];
		}
		const order = {
			ingredients: this.props.ingredients,
			price: this.props.price,
			orderData: formData
		}

		this.props.onOrderBurger(order, this.props.token);
	}

	checkValidity(value, rules) {
		let isValid = true;

		if(rules.required){
			isValid = value.trim() !== '' && isValid;
		}

		if(rules.minLength){
			isValid = value.length >= rules.minLength && isValid;
		}

		return isValid;
	}

	inputChangedHandler = (event, inputIdentifier) => {
		// console.log(event.target.value);
		const updatedForm = {
			...this.state.orderForm
		}
		const updatedFormEl = {
			...updatedForm[inputIdentifier]
		}
		updatedFormEl.value = event.target.value;
		updatedForm[inputIdentifier] = updatedFormEl;
		if(updatedFormEl.validation){ updatedFormEl.valid = this.checkValidity(updatedFormEl.value, updatedFormEl.validation) };
		updatedFormEl.touched = true;

		let formIsValid = true;
		for (let inputIdentifier in updatedForm){
			formIsValid = updatedForm[inputIdentifier].valid && formIsValid;
		}
		this.setState({
			orderForm: updatedForm,
			formIsValid: formIsValid
		});
	}

	render(){
		const formElementsArray = [];
		for (let key in this.state.orderForm){
			formElementsArray.push({
				id: key, config: this.state.orderForm[key]
			});
		}
		let form = (
			<form onSubmit={this.orderHandler} >
				{formElementsArray.map(element => (
					<Input 
						key={element.id}
						elementType={element.config.elementType}
						elementConfig={element.config.elementConfig}
						value={element.config.value}
						invalid={!element.config.valid}
						shouldValidate={element.config.validation}
						touched={element.config.touched}
						changed={(event) => this.inputChangedHandler(event, element.id)}
					/>
				))}
				<Button btnType="Success" disabled={!this.state.formIsValid} clicked={this.orderHandler}>ORDER</Button>
			</form>
		);
		if(this.props.loading){
			form = <Spinner />;
		}
		return (
			<div className={classes['contact-data']} >
				<h4>Enter your information</h4>
				{form}
			</div>
		);
	}
}

const mapStateToProps = state => {
	return {
		ingredients: state.burgerBuilder.ingredients,
		price: state.burgerBuilder.totalPrice,
		loading: state.order.loading,
		token: state.auth.token
	}
}

const mapDispatchToProps = dispatch => {
	return {
		onOrderBurger: (orderData, token) => dispatch(actions.purchaseBurger(orderData, token))
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(withErrorHandler(ContactData, axios));