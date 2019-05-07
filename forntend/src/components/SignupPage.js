import React from "react";
import PropTypes from "prop-types";

const LoginPage = ({ onSubmit, onChange, user, errors }) => (
  <div>
    <span style={{ color: "red" }}>{errors[0]}</span>
    <form action="/" onSubmit={onSubmit}>
      <div>
        <label>name</label>
        <input type="text" value={user.name} onChange={onChange} name="name" />
      </div>
      <div>
        <label>Email</label>
        <input
          type="email"
          value={user.email}
          onChange={onChange}
          name="email"
        />
      </div>
      <div>
        <label>Password</label>
        <input
          type="password"
          value={user.password}
          onChange={onChange}
          name="password"
        />
      </div>
      <button type="submit">Signup</button>
    </form>
  </div>
);

LoginPage.propTypes = {
  onSubmit: PropTypes.func.isRequired,
  onChange: PropTypes.func.isRequired,
  user: PropTypes.shape({
    email: PropTypes.string.isRequired,
    password: PropTypes.string.isRequired
  }),
  errors: PropTypes.arrayOf(PropTypes.string)
};

export default LoginPage;
