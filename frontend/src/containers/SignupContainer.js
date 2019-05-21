import React, { Component } from "react"
import SignupPage from "../components/SignupPage"

import { connect } from "react-redux"
import { register } from "../actions/userActions"

class LoginContainer extends Component {
  constructor(props) {
    super(props)
    this.state = {
      user: {
        name: "",
        email: "",
        password: "",
      },
      error: {},
    }
    this.formChange = this.formChange.bind(this)
    this.submit = this.submit.bind(this)
  }

  submit(e) {
    e.preventDefault()
    this.props.register(
      this.state.user.name,
      this.state.user.email,
      this.state.user.password
    )
  }

  formChange(e) {
    const user = this.state.user
    user[e.target.name] = e.target.value

    this.setState({ user })
  }

  render() {
    return (
      <SignupPage
        onSubmit={this.submit}
        onChange={this.formChange}
        errors={this.props.errors}
        user={this.state.user}
      />
    )
  }
}

const mapStateToProps = state => ({ errors: state.errors.auth_errors })
const mapDispatchToPorps = dispatch => ({
  register(name: String, email: String, password: String) {
    dispatch(register(name, email, password))
  },
})

export default connect(
  mapStateToProps,
  mapDispatchToPorps
)(LoginContainer)
