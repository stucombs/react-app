import React from 'react';

import Aux from '../../../hoc/Auxiliary.js';
import classes from './OrderSummary.css';
import Button from '../../../UI/Button/Button';

const orderSummary = (props) => {
	const ingredientSummary = Object.keys(props.ingredients)
		.map(igKey => {
			return (<li key={igKey}>
					<span style={{textTransform:'capatilize'}}>{igKey}: {props.ingredients[igKey]} </span>
				 </li>);
		});

	return (
		<Aux>
			<main className={classes.plaintext}>
				<h3>Order Summary</h3>
				<p>A delicious burger with the following ingredients:</p>
				<ul>
					{ingredientSummary}
				</ul>
				<p><strong>Total: ${props.price.toFixed(2)}</strong></p>
				<p>Continue to checkout?</p>
				<Button btnType="Danger"  clicked={props.purchaseCanceled}>CANCEL</Button>
				<Button btnType="Success" clicked={props.purchaseContinue}>CONTINUE</Button>
			</main>
		</Aux>
	);
};

export default orderSummary;