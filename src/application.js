import React from 'react';
import ReactDOM from 'react-dom';
import App from './containers/App';
import axios from 'axios';

axios.defaults.baseURL = 'https://cheeseburger-in-react.firebaseio.com/';

ReactDOM.render(<App />, document.getElementById("root"));