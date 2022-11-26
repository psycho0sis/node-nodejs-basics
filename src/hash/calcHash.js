import path from "path";
import { readFile } from "fs";
import { createHash } from "crypto";
import { fileURLToPath } from "url";

export const __filename = fileURLToPath(import.meta.url);
export const __dirname = path.dirname(__filename);

const calculateHash = async () => {
  const pathToTheFile = path.join(
    __dirname,
    "/files/fileToCalculateHashFor.txt"
  );

  readFile(pathToTheFile, (err, data) => {
    if (err) throw err;
    console.log(createHash("sha256").update(data.toString()).digest("hex"));
  });
};

await calculateHash();
