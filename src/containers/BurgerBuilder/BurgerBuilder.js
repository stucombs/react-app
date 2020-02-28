import React, {Component} from 'react';
import axios from 'axios';

import Aux from '../../hoc/Auxiliary/Auxiliary';
import Burger from '../../components/Burger/Burger';
import BuildControls from '../../components/BuildControls/BuildControls';
import Modal from '../../UI/Modal/Modal';
import OrderSummary from '../../components/Burger/OrderSummary/OrderSummary';

const INGREDIENT_PRICES = {
	lettuce: 0.5,
	cheese: 0.4,
	meat: 1.3,
	bacon: 0.6
}

class BurgerBuilder extends Component {
	// constructor(props){
	// 	super(props);
	// 	this.state = {...}
	// }

	state = {
		ingredients: {
			lettuce: 0,
			bacon: 0,
			cheese: 0,
			meat: 0
		},
		totalPrice: 4,
		purchasable: false,
		purchasing: false
	}

	updatePurchaseState(ingredients) {
		const sum = Object.keys(ingredients)
			.map(igKey => {
				return ingredients[igKey];
			})
			.reduce((sum, el) =>{
				return sum + el;
			}, 0);

		this.setState({
			purchasable: sum > 0
		});
	}

	addIngredientHandler = (type) => {
		const oldCount = this.state.ingredients[type];
		const updatedCount = oldCount + 1;
		const updateIngredients = {
			...this.state.ingredients	
		};
		updateIngredients[type] = updatedCount;
		const priceAddition = INGREDIENT_PRICES[type];
		const oldPrice = this.state.totalPrice;
		const newPrice = oldPrice + priceAddition;

		this.setState({
			totalPrice: newPrice,
			ingredients: updateIngredients
		});

		this.updatePurchaseState(updateIngredients);
	}

	removeIngredientHandler = (type) => {
		const oldCount = this.state.ingredients[type];
		const updatedCount = oldCount > 0 ? oldCount - 1 : 0;
		const updateIngredients = {
			...this.state.ingredients
		};
		updateIngredients[type] = updatedCount;
		const priceSubtraction = INGREDIENT_PRICES[type];
		const oldPrice = this.state.totalPrice;
		const newPrice = oldPrice - priceSubtraction > 0 ? oldPrice - priceSubtraction : 0;

		this.setState({
			totalPrice: newPrice,
			ingredients: updateIngredients
		});

		this.updatePurchaseState(updateIngredients);
	}

	purchaseHandler = () => {
		this.setState({purchasing: true});
	}

	purchaseCancelHandler = () => {
		this.setState({
			purchasing: false
		});
	}

	purchaseContinueHandler = () => {
		// alert('Purchased!');
		const order = {
			ingredients: this.state.ingredients,
			price: this.state.totalPrice,
			customer: {
				name: 'Stu Easy',
				address: {
					zipCode: '42069',
					country: 'US of A'	
				},
				email: 'deeznuts@gmail.com'
			},
			deliveryMethod: 'delivery'
		};
		axios.post('/orders.json', order)
			.then(response => console.log(response))
			.catch(error => console.log(error));
	}

	render() {
		const disabledInfo = {
			...this.state.ingredients
		};

		for(let key in disabledInfo){
			disabledInfo[key] = disabledInfo[key] <= 0
		}

		return (
			<Aux>
				<Modal show={this.state.purchasing} modalClosed={this.purchaseCancelHandler}>
					<OrderSummary ingredients={this.state.ingredients} purchaseCanceled={this.purchaseCancelHandler} purchaseContinue={this.purchaseContinueHandler} price={this.state.totalPrice} />
				</Modal>
				<Burger ingredients={this.state.ingredients} />
				<BuildControls ingredientAdded={this.addIngredientHandler} ingredientRemoved={this.removeIngredientHandler} disabled={disabledInfo} price={this.state.totalPrice} purchasable={this.state.purchasable} toggleModal={this.purchaseHandler} />
			</Aux>
		);	
	}
}

export default BurgerBuilder;