import React, { Component } from 'react';

import Layout from '../hoc/Layout/Layout';
import BurgerBuilder from './BurgerBuilder/BurgerBuilder';
import './App.css';

class App extends Component {
	render() {
		return (
			<div>
				<Layout>
					<BurgerBuilder ingredientAdded={this.addIngredientHandler} />
				</Layout>
			</div>
		);
	}
}
export default App;