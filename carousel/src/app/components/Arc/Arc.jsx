import React, { Component } from 'react';
import styled from 'styled-components';
import * as d3 from 'd3';
import root from 'window-or-global';

export default class Arc extends Component {
  componentDidMount() {
    this.renderArc();
    // window.addEventListener('resize', this.drawArc);
  }
  renderArc = () => {
    // const context = this.setContext();
    this.setBackground(this.setContext());
    this.setForeground(this.setContext());
  };

  setContext = () => {
    let size = 500;
    // let size = this.calcuateWidth();
    return d3
      .select(this.refs.arc)
      .append('svg')
      .attr('height', size)
      .attr('width', size)
      .attr('id', 'd3-arc')
      .append('g')
      .attr('transform', `translate(${size / 2}, ${size / 2})`);
  };

  arc = () => {
    let size = this.props.size;
    console.log(size, typeof size);
    return d3
      .arc()
      .innerRadius(size / 2 - 10)
      .outerRadius(size / 2)
      .startAngle(0);
  };

  setBackground = context => {
    let tau = Math.PI * 2;
    return context
      .append('path')
      .datum({ endAngle: this.tau })
      .style('fill', 'transparent')
      .attr('d', this.arc());
  };

  setForeground = context => {
    // const score = this.props.score;
    return context
      .append('path')
      .datum({ endAngle: this.tau * this.props.score / 700 })
      .style('fill', 'blue')
      .attr('d', this.arc());
  };
  // calcuateWidth = () => {
  //   let size;
  //   if (992 < root.window.innerWidth) size = 500;
  //   else if (768 < root.window.innerWidth) size = 400;
  //   else size = 300;
  //   return size;
  // };
  render() {
    return <div ref="arc" className="arc" />;
  }
}
