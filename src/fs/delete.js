import path from "path";
import { unlink } from "fs/promises";

import { __dirname, MESSAGE_ERROR } from "./constants.js";

const remove = async () => {
  const pathToTheFile = path.join(__dirname, "/files/fileToRemove.txt");

  try {
    await unlink(pathToTheFile);
    console.log("File was deleted.");
  } catch (error) {
    throw new Error(MESSAGE_ERROR);
  }
};

await remove();
