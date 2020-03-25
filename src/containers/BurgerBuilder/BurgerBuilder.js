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
import * as burgerActions from '../../store/actions/index';


class BurgerBuilder extends Component {
	state = {
		totalPrice: 4,
		purchasable: false,
		purchasing: false
	}

	componentDidMount(){
		// console.log(this.props);
		this.props.onInitIngredients();
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
		if(this.props.isAuthenticated){
			this.setState({purchasing: true});
		}else{
			this.props.onSetAuthRedirectPath('/checkout');
			this.props.history.push('/auth');
		}
	}

	purchaseCancelHandler = () => {
		this.setState({
			purchasing: false
		});
	}

	purchaseContinueHandler = () => {
		// const queryParams = [];
		// for(let i in this.state.ingredients){
		// 	queryParams.push(encodeURIComponent(i) + '=' + encodeURIComponent(this.state.ingredients[i]));
		// }
		// queryParams.push('price=' + this.props.price);
		// const queryString = queryParams.join('&');
		this.props.onPurchaseInit();
		this.props.history.push({pathname: '/checkout'});
	}

	render() {
		const disabledInfo = {
			...this.props.ingredients
		};

		for(let key in disabledInfo){
			disabledInfo[key] = disabledInfo[key] <= 0;
		}

		let orderSummary = null;
		let burger = this.props.error ? <p>Ingredients can't be loaded</p> : <Spinner />; 

		if(this.props.ingredients){
			burger =(	<Aux>
						<Burger ingredients={this.props.ingredients} />
						<BuildControls 
							ingredientAdded={this.props.onAddIngredient}
							ingredientRemoved={this.props.onRemoveIngredient}
							disabled={disabledInfo}
							price={this.props.price}
							purchasable={this.updatePurchaseState(this.props.ingredients)} 
							toggleModal={this.purchaseHandler}
							isAuth={this.props.isAuthenticated} />
				    	</Aux>
				    );
			orderSummary = <OrderSummary ingredients={this.props.ingredients} purchaseCanceled={this.purchaseCancelHandler} purchaseContinue={this.purchaseContinueHandler} price={this.props.price} />;
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
			ingredients: state.burgerBuilder.ingredients,
			price: state.burgerBuilder.totalPrice,
			error: state.burgerBuilder.error,
			isAuthenticated: state.auth.token !== null
		}
	}

	const mapDispatchToProps = dispatch => {
		return {
			onAddIngredient: (ingName) => dispatch(burgerActions.addIngredient(ingName)),
			onRemoveIngredient: (ingName) => dispatch(burgerActions.removeIngredient(ingName)),
			onInitIngredients: () => dispatch(burgerActions.initIngredients()),
			onPurchaseInit: () => dispatch(burgerActions.purchaseInit()),
			onSetAuthRedirectPath: (path) => dispatch(burgerActions.setAuthRedirectPath(path))
		}
	}

export default connect(mapStateToProps, mapDispatchToProps)(withErrorHandler(BurgerBuilder, axios));