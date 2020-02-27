import React, {Component} from 'react';

import classes from './Layout.css';
import Aux from '../../hoc/Auxiliary';
import Toolbar from '../Navigation/Toolbar/Toolbar';
import SideDrawer from '../Navigation/SideDrawer/SideDrawer';

class Layout extends Component {
	state = {
		showSideDrawer: false
	}

	closeSideDrawer = () => {
		this.setState({ showSideDrawer: false });
	}

	toggleSideDrawer = () => {
		this.setState((prevState) => {
			return {showSideDrawer: !prevState.showSideDrawer};
		});
	}

	render() {
		return (
			<Aux>
				<Toolbar click={this.toggleSideDrawer} />
				<SideDrawer open={this.state.showSideDrawer} closed={this.closeSideDrawer} />
				<main className={classes.content}>
					{this.props.children}
				</main>
			</Aux>
		)
	}
}

export default Layout;