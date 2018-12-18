import React from 'react';
import { shallow, mount, render } from 'enzyme';
import Home from './Home';

describe('Home test', () => {
  it('should render component', () => {
    const wrapper = shallow(<Home />);
    expect(wrapper.find('.Home').length).toBe(1);
  });
});
