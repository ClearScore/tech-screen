import React from 'react';
import styled from 'styled-components';
import './debtIndicator.scss';

const SmallText = styled.p`
  font-size: 1.5rem;
  color: #fff;
  margin-bottom: 5px;
`;

const BigText = styled.p`
  font-size: 4.5rem;
  color: powderblue;
  font-weight: bolder;
  margin-bottom: 5px;
`;

const DebtIndicator = props => {
  return (
    <div className="container-circle">
      <div className="container-text">
        <SmallText>Your long term debt total</SmallText>
        <BigText> &pound; {props.debt}</BigText>
        <SmallText>Total credit limit 0</SmallText>
      </div>
    </div>
  );
};

export default DebtIndicator;
