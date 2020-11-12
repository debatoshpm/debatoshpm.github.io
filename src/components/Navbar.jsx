import React from "react";
import $ from "jquery";

function onBurger() {
  $(".page").addClass("menu-show");
  $(".cross").addClass("show");
  $(".plus").addClass("hide");
}

function Navbar() {
  const width = window.screen.availWidth;
  return (
    <header className="pt-5">
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <div className="colorlib-navbar-brand">
              <div className="colorlib-logo introname">
                {width >= 436 && "Debatosh Pal Majumder"}
                {width < 436 && "DPM"}
              </div>
            </div>
            <div
              className="pt-2 js-colorlib-nav-toggle colorlib-nav-toggle plus"
              onClick={onBurger}
            >
              <i></i>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Navbar;
