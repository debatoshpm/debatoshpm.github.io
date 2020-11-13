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
        <div className="mt-5">
          <div className="abouthead text-center">Skills</div>
          <div className="aboutcontent text-center">...</div>
        </div>
        <div className="container">
          <div className="row">
            <div className="col-md-4 mt-4">
              <Meter data={{ value: 70 }} />
              <p className="text-center restfont mt-2 mb-2">C/C++</p>
            </div>
            <div className="col-md-4 mt-4">
              <Meter data={{ value: 90 }} />
              <p className="text-center restfont mt-2 mb-2">
                HTML CSS SASS JS PHP MySQL
              </p>
            </div>
            <div className="col-md-4 mt-4">
              <Meter data={{ value: 80 }} />
              <p className="text-center restfont mt-2 mb-2">MERN</p>
            </div>
            <div className="col-md-4 mt-4">
              <Meter data={{ value: 80 }} />
              <p className="text-center restfont mt-2 mb-2">
                Bootstrap MaterialUI
              </p>
            </div>
            <div className="col-md-4 mt-4">
              <Meter data={{ value: 80 }} />
              <p className="text-center restfont mt-2 mb-2">Python</p>
            </div>
            <div className="col-md-4 mt-4">
              <Meter data={{ value: 60 }} />
              <p className="text-center restfont mt-2 mb-2">
                SciPy ScikitLearn OpenCV
              </p>
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default Skill;
