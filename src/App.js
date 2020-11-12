import Intro from "./components/Intro";
import About from "./components/About";
import Skill from "./components/Skill";
import Project from "./components/Project";
import Contact from "./components/Contact";
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
          <Route exact path="/skill" component={Skill} />
          <Route exact path="/project" component={Project} />
          <Route exact path="/contact" component={Contact} />
        </Switch>
      </Router>
    </React.Fragment>
  );
}

export default App;
