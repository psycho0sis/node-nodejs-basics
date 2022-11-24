import path from "path";
import fs from "fs";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const copy = async () => {
  const pathToTheFolder = path.join(__dirname, "/files");
  const pathToDestinationFolder = path.join(__dirname, "/files_copy");

  fs.access(pathToDestinationFolder, (err, data) => {
    if (!err) throw new Error("FS operation failed");
  });

  fs.cp(
    pathToTheFolder,
    pathToDestinationFolder,
    { recursive: true },
    (err) => {
      if (err) {
        console.error(err);
      }
    }
  );
};

copy();
