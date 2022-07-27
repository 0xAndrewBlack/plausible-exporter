import { job } from "../src/index";

describe("Main test.", () => {
  test("Default main test.", () => {
    expect(job).toBeDefined();
    job.stop(); // Stop the job, so Jest won't cry. Bc idk how to test cron jobs yet.
  });
});
