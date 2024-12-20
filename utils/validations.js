    // using before
// const {body, validationResult} = require('express-validator');

// const validateNote = [body("title").notEmpty().withMessage("Title is required for note.").trim()
//     .isLength({min:3}).withMessage("Minimum of 3 characters."),
//     body("content").optional().isLength({min:5})
//     .withMessage("Minimum of 5 characters.")];


// module.exports = {validateNote};

 // want to build or test
        // const {body, validationResult} = require('express-validator');
        // const validateNote = (req, res) => {
        //     return [body("title").notEmpty().withMessage("Title is required for note.").trim()
        //         .isLength({min:3}).withMessage("Minimum of 3 characters."),
        //         body("content").optional().isLength({min:5})
        //         .withMessage("Minimum of 5 characters.")];
        // }

        // const error = validationResult(req);
        // if (!error.isEmpty()){
        //   return res.status(400).json({errors:error.array()})
        // };

        // module.exports = {validateNote};


        //former one
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
