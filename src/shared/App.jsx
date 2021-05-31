import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import MainPage from "../Pages/Main";
import React, { Component } from "react";

export default class App extends Component {
  render() {
    return (
      <div style={{ padding: "4vh" }}>
        <Route path="/" component={MainPage}></Route>
      </div>
    );
  }
}
