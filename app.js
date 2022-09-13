const express = require("express");
const bookRouters = require("./routes/bookRouters");

const app = express();

app.use((error, req, res, next) => {
  // to get the error message by default
  let err = error.message;

  let key = "error";
  // for display purposes, if it's an array call it "errors"
  if (Array.isArray(error)) {
    key = "errors";
  }

  return res.status(err.status || 500).json({ [key]: err });
});

app.listen(3000, () => {
  console.log("App is running on port 3000");
});
