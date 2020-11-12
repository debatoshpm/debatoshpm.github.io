import React, { Component } from "react";
import Nav from "./Nav";
import Navbar from "./Navbar";
import "./Skill.css";
import Meter from "./Meter";

class Skill extends Component {
  render() {
    return (
      <React.Fragment>
        <Nav />
        <Navbar />
        <div className="m-5">
          <div className="abouthead text-center">Skills</div>
          <div className="aboutcontent text-center">...</div>
        </div>
        <div className="container">
          <div className="row">
            <div className="col-md-4">
              <Meter data={{ value: 10 }} />
              <p className="text-center restfont mt-2 mb-2">HTML</p>
            </div>
            <div className="col-md-4">
              <Meter data={{ value: 10 }} />
              <p className="text-center restfont mt-2 mb-2">HTML</p>
            </div>
            <div className="col-md-4">
              <Meter data={{ value: 10 }} />
              <p className="text-center restfont mt-2 mb-2">HTML</p>
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default Skill;
