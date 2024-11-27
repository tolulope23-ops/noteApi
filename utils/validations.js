const {body, validationResult} = require("express-validator");

const validate = [body("title").isEmpty()
    .withMessage("Title is required for note.")
    .isLength({min:3}).withMessage("Minimum of 3 characters.")
    ,body("content").optional().isLength({min:5})
    .withMessage("Minimum of 5 characters.")];

const check = async(req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array()});
}
}

module.exports = {validate, check}






















































































// const {body,validationResult} = require('express-validator');

// const validationRules = () => {
//    return [
//         body("title").notEmpty().withMessage("Title is required for note")
//         .isLength({min:3}).withMessage("Minimum of three characters"),
//         body("content").optional().isLength({min:3}).
//         withMessage("Minimum if five characters")
//     ]
// }

// // const validate = async(req, res) => {
// //     // Handle validation errors
// //     const errors = validationResult(req);
// //     if (!errors.isEmpty()) {
// //       return res.status(400).json({ errors: errors.array()});
// //     }
// // }
// module.exports = {validationRules};
