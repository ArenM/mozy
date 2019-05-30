import { AUTH_FAILED, CLEAR_ERRORS } from "../actions/actionTypes";

export default (state = { auth_errors: [""] }, action) => {
  switch (action.type) {
    case AUTH_FAILED:
      return Object.assign({}, state, {
        auth_errors: action.errors
      });
    case CLEAR_ERRORS:
      return Object.assign({}, state, {
        auth_errors: [""]
      });
     default:
      return state;
  }
};
