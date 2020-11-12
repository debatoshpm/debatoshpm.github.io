import React, { Component } from "react";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";

export default class Meter extends Component {
  render() {
    return (
      <div className="meter">
        <CircularProgressbar
          value={this.props.data.value}
          text={`${this.props.data.value}%`}
          styles={buildStyles({
            pathTransitionDuration: 0.15,
            textColor: "#fffffe",
            pathColor: "#fffffe",
            trailColor: "#353535",
          })}
        />
      </div>
    );
  }
}
