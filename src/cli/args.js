import { EOL } from "os";

const parseArgs = () => {
  const processEnvVariables = [];

  process.argv
    .slice(2)
    .forEach(
      (item, i, array) =>
        item.includes("--") && res.push(`${item} is ${array[i + 1]}`),
      []
    );

  console.log(processEnvVariables.join(", "));

  console.log(EOL + "The end.");
};

parseArgs();
