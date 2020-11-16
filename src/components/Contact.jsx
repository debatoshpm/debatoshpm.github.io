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
        <a href="https://www.linkedin.com/in/debatosh-pal-majumder-235496189/">
          <i class="fab fa-linkedin fa-7x ml-5 mr-5 maincontent icn"></i>
        </a>
        <a href="https://github.com/debatoshpm">
          <i class="fab fa-github-square fa-7x ml-5 mr-5 maincontent icn"></i>
        </a>
        <a href="mailto:debatoshpm@gmail.com">
          <i class="fas fa-envelope-square fa-7x icn maincontent ml-5 mr-5"></i>
        </a>
      </div>
    </React.Fragment>
  );
}
export default Contact;
