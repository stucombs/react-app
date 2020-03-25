import * as actionTypes from '../actions/actionTypes';
import {updateObject} from '../../shared/utility';

const initialState = {
	orders: [],
	loading: false,
	purchased: false
}

const reducer = (state = initialState, action) => {
	switch(action.type){
		case actionTypes.PURCHASE_BURGER_SUCCESS:
			const newOrder = updateObject(action.orderData, {id: action.orderId});
			return updateObject(state, {loading: false, purchased: true, orders: state.orders.concat(newOrder)});
		break;
		case actionTypes.PURCHASE_BURGER_FAIL:  return updateObject(state, {loading: false}); break;
		case actionTypes.PURCHASE_BURGER_START: return updateObject(state, {loading: true}); break;
		case actionTypes.PURCHASE_INIT: return updateObject(state, {purchased: false}); break;
		case actionTypes.FETCH_ORDERS_START: return updateObject(state, {loading: true}); break;
		case actionTypes.FETCH_ORDERS_SUCCESS: return updateObject(state, {orders: action.orders, loading: false }); break;
		case actionTypes.FETCH_ORDERS_FAIL: return updateObject(state, {loading: false}); break;
		default: return state;
	}
}

export default reducer;