import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import RootReducer from "./Reducers/RootReducer";

export const middlewares = [thunk];

export const createStoreWithMiddlware = applyMiddleware(...middlewares)(
  createStore
);

export const store = createStoreWithMiddlware(RootReducer);
