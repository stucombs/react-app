import React, {Component} from 'react';
import {Route} from 'react-router-dom';
import {connect} from 'react-redux';

import CheckoutSummary from '../../components/Order/CheckoutSummary/CheckoutSummary';
import ContactData from './ContactData/ContactData';

class Checkout extends Component {
	checkoutCancelHandler = () => {
		this.props.history.goBack();
	}

	checkoutContinueHandler = () => {
		this.props.history.replace('/checkout/info');
	}

	render(){
		return(
			<div>
				<CheckoutSummary onCheckoutCancel={this.checkoutCancelHandler} onCheckoutContinue={this.checkoutContinueHandler} ingredients={this.props.ingredients}/>
				<Route 
					path={'/checkout/info'}
					component={ContactData} />
			</div>
		);
	}
}

const mapStateToProps = state => {
	return {
		ingredients: state.ingredients
	}
}

export default connect(mapStateToProps)(Checkout);