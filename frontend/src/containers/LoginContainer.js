import React, { Component } from "react";
import LoginPage from "../components/LoginPage";

import { connect } from "react-redux";
import { changeToken, authenticate } from "../actions/userActions";

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
    this.formSubmit = this.formSubmit.bind(this);
  }

  formSubmit(e) {
    e.preventDefault();
    this.props.authenticate(this.state.user.email, this.state.user.password);
  }

  formChange(e) {
    const user = this.state.user;
    user[e.target.name] = e.target.value;

    this.setState({ user });
  }

  render() {
    return (
      <LoginPage
        onSubmit={this.formSubmit}
        onChange={this.formChange}
        errors={this.props.errors}
        user={this.state.user}
      />
    );
  }
}

const mapStateToProps = state => ({ errors: state.errors.auth_errors });
const mapDispatchToPorps = dispatch => ({
  setToken(token) {
    dispatch(changeToken(token));
  },
  authenticate(email: String, password: String) {
    dispatch(authenticate(email, password));
  }
});

export default connect(
  mapStateToProps,
  mapDispatchToPorps
)(LoginContainer);
