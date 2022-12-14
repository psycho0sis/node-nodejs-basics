import { cpus } from "os";
import { Worker } from "worker_threads";
import { fileURLToPath } from "url";
import path from "path";

import { transformTheResults } from "./utils.js";

export const __filename = fileURLToPath(import.meta.url);
export const __dirname = path.dirname(__filename);

const performCalculations = async () => {
  const cp = cpus();
  let dataForWorker = 10;

  const arrayOfWorkers = cp.map(() => {
    return new Promise((resolve, reject) => {
      const worker = new Worker(__dirname + "/worker.js", {
        workerData: { n: dataForWorker++ },
      });

      worker.on("message", resolve);
      worker.on("error", reject);
    });
  });

  const workersResults = await Promise.allSettled(arrayOfWorkers);

  console.log(transformTheResults(workersResults));
};

await performCalculations();
