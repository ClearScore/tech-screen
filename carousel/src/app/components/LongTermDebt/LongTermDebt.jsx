import React from 'react';
import PropTypes from 'prop-types';

import bemHelper from '../../utils/bem';

import './longTermDebt.scss';

const cn = bemHelper({ block: 'long-term-debt' });

const LongTermDebt = (props) => (
  <div className={cn(null, 'main')}>
    Your long term debt total
    <div className={cn('total')}>
      £{props.total.toLocaleString()}
    </div>
    Total credit limit {props.limit}
    <div className={cn('changes')}>
      {props.change === 0
        ? 'No change since last month'
        : <>
            <div>Change since last month</div>
            <div>{props.change < 0 ? '-' : ''}£{Math.abs(props.change)}</div>
          </>
      }
    </div>
  </div>
);

LongTermDebt.propTypes = {
  total: PropTypes.number.isRequired,
  limit: PropTypes.number.isRequired,
  change: PropTypes.number.isRequired
};

export default LongTermDebt;
