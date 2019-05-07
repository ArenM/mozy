import React, { Component } from "react";
import AppBar from "../components/AppBar";

import { connect } from "react-redux";
import { deleteToken } from "../actions/userActions";

class LoginContainer extends Component {
  render() {
    return (
      <AppBar
        authenticated={this.props.authenticated}
        logOut={this.props.deleteToken}
      />
    );
  }
}

const mapStateToProps = state => ({ authenticated: state.user.token !== "" });
const mapDispatchToPorps = dispatch => ({
  deleteToken(token) {
    dispatch(deleteToken(token));
  }
});

export default connect(
  mapStateToProps,
  mapDispatchToPorps
)(LoginContainer);
