// const size = root.window.innerWidth < 768 ? (992 ? '500' : '400') : '300';

import React, { Component } from 'react';
import styled from 'styled-components';
import * as d3 from 'd3';
import root from 'window-or-global';
import ScoreIndicator from './ScoreIndicator/ScoreIndicator';
import DebtIndicator from './DebtIndicator/DebtIndicator';

class Carousel extends Component {
  state = {
    index: 0
  };

  componentDidMount() {
    window.setInterval(this.changeSlide, 3000);
    this.drawArc();
  }

  changeSlide = () => {
    let index = this.state.index === 0 ? 1 : 0;
    this.setState({ index });
  };

  drawArc = () => {
    const context = this.setContext();
    this.setBackground(context);
    this.setForeground(context);
  };

  calcuateWidth = () => {
    let size;
    if (992 < root.window.innerWidth) size = 500;
    else if (768 < root.window.innerWidth) size = 400;
    else size = 300;
    return size;
  };

  renderSlides = () => {
    if (this.state.index === 0)
      return <ScoreIndicator score={this.props.score} />;
    else return <DebtIndicator debt={this.props.debt} />;
  };

  setContext() {
    let size = this.calcuateWidth();
    return d3
      .select(this.refs.arc)
      .append('svg')
      .attr('height', size)
      .attr('width', size)
      .attr('id', 'd3-arc')
      .append('g')
      .attr('transform', `translate(${size / 2}, ${size / 2})`);
  }
  setBackground(context) {
    return context
      .append('path')
      .datum({ endAngle: this.tau })
      .style('fill', 'transparent')
      .attr('d', this.arc());
  }

  tau = Math.PI * 2;

  arc() {
    let size = this.calcuateWidth();
    return d3
      .arc()
      .innerRadius(size / 2 - 5)
      .outerRadius(size / 2)
      .startAngle(0);
  }
  setForeground(context) {
    const score = this.props.score;
    return context
      .append('path')
      .datum({ endAngle: this.tau * score / 700 })
      .style('fill', 'blue')
      .attr('d', this.arc());
  }
  render() {
    return (
      <div className="carousel">
        <div ref="arc" className="arc" />
        {this.renderSlides()}
      </div>
    );
  }
}

export default Carousel;
