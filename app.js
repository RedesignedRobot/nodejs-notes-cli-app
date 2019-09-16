const chalk = require("chalk");
const yargs = require("yargs");
const nTools = require("./notes.js");
const u = require("./utils.js");

yargs.command({
  command: "add",
  describe: "Add a new note",
  builder: {
    title: {
      describe: "Note title",
      demandOption: true,
      type: "string"
    },
    body: {
      describe: "Note body",
      demandOption: true,
      type: "string"
    }
  },
  handler: function(argv) {
    nTools.addNote(argv.title, argv.body);
  }
});

yargs.command({
  command: "delete",
  describe: "Delete a note",
  builder: {
    title: {
      describe: "Note title",
      demandOption: true,
      type: "string"
    }
  },
  handler: function(argv) {
    nTools.deleteNote(argv.title);
  }
});

yargs.command({
  command: "list",
  describe: "list all notes",
  handler: function() {
    console.log(chalk.magenta("Voila!"));
  }
});

yargs.command({
  command: "read",
  describe: "read a note",
  handler: function() {
    console.log(chalk.cyan("Voila!"));
  }
});

yargs.parse();
