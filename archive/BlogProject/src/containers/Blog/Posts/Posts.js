import React, {Component} from 'react';
import axios from '../../../axios.js';
import {Route, Switch, Link} from 'react-router-dom';

import Post from '../../../components/Post/Post';
import FullPost from '../FullPost/FullPost';
import Spinner from '../../../UI/Spinner/Spinner';
import './Posts.css';

class Posts extends Component {
	state = {
		posts: [],
		selectedPostId: null,
		error: false,
		loading: true
	}

	selectPostHandler = (id) => {
		this.setState({selectedPostId: id });
	}

	componentDidMount() {
		// console.log(this.props);
		axios.get('posts/')
		.then(response => {
			const posts = response.data.slice(0, 4);
			const updatedPosts = posts.map(post => {
				return {
					...post, author: 'Stu'
				}
			})
			this.setState({posts: updatedPosts, loading: false});
		})
		.catch(error => {
			this.setState({ error: true, loading: false});
		});
	}

	render(){
		let posts = <p style={{textAlign: 'center'}}>Something went wrong</p>;
		if(this.state.loading){
			posts = <Spinner />;
		}else if(!this.state.error){
			posts = this.state.posts.map(post => {
				return( 
					<Link to={'/posts/' + post.id} key={post.id}>
						<Post title={post.title} author={post.author} clicked={() => this.selectPostHandler(post.id)}/>
					</Link>
				);
			});
		}

		return(
			<div>
				<section className="Posts">
					{posts}
				</section>
				<Route path={this.props.match.url + "/:id"} component={FullPost} />
			</div>
		);
	}
}

export default Posts;