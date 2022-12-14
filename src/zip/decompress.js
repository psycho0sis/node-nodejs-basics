import path from "path";
import { createReadStream, createWriteStream } from "fs";
import { createUnzip } from "zlib";

import { __dirname } from "./constants.js";

const decompress = async () => {
  const pathToUnzipFile = path.join(__dirname, "/files/fileToCompress.txt");
  const pathToGzFile = path.join(__dirname, "/files/archive.gz");

  const readableStream = createReadStream(pathToGzFile);

  const writeableStream = createWriteStream(pathToUnzipFile);

  const unGzip = createUnzip();

  readableStream.pipe(unGzip).pipe(writeableStream);
  console.log("File was decompressed");
};

await decompress();
