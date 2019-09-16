const fs = require("fs");
const u = require("./utils.js");
const _ = require("underscore");

function addNote(dTitle, dBody) {
  note = {
    title: dTitle,
    dBody: dBody
  };
  var notesArray = loadNotes();
  notesArray.push(note);
  saveNotes(arrUnique(notesArray));
  u.green("Note saved.");
}

function deleteNote(dTitle) {
  const notes = loadNotes();
  if (notes.length != 0) {
    const notesToKeep = notes.filter(function(note) {
      return note.title !== dTitle;
    });
    if (notesToKeep.length < notes.length) {
      u.green("Note deleted.");
      if (notesToKeep.length === 0) {
        u.blue("All notes deleted.");
      }
    } else if (notesToKeep.length === notes.length) {
      u.yellow("Note you are trying to delete does not exist.");
    } else {
      u.red("Deletion error.");
    }
    saveNotes(notesToKeep);
  } else if (notes.length == 0) {
    u.yellow("No notes created.");
  } else {
    u.red("Cannot load notes.");
  }
}

function loadNotes() {
  try {
    const databuffer = fs.readFileSync("notes.json");
    const data = databuffer.toString();
    return JSON.parse(data);
  } catch (error) {
    u.yellow(error);
    u.blue("Creating new file.");
    return [];
  }
}

function saveNotes(jsonArray) {
  const jsonString = JSON.stringify(jsonArray);
  fs.writeFileSync("notes.json", jsonString);
}

function arrUnique(arr) {
  var cleaned = [];
  arr.forEach(function(itm) {
    var unique = true;
    cleaned.forEach(function(itm2) {
      if (_.isEqual(itm, itm2)) unique = false;
    });
    if (unique) cleaned.push(itm);
  });
  return cleaned;
}

module.exports = {
  addNote,
  deleteNote
};
