import React, {Component} from 'react';

import Button from '../../../UI/Button/Button';
import Spinner from '../../../UI/Spinner/Spinner';
import classes from './ContactData.css';
import axios from '../../../axios-orders';
import Input from '../../../UI/Input/Input';

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
				value: '',
				valid: true
			},
		},
		formIsValid: false,
		loading: false
	}

	orderHandler = (event) => {
		event.preventDefault();
		this.setState ({loading: true})
		const formData = {};
		for (let formElIdentifier in this.state.orderForm){
			formData[formElIdentifier] = this.state.orderForm[formElIdentifier].value
		}
		const order = {
			ingredients: this.props.ingredients,
			price: this.props.price,
			orderData: formData
		}

		axios.post('/orders.json', order)
			.then(response => {
				this.setState({loading: false});
				this.props.history.push('/');
			})
			.catch(error => {
				this.setState({loading: false});
			});
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
		console.log(formIsValid);
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
		if(this.state.loading){
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

export default ContactData;