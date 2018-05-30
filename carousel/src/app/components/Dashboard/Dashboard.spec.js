import React from 'react';
import { shallow } from 'enzyme';
import Dashboard from './Dashboard';
import Carousel from './../Carousel/Carousel';
import toJson from 'enzyme-to-json';

describe('Dashboard', () => {
  const wrapper = shallow(<Dashboard />);
  it('should correctly', () => {
    const tree = toJson(wrapper);
    expect(tree).toMatchSnapshot();
  });
  it('should have Carousel component', () => {
    expect(wrapper.containsMatchingElement(<Carousel />)).toBe(true);
  });
});
