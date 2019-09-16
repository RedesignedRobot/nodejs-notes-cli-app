const chalk = require("chalk");

function red(text) {
  console.log(chalk.red.bold(String(text)));
}

function green(text) {
  console.log(chalk.green.bold(String(text)));
}

function blue(text) {
  console.log(chalk.blue.bold(String(text)));
}

function yellow(text) {
  console.log(chalk.yellow.bold(String(text)));
}

function print(text){
  console.log(chalk.white.bold(String(text)));
}
module.exports = {
  red,
  green,
  blue,
  yellow,
  print,
};
