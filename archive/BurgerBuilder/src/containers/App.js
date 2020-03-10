import React, { Component } from 'react';
import {Route, Redirect, Suspense, Switch} from 'react-router-dom';

import Layout from '../hoc/Layout/Layout';
import BurgerBuilder from './BurgerBuilder/BurgerBuilder';
import Checkout from './Checkout/Checkout';
import Orders from '../containers/Orders/Orders';

class App extends Component {
	render() {
		return (
			<div>
				<Layout>
				<Switch>
					<Route path="/order" component={BurgerBuilder} />
					<Route path="/orders" component={Orders} />
					<Route path="/checkout" component={Checkout} />
					<Redirect from="/" to="/order" />
				</Switch>
				</Layout>
			</div>
		);
	}
}
export default App;