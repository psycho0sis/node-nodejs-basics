import path from "path";
import { createReadStream, createWriteStream } from "fs";
import { createGzip } from "zlib";

import { __dirname } from "./constants";

const compress = async () => {
  const pathToTheFile = path.join(__dirname, "/files/fileToCompress.txt");
  const pathToGzFile = path.join(__dirname, "/files/archive.gz");

  const readableStream = createReadStream(pathToTheFile, "utf-8");

  const writeableStream = createWriteStream(pathToGzFile);

  const gzip = createGzip();

  readableStream.pipe(gzip).pipe(writeableStream);
};

await compress();
