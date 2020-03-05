import React, {Component, Suspense} from 'react';
import {Route, NavLink, Switch, Redirect} from 'react-router-dom'
import asyncComponent from '../../hoc/asyncComponent';
// import axios from 'axios';

import Posts from './Posts/Posts';
// import NewPost from './NewPost/NewPost';
import './Blog.css';

const NewPost = React.lazy(() => import('./NewPost/NewPost'));
// const AsyncNewPost = asyncComponent(() => {
// 	return import('./NewPost/NewPost');
// });

class Blog extends Component {

	render() {
		return (
			<div className="Blog">
				<header>
					<nav>
						<ul>
							<li><NavLink to="/posts" exact>Posts</NavLink></li>
							<li><NavLink to="/new-post">New Post</NavLink></li>
						</ul>
					</nav>
				</header>
				<Switch>
					<Route path="/new-post" render={() => (
							<Suspense fallback={<div>Loading...</div>}><NewPost /></Suspense>
					)} />				
					<Route path="/posts" component={Posts} />
					<Redirect from="/" to="/posts" />
					{/*<Route render={() => <h1>Not Found</h1>} />*/}
					{/*<Route path="/" component={Posts} />*/}
				</Switch>
			</div>
		);
	}
}

export default Blog;