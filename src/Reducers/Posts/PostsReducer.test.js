import { Types } from "../../Actions/Types";
import PostReducer from "./PostsReducer";

describe("Post Reducer", () => {
  it("should return default state", () => {
    const newState = PostReducer(undefined, {});
    expect(newState).toEqual([]);
  });

  it("should return new state if receiving Types", () => {
    const posts = [
      { title: "Test 1" },
      { title: "Test 2" },
      { title: "Test 3" },
    ];

    const newState = PostReducer(undefined, {
      type: Types.GET_POSTS,
      payload: posts,
    });
    expect(newState).toEqual(posts);
  });
});
