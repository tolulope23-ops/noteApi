const express = require('express');
const router = express.Router();
const {addNote, getNotes, getNote, editNote, deleteNote} = require("../controller/note.js");
const {validateNote} = require('../utils/validations.js');

router.post("/add", validateNote, addNote);
router.get("/",getNotes);
router.get("/:id",getNote);
router.put("/:id",validateNote, editNote);
router.delete("/:id", deleteNote);


module.exports = router;
