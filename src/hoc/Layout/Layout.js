import React, {Component} from 'react';
import {connect} from 'react-redux';

import classes from './Layout.css';
import Aux from '../Auxiliary/Auxiliary';
import Toolbar from '../../components/Navigation/Toolbar/Toolbar';
import SideDrawer from '../../components/Navigation/SideDrawer/SideDrawer';

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
				<Toolbar click={this.toggleSideDrawer} isAuth={this.props.isAuthenticated}/>
				<SideDrawer open={this.state.showSideDrawer} closed={this.closeSideDrawer} isAuth={this.props.isAuthenticated} />
				<main className={classes.content}>
					{this.props.children}
				</main>
			</Aux>
		)
	}
}

const mapStateToProps = state => {
	return {
		isAuthenticated: state.auth.token !== null
	}
}

export default connect(mapStateToProps)(Layout);