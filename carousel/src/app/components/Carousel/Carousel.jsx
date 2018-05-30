import React, { Component } from 'react';
import styled from 'styled-components';
import root from 'window-or-global';
import ScoreIndicator from './../ScoreIndicator/ScoreIndicator';
import DebtIndicator from './../DebtIndicator/DebtIndicator';
import Arc from './../Arc/Arc';

class Carousel extends Component {
  state = {
    index: 0
  };
  componentDidMount() {
    window.setInterval(this.changeSlide, 3000);
  }
  changeSlide = () => {
    let index = this.state.index === 0 ? 1 : 0;
    this.setState({ index });
  };
  renderSlides = () => {
    if (this.state.index === 0)
      return <ScoreIndicator score={this.props.score} />;
    else return <DebtIndicator debt={this.props.debt} />;
  };
  render() {
    // const size = 500;
    const score = this.props.score;
    return (
      <div className="carousel">
        {/* <Arc size={size} score={score} /> */}
        {this.renderSlides()}
      </div>
    );
  }
}

export default Carousel;
