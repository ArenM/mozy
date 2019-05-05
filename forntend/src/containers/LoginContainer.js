import React, { Component } from "react";
import LoginPage from "../components/LoginPage";
import Auth from "../utils/Auth";

import { connect } from "react-redux";
import { changeToken } from "../actions/userActions";

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
      (status, user) => {
        if (status === true) {
          this.props.setToken(user.authentication_token);
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

const mapStateToProps = _ => ({});
const mapDispatchToPorps = dispatch => ({
  setToken(token) {
    dispatch(changeToken(token));
  }
});

export default connect(
  mapStateToProps,
  mapDispatchToPorps
)(LoginContainer);
