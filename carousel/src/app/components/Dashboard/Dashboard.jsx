import React, { Component } from 'react';
import ScoreIndicator from '../ScoreIndicator/ScoreIndicator';
import DebtIndicator from '../DebtIndicator/DebtIndicator';
import creditReport from '../../creditReport';
import './dashboard.scss';

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
    return <div className="container-sliders">{this.renderSlides()}</div>;
  }
}
export default Dashboard;
