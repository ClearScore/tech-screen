import DebtIndeicator from './DebtIndicator';
import React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';

describe('DebtIndicator', () => {
  const wrapper = shallow(<DebtIndeicator />);
  it('renders correctly', () => {
    const tree = toJson(wrapper);
    expect(tree).toMatchSnapshot();
  });
});
