import * as React from 'react';
import CreditScore from './CreditScore';
import { shallow } from 'enzyme';

describe('CreditScore', () => {
  it('Renders without crashing', () => {
    expect(shallow(<CreditScore score={2} max={7} bandDescription={'asd'} />)).toHaveLength(1);
  });
});