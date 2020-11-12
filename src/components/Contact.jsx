import React from "react";
import Nav from "./Nav";
import Navbar from "./Navbar";

function Contact() {
  return (
    <React.Fragment>
      <Nav />
      <Navbar />
      <div className="m-5">
        <div className="abouthead text-center">Contact Me</div>
        <div className="aboutcontent text-center">...</div>
      </div>
      <div className="text-center restfont">
        If you like my work and have some cool project to work on, just send me
        direct message or contact me through social sites listed below.
      </div>
      <div className="text-center p-5 container">
        <i class="fab fa-linkedin fa-7x ml-5 mr-5 maincontent icn"></i>
        <i class="fab fa-github-square fa-7x ml-5 mr-5 maincontent icn"></i>
        <i class="fas fa-envelope-square fa-7x ml-5 mr-5 maincontent icn"></i>
      </div>
    </React.Fragment>
  );
}
export default Contact;
