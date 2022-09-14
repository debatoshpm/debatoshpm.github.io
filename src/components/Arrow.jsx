import React from "react";
import { Link } from "react-router-dom";
import "./Arrow.css";

export default function Arrow(props) {
  return (
    <div id="button">
      <Link to={props.value.to} className="animated-arrow">
        <span className="the-arrow -left">
          <span className="shaft"></span>
        </span>
        <span className="main">
          <span className="text">Next</span>
          <span className="the-arrow -right">
            <span className="shaft"></span>
          </span>
        </span>
      </Link>
    </div>
  );
}
