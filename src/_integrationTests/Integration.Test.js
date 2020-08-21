import moxios from "moxios";
import { TestStore } from "../../Utils/TestFunctions";
import { fetchPosts } from "../Actions/Actions";

describe("Fetch Posts action", () => {
  beforeEach(() => {
    moxios.install();
  });

  afterEach(() => {
    moxios.uninstall();
  });

  it("store is updated correctly", () => {
    const expectedState = [
      { title: "Title 1", body: "Some Text" },
      { title: "Title 2", body: "Some Text" },
      { title: "Title 3", body: "Some Text" },
    ];
    const store = TestStore();

    moxios.wait(() => {
      const request = moxios.requests.mostRecent();
      request.respondWith({
        status: 200,
        response: expectedState,
      });
    });

    return store.dispatch(fetchPosts()).then(() => {
      const newState = store.getState();
      expect(newState.PostsReducer).toBe(expectedState);
    });
  });
});
