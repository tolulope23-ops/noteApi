const express = require('express');
const router = express.Router();
const {addNote, getNotes, getNote, editNote, deleteNote} = require("../controller/note.js");
const {validate, check} = require("../utils/validations.js");

router.post("/add", validate, check, addNote);
router.get("/", getNotes);
router.get("/:id", getNote);
router.put("/:id", validate, check, editNote);
router.delete("/:id", deleteNote);


module.exports = router;
