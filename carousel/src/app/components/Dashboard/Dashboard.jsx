import React from "react";
import "./dashboard.scss";
import { hasWindow } from "../../utils";
class Dashboard extends React.Component {
  state = {
    creditReport: []
  };
  componentDidMount() {
    setTimeout(() => {
      this.setState(
        {
          creditReport: hasWindow ? window.__INITIAL_DATA__ || [] : []
        },
        state => {
          console.log(this.state);
        }
      );
    }, 0);
  }

  render() {
    const { creditReportInfo } = this.state.creditReport;
    return <div>{creditReportInfo && creditReportInfo.score}</div>;
  }
}

export default Dashboard;
