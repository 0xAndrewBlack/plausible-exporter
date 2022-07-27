import { sync } from "../src/sync";

describe("Sync tests.", () => {
  test("Sync default test.", () => {
    expect(sync).toBeDefined();
  });
});
