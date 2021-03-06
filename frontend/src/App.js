import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { connect } from "react-redux";
import "./App.css";

import LoginContainer from "./containers/LoginContainer";
import SignupContainer from "./containers/SignupContainer";
import TripMapContainer from "./containers/TripMapContainer";
import AppBar from "./containers/AppBarContainer";

class App extends Component {
  render() {
    return (
      <Router>
        <AppBar />
        {this.props.user.token === "" ? (
          <div>
            <Route path="/login" component={LoginContainer} />
            <Route path="/signup" component={SignupContainer} />
          </div>
        ) : (
          <div>
            <Route path="/map" component={TripMapContainer} />
          </div>
        )}
      </Router>
    );
  }
}

const mapStateToProps = state => {
  return state;
};

export default connect(mapStateToProps)(App);
