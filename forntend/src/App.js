import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { connect } from "react-redux";
import "./App.css";

import LoginContainer from "./containers/LoginContainer";
import SignupContainer from "./containers/SignupContainer";
import AppBar from "./containers/AppBarContainer";

class App extends Component {
  render() {
    return (
      <Router>
        <AppBar />
        {this.props.user.token === "" ? (
          <div>
            <Route path="/login" component={LoginContainer} />
          </div>
        ) : (
          <div>
            <p>Congratulations! you're logged in</p>
            <p>Your key is: {this.props.user.token}</p>
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
