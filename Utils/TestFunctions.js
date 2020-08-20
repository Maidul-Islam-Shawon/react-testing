import CheckPropTypes from "check-prop-types";

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
