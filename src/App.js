import Intro from "./components/Intro";
import About from "./components/About";
import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";

function App() {
  return (
    <React.Fragment>
      <Router>
        <div className="wrapper">
          <ul className="bg-bubbles">
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
          </ul>
        </div>
        <Switch>
          <Route exact path="/" component={Intro} />
          <Route exact path="/about" component={About} />
        </Switch>
      </Router>
    </React.Fragment>
  );
}

export default App;
