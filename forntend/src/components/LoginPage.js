import React from "react";
import PropTypes from "prop-types";

const LoginPage = ({ onSubmit, onChange, user }) => (
  <div>
    <form action="/" onSubmit={onSubmit}>
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
      <button type="submit">Login</button>
    </form>
  </div>
);

LoginPage.propTypes = {
  onSubmit: PropTypes.func.isRequired,
  onChange: PropTypes.func.isRequired,
  user: PropTypes.shape({
    email: PropTypes.string.isRequired,
    password: PropTypes.string.isRequired
  })
};

export default LoginPage;
