import { fork } from "child_process";
import { fileURLToPath } from "url";
import path from "path";

export const __filename = fileURLToPath(import.meta.url);
export const __dirname = path.dirname(__filename);

const spawnChildProcess = async (...args) => {
  const child = fork(__dirname + "/files/script.js", args);

  child.on("close", (code) =>
    console.log(`Child process exited. Code: ${code}`)
  );
};

spawnChildProcess("--silent", "--all");
