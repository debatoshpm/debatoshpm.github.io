import React, { Component } from "react";
import Nav from "./Nav";
import Navbar from "./Navbar";
import "./Skill.css";
import Meter from "./Meter";
import Arrow from "./Arrow";

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
              <Meter data={{ value: 60 }} />
              <p className="text-center restfont mt-2 mb-2">C/C++</p>
            </div>
            <div className="col-md-4 mt-4">
              <Meter data={{ value: 60 }} />
              <p className="text-center restfont mt-2 mb-2">
                HTML CSS SASS JS PHP MySQL
              </p>
            </div>
            <div className="col-md-4 mt-4">
              <Meter data={{ value: 60 }} />
              <p className="text-center restfont mt-2 mb-2">
                MERN (CRA & Next.js)
              </p>
            </div>
            <div className="col-md-4 mt-4">
              <Meter data={{ value: 60 }} />
              <p className="text-center restfont mt-2 mb-2">
                Blockchain Web3 with Solidity
              </p>
            </div>
            <div className="col-md-4 mt-4">
              <Meter data={{ value: 60 }} />
              <p className="text-center restfont mt-2 mb-2">Python</p>
            </div>
            <div className="col-md-4 mt-4">
              <Meter data={{ value: 50 }} />
              <p className="text-center restfont mt-2 mb-2">
                SciPy ScikitLearn OpenCV
              </p>
            </div>
          </div>
          <Arrow value={{ to: "/contact" }} />
        </div>
        <br />
        <br />
      </React.Fragment>
    );
  }
}

export default Skill;
