import path from "path";
import { createReadStream } from "fs";
import { fileURLToPath } from "url";

export const __filename = fileURLToPath(import.meta.url);
export const __dirname = path.dirname(__filename);

const read = async () => {
  const pathToTheFile = path.join(__dirname, "/files/fileToRead.txt");
  const stream = createReadStream(pathToTheFile, "utf8");

  stream.on("data", (data) => {
    data = data.toString();
    process.stdout.write(data.toString() + "\n");
  });
  stream.on("error", (err) => console.log(`Err: ${err}`));
};

await read();
