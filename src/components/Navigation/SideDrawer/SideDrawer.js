import React from 'react';

import Logo from '../../Logo/Logo';
import NavigationItems from '../NavigationItems/NavigationItems';
import classes from './SideDrawer.css';
import Backdrop from '../../../UI/Backdrop/Backdrop';
import Aux from '../../../hoc/Auxiliary/Auxiliary';

const sideDrawer = (props) => {
	let attachedClasses = [classes['side-drawer'], classes.hide];

	if(props.open){
		attachedClasses = [classes['side-drawer']];
	}

	return (
		<Aux>
		<Backdrop show={props.open} clicked={props.closed} />
		<div className={attachedClasses.join(' ')} onClick={props.closed}>
			<Logo height="11%" />
			<nav>
				<NavigationItems isAuthenticated={props.isAuth}/>
			</nav>
		</div>
		</Aux>
	);
};

export default sideDrawer;