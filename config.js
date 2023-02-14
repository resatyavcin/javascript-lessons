const colors = require("colors");

const getAnswer = (title, resultArray = []) => {
  console.log("✓", title.green);
  console.group();
  console.group();
  const result = resultArray.map((result) => {
    console.log(colors.bold.dim(`${result.title} `) + result.desc);
  });
  console.groupEnd();
  console.groupEnd();
  return result;
};

//config
const config = (title, body) => {
  console.log("✓", title.bgGreen);
  console.group();
  console.group();
  body();
  console.groupEnd();
  console.groupEnd();
  console.log("\n");
};

module.exports = { config, getAnswer };
