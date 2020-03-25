import React, {Component} from 'react';

import Modal from '../../UI/Modal/Modal';
import Aux from '../Auxiliary/Auxiliary';

const withErrorHandler = (WrappedComponent, axios) => {
	return class extends Component {
		constructor(props){
			super(props);
			this.state = {
				error: null,
			}

			this.reqInterceptor = axios.interceptors.request.use(req => {
				this.setState({error: null});
				return req;
			});

			this.resInterceptor = axios.interceptors.response.use(res => res, error => {
				// console.log(error);
				this.setState({ error: error});

			});
		}

		clearError = () => {
			this.setState({error: null});
		}

		componentWillUnmount(){
			axios.interceptors.request.eject(this.reqInterceptor);
			axios.interceptors.response.eject(this.resInterceptor);
		} 

		render(){
			return (
				<Aux>
					<Modal show={this.state.error} modalClosed={this.clearError}>
						{this.state.error ? this.state.error.message : null}
					</Modal>
					<WrappedComponent {...this.props} />
				</Aux>
			);
		}
	}
}

export default withErrorHandler;