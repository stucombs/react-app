import React, {Component} from 'react';
import { connect } from 'react-redux';

import CounterControl from '../../components/CounterControl/CounterControl';
import CounterOutput from '../../components/CounterOutput/CounterOutput';

class Counter extends Component {
	state = {
		counter: 0,
		results: []
	}

	render(){
		return (
			<div>
				<CounterOutput value={this.props.ctr} />
				<CounterControl label="Increment"  clicked={this.props.onIncrementCounter} />
				<CounterControl label="Decrement"  clicked={this.props.onDecrementCounter} />
				<CounterControl label="Add 5"      clicked={this.props.onAddCounter} />
				<CounterControl label="Subtract 5" clicked={this.props.onSubtractCounter} />
				<hr />
				<button onClick={this.props.onSaveResult}>Save Result</button>
				<ul>
					<li onClick={this.props.onDeleteResult}></li>
				</ul>
			</div>
		)
	}
}

const mapStatetoProps = state => {
	return {
		ctr: state.counter
	}
}

const mapDispatchtoProps = dispatch => {
	return {
		onIncrementCounter: () => dispatch({type: 'INCREMENT'}),
		onDecrementCounter: () => dispatch({type: 'DECREMENT'}),
		onAddCounter: () => dispatch({type: 'ADD', value: 5}),
		onSubtractCounter: () => dispatch({type: 'SUBTRACT', value: 5}),
		onSaveResult: () => dispatch({type: 'STORE_RESULT'}),
		onDeleteResult: () => dispatch({type: 'DELETE_RESULT'})

	}
}

export default connect(mapStatetoProps, mapDispatchtoProps)(Counter);