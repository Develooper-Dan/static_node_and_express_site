// Main module
const express = require("express");
const app = express();
const createError = require('http-errors')
const indexRoute = require("./routes/index")

app.set("view engine", "pug");

// Routes are handled in a separate module
app.use("/static", express.static("public"));
app.use(indexRoute);

// error handlers for 404 and other errors
app.use(function (req, res, next) {
  const err =  createError(404, "Sorry, the site you requested wasn't found!")
  next(err)
})

app.use(function (err, req, res, next) {
  console.error(`${err.status}: ${err.message}`);
  res.render("error", {err});
})

app.listen(3000);
