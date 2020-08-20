import React from "react";
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
});
