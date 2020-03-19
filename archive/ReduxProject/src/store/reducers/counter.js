import * as actionTypes from '../actions/actionTypes';
import {updateObject} from '../utility';

const initialState = {
	counter: 0
}

const counter = (state = initialState, action) => {
	switch(action.type){
		case actionTypes.INCREMENT:
			return updateObject(state, {counter: state.counter + 1});
		break;
		case actionTypes.ADD:
			return updateObject(state, {counter: state.counter + action.value});
		break;
		case actionTypes.DECREMENT:
			return updateObject(state, {counter: state.counter - 1});
		break;
		case actionTypes.SUBTRACT:
			return updateObject(state, {counter: state.counter - action.value});
		break;
		default: return state;
	}
}

export default counter;