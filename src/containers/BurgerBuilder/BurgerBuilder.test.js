import React from 'react';

import {configure, shallow} from 'enzyme';
import Adapter form 'enzyme-adapter-react-16';

import {BurgerBuilder} from './BurgerBuilder';
import BuildControls from '../../components/BuildControls/BuildControls';

configure({adapter: new Adapter()});

describe('<BurgerBuilder />', () => {
	let wrapper;

	beforeEach(() => {
		wrapper = shallow(<BurgerBuilder />);
	});

	it('should render <BuildControls /> when receiving ingredients', () => {
		wrapper.setProps({ingredients: {lettuce: 0}});
		expect(wrapper.find(BuildControls)).toHaveLength(1);
	});
});