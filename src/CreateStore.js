import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import RootReducer from "./Reducers/RootReducer";
import { composeWithDevTools } from "redux-devtools-extension";

export const middlewares = [thunk];

export const createStoreWithMiddlware = composeWithDevTools(
  applyMiddleware(...middlewares)
)(createStore);

export const store = createStoreWithMiddlware(RootReducer);
