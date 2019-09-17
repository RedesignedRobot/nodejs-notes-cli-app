const chalk = require("chalk");

const red = text => console.log(chalk.red.bold(String(text)));

const green = text => console.log(chalk.green.bold(String(text)));

const blue = text => console.log(chalk.blue.bold(String(text)));

const yellow = text => console.log(chalk.yellow.bold(String(text)));

const print = text => console.log(chalk.white.bold(String(text)));

module.exports = {
  red,
  green,
  blue,
  yellow,
  print
};
