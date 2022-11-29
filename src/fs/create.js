import path from "path";
import { constants } from "fs";
import { access, writeFile } from "fs/promises";

import { __dirname, MESSAGE_ERROR } from "./constants.js";

const create = async () => {
  const pathToTheFile = path.join(__dirname, "/files", "fresh.txt");

  try {
    await access(pathToTheFile, constants.F_OK);
    throw new Error(MESSAGE_ERROR);
  } catch (err) {
    if (err.message === MESSAGE_ERROR) {
      throw new Error(MESSAGE_ERROR);
    } else {
      await writeFile(pathToTheFile, "I am fresh and young", {
        encoding: "utf8",
      });
      console.log("File was created.");
    }
  }
};

await create();
