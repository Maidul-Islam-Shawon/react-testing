import React from "react";
import { shallow } from "enzyme";
import Header from "./Header";

const getComponent = (props = {}) => {
  const componentName = shallow(<Header {...props} />);
  return componentName;
};

describe("Header Component Testing", () => {
  let component;

  beforeEach(() => {
    component = getComponent();
  });

  it("should render header class", () => {
    const wrapper = component.find(`[data-test='headerComponent']`);
    expect(wrapper.length).toBe(1);
  });

  it("should have a logo", () => {
    const logo = component.find(`[data-test='logoImg']`);
    expect(logo.length).toBe(1);
  });
});
