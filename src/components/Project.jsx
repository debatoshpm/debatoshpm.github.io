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
      <div className="container">
        <div className="mt-2">
          <div className="restfont">1. Testing the website</div>
          <div className="mt-2 text-center">
            <a href="www.google.com">
              <button type="button" className="btn btn-light mr-1 maincontent">
                Visit
              </button>
            </a>
            <a href="www.google.com">
              <button type="button" className="btn btn-light ml-1 maincontent">
                Repository
              </button>
            </a>
          </div>
        </div>
        <div className="mt-4">
          <div className="restfont">2. Testing the website</div>
          <div className="mt-2 text-center">
            <button type="button" className="btn btn-light mr-1 maincontent">
              Visit
            </button>
            <button type="button" className="btn btn-light ml-1 maincontent">
              Repository
            </button>
          </div>
        </div>
        <div className="mt-4">
          <div className="restfont">3. Testing the website</div>
          <div className="mt-2 text-center">
            <button type="button" className="btn btn-light mr-1 maincontent">
              Visit
            </button>
            <button type="button" className="btn btn-light ml-1 maincontent">
              Repository
            </button>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}
