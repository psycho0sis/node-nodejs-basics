import path from "path";
import { readFile } from "fs";

import { __dirname } from "./constants.js";

const read = async () => {
  const pathToTheFile = path.join(__dirname, "/files/fileToRead.txt");

  readFile(pathToTheFile, (err, data) => {
    if (err) throw new Error("FS operation failed");

    console.log(data.toString());
  });
};

await read();
