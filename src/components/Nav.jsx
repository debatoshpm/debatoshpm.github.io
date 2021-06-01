import React from "react";
import $ from "jquery";
import { Link } from "react-router-dom";

function onCross() {
  $(".page").removeClass("menu-show");
  $(".plus").removeClass("hide");
  $(".cross").removeClass("show");
  $("#button").removeClass("hide");
}

function Nav() {
  const style = { height: "100vh" };
  const path = window.location.pathname;
  return (
    <div className="page">
      <nav id="main-nav" role="navigation">
        <div
          className="js-nav-toggle nav-toggle active cross"
          onClick={onCross}
        >
          <i></i>
        </div>
        <div className="js-fullheight table" style={style}>
          <div className="table-cell js-fullheight" style={style}>
            <div className="row no-gutters">
              <div className="col-md-12 text-center">
                <h1 className="mb-4">
                  <div className="logo">Debatosh Pal Majumder</div>
                </h1>
                <ul>
                  <li className={path === "/" ? "active" : ""}>
                    <Link to="/portfolio/">
                      <span>Home</span>
                    </Link>
                  </li>
                  <li className={path === "/about" ? "active" : ""}>
                    <Link to="/portfolio/about">
                      <span>About</span>
                    </Link>
                  </li>
                  <li className={path === "/project" ? "active" : ""}>
                    <Link to="/portfolio/project">
                      <span>Projects</span>
                    </Link>
                  </li>
                  <li className={path === "/skill" ? "active" : ""}>
                    <Link to="/portfolio/skill">
                      <span>Skills</span>
                    </Link>
                  </li>
                  <li className={path === "/contact" ? "active" : ""}>
                    <Link to="/portfolio/contact">
                      <span>Contact</span>
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Nav;
