import React from "react";
import "./dashboardCarousel.scss";
import Carousel from "nuka-carousel";
import bemHelper from "../../utils/bem";
import PropTypes from "prop-types";
import Dashboard from "./Dashboard";

const cn = bemHelper({ block: "carousel" });
class DashboardCarousel extends React.Component {
  state = {};

  render() {
    const { creditReport } = this.props;
    return (
      creditReport && (
        <Carousel className={cn(null, "container")}>
          <div className={cn(null, "slide")}>
            <div className={cn(null, "slide-text")}>
              <h1 className="padding-0 margin-0">
                Credit Score: {creditReport.score}
              </h1>
            </div>
          </div>
          <div className={cn(null, "slide")}>
            <div className={cn(null, "slide-text")}>
              <h1 className="padding-0 margin-0">
                Long term debt: ${creditReport.currentLongTermDebt}
              </h1>
            </div>
          </div>
        </Carousel>
      )
    );
  }
}

DashboardCarousel.propTypes = {
  creditReport: PropTypes.object.isRequired
};

export default DashboardCarousel;
