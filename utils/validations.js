const {body, validationResult} = require('express-validator');

const validateNote = [body("title").notEmpty().withMessage("Title is required for note.").trim()
    .isLength({min:3}).withMessage("Minimum of 3 characters."),
    body("content").optional().isLength({min:5})
    .withMessage("Minimum of 5 characters.")];


module.exports = {validateNote};
