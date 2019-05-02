import * as types from "../actions/actionTypes";

export default (state = { key: "" }, action) => {
  switch (action.type) {
    case types.CHANGE_TOKEN:
      state.key = action.token;
      return state;
    default:
      return state;
  }
};
