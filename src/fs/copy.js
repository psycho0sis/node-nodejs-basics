import path from "path";
import { access, cp } from "fs/promises";

import { __dirname, MESSAGE_ERROR } from "./constants.js";

const copy = async () => {
  const pathToTheFolder = path.join(__dirname, "/files");
  const pathToDestinationFolder = path.join(__dirname, "/files_copy");

  try {
    await access(pathToTheFolder);
    throw new Error(MESSAGE_ERROR);
  } catch (err) {
    if (err.message === MESSAGE_ERROR || err.code === "ENOENT") {
      throw new Error(MESSAGE_ERROR);
    } else {
      await cp(pathToTheFolder, pathToDestinationFolder, { recursive: true });
      console.log("Files were copied.");
    }
  }
};

copy();
