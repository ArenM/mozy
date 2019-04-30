import React, { Component } from "react";
import LoginPage from "../components/LoginPage";
import Auth from "../utils/Auth";

class LoginContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      user: {
        email: "",
        password: ""
      },
      error: {}
    };
    this.formChange = this.formChange.bind(this);
    this.submit = this.submit.bind(this);
  }

  submit(e) {
    e.preventDefault();
    Auth.authenticate(
      this.state.user.email,
      this.state.user.password,
      (secuss, _) => {
        if (secuss) {
          this.props.history.push("/");
        }
      }
    );
  }

  formChange(e) {
    const user = this.state.user;
    user[e.target.name] = e.target.value;

    this.setState({ user });
  }

  render() {
    return (
      <LoginPage
        onSubmit={this.submit}
        onChange={this.formChange}
        user={this.state.user}
      />
    );
  }
}

export default LoginContainer;
