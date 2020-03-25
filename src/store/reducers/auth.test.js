import reducer from './auth';
import * as actionsTypes from '../actions/actionsTypes';

describe('auth reducer', () => {
	it('should return the inital state', () => {
		expect(reducer(undefined, {})).toEqual({
			token: null,
			userId: null,
			error: null,
			loading: false,
			authRedirectPath: "/"
		});
	});

	it('should store the token upon login', () => {
		expect(reducer({
			token: null,
			userId: null,
			error: null,
			loading: false,
			authRedirectPath: "/"
		}, {
			type: actionsTypes.AUTH_SUCCESS,
			token: 'some-token',
			userId: 'some-user-id'
		})).toEqual({
			token: 'some-token',
			userId: 'some-user-id',
			error: null,
			loading: false,
			authRedirectPath: "/"
		});
	});
});

