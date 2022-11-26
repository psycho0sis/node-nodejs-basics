const parseEnv = () => {
  Object.keys(process.env)
    .filter((key) => key.includes("RSS_"))
    .forEach((variable) => console.log(`${variable}=${process.env[variable]}`));
};

parseEnv();
