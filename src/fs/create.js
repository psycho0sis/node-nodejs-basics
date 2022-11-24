import path from "path";
import fs from "fs";
import { Buffer } from "node:buffer";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const create = async () => {
  const pathToTheFile = path.join(__dirname, "/files", "fresh.txt");
  const data = new Uint8Array(Buffer.from("I am fresh and young"));

  fs.readFile(pathToTheFile, (err, data) => {
    if (!err) throw new Error("FS operation failed");
  });

  fs.writeFile(pathToTheFile, data, (err) => {
    if (err) throw err;
  });
};

await create();
