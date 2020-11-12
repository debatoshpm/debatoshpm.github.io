import React from "react";
import Nav from "./Nav";
import Navbar from "./Navbar";

function About() {
  return (
    <React.Fragment>
      <Nav />
      <Navbar />
      <div className="containerText">
        <div className="abouthead">About Me</div>
        <div className="aboutcontent">
          Hi I am Debatosh Pal Majumder. I am a student of Netaji Subhash
          Engineering College.
        </div>
      </div>
    </React.Fragment>
  );
}

export default About;
