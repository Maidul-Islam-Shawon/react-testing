import React from "react";
import { shallow } from "enzyme";
import { checkPropTypes, findByTestAttr } from "../../../Utils/TestFunctions";
import ListItem from "./ListItem";

describe("ListItem Component", () => {
  describe("Checking PropTypes", () => {
    it("should not throw a warning", () => {
      const expectedProps = {
        title: "Test Title",
        desc: "Test Desc",
      };

      const listItem = checkPropTypes(ListItem, expectedProps);
      expect(listItem).toBeUndefined();
    });
  });

  describe("Component Renders", () => {
    let wrapper;
    beforeEach(() => {
      const Props = {
        title: "Test Title",
        desc: "Test Desc",
      };

      wrapper = shallow(<ListItem {...Props} />);
    });

    it("should render without errors", () => {
      const Component = findByTestAttr(wrapper, "listItemComponent");
      expect(Component.length).toBe(1);
    });

    it("should render a title", () => {
      const title = findByTestAttr(wrapper, "componentTitle");
      expect(title.length).toBe(1);
    });

    it("should render description", () => {
      const desc = findByTestAttr(wrapper, "componentDesc");
      expect(desc.length).toBe(1);
    });
  });

  describe("Should not render", () => {
    const Props = {
      desc: "Test Desc",
    };
    let wrapper;
    beforeEach(() => {
      wrapper = shallow(<ListItem {...Props} />);
    });

    it("should not render without title", () => {
      const component = findByTestAttr(wrapper, "listItemComponent");
      expect(component.length).toBe(0);
    });
  });
});
