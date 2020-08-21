import React from "react";
import App from "./App";
import { TestStore, findByTestAttr } from "./../Utils/TestFunctions";
import { shallow } from "enzyme";

const setUp = (initialState = {}) => {
  const store = TestStore(initialState);
  const wrapper = shallow(<App store={store} />)
    .childAt(0)
    .dive();
  //console.log(wrapper.debug());
  return wrapper;
};

describe("App Component Test", () => {
  let wrapper;
  beforeEach(() => {
    const initialState = {
      PostsReducer: [
        { title: "Title 1", body: "Some Text" },
        { title: "Title 2", body: "Some Text" },
        { title: "Title 3", body: "Some Text" },
      ],
    };
    wrapper = setUp(initialState);
  });

  it("should render without error", () => {
    const component = findByTestAttr(wrapper, "AppComponent");
    expect(component.length).toBe(1);
  });
});
