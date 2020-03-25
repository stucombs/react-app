import React from 'react';

import Burger from '../../Burger/Burger';
import Button from '../../../UI/Button/Button';
import css from './CheckoutSummary.css';

const checkoutSummary = (props) => {
	return(
		<div className={css['checkout-summary']} >
			<h1>We hope you enjoy your burger!</h1>
			<div style={{width: '100%', height: '300px', margin: 'auto'}}>
				<Burger ingredients={props.ingredients} />
			</div>
			<Button btnType="Danger" clicked={props.onCheckoutCancel} >CANCEL</Button>
			<Button btnType="Success" clicked={props.onCheckoutContinue} >CONTINUE</Button>
		</div>
	);
}

export default checkoutSummary;