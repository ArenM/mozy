import React, { Component } from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import LoginContainer from "./containers/LoginContainer";
import Auth from "./utils/Auth";
import "./App.css";

class App extends Component {
  render() {
    return (
      <div>
        <Router>
          <h1>Hello</h1>
          {!Auth.authenticated() ? (
            <div>
              <Link to="/login">Login</Link>
              <Route path="/login" component={LoginContainer} />
            </div>
          ) : (
            <div>
              <button onClick={Auth.LogOut}>Logout</button>
              <p>Congradulations! you're loged in</p>
              <p>Your key is: {Auth.getKey()}</p>
            </div>
          )}
        </Router>
      </div>
    );
  }
}

export default App;
