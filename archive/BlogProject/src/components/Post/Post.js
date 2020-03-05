import React from 'react';
// import {withRouter} from 'react-router-dom';
import PropTypes from 'prop-types';
import './Post.css';

const post = (props) => {
	return(
		<article className="Post" onClick={props.clicked}>
		   <h1>{props.title}</h1>
		   <div className="Info">
		       <div className="Author">{props.author}</div>
		   </div>
		</article>
    );
};

post.propTypes = {
	click: PropTypes.func,
	title: PropTypes.string,
	author: PropTypes.string
};
export default post;
// export default withRouter(post);