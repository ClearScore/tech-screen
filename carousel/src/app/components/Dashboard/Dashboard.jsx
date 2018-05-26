import React, { Component } from 'react';

import './dashboard.scss';

class Dashboard extends Component {
  state = {
    initial: false
  };
  render() {
    const score = 'score';
    const debt = 'debt';
    let content;
    if (this.state.initial) content = score;
    else content = debt;
    return <div>hello, I have{content}</div>;
  }
}

export default Dashboard;
