import React from 'react';
import ReactDOM from 'react-dom';
import {HashRouter} from 'react-router-dom';
import {Provider} from 'react-redux';
import {createStore} from 'redux';

import App from './containers/App';
import axios from 'axios';
import reducer from './store/reducer';

const store = createStore(reducer);

const app = (
	<Provider store={store}>
		<HashRouter>
			<App />
		</HashRouter>
	</Provider>
);

ReactDOM.render(app, document.getElementById("root"));