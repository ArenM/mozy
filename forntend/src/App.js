import React, { Component } from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import LoginContainer from "./containers/LoginContainer";
import Auth from "./utils/Auth";
import "./App.css";

import { connect } from "react-redux";

class App extends Component {
  constructor(props) {
    super(props);

    // this.state = {
    //   key: "",
    //   authenticated: false
    // };
    console.log(this.props.user.token);
  }

  render() {
    return (
      <div>
        <Router>
          <h1>Hello</h1>
          {this.props.user.token === "" ? (
            <div>
              <Link to="/login">Login</Link>
              <Route path="/login" component={LoginContainer} />
            </div>
          ) : (
            <div>
              <button onClick={Auth.LogOut}>Logout</button>
              <p>Congradulations! you're loged in</p>
              <p>Your key is: {this.props.user.token}</p>
            </div>
          )}
        </Router>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return state;
};

const mapDispatchToProps = dispatch => {
  return {};
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
