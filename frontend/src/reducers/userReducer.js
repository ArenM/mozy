import * as types from "../actions/actionTypes";

export default (state = { token: "" }, action) => {
  switch (action.type) {
    case types.CHANGE_TOKEN:
      return Object.assign({}, state, {
        token: action.token
      });
    case types.DELETE_TOKEN:
      return Object.assign({}, state, {
        token: ""
      });
    default:
      return state;
  }
};
