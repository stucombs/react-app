import React from 'react';
import ReactDOM from 'react-dom';
import {createStore, combineReducers} from 'redux';
import {Provider} from 'react-redux';

import App from '../App.js';
import counter from './store/reducers/counter';
import result from './store/reducers/result';

const rootReducer = combineReducers({
	counter: counter,
	result: result
});

const store = createStore(rootReducer);

ReactDOM.render(<Provider store={store}><App/></Provider>, document.getElementById("root"));