import React, {Component} from 'react';

import Button from '../../../UI/Button/Button';
import Spinner from '../../../UI/Spinner/Spinner';
import classes from './ContactData.css';
import axios from '../../../axios-orders';

class ContactData extends Component {
	state = {
		name: '',
		email: '',
		address: {
			street: '',
			postalCode: ''
		},
		loading: false
	}

	orderHandler = (event) => {
		event.preventDefault();
		this.setState ({loading: true})
		const order = {
			ingredients: this.props.ingredients,
			price: this.props.price,
			customer: {
				name: 'Stu Combs',
				address: {
					street: 'Easy Street',
					postalCode: '42069',
					country: 'USA'
				},
				email: 'email@gmail.com'
			},
			deliveryMethod: 'to door'
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
		let form = (
			<form>
				<input className={classes.input} type='text' placeholder="Your Name" />
				<input className={classes.input} type='email' placeholder="Email" />
				<input className={classes.input} type="text" placeholder="Street" />
				<input className={classes.input} type="text" placeholder="Zip Code" />
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