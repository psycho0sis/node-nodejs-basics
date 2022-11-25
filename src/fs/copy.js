import path from "path";
import { access, cp } from "fs";

import { __dirname } from "./constants.js";

const copy = async () => {
  const pathToTheFolder = path.join(__dirname, "/files");
  const pathToDestinationFolder = path.join(__dirname, "/files_copy");

  access(pathToDestinationFolder, (err) => {
    if (!err) throw new Error("FS operation failed");
  });

  cp(pathToTheFolder, pathToDestinationFolder, { recursive: true }, (err) => {
    if (err) {
      console.error(err);
    }
  });
};

copy();
