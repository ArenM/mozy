import * as type from "./actionTypes";
import backendUrl from "../config";

export const changeToken = (token: String) => {
  return {
    type: type.CHANGE_TOKEN,
    token
  };
};

export const deleteToken = () => {
  return {
    type: type.DELETE_TOKEN
  };
};

export const authFailed = (errors: Object) => {
  return {
    type: type.AUTH_FAILED,
    errors
  };
};

export const clearErrors = (errors: Object) => {
  return {
    type: type.CLEAR_ERRORS
  };
};

export const authenticate = (username: String, password: String) => {
  return dispatch => {
    return fetch(`${backendUrl}/login`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        username,
        password
      })
    })
      .then(d => d.json())
      .then(r => {
        if (r.access_token !== undefined) {
          console.log("AUTHENTICATION SUCCESS");
          dispatch(changeToken(r.access_token));
          dispatch(clearErrors());
        } else if (r.status_code === 401) {
          dispatch(authFailed([r.message]));
          console.log("AUTHENTICATION FAILED", r.message);
        } else {
          dispatch(authFailed(["UNKNOWN ERROR"]));
        }
      })
      .catch(e => console.log("HTTP ERROR:", e));
  };
};

export const register = (name: String, email: String, password: String) => {
  return dispatch => {
    return fetch(`${backendUrl}/register`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        email,
        password,
        password_confirm: password
      })
    })
      .then(d => d.json())
      .then(r => {
        if (r.meta.code === 200) {
          dispatch(changeToken(r.response.user.authentication_token));
          dispatch(authFailed({ email: [""], password: [""] }));
        } else if (r.meta.code === 400) {
          dispatch(authFailed(r.response.errors));
          console.log("REGISTRATION FAILED", r.response.errors);
        }
      })
      .catch(e => console.log("HTTP ERROR:", e));
  };
};
