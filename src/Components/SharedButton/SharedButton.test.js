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
    let wrapper;
    let mockFunc;

    beforeEach(() => {
      mockFunc = jest.fn();

      const props = {
        buttonText: "Example Button Text",
        //emitEvent: () => {},
        emitEvent: mockFunc,
      };
      wrapper = shallow(<SharedButton {...props} />);
    });

    it("should render a button", () => {
      const button = findByTestAttr(wrapper, "buttonComponent");
      expect(button.length).toBe(1);
    });

    it("should emit a callbakck on Click event", () => {
      const button = findByTestAttr(wrapper, "buttonComponent");
      button.simulate("click"); //simulate use for click event
      const callBack = mockFunc.mock.calls.length;
      expect(callBack).toBe(1);
    });
  });
});
