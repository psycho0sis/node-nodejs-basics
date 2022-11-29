import { EOL } from "os";

const parseArgs = () => {
  process.argv
    .slice(2)
    .forEach(
      (item, i, array) =>
        item.includes("--") && console.log(`${item} is ${array[i + 1]}`)
    );

  console.log(EOL + "The end.");
};

parseArgs();
