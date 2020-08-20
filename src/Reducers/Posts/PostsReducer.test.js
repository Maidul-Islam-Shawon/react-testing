import { Types } from "../../Actions/Types";
import PostsReducer from "./PostsReducer";

describe("Posts Reducer", () => {
  it("should return default state", () => {
    const newState = PostsReducer(undefined, {});
    expect(newState).toEqual([]);
  });

  it("should return new state if receiving type", () => {
    const Posts = [
      { title: "Test 1" },
      { title: "Test 2" },
      { title: "Test 3" },
    ];
    const newState = PostsReducer(undefined, {
      type: Types.GET_POSTS,
      payload: Posts,
    });
    expect(newState).toEqual(Posts);
  });
});
