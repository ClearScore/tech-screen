import React from "react";
import Moment from "react-moment";

export default class momentComponent extends React.Component {
  render() {
    const date = new Date();

    return (
      <div>
        <Moment fromNow>
          {this.props.dateToCompare}
        </Moment>
      </div>
    );
  }
}
