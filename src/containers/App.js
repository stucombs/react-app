import React, { Component } from 'react';

import Layout from '../hoc/Layout/Layout';
import BurgerBuilder from './BurgerBuilder/BurgerBuilder';
import './App.css';

class App extends Component {
	state = {
		show: true
	}

	render() {
		return (
			<div>
				<Layout>
					{this.state.show ? <BurgerBuilder ingredientAdded={this.addIngredientHandler} /> : null}
				</Layout>
			</div>
		);
	}
}
export default App;