import CheckPropTypes from "check-prop-types";
import { createStore, applyMiddleware } from "redux";
import RootReducer from "../src/Reducers/RootReducer";
import { middlewares } from "../src/CreateStore";

export const checkPropTypes = (component, expectedProps) => {
  const propsErr = CheckPropTypes(
    component.propTypes,
    expectedProps,
    "props",
    component.name
  );
  return propsErr;
};

export const findByTestAttr = (component, attr) => {
  const wrapper = component.find(`[data-test='${attr}']`);
  return wrapper;
};

//for Test
export const TestStore = (initialStore) => {
  const createStoreWithMiddleware = applyMiddleware(...middlewares)(
    createStore
  );
  return createStoreWithMiddleware(RootReducer, initialStore);
};
