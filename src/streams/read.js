import path from "path";
import { createReadStream } from "fs";
import { fileURLToPath } from "url";

export const __filename = fileURLToPath(import.meta.url);
export const __dirname = path.dirname(__filename);

const read = async () => {
  const pathToTheFile = path.join(__dirname, "/files/fileToRead.txt");
  const stream = createReadStream(pathToTheFile, "utf8");

  stream.pipe(process.stdout);
};

await read();
