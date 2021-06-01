import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import MainPage from "../Pages/Main";
import Projects from "../Pages/Projects";
import AboutMe from "../Pages/AboutMe";
import ContactMe from "../Pages/Contact";
import React, { Component } from "react";
import NavBar from "../components/NavBar";
import CssBaseline from "@material-ui/core/CssBaseline";

export default class App extends Component {
  render() {
    return (
      <div>
        <CssBaseline />
        <Router>
          <NavBar />
          <Switch>
            <Route path="/AboutMe" component={AboutMe} />
            <Route path="/Projects" component={Projects} />
            <Route path="/Contact" component={ContactMe} />
            <Route path="/" component={MainPage} />
          </Switch>
        </Router>
      </div>
    );
  }
}
