class Auth {
  static setKey(key) {
    localStorage.setItem("auth_key", key);
  }

  static getKey() {
    return localStorage.getItem("auth_key");
  }

  static authenticated() {
    return localStorage.getItem("auth_key") !== null;
  }

  static LogOut() {
    localStorage.removeItem("auth_key");
  }
}

export default Auth;
