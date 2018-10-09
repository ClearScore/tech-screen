import React from "react";
import "./dashboard.scss";
import { hasWindow } from "../../utils";
import Carousel from "nuka-carousel";
import DashboardCarousel from "./DashboardCarousel";
import bemHelper from "../../utils/bem";
const cn = bemHelper({ block: "dashboard" });

class Dashboard extends React.Component {
  state = {
    creditReport: []
  };
  
  /* populate state with creditReport */
  componentDidMount = () => {
    setTimeout(() => {
      this.setState({
        creditReport: hasWindow ? window.__INITIAL_DATA__ || [] : []
      });
    }, 0);
  };

  render() {
    const { creditReportInfo } = this.state.creditReport;
    return (
      <section data-test-dashboard="true" className={cn(null, "main")}>
        {creditReportInfo && (
          <DashboardCarousel creditReport={creditReportInfo} />
        )}
        {!creditReportInfo && <h1 data-test-no-report="true">No Data!</h1>}
      </section>
    );
  }
}

export default Dashboard;
