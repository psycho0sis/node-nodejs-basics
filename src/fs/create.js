import path from "path";
import { readFile, writeFile } from "fs";

import { __dirname } from "./constants.js";

const create = async () => {
  const pathToTheFile = path.join(__dirname, "/files", "fresh.txt");

  readFile(pathToTheFile, (err) => {
    if (!err) throw new Error("FS operation failed");
  });

  writeFile(pathToTheFile, "I am fresh and young", "utf-8", (err) => {
    if (err) throw err;
  });
};

await create();
