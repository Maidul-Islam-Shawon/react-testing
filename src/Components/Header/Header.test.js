import React from "react";
import { shallow } from "enzyme";
import { findByTestAttr } from "../../../Utils/TestFunctions";
import Header from "./Header";

const setUp = (props = {}) => {
  const component = shallow(<Header {...props} />);
  return component;
};

describe("Header Component", () => {
  let Component;
  beforeEach(() => {
    Component = setUp();
  });

  it("Should have one HeaderComponent div", () => {
    //const component = shallow(<Header />);
    //const component = setUp();
    //console.log(component.debug());
    //const wrapper = component.find(`[data-test='headerComponent']`);
    const wrapper = findByTestAttr(Component, "headerComponent");
    expect(wrapper.length).toBe(1);
  });

  test("should have a logo", () => {
    //const component = shallow(<Header />);
    // const component = setUp();
    const logo = findByTestAttr(Component, "logoImg");
    expect(logo.length).toBe(1);
  });
});
