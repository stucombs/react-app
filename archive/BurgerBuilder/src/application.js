import React from 'react';
import ReactDOM from 'react-dom';
import {HashRouter} from 'react-router-dom';
import App from './containers/App';
import axios from 'axios';

const app = (
	<HashRouter>
		<App />
	</HashRouter>
);

ReactDOM.render(app, document.getElementById("root"));