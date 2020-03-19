import React, {Component, Suspense} from 'react';
import {Route, Redirect, Navlink} from 'react-router-dom';
import {connect} from 'react-redux';

import Aux from '../../hoc/Auxiliary/Auxiliary';
import Burger from '../../components/Burger/Burger';
import BuildControls from '../../components/BuildControls/BuildControls';
import Modal from '../../UI/Modal/Modal';
import OrderSummary from '../../components/Burger/OrderSummary/OrderSummary';
import Spinner from '../../UI/Spinner/Spinner';
import withErrorHandler from '../../hoc/withErrorHandler/withErrorHandler';
import axios from '../../axios-orders';
import * as actionTypes from '../../store/actions';


class BurgerBuilder extends Component {
	state = {
		totalPrice: 4,
		purchasable: false,
		purchasing: false,
		loading: false,
		error: null
	}

	componentDidMount(){
		axios.get('https://cheeseburger-in-react.firebaseio.com/ingredients.json')
			.then(response => {
				this.setState({ingredients: response.data});
			})
			.catch(error => {
				this.setState({error: true});
			});
	}

	updatePurchaseState(ingredients) {
		const sum = Object.keys(ingredients)
			.map(igKey => {
				return ingredients[igKey];
			})
			.reduce((sum, el) =>{
				return sum + el;
			}, 0);
			return sum > 0;
	}

	// addIngredientHandler = (type) => {
	// 	const oldCount = this.state.ingredients[type];
	// 	const updatedCount = oldCount + 1;
	// 	const updateIngredients = {
	// 		...this.state.ingredients	
	// 	};
	// 	updateIngredients[type] = updatedCount;
	// 	const priceAddition = INGREDIENT_PRICES[type];
	// 	const oldPrice = this.state.totalPrice;
	// 	const newPrice = oldPrice + priceAddition;

	// 	this.setState({
	// 		totalPrice: newPrice,
	// 		ingredients: updateIngredients
	// 	});

	// 	this.updatePurchaseState(updateIngredients);
	// }

	// removeIngredientHandler = (type) => {
	// 	const oldCount = this.state.ingredients[type];
	// 	const updatedCount = oldCount > 0 ? oldCount - 1 : 0;
	// 	const updateIngredients = {
	// 		...this.state.ingredients
	// 	};
	// 	updateIngredients[type] = updatedCount;
	// 	const priceSubtraction = INGREDIENT_PRICES[type];
	// 	const oldPrice = this.state.totalPrice;
	// 	const newPrice = oldPrice - priceSubtraction > 0 ? oldPrice - priceSubtraction : 0;

	// 	this.setState({
	// 		totalPrice: newPrice,
	// 		ingredients: updateIngredients
	// 	});

	// 	this.updatePurchaseState(updateIngredients);
	// }

	purchaseHandler = () => {
		this.setState({purchasing: true});
	}

	purchaseCancelHandler = () => {
		this.setState({
			purchasing: false
		});
	}

	purchaseContinueHandler = () => {
		const queryParams = [];
		for(let i in this.state.ingredients){
			queryParams.push(encodeURIComponent(i) + '=' + encodeURIComponent(this.state.ingredients[i]));
		}
		queryParams.push('price=' + this.props.price);
		const queryString = queryParams.join('&');

		this.props.history.push({
			pathname: '/checkout',
			search: '?' + queryString
		});
	}

	render() {
		const disabledInfo = {
			...this.props.ingredients
		};

		for(let key in disabledInfo){
			disabledInfo[key] = disabledInfo[key] <= 0;
		}

		let orderSummary = null;
		let burger = this.state.error ? <p>Ingredients can't be loaded</p> : <Spinner />; 

		if(this.props.ingredients){
			burger =(	<Aux>
						<Burger ingredients={this.props.ingredients} />
						<BuildControls ingredientAdded={this.props.onAddIngredient} ingredientRemoved={this.props.onRemoveIngredient} disabled={disabledInfo} price={this.props.price} purchasable={this.updatePurchaseState(this.props.ingredients)} toggleModal={this.purchaseHandler} />
				    	</Aux>
				    );
			orderSummary = <OrderSummary ingredients={this.props.ingredients} purchaseCanceled={this.purchaseCancelHandler} purchaseContinue={this.purchaseContinueHandler} price={this.props.price} />;
		}
		
		if(this.state.loading){
			orderSummary = <Spinner />;
		}
		return (
			<Aux>
				<Modal show={this.state.purchasing} modalClosed={this.purchaseCancelHandler}>
					{orderSummary}
				</Modal>
				{burger}
			</Aux>
		);	
	}
}

	const mapStateToProps = state => {
		return {
			ingredients: state.ingredients,
			price: state.totalPrice
		}
	}

	const mapDispatchToProps = dispatch => {
		return {
			onAddIngredient: (ingName) => dispatch({type: actionTypes.ADD_INGREDIENT, ingredientName: ingName}),
			onRemoveIngredient: (ingName) => dispatch({type: actionTypes.REMOVE_INGREDIENT, ingredientName: ingName})
		}
	}

export default connect(mapStateToProps, mapDispatchToProps)(withErrorHandler(BurgerBuilder, axios));