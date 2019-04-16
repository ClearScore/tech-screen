import React from 'react';
import PropTypes from 'prop-types';

import bemHelper from '../../utils/bem';

import './creditScore.scss';

const cn = bemHelper({ block: 'creditscore' });

const CreditScore = (props) => (
  <div className={cn(null, 'main')}>
    Your credit score is
    <div className={cn('score')}>
      {props.score}
    </div>
    out of <span className={cn('max')}>{props.max}</span>
    <div className={cn('band-description')}>
      {props.bandDescription}
    </div>
  </div>
);

CreditScore.propTypes = {
  score: PropTypes.number.isRequired,
  max: PropTypes.number.isRequired,
  bandDescription: PropTypes.string.isRequired,
};

export default CreditScore;
