import moment from "moment";
import { CronJob } from "cron";

import { sync } from "./sync";
import { exporter } from "./exporter";

let timestamp: any;
const log = console.log;
let pattern: string = "*/1 0 * * *";

// This cron runs every 5 minutes.
export const job = new CronJob(pattern, async () => {
  timestamp = `[${moment().format("YYYY-MM-DD A hh:mm:ss:SSS")}]`;
  log(`${timestamp} - Job(s) running...`);

  await sync();
  await exporter();
});

job.start();
