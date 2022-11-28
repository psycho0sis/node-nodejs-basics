import path from "path";
import { Transform, pipeline } from "stream";
import { createWriteStream, createReadStream } from "fs";

import { __dirname } from "./constants.js";

const transform = async () => {
  const pathToTheFileForReading = path.join(__dirname, "/files/fileToRead.txt");
  const pathToTheFileForWriting = path.join(
    __dirname,
    "/files/fileToWrite.txt"
  );

  const revert = new Transform({
    transform(chunk, encoding, callback) {
      const data = chunk.toString().split("").reverse().join("");
      callback(null, data);
    },
  });

  pipeline(process.stdin, revert, process.stdout, (err) => {
    throw new Error(err);
  });

  console.log("\nWrite smth ..\n");
};

await transform();
