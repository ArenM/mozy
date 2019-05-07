import React, { Component } from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import LoginContainer from "./containers/LoginContainer";
import "./App.css";

import { connect } from "react-redux";
import { deleteToken } from "./actions/userActions";

import AppBar from "./components/AppBar";
import { Button } from "@material-ui/core";

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
          <AppBar />
          {this.props.user.token === "" ? (
            <div>
              <Link to="/login">Login</Link>
              <Route path="/login" component={LoginContainer} />
            </div>
          ) : (
            <div>
              <Button onClick={this.props.deleteToken}>Logout</Button>
              <p>Congratulations! you're logged in</p>
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

const mapDispatchToProps = dispatch => ({
  deleteToken() {
    dispatch(deleteToken());
  }
});
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
