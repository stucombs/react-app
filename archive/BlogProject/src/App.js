import React, {Component} from 'react';
import {HashRouter} from 'react-router-dom';

import Blog from './containers/Blog/Blog';

class App extends Component {
	constructor(props){
		super(props);
		this.state = {}
	}
	
	render(){
		return(
			<HashRouter>
				<div className="App">
					<Blog />
				</div>
			</HashRouter>
		);
	}
}

export default App;