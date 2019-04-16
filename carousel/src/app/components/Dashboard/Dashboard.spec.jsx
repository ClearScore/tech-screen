import * as React from 'react';
import Dashboard from './Dashboard';
import { shallow } from 'enzyme';

describe('Dashboard', () => {
  it('Renders without crashing', () => {
    expect(shallow(<Dashboard />)).toHaveLength(1);
  });
});