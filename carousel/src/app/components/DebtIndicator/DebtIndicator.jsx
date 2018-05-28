import React from 'react';
import styled from 'styled-components';

const SmallText = styled.p`
  font-size: 1.2rem;
  color: #fff;
  margin-bottom: 5px;
  @media only screen and (min-width: 768px) {
    font-size: 1.8rem;
  }
`;

const BigText = styled.p`
  font-size: 4rem;
  color: lightskyblue;
  font-weight: bolder;
  margin-bottom: 5px;
  @media only screen and (min-width: 992px) {
    font-size: 4.5rem;
  }
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
