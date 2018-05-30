import React, { Component } from 'react';
import styled from 'styled-components';
import Carousel from './../Carousel/Carousel';
import root from 'window-or-global';
import creditReport from '../../creditReport';
import './dashboard.scss';

const details = creditReport.creditReport.creditReportInfo;

class Dashboard extends Component {
  render() {
    return (
      <div className="dashboard">
        <Carousel score={details.score} debt={details.currentLongTermDebt} />
      </div>
    );
  }
}
export default Dashboard;
