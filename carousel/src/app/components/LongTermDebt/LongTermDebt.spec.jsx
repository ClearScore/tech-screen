import * as React from 'react';
import LongTermDebt from './LongTermDebt';
import { shallow } from 'enzyme';

describe('LongTermDebt', () => {
  it('Renders without crashing', () => {
    expect(shallow(<LongTermDebt total={20} change={7} limit={9} />)).toHaveLength(1);
  });
});