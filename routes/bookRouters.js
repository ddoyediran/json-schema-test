const express = require("express");
// step 1: import the validator class
const { validate } = require("jsonschema");

// require book schema (import)
const bookSchema = require("../bookSchema.json");

const router = express.Router();

router.route("/books").post((req, res, next) => {
  // check if the current request.body payload is a valid book
  const result = validate(req.body, bookSchema);

  // jsonschema validation results in a valid key being set to false if the instance doesn't match the schema
  if (!result.valid) {
    // pass the validation errors to the error handler
    return next(result.errors.map((error) => error.stack));
  }

  // then the result is valid (that is we have a valid payload)
  const book = req.body.data;

  /* 
    (not implemented) then we can insert the book into the database here
  */

  return res.status(201).json(book);
});

exports.module = router;
