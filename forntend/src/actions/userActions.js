import * as type from "./actionTypes";

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

export const authenticate = (email: String, password: String) => {
  return dispatch => {
    return fetch("http://localhost:5000/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        email,
        password
      })
    })
      .then(d => d.json())
      .then(r => {
        if (r.meta.code === 200) {
          dispatch(changeToken(r.response.user.authentication_token));
        } else if (r.meta.code === 400) {
          console.log("AUTHENTICATION FAILED", r.response.errors);
        }
      })
      .catch(e => console.log("HTTP ERROR:", e));
  };
};
