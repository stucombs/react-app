import React from 'react';

import css from './Order.css';

const order = (props) => (
	<div className={css.order}>
		<p>Ingredients: Salad (1)</p>
		<p>Price: <strong>USD 5.45</strong></p>
	</div>
);

export default order;