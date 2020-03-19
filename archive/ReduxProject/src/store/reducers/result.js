import * as actionTypes from '../actions/actionTypes';
import {updateObject} from '../utility';

const initialState = {
	results: []
}

const result = (state = initialState, action) => {
	switch(action.type){
		case actionTypes.STORE_RESULT:
			return updateObject(state, {results: state.results.concat({id: new Date(), value: action.result})});
		break;
		case actionTypes.DELETE_RESULT:
			const newResults = state.results.filter(result => result.id !== action.resultElId);
			return updateObject(state, {results: newResults});
		break;
		default: return state;
	}
}

export default result;