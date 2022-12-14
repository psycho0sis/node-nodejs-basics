import path from "path";
import { createWriteStream } from "fs";

import { __dirname } from "./constants.js";

const write = async () => {
  const pathToTheFile = path.join(__dirname, "/files/fileToWrite.txt");
  const writableStream = createWriteStream(pathToTheFile, "utf8");

  process.stdin.pipe(writableStream);

  console.log("Write something and check files/fileTiWrite.txt\n");
};
await write();
