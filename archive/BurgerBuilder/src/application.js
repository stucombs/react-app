import React from 'react';
import ReactDOM from 'react-dom';
import {HashRouter} from 'react-router-dom';
import {Provider} from 'react-redux';
import {createStore, applyMiddleware, compose} from 'redux';
import thunk from 'redux-thunk';

import App from './containers/App';
import axios from 'axios';
import reducer from './store/reducers/burgerBuilder';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(reducer, composeEnhancers(
	applyMiddleware(thunk)
));

const app = (
	<Provider store={store}>
		<HashRouter>
			<App />
		</HashRouter>
	</Provider>
);

ReactDOM.render(app, document.getElementById("root"));