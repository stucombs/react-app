import React from 'react';

import classes from './NavigationItems.css';
import NavigationItem from './NavigationItem/NavigationItem';

const navigationItems = (props) => (
	<ul className={classes['navigation-items']}>
		<NavigationItem link="/order" exact>Burger Builder</NavigationItem>
		<NavigationItem link="/orders">Orders</NavigationItem>
	</ul>
);

export default navigationItems;