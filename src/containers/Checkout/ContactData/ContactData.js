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
				value: ''
			},
			street: {
				elementType: 'input',
				elementConfig: {
					type: 'text',
					placeholder: 'ex. Easy Street'
				},
				value: ''
			},
			postalCode: {
				elementType: 'input',
				elementConfig: {
					type: 'text',
					placeholder: 'ex. 123456'
				},
				value: ''			
			},
			country: {
				elementType: 'input',
				elementConfig: {
					type: 'text',
					placeholder: 'ex. USA'
				},
				value: ''			
			},
			email: {
				elementType: 'input',
				elementConfig: {
					type: 'text',
					placeholder: 'email'
				},
				value: ''			
			},
			deliveryMethod: {
				elementType: 'select',
				elementConfig: {
					options: [
						{value: 'to door', display: 'to door'},
						{value: 'pick up', display: 'pick up'}
					]
				},
				value: ''			
			},
		},
		loading: false
	}

	orderHandler = (event) => {
		event.preventDefault();
		this.setState ({loading: true})
		const order = {
			ingredients: this.props.ingredients,
			price: this.props.price,
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

	render(){
		const formElementsArray = [];
		for (let key in this.state.orderForm){
			formElementsArray.push({
				id: key, config: this.state.orderForm[key]
			});
		}
		let form = (
			<form>
				{formElementsArray.map(element => (
					<Input key={element.id} elementType={element.config.elementType} elementConfig={element.config.elementConfig} value={element.config.value} />
				))}
				<Button btnType="Success" clicked={this.orderHandler} >ORDER</Button>
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