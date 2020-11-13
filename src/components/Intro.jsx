import React, { Component } from "react";
import Nav from "./Nav";
import Navbar from "./Navbar";
import Typed from "typed.js";

class Intro extends Component {
  componentDidMount() {
    const strings = [
      "Full Stack Developer",
      "Coder",
      "AI ML Enthusiast",
      "Cloud Enthusiast",
    ];
    const options = {
      strings: strings,
      typeSpeed: 50,
      backSpeed: 50,
      startDelay: 1000,
      cursorChar: "_",
      loop: true,
    };
    this.typed = new Typed(this.el, options);
  }

  componentWillUnmount() {
    this.typed.destroy();
  }
  render() {
    return (
      <React.Fragment>
        <Nav />
        <Navbar />
        <div className="containerText">
          <div className="up">Hi I am</div>
          <div className="down">Debatosh Pal Majumder</div>
          <div className="up type-wrap">
            <span
              ref={(el) => {
                this.el = el;
              }}
            />
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default Intro;
