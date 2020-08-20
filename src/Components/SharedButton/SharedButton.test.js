import React from "react";
import { shallow } from "enzyme";
import SharedButton from "./SharedButton";
import { checkPropTypes, findByTestAttr } from "../../../Utils/TestFunctions";

describe("SharedButton Component", () => {
  describe("checking prop types", () => {
    it("should not throw an warning", () => {
      const expectedProps = {
        buttonText: "Example Button Text",
        emitEvent: () => {},
      };

      const propsErr = checkPropTypes(SharedButton, expectedProps);
      expect(propsErr).toBeUndefined();
    });
  });

  describe("render", () => {
    const props = {
      buttonText: "Example Button Text",
      emitEvent: () => {},
    };

    let wrapper;
    beforeEach(() => {
      wrapper = shallow(<SharedButton {...props} />);
    });

    it("should render a button", () => {
      const button = findByTestAttr(wrapper, "buttonComponent");
      expect(button.length).toBe(1);
    });
  });
});
