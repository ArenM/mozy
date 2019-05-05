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
