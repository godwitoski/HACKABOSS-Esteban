const express = require("express");

//enrutador
const router = express.Router();

//middleware de entryExists
const entryExists = require("../middlewares/entryExists");

//Middleware - necesita ser usuario logueado para algunas cosas
const isUser = require("../middlewares/isUser");

//middleware de editar entry
const canEdit = require("../middlewares/canEdit");

//traemos las entries
const {
  postEntry,
  getAllEntries,
  getEntry,
  modifyEntry,
  voteEntry,
  deleteEntry,
  deletePhotoEntry,
  addPhotoEntry,
} = require("../controllers/entries");

// // endpoints
//post
router.post("/entries", isUser, postEntry);

//get
router.get("/entries", getAllEntries);
router.get("/entries/:idEntry", entryExists, getEntry);

//put
router.put("/entries/:idEntry", entryExists, isUser, canEdit, modifyEntry);

//post de votos
router.post("/entries/:idEntry/votes", isUser, entryExists, voteEntry);

//post addphotoentry
router.post(
  "/entries/:idEntry/photos",
  isUser,
  entryExists,
  canEdit,
  addPhotoEntry
);

//delete entry
router.delete("/entries/:idEntry", isUser, entryExists, canEdit, deleteEntry);

//delete photo of entry
router.delete(
  "/entries/:idEntry/photos/:idPhoto",
  isUser,
  entryExists,
  canEdit,
  deletePhotoEntry
);

module.exports = router;
