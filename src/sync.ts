// Syncing

import { FieldType, InfluxDB } from "influx";

export async function sync(): Promise<void> {
  console.log(`[SYNC] Syncing to InfluxDB...`);

  // Boilerplate code, I'll have to figure it out.

  // const influx = new InfluxDB({
  //   host: "localhost",
  //   port: 443,
  //   protocol: "https",
  //   database: "express_response_db",
  //   schema: [
  //     {
  //       measurement: "response_times",
  //       fields: {
  //         path: FieldType.STRING,
  //         duration: FieldType.INTEGER,
  //       },
  //       tags: ["host"],
  //     },
  //   ],
  // });

  // influx
  //   .query(`SELECT * FROM "response_times"`)
  //   .then((result) => {
  //     console.log(result);
  //   })
  //   .then((rows: any) => {
  //     rows.forEach((row: any) =>
  //       console.log(`A request to ${row.path} took ${row.duration}ms`)
  //     );
  //   })
  //   .catch((e: Error) => {
  //     console.log("Bruh. ", e);
  //   });
}
