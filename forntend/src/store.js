import { createStore, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";
import reducer from "./reducers";

const token = localStorage.getItem("auth_key") || "";
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
  reducer,
  { user: { token } },
  composeEnhancers(applyMiddleware(thunk))
);
store.subscribe(() => {
  localStorage.setItem("auth_key", store.getState().user.token);
});

export default store;
