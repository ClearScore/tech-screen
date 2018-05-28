import React, { Component } from 'react';
import * as d3 from 'd3';
class ProgressArc extends Component {
  componentDidMount() {
    const context = this.setContext();
    this.setBackground(context);
    this.setForeground(context);
  }
  setContext() {
    return d3
      .select(this.refs.arc)
      .append('svg')
      .attr('height', '500px')
      .attr('width', '500px')
      .attr('id', 'd3-arc')
      .append('g')
      .attr('transform', `translate(250, 250)`);
  }
  setBackground(context) {
    return context
      .append('path')
      .datum({ endAngle: this.tau })
      .style('fill', 'black')
      .attr('d', this.arc());
  }
  tau = Math.PI * 2;
  arc() {
    return d3
      .arc()
      .innerRadius(140)
      .outerRadius(150)
      .startAngle(0);
  }
  setForeground(context) {
    return context
      .append('path')
      .datum({ endAngle: this.tau * 507 / 700 })
      .style('fill', 'red')
      .attr('d', this.arc());
  }
  render() {
    return <div ref="arc" className="progressArc" />;
  }
}
export default ProgressArc;
