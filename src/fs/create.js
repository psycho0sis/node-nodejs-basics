import path from "path";
import { readFile, writeFile } from "fs";
import { Buffer } from "node:buffer";

import { __filename, __dirname } from "./constants.js";

const create = async () => {
  const pathToTheFile = path.join(__dirname, "/files", "fresh.txt");
  const data = new Uint8Array(Buffer.from("I am fresh and young"));

  readFile(pathToTheFile, (err) => {
    if (!err) throw new Error("FS operation failed");
  });

  writeFile(pathToTheFile, data, (err) => {
    if (err) throw err;
  });
};

await create();
