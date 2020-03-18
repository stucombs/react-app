import * as actionTypes from '../actions';

const initialState = {
	results: []
}

const result = (state = initialState, action) => {
	switch(action.type){
		case actionTypes.STORE_RESULT:
			return {
				...state,
				results: state.results.concat({
							id: new Date(),
							value: action.result
						})
			}
		break;
		case actionTypes.DELETE_RESULT:
			// const id = 2;
			// const newResults = [...state.results];
			// newResults.splice(id, 1);
			const newResults = state.results.filter(result => result.id !== action.resultElId);
			return {
				...state,
				results: newResults
			}
		break;
	}

	return state;
}

export default result;