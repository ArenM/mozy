class Auth {
  static setKey(key) {
    sessionStorage.setItem("auth_key", key);
    return key;
  }

  static getKey() {
    return sessionStorage.getItem("auth_key");
  }

  static authenticated() {
    return sessionStorage.getItem("auth_key") !== null;
  }

  /**
   * gets authentication key from server
   * @param {String} email the email of the user
   * @param {String} password the users password
   * @param {Function} callback called with error, and the user object or the error message
   **/
  static authenticate(email, password, callback) {
    fetch("http://localhost:5000/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        email: email,
        password: password
      })
    })
      .then(d => d.json())
      .then(r => {
        if (r.meta.code === 200) {
          callback(true, r.response.user);
          return this.setKey(r.response.user.authentication_token);
        } else if (r.meta.code === 400) {
          callback(false, { error: r.response.errors });
        }
      })
      .catch(e => callback(false, e));
  }

  static LogOut() {
    sessionStorage.removeItem("auth_key");
  }
}

export default Auth;
