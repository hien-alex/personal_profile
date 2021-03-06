import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import MainPage from "../Pages/Main";
import Projects from "../Pages/Projects";
import AboutMe from "../Pages/AboutMe";
import ContactMe from "../Pages/Contact";
import React, { Component } from "react";
import CssBaseline from "@material-ui/core/CssBaseline";
import NavSideBar from "../components/Nav/NavSideBar";
import HeroSection from "../components/Hero/HeroSection";
import About from "../components/About/About";
import ProjectsSection from "../components/Projects/ProjectsSection";
import ContactSection from "../components/Contact/ContactSection";
import Home from "../components/Home";

export default class App extends Component {
  render() {
    return (
      <div>
        <CssBaseline />
        <Router>
          <Route exact path="/" component={Home}></Route>
          {/* <Switch>
            <Route path="/about" component={AboutMe} />
            <Route path="/projects" component={Projects} />
            <Route path="/contact" component={ContactMe} />
            <Route exact path="/" component={MainPage} />
          </Switch> */}
        </Router>
      </div>
    );
  }
}
