import { Types } from "../../Actions/Types";

export default function PostsReducer(state = [], action) {
  switch (action.type) {
    case Types.GET_POSTS:
      return action.payload;

    default:
      return state;
  }
}
