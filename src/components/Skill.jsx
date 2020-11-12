import React, { Component } from "react";
import Nav from "./Nav";
import Navbar from "./Navbar";
import "./Skill.css";

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
      </React.Fragment>
    );
  }
}

export default Skill;
