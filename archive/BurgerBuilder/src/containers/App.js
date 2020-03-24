import React, { Component } from 'react';
import {Route, Redirect, Suspense, Switch, withRouter} from 'react-router-dom';
import {connect} from 'react-redux';

import Layout from '../hoc/Layout/Layout';
import BurgerBuilder from './BurgerBuilder/BurgerBuilder';
import Checkout from './Checkout/Checkout';
import Orders from './Orders/Orders';
import Auth from './Auth/Auth';
import Logout from './Auth/Logout/Logout';
import * as actions from '../store/actions/index';

class App extends Component {
	componentDidMount(){
		this.props.onTryAutoSignup();
	}

	render() {
		let routes = (
			<Switch>
				<Route path="/order" component={BurgerBuilder} />
				<Route path="/auth" component={Auth} />
				<Redirect from="/" to="/order" />
			</Switch>
		);

		if(this.props.isAuthenticated){
			routes = (
				<Switch>
					<Route path="/orders" component={Orders} />
					<Route path="/logout" component={Logout} />
					<Route path="/checkout" component={Checkout} />
					<Route path="/order" component={BurgerBuilder} />
					<Redirect from="/" to="/order" />
				</Switch>
			);
		}
		return (
			<div>
				<Layout>
					{routes}
				</Layout>
			</div>
		);
	}
}

const mapStateToProps = state => {
	return {
		isAuthenticated: state.auth.token !== null
	}
}

const mapDispatchToProps = dispatch => {
	return {
		onTryAutoSignup: () => dispatch(actions.authCheckState())
	}
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(App));