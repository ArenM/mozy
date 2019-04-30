import React, { Component } from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import LoginContainer from "./containers/LoginContainer";
import Auth from "./utils/Auth";
import "./App.css";

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      key: "",
      authenticated: false
    };
  }

  componentDidMount() {
    const key = Auth.getKey();
    if (key !== null && key.type === String && this.state.key !== key) {
      this.setState({ key: Auth.getKey(), authenticated: true });
    } else {
      this.setState({ key: "", authenticated: false });
    }
  }

  render() {
    return (
      <div>
        <Router>
          <h1>Hello</h1>
          {!this.state.authenticated ? (
            <div>
              <Link to="/login">Login</Link>
              <Route path="/login" component={LoginContainer} />
            </div>
          ) : (
            <div>
              <button onClick={Auth.LogOut}>Logout</button>
              <p>Congradulations! you're loged in</p>
              <p>Your key is: {this.state.key}</p>
            </div>
          )}
        </Router>
      </div>
    );
  }
}

export default App;
