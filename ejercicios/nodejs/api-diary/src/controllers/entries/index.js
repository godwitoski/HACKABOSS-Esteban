const postEntry = require("./postEntry");
const getAllEntries = require("./getAllEntries");
const getEntry = require("./getEntry");
const modifyEntry = require("./modifyEntry");
const voteEntry = require("./voteEntry");
const deleteEntry = require("./deleteEntry");
const deletePhotoEntry = require("./deletePhotoEntry");
const addPhotoEntry = require("./addPhotoEntry");

module.exports = {
  postEntry,
  getAllEntries,
  getEntry,
  modifyEntry,
  voteEntry,
  deleteEntry,
  deletePhotoEntry,
  addPhotoEntry,
};
