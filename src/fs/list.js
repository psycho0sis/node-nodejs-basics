import path from "path";
import { readdir } from "fs";

import { __dirname } from "./constants.js";

const list = async () => {
  const pathToTheFolder = path.join(__dirname, "/files");

  readdir(pathToTheFolder, (err, files) => {
    if (err) throw new Error("FS operation failed");
    console.log(files);
  });
};

await list();
