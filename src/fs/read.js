import path from "path";
import { readFile } from "fs/promises";

import { __dirname, MESSAGE_ERROR } from "./constants.js";

const read = async () => {
  const pathToTheFile = path.join(__dirname, "/files/fileToRead.txt");

  try {
    const content = await readFile(pathToTheFile, { encoding: "utf8" });

    console.log(content);
  } catch (err) {
    if (err) throw new Error(MESSAGE_ERROR);
  }
};

await read();
