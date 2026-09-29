const express = require('express');
const router = express.Router();
const {addNote, getNotes, getNote, editNote, deleteNote} = require("../controller/note.js");

router.post("/add", addNote);
router.get("/",getNotes);
router.get("/:id",getNote);
router.put("/update/:id", editNote);
router.delete("/:id", deleteNote);


module.exports = router;
