import path from "path";
import { readFile } from "fs/promises";
import { createHash } from "crypto";
import { fileURLToPath } from "url";

export const __filename = fileURLToPath(import.meta.url);
export const __dirname = path.dirname(__filename);

const calculateHash = async () => {
  const pathToTheFile = path.join(
    __dirname,
    "/files/fileToCalculateHashFor.txt"
  );

  try {
    const data = await readFile(pathToTheFile, { encoding: "utf-8" });
    console.log(createHash("sha256").update(data).digest("hex"));
  } catch (err) {
    console.log(err);
  }
};

await calculateHash();
