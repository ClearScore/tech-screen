import ScoreIndeicator from './ScoreIndicator';
import React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';

describe('ScoreIndicator', () => {
  const wrapper = shallow(<ScoreIndeicator />);
  it('renders correctly', () => {
    const tree = toJson(wrapper);
    expect(tree).toMatchSnapshot();
  });
});
