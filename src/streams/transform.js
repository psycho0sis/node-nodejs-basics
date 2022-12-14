import { EOL } from "os";
import { Transform, pipeline } from "stream";

import { __dirname } from "./constants.js";

const transform = async () => {
  const revert = new Transform({
    transform(chunk, encoding, callback) {
      const data =
        chunk.toString().replace(EOL, "").split("").reverse().join("") + EOL;
      callback(null, data + EOL);
    },
  });

  pipeline(process.stdin, revert, process.stdout, (err) => {
    throw new Error(err);
  });

  console.log("\nWrite smth ..\n");
};

await transform();
