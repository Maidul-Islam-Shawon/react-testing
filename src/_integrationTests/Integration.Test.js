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

  it("store is updated correctly", () => {});
});
