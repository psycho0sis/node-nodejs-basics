import path from "path";
import { readFile, rename as fsRename } from "fs";

import { __filename, __dirname } from "./constants.js";

const rename = async () => {
  const pathToTheWrongFile = path.join(__dirname, "/files/wrongFilename.txt");
  const pathToTheCorrectFile = path.join(__dirname, "/files/properFilename.md");

  readFile(pathToTheWrongFile, (err, data) => {
    if (err) throw new Error("FS operation failed");
  });

  readFile(pathToTheCorrectFile, (err, data) => {
    if (!err) throw new Error("FS operation failed");
  });

  fsRename(pathToTheWrongFile, pathToTheCorrectFile, function (err) {
    if (err) throw err;
    console.log("File Renamed.");
  });
};

await rename();
