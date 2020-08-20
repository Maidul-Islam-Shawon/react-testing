import React from "react";
import { shallow } from "enzyme";
import Headline from "./Headline";
import { findByTestAttr, checkPropTypes } from "../../../Utils/TestFunctions";

const setUp = (props = {}) => {
  const headline = shallow(<Headline {...props} />);
  return headline;
};

describe("Headline Component Test", () => {
  describe("Checking Prop Types", () => {
    it("should not throw a warning", () => {
      const expectedProp = {
        header: "Test header",
        description: "Test Description",
        tempArr: [
          {
            fName: "Test fName",
            lName: "Test lName",
            age: 29,
            email: "Test Email",
            onlineStatus: false,
          },
        ],
      };

      const propsErr = checkPropTypes(Headline, expectedProp);
      expect(propsErr).toBeUndefined();
    });
  });

  describe("Have Props", () => {
    let wrapper;
    beforeEach(() => {
      const props = {
        header: "Test Header",
        description: "Test description",
      };
      wrapper = setUp(props);
    });

    it("should render without errors", () => {
      const component = findByTestAttr(wrapper, "headlineComponent");
      expect(component.length).toBe(1);
    });

    it("should render h1", () => {
      const h1 = findByTestAttr(wrapper, "header");
      expect(h1.length).toBe(1);
    });

    it("should render description", () => {
      const desc = findByTestAttr(wrapper, "description");
      expect(desc.length).toBe(1);
    });
  });

  describe("Have NO Props", () => {
    let wrapper;
    beforeEach(() => {
      wrapper = setUp();
    });

    it("should not render", () => {
      const component = findByTestAttr(wrapper, "headlineComponent");
      expect(component.length).toBe(0);
    });

    it("should not render h1", () => {
      const h1 = findByTestAttr(wrapper, "header");
      expect(h1.length).toBe(0);
    });

    it("should not render description", () => {
      const desc = findByTestAttr(wrapper, "description");
      expect(desc.length).toBe(0);
    });
  });
});
