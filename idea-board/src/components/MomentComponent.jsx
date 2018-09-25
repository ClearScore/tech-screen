import React from 'react';
import PropTypes from 'prop-types';
import Moment from 'react-moment';

const momentComponent = ({ dateToCompare }) => (
  <div>
    <Moment fromNow>
      {dateToCompare}
    </Moment>
  </div>
);
momentComponent.propTypes = {
  dateToCompare: PropTypes.instanceOf(Date).isRequired,
};
export default momentComponent;
