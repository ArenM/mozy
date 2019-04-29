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
    fetch("http://localhost:5000/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        email: this.state.user.email,
        password: this.state.user.password
      })
    })
      .then(d => d.json())
      .then(r => {
        if (r.meta.code === 200) {
          Auth.setKey(r.response.user.authentication_token);
        } else if (r.meta.code === 400) {
          this.setState({ error: r.response.errors });
          this.props.history.push("/");
        }
      })
      .catch(e => console.log(e));
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
