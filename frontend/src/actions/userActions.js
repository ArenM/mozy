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

const loginResponce = resp => {
  return dispatch => {
    resp
      .then(r => {
        if (r.access_token !== undefined) {
          console.log("LOGIN SUCCESS");
          dispatch(changeToken(r.access_token));
          dispatch(clearErrors());
        } else if (r.message !== undefined) {
          dispatch(authFailed([r.message]));
          console.log("LOGIN FAILED", r.message);
        } else {
          dispatch(authFailed(["UNKNOWN ERROR"]));
          console.log("LOGIN FAILED", "UNKNOWN ERROR");
        }
      })
      .catch(e => console.log("HTTP ERROR:", e));
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
    }).then(r => dispatch(loginResponce(r.json())));
  };
};

export const register = (name: String, username: String, password: String) => {
  return dispatch => {
    return fetch(`${backendUrl}/register`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        username,
        password
      })
    }).then(r => dispatch(loginResponce(r.json())));
  };
};
