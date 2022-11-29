import path from "path";
import { rename as giveNewName } from "fs/promises";

import { __dirname, MESSAGE_ERROR } from "./constants.js";

const rename = async () => {
  const pathToTheWrongFile = path.join(__dirname, "/files/wrongFilename.txt");
  const pathToTheCorrectFile = path.join(__dirname, "/files/properFilename.md");

  try {
    await giveNewName(pathToTheWrongFile, pathToTheCorrectFile);
  } catch {
    console.log("File was renamed.");
    throw new Error(MESSAGE_ERROR);
  }
};

await rename();
