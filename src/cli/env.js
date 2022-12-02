import { EOL } from "os";

const parseEnv = () => {
  const processEnvVariablesWithRssPrefix = Object.keys(process.env)
    .filter((key) => key.includes("RSS_"))
    .reduce((acc, item) => {
      acc.push(`${item}=${process.env[item]}`);
      return acc;
    }, [])
    .join("; ");

  console.log(processEnvVariablesWithRssPrefix);
  console.log(EOL + "The end.");
};

parseEnv();
