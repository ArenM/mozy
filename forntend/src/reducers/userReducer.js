import * as types from "../actions/actionTypes";

export default (state = { token: "" }, action) => {
  switch (action.type) {
    case types.CHANGE_TOKEN:
      state.token = action.token;
      return state;
    default:
      return state;
  }
};
