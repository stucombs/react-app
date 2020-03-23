import React, {Component} from 'react';
import {Route, Redirect} from 'react-router-dom';
import {connect} from 'react-redux';

import CheckoutSummary from '../../components/Order/CheckoutSummary/CheckoutSummary';
import ContactData from './ContactData/ContactData';
import * as actions from '../../store/actions/index'

class Checkout extends Component {

	checkoutCancelHandler = () => {
		this.props.history.goBack();
	}

	checkoutContinueHandler = () => {
		this.props.history.replace('/checkout/info');
	}

	render(){
		let summary = <Redirect to="/order" />;
		if(this.props.ingredients){
			const purchasedRedirect = this.props.purchased ? <Redirect to="/order" /> : null;
			summary = (
				<div>
					{purchasedRedirect}
					<CheckoutSummary onCheckoutCancel={this.checkoutCancelHandler} onCheckoutContinue={this.checkoutContinueHandler} ingredients={this.props.ingredients}/>
					<Route path={'/checkout/info'} component={ContactData} />
				</div>
			);
		}
		return summary;
	}
}

const mapStateToProps = state => {
	return {
		ingredients: state.burgerBuilder.ingredients,
		purchased: state.order.purchased
	}
}

export default connect(mapStateToProps)(Checkout);