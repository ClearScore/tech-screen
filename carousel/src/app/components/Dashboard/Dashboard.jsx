import React, { Component } from 'react';
import styled from 'styled-components';
import reactFauxDOM from 'react-faux-dom';
import * as d3 from 'd3';
import ScoreIndicator from '../ScoreIndicator/ScoreIndicator';
import DebtIndicator from '../DebtIndicator/DebtIndicator';
import creditReport from '../../creditReport';

import './dashboard.scss';

const Carousel = styled.div`
  text-align: center;
`;

const details = creditReport.creditReport.creditReportInfo;
class Dashboard extends Component {
  state = {
    index: 0
  };
  componentDidMount() {
    window.setInterval(this.changeSlide, 2000);
  }
  changeSlide = () => {
    let index = this.state.index === 0 ? 1 : 0;
    this.setState({ index });
  };
  renderSlides = () => {
    if (this.state.index === 0) return <ScoreIndicator score={details.score} />;
    else return <DebtIndicator debt={details.currentLongTermDebt} />;
  };
  render() {
    return <Carousel className="carousel">{this.renderSlides()}</Carousel>;
  }
}
export default Dashboard;
