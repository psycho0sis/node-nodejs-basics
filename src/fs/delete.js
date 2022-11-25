import path from "path";
import { readFile, unlink } from "fs";

import { __dirname } from "./constants.js";

const remove = async () => {
  const pathToTheFile = path.join(__dirname, "/files/fileToRemove.txt");

  readFile(pathToTheFile, (err) => {
    if (err) throw new Error("FS operation failed");
  });

  unlink(pathToTheFile, (err) => {
    if (err) throw err;
  });
};

await remove();
