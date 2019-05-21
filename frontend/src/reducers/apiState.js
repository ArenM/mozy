import { AUTH_FAILED } from "../actions/actionTypes";

export default (state = { auth_errors: [""] }, action) => {
  switch (action.type) {
    case AUTH_FAILED:
      return Object.assign({}, state, {
        auth_errors: action.errors
      });
    default:
      return state;
  }
};
