import React from "react";
import Nav from "./Nav";
import Navbar from "./Navbar";

export default function Project() {
  return (
    <React.Fragment>
      <Nav />
      <Navbar />
      <div className="m-5">
        <div className="abouthead text-center">Project</div>
        <div className="aboutcontent text-center">...</div>
      </div>
    </React.Fragment>
  );
}
