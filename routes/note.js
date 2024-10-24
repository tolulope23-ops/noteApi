const express = require('express');
const router = express.Router();
const {addNote, getNotes, getNote, editNote, deleteNote} = require("../controller/note.js");
// const Note = require("../nodeclass/models/notes.js");
// Listen for a post request that comes throught note/add
// Create a function that handles the request

router.post("/add", addNote);
router.get("/", getNotes);
router.get("/:id", getNote);
router.put("/:id", editNote);
router.delete("/:id", deleteNote);


module.exports = router;
