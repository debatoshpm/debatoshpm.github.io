import React from "react";
import $ from "jquery";

function onBurger() {
  $(".page").addClass("menu-show");
  $(".cross").addClass("show");
  $(".plus").addClass("hide");
  $("#button").addClass("hide");
}

function Navbar() {
  const width = window.screen.availWidth;
  return (
    <header className="pt-4">
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <div className="navbar-brand">
              <div className="logo introname">
                {width >= 436 && "Debatosh Pal Majumder"}
                {width < 436 && "DPM"}
              </div>
            </div>
            <div
              className="pt-2 js-nav-toggle nav-toggle plus"
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
