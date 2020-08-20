import React from "react";
import { shallow } from "enzyme";

import Headline from "./Headline";

const setUp = (props = {}) => {
  const wrapper = shallow(<Headline {...props} />);
  return wrapper;
};

const testFunc = (component, attr) => {
  const wrapper = component.find(`[data-test='${attr}']`);
  return wrapper;
};

describe("Test for Headline component", () => {
  describe("render with props", () => {
    let wrapper;
    beforeEach(() => {
      const localProps = {
        header: "Test Header",
        desc: "Test desc",
      };
      wrapper = setUp(localProps);
    });

    it("should have props", () => {
      //const Component = setUp(localProps);
      const component = testFunc(wrapper, "headlineComponent");
      expect(component.length).toBe(1);
    });

    it("should have h1", () => {
      const h1 = testFunc(wrapper, "header");
      expect(h1.length).toBe(1);
    });

    it("should have description", () => {
      const desc = testFunc(wrapper, "description");
      expect(desc.length).toBe(1);
    });
  });

  describe("render without props", () => {
    let wrapper;
    beforeEach(() => {
      wrapper = setUp();
    });

    it("should Not Render", () => {
      const component = testFunc(wrapper, "headlineComponent");
      expect(component.length).toBe(0);
    });
  });
});
