import path from "path";
import { readdir } from "fs/promises";

import { __dirname, MESSAGE_ERROR } from "./constants.js";

const list = async () => {
  const pathToTheFolder = path.join(__dirname, "/files");

  try {
    const files = await readdir(pathToTheFolder);
    console.log(files);
  } catch (error) {
    throw new Error(MESSAGE_ERROR);
  }
};

await list();
