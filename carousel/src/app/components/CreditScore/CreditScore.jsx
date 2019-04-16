import React from 'react';
import PropTypes from 'prop-types';

import bemHelper from '../../utils/bem';

import './creditScore.scss';

const cn = bemHelper({ block: 'creditscore' });

const CreditScore = (props) => {
  const dashArray = 250;
  let dashOffset = 250;
  if (props.max !== 0) {
    dashOffset = dashOffset - dashOffset * (Math.abs(props.score) / Math.abs(props.max));
  }
  return (
    <div className={cn(null, 'main')}>
      <div className={cn('progress-bar')}>
        <svg viewBox='0 0 100 100'>
          <circle cx='50' cy='50' r='48'
            fill='transparent'
            stroke-width='1'
            stroke-dasharray={dashArray}
            stroke-dashoffset={dashOffset}
          />
        </svg>
      </div>
      Your credit score is
      <div className={cn('score')}>
        {props.score}
      </div>
      out of <span className={cn('max')}>{props.max}</span>
      <div className={cn('band-description')}>
        {props.bandDescription}
      </div>
    </div>
  )
};

CreditScore.propTypes = {
  score: PropTypes.number.isRequired,
  max: PropTypes.number.isRequired,
  bandDescription: PropTypes.string.isRequired,
};

export default CreditScore;
